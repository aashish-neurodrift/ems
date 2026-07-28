import axios from 'axios';
import { z } from 'zod';

import type { MwpSyncConfig } from './config.js';

export const MwpEmployeeRecordSchema = z.object({
  fusion_id: z.string().min(1),
  fname: z.string().nullable().optional().default(''),
  lname: z.string().nullable().optional().default(''),
  designation: z.string().nullable().optional().default(''),
  org_role: z.string().nullable().optional().default(''),
  dept_name: z.string().nullable().optional().default(''),
  sub_dept_name: z.string().nullable().optional().default(null),
  l1_supervisor_mwpid: z.string().nullable().optional().default(null),
  l1_supervisor_name: z.string().nullable().optional().default(null),
  client_names: z.string().nullable().optional().default(''),
  process_names: z.string().nullable().optional().default(''),
  status: z.string(),
  doj: z.string().nullable().optional().default(null),
  office_id: z.string().nullable().optional().default(''),
  office_name: z.string().nullable().optional().default(''),
  email_id_off: z.string().nullable().optional().default(''),
  email_id_per: z.string().nullable().optional().default(''),
});

export type MwpEmployeeRecord = z.infer<typeof MwpEmployeeRecordSchema>;

const MwpResponseSchema = z.object({
  status: z.boolean(),
  data: z.array(MwpEmployeeRecordSchema),
});

export type MwpResponse = z.infer<typeof MwpResponseSchema>;

/**
 * Fetches the full active-user feed. No pagination params observed on this endpoint
 * (per mwp-employee-sync-plan.md) — one call returns the entire roster.
 */
export async function fetchMwpActiveUsers(config: MwpSyncConfig): Promise<MwpResponse> {
  const response = await axios.post(
    config.mwpUrl,
    {},
    {
      headers: {
        'X-CLIENT-KEY': config.mwpClientKey,
        'X-API-TOKEN': config.mwpApiToken,
        Accept: '*/*',
      },
      timeout: 60_000,
    },
  );

  const parsed = MwpResponseSchema.safeParse(response.data);
  if (!parsed.success) {
    throw new Error(`MWP response failed schema validation: ${parsed.error.message}`);
  }
  if (!parsed.data.status) {
    throw new Error('MWP responded with status=false');
  }
  return parsed.data;
}
