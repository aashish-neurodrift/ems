# Org Tree — Geography → Country → Location → Client → Process

> Regenerated 2026-10-29 from a live MWP `getmwpactiveuser` pull (16,382 records) using mwp-sync's own `normalizeRecord` (classification + client/process pairing) and `resolveGeography` (city → country → geography). No database was read or written.

## User Requirement (Categories)

| Category | Rule | Count |
|---|---|---|
| agent | org_role=Production Specialist + dept=Operations | 14,695 |
| qa | dept=Quality Assurance + org_role=Quality Analyst | 286 |
| supervisor | org_role=Supervisor | 120 |
| team_leader | org_role=Team leader | 617 |

Total classified (active, status=1): 15,718 of 16,382 fetched records.

Geography and Country are derived from the raw `office_name` (city) field — MWP's payload does not return Geo/Country directly; see [USER_MANAGEMENT.md](USER_MANAGEMENT.md) for the caveat. `Process` is always the leaf node — leaves hold category counts (total/agent/qa/supervisor/team_leader), not individual user records.

Client/Process are zipped into (client, process) pairs per user (MWP flattens multi-assignment users into comma-joined parallel strings), so a user assigned to several client/process pairs is counted once in each leaf. Leaf totals therefore can exceed the user count above.

## Full Tree

```json
{
  "EMEA": {
    "Albania": {
      "Tirana": {
        "Leonardo Hotels": {
          "Cluster Guest Relations Admin": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Cyber Security": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Reservation": {
            "total": 66,
            "agent": 63,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          }
        },
        "AIFI": {
          "FLS T1": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "FLS T2": {
            "total": 11,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      }
    },
    "Morocco": {
      "Casablanca": {
        "Chateau Deau": {
          "CDO Reception": {
            "total": 18,
            "agent": 17,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "BO CDO": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Ariston": {
          "Ariston": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "CATI": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Toyota": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Nordnet": {
          "Nordnet": {
            "total": 14,
            "agent": 11,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Altares": {
          "Altares Siret": {
            "total": 18,
            "agent": 16,
            "qa": 1,
            "supervisor": 1,
            "team_leader": 0
          },
          "Altares JAL": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Toyota": {
          "Toyota": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "CATI": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Ariston": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "CATI": {
          "CATI": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Toyota": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Ariston": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Argel": {
          "Argel": {
            "total": 45,
            "agent": 43,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Cardata": {
          "Cardata": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Smile 2 Impress": {
          "Smile 2 Impress": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Duux": {
          "Customer Care Support": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Travelpro": {
          "Travelpro": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "ABB E-Mobility": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "ABB E-Mobility": {
          "Travelpro": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "ABB E-Mobility": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Adamo Technologies": {
          "VR Teleoperation Support": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Video Annotation": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      }
    },
    "Kosovo": {
      "Prishtine": {
        "Smile 2 Impress": {
          "US English": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Spanish": {
            "total": 11,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Italian": {
            "total": 26,
            "agent": 25,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Alleviate Tax OB": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Smile 2 Impress": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Alleviate Tax RSS": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "UK English": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Alleviate": {
          "Alleviate Tax OB": {
            "total": 6,
            "agent": 2,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 2
          },
          "Smile 2 Impress": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Alleviate Tax RSS": {
            "total": 4,
            "agent": 3,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      }
    }
  },
  "NORAM": {
    "USA": {
      "Houston": {
        "Frontier": {
          "Frontier": {
            "total": 12,
            "agent": 11,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Lumen": {
          "L3 Helpdesk": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "L3 Projects": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "CTL Engage": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AT&T": {
          "ANR Disconnect": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "IOT EDO": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Wireline Complex": {
            "total": 10,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Premier Order Processing": {
            "total": 9,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Premier Web Order Issue": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Premier Device Unlock": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Data Tams": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "DSL Migration": {
            "total": 95,
            "agent": 91,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 4
          },
          "AIA-B": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Premier Business Center": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Windstream": {
          "ASR & BB": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Scan Group": {
          "Scan Members": {
            "total": 225,
            "agent": 218,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 7
          }
        },
        "NRG": {
          "NRG Stream": {
            "total": 7,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "NRG NorthEast IB": {
            "total": 13,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "NRG NorthEast OB": {
            "total": 12,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        }
      },
      "Boca": {
        "AT&T": {
          "FN Tech": {
            "total": 28,
            "agent": 25,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          },
          "Firstnet": {
            "total": 86,
            "agent": 80,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 6
          },
          "Collections": {
            "total": 13,
            "agent": 12,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "FN Offboarding": {
            "total": 6,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "All Process": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "BMTS": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "BDR": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Scan Group": {
          "Scan Members": {
            "total": 125,
            "agent": 121,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 4
          },
          "The Broker Support Services": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      },
      "Spindale": {
        "Quest Analytics": {
          "Quest Outbound": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Blains": {
          "Blains": {
            "total": 10,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Touchfuse": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Color.com": {
          "Appointment Scheduling": {
            "total": 5,
            "agent": 4,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AT&T": {
          "Firstnet Loyalty": {
            "total": 47,
            "agent": 45,
            "qa": 0,
            "supervisor": 2,
            "team_leader": 0
          },
          "All Process": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Firstnet": {
            "total": 30,
            "agent": 28,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 1
          }
        },
        "Touchfuse": {
          "Touchfuse": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Blains": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Scan Group": {
          "Scan Members": {
            "total": 135,
            "agent": 128,
            "qa": 0,
            "supervisor": 7,
            "team_leader": 0
          },
          "The Broker Support Services": {
            "total": 11,
            "agent": 10,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "PCM": {
          "PCM Impairments": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Medical Mutual": {
          "Medicare Advantage": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        }
      }
    },
    "Canada": {
      "Montreal": {
        "Apphelp": {
          "Apphelp": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "App Direct": {
          "App Direct": {
            "total": 11,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "Sensio": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "ACM": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "ACM": {
          "ACM": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Sensio": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "EZ Shield": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Wright Flood": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "App Direct": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Sensio": {
          "ACM": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Sensio": {
            "total": 6,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          },
          "EZ Shield": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Wright Flood": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "App Direct": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "EZ Shield": {
          "ACM": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Sensio": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "EZ Shield": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Wright Flood": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Wright Flood": {
          "ACM": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Sensio": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "EZ Shield": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Wright Flood": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      }
    }
  },
  "APAC": {
    "India": {
      "Bengaluru": {
        "AJIO": {
          "AJIO HRO": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO Seller Support": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Lumen": {
          "L3 LNP": {
            "total": 22,
            "agent": 20,
            "qa": 1,
            "supervisor": 1,
            "team_leader": 0
          },
          "CATS": {
            "total": 9,
            "agent": 8,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Enterprise Porting": {
            "total": 10,
            "agent": 9,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Cloudify Chat": {
            "total": 12,
            "agent": 11,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "L3 Port Outs": {
            "total": 14,
            "agent": 13,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "L3 Projects": {
            "total": 19,
            "agent": 18,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "LNP": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "L3 BSP": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "L3 ASR": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "TPI - TW Port In": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AT&T": {
          "ANR Disconnect": {
            "total": 46,
            "agent": 43,
            "qa": 1,
            "supervisor": 2,
            "team_leader": 0
          },
          "Network Discords": {
            "total": 23,
            "agent": 23,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Hosted Response": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Windstream": {
          "ASR & BB": {
            "total": 9,
            "agent": 8,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "LNP": {
            "total": 7,
            "agent": 6,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "L3 Projects": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Zayo": {
          "Access and Badging": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Honorlock": {
          "QA Engineering": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Agilitas Sports": {
          "Agilitas Customer Support": {
            "total": 2,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Traya": {
          "Traya OB": {
            "total": 5,
            "agent": 0,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 2
          },
          "Traya OB Training": {
            "total": 91,
            "agent": 91,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      },
      "Chandigarh": {
        "SBI Cards": {
          "FI & RCU North": {
            "total": 10,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "FI & RCU Blended": {
          "FI & RCU North": {
            "total": 203,
            "agent": 189,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 13
          }
        },
        "BANK OF BARODA": {
          "BOB Collection": {
            "total": 139,
            "agent": 131,
            "qa": 3,
            "supervisor": 1,
            "team_leader": 4
          }
        },
        "IDFC First Bank": {
          "FI & RCU North": {
            "total": 2,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Tata": {
          "TTL Collection": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "HDFC Bank": {
          "FI & RCU North": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      },
      "Siliguri": {
        "AJIO": {
          "AJIO C & R": {
            "total": 94,
            "agent": 88,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 5
          },
          "AJIO Dropship": {
            "total": 35,
            "agent": 33,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "AJIO Commercial": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "AJIO Social Media": {
            "total": 12,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "AJIO IB": {
            "total": 69,
            "agent": 48,
            "qa": 12,
            "supervisor": 0,
            "team_leader": 9
          },
          "AJIO Email": {
            "total": 63,
            "agent": 60,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 1
          },
          "SHEIN C & R": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO Seller Support Ticketing": {
            "total": 11,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO Review Moderator": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO IB GIG": {
            "total": 38,
            "agent": 38,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO Grievance Email": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO Chat": {
            "total": 23,
            "agent": 22,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Tira": {
          "Tira Voice": {
            "total": 92,
            "agent": 82,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 7
          },
          "Tira Email": {
            "total": 117,
            "agent": 117,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Tira Backend": {
            "total": 15,
            "agent": 15,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Tira Chat": {
            "total": 57,
            "agent": 57,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Meesho": {
          "Meesho IB": {
            "total": 14,
            "agent": 13,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Meesho IB GIG": {
            "total": 100,
            "agent": 100,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Shein": {
          "AJIO Dropship": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "SHEIN C & R": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Shein IB": {
            "total": 50,
            "agent": 48,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "Shein Email": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Shein Chat": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "JioMart": {
          "Jiomart Voice": {
            "total": 51,
            "agent": 49,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "All Process": {
            "total": 2,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Traya": {
          "Traya OB Training": {
            "total": 236,
            "agent": 236,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Traya OB": {
            "total": 71,
            "agent": 52,
            "qa": 8,
            "supervisor": 0,
            "team_leader": 11
          }
        }
      },
      "Noida": {
        "Tata": {
          "Tata Audit": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "TTL Collection": {
            "total": 21,
            "agent": 19,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        }
      },
      "Kolkata": {
        "FI & RCU Blended": {
          "FI & RCU East": {
            "total": 467,
            "agent": 464,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          }
        },
        "JioMart": {
          "Jiomart Chat": {
            "total": 98,
            "agent": 93,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 3
          },
          "Jiomart Voice": {
            "total": 73,
            "agent": 66,
            "qa": 4,
            "supervisor": 0,
            "team_leader": 3
          },
          "Jiomart Social Media": {
            "total": 12,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Jiomart CRV": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "JioMart RPQC": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Meesho": {
          "Meesho Supplier Procurement": {
            "total": 31,
            "agent": 29,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "Meesho New Kam": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Meesho IB GIG": {
            "total": 119,
            "agent": 119,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "OYO": {
          "OYO UK": {
            "total": 13,
            "agent": 12,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "OYO Wedding": {
            "total": 6,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "OYO US": {
            "total": 2,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Can Capital": {
          "Can Capital": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "CESC": {
          "CESC": {
            "total": 54,
            "agent": 52,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Pano AI": {
          "Tier 1 Backend Support": {
            "total": 126,
            "agent": 117,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 7
          },
          "Tier 2 Backend Support": {
            "total": 48,
            "agent": 46,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Baseline Llc": {
          "Baseline HW LV PH": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Quest Analytics": {
          "Quest Outbound": {
            "total": 25,
            "agent": 24,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Call Core Media": {
          "CCM Superpowered Media MVA": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Avride": {
          "Bot Operators": {
            "total": 72,
            "agent": 71,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Arvind Lifestyle": {
          "Arvind Lifestyle": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "BANK OF BARODA": {
          "BOB Collection": {
            "total": 57,
            "agent": 54,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          }
        },
        "Enerokart": {
          "Enerokart OB Sales": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Encord": {
          "VLA L1": {
            "total": 21,
            "agent": 21,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "VLA L2": {
            "total": 18,
            "agent": 18,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Achieve Collection": {
          "Achieve Collection": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Global": {
          "Shared Services International": {
            "total": 3,
            "agent": 0,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Vikram Solar": {
          "VS OB Sales": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Honorlock": {
          "Proctoring": {
            "total": 62,
            "agent": 56,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 4
          },
          "Image Reviewer": {
            "total": 9,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 4
          },
          "Customer Support": {
            "total": 12,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 4
          }
        },
        "SBI Cards": {
          "FI & RCU East": {
            "total": 23,
            "agent": 18,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 5
          }
        },
        "HDFC Bank": {
          "FI & RCU East": {
            "total": 9,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "India Domestic": {
          "Shared Services Domestic": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Guiltfree": {
          "Customer Service": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Woodlands Hospital": {
          "Woodlands IB": {
            "total": 14,
            "agent": 12,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Aditya Birla Finance": {
          "FI & RCU East": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Turing": {
          "Data Annotation": {
            "total": 4,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Alchera": {
          "2D Lidar Annotation": {
            "total": 19,
            "agent": 19,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "SJ Health": {
          "SJ Claims": {
            "total": 7,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Blue Frog Loan": {
          "Loan origination": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      },
      "Durgapur": {
        "Meesho": {
          "Meesho Seller Support": {
            "total": 116,
            "agent": 110,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 4
          },
          "Meesho Seller Support QC": {
            "total": 150,
            "agent": 144,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 4
          },
          "Meesho Email": {
            "total": 93,
            "agent": 89,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 3
          },
          "Meesho IB PT": {
            "total": 99,
            "agent": 97,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "Meesho Chat": {
            "total": 86,
            "agent": 80,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 4
          },
          "Meesho Supplier Procurement": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Meesho Fraud": {
            "total": 20,
            "agent": 19,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Meesho Farmiso": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Meesho IB": {
            "total": 40,
            "agent": 38,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "Meesho PT English": {
            "total": 19,
            "agent": 19,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Meesho IB English": {
            "total": 14,
            "agent": 14,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AJIO": {
          "AJIO Chat": {
            "total": 247,
            "agent": 234,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 10
          },
          "AJIO IB": {
            "total": 89,
            "agent": 81,
            "qa": 5,
            "supervisor": 0,
            "team_leader": 3
          },
          "AJIO C & R": {
            "total": 33,
            "agent": 29,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 2
          },
          "AJIO Repeat Desk": {
            "total": 17,
            "agent": 15,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "AJIO Luxe": {
            "total": 5,
            "agent": 4,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Shein IB": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO Email": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO Grievance Email": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO Premium": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO Blended": {
            "total": 13,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Shein": {
          "SHEIN C & R": {
            "total": 23,
            "agent": 23,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO IB": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Shein IB": {
            "total": 8,
            "agent": 7,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Tira": {
          "Tira Voice": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      },
      "Gurugram": {
        "Windstream": {
          "Suspend Non Pay": {
            "total": 10,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Disc Prov": {
            "total": 18,
            "agent": 17,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Disc OE": {
            "total": 14,
            "agent": 14,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "ASR Disconnect": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "SOC Project": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "CATO Audits": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Lumen": {
          "L3 LNP": {
            "total": 13,
            "agent": 11,
            "qa": 1,
            "supervisor": 1,
            "team_leader": 0
          },
          "Apple": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Apple": {
          "Apple": {
            "total": 6,
            "agent": 5,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "L3 LNP": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AIFI": {
          "DAT": {
            "total": 79,
            "agent": 75,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 4
          }
        },
        "Revolt Motors": {
          "Lead Generation": {
            "total": 31,
            "agent": 31,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Inbound CS": {
            "total": 7,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Yamaha Music": {
          "Yamaha Music Customer Service": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      },
      "Howrah": {
        "Meesho": {
          "Meesho Onboarding": {
            "total": 68,
            "agent": 66,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "Meesho IB": {
            "total": 171,
            "agent": 164,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 6
          },
          "Meesho SS Blended": {
            "total": 88,
            "agent": 84,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 4
          },
          "Meesho Seller Support QC": {
            "total": 86,
            "agent": 82,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 3
          },
          "Meesho Supplier Procurement": {
            "total": 28,
            "agent": 27,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Meesho IB English": {
            "total": 46,
            "agent": 46,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Meesho IB PT": {
            "total": 58,
            "agent": 57,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Meesho IB GIG": {
            "total": 311,
            "agent": 311,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Pay Nearby OB": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Pay Nearby": {
          "Pay Nearby OB": {
            "total": 63,
            "agent": 58,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 4
          },
          "Meesho SS Blended": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "AIFI": {
          "DAT": {
            "total": 152,
            "agent": 144,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 6
          },
          "HPA": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "OYO US": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "OYO UK": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "AIFI OB": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "DMS ACA": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Choice Home Warranty": {
          "CHW & FPHW Complete Home Services": {
            "total": 23,
            "agent": 22,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Modaramo": {
          "Modaramo Catch All": {
            "total": 8,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Global": {
          "Shared Services International": {
            "total": 2,
            "agent": 0,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AJIO": {
          "AJIO IB GIG": {
            "total": 12,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Interest Media": {
          "IM Affiliate HW": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "OYO": {
          "OYO US": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "OYO UK": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "AIFI OB": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "DMS ACA": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Digital Media Solutions": {
          "OYO US": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "OYO UK": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "AIFI OB": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "DMS ACA": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      },
      "Kalyani": {
        "Meesho": {
          "Meesho IB": {
            "total": 275,
            "agent": 252,
            "qa": 9,
            "supervisor": 0,
            "team_leader": 14
          },
          "Meesho IB English": {
            "total": 39,
            "agent": 38,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Meesho IB PT": {
            "total": 142,
            "agent": 140,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "Meesho PT English": {
            "total": 18,
            "agent": 18,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Meesho IB GIG": {
            "total": 20,
            "agent": 20,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      },
      "Mumbai": {
        "Traya": {
          "Traya OB": {
            "total": 103,
            "agent": 93,
            "qa": 5,
            "supervisor": 0,
            "team_leader": 5
          },
          "Traya Sales": {
            "total": 125,
            "agent": 112,
            "qa": 5,
            "supervisor": 0,
            "team_leader": 8
          },
          "Traya Chat": {
            "total": 24,
            "agent": 24,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Traya OB Training": {
            "total": 46,
            "agent": 46,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Traya Sales Training": {
            "total": 50,
            "agent": 50,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "One Assist": {
          "One Assist": {
            "total": 8,
            "agent": 6,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "CESC": {
          "CESC": {
            "total": 15,
            "agent": 14,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Onsitego": {
          "Onsitego IB": {
            "total": 37,
            "agent": 32,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Park West": {
          "Tier 1": {
            "total": 59,
            "agent": 55,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 4
          }
        },
        "Tata": {
          "TTL Collection": {
            "total": 20,
            "agent": 19,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      }
    },
    "Philippines": {
      "Cebu": {
        "Harvard Business": {
          "Harvard Business": {
            "total": 13,
            "agent": 12,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Keeper Security": {
          "All Process": {
            "total": 11,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Keeper Security": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Callture": {
          "Callture": {
            "total": 6,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Awareness Technologies": {
          "Awareness Technology": {
            "total": 4,
            "agent": 2,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "Ship Your Car Now": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Stratus": {
          "Tech Monitoring": {
            "total": 47,
            "agent": 44,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 1
          },
          "Intake": {
            "total": 18,
            "agent": 17,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "CSR": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Rug Doctor US": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Stratus Tech": {
            "total": 6,
            "agent": 3,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 1
          },
          "Sentient Jet": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Virtuox": {
          "Virtuox Outbound & Faxing": {
            "total": 7,
            "agent": 6,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Patient Support": {
            "total": 44,
            "agent": 40,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 2
          },
          "Order Review": {
            "total": 9,
            "agent": 7,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Docusign": {
          "Docusign Taggers": {
            "total": 12,
            "agent": 12,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "All Process": {
            "total": 3,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          },
          "Docusign Business Development": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Docusign Digital": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Advertising Production": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Unacast": {
          "Data operations support": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Ship Your Car Now": {
          "Ship Your Car Now": {
            "total": 47,
            "agent": 44,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          },
          "Awareness Technology": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Rugdoctor": {
          "Rug Doctor US": {
            "total": 19,
            "agent": 17,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "Stratus Tech": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Park West": {
          "Tier 2": {
            "total": 79,
            "agent": 72,
            "qa": 4,
            "supervisor": 0,
            "team_leader": 3
          },
          "DS 123 Openers": {
            "total": 25,
            "agent": 15,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 8
          },
          "Tier 1": {
            "total": 47,
            "agent": 40,
            "qa": 4,
            "supervisor": 0,
            "team_leader": 3
          },
          "Assessment Services": {
            "total": 20,
            "agent": 17,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Bioserenity": {
          "Bioserenity": {
            "total": 6,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Telaid": {
          "Telaid": {
            "total": 98,
            "agent": 92,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 4
          },
          "Tank Monitoring & Trailer Tracking Helpdesk": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Petroleum Logistics": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "All Process": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Project Coordinator": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "MBA": {
          "Merchants Benefit Administration": {
            "total": 15,
            "agent": 12,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Sertec": {
          "Sertec": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Checkpoint": {
          "Checkpoint ZA": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "All Process": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Checkpoint TAC": {
            "total": 16,
            "agent": 15,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Checkpoint MS": {
            "total": 8,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Checkpoint PC": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ameriflex": {
          "CRS": {
            "total": 17,
            "agent": 15,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "PSA": {
            "total": 17,
            "agent": 16,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Leonardo Hotels": {
          "Reservation": {
            "total": 89,
            "agent": 79,
            "qa": 5,
            "supervisor": 0,
            "team_leader": 5
          }
        },
        "Mpower": {
          "Mpower NY": {
            "total": 20,
            "agent": 19,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Mpower": {
            "total": 10,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Stripe": {
          "Stripe BD": {
            "total": 6,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "SkyBitz": {
          "Tank Monitoring & Trailer Tracking Helpdesk": {
            "total": 20,
            "agent": 18,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "Telaid": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Petroleum Logistics": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Sentient Jet": {
          "Sentient Jet": {
            "total": 29,
            "agent": 27,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "Stratus Tech": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Tech Monitoring": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Flight Management": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Puppyspot": {
          "Puppyspot": {
            "total": 8,
            "agent": 7,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "VIIZ": {
          "Directory Assistants": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Practice Web": {
          "Practice Web": {
            "total": 8,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "App Direct": {
          "App Direct": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Healthcare HR": {
          "MOA": {
            "total": 13,
            "agent": 12,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Identity Group Holdings": {
          "Project Management Coordination": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Graphic Design": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "All Process": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Wayfinder": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Cruisebound": {
          "Customer Support Services": {
            "total": 18,
            "agent": 17,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Back Office": {
            "total": 7,
            "agent": 5,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Alpha Electric And Gas": {
          "All Process": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Honorlock": {
          "Customer Support": {
            "total": 31,
            "agent": 29,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "Proctoring": {
            "total": 26,
            "agent": 23,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 1
          },
          "Image Reviewer": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "QA Engineering": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Call & Email Support": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Digital Provisions": {
          "Security Operations": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Now Finance Group": {
          "Now Finance Group": {
            "total": 63,
            "agent": 56,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 7
          }
        },
        "Calculated Lending": {
          "Calculated Lending": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Medipro Capital Finance": {
          "Medipro Capital Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Adam Howard": {
          "Adam Howard": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Olive Road Financial": {
          "Olive Road Financial": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Absolute Wealth Advisors": {
          "Absolute Wealth Advisors": {
            "total": 11,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "OneSite Finance": {
          "OneSite Finance": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Buy1Give1": {
          "Buy1Give1": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Southern Cross Wealth Management": {
          "Southern Cross Wealth Management": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Norwest Orthodontics": {
          "Norwest Orthodontics": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Key Financial Planners": {
          "Key Financial Planners": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Stellaris Finance Broking": {
          "Stellaris Finance Broking": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Financial Linx": {
          "Financial Linx": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Southern Accounting & Consulting": {
          "Southern Accounting & Consulting": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Mint Lending": {
          "Mint Lending": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Momentum Wealth Finance": {
          "Momentum Wealth Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Premium Finance": {
          "Premium Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Epsilon Security": {
          "Epsilon Security": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Joe Vitale Financial Services": {
          "Joe Vitale Financial Services": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Synergy Asset Services": {
          "Synergy Asset Services": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Opti Finance": {
          "Opti Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Xiong Mortgage and Finance": {
          "Xiong Mortgage and Finance": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Chrysalis Lifestyle Planning": {
          "Chrysalis Lifestyle Planning": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Future Assist Protection": {
          "Future Assist Protection": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Watt Utilities": {
          "Watt Utilities": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Walker Lane Private Wealth": {
          "Walker Lane Private Wealth": {
            "total": 11,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Fox & Hare Wealth": {
          "Fox & Hare Wealth": {
            "total": 8,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "TTS & Associates": {
          "TTS & Associates": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "L2 Financial": {
          "L2 Financial": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Creditline": {
          "Creditline": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Saint Finance": {
          "Saint Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Maddern Accountants": {
          "Maddern Accountants": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Armstrongs Financial Adviser": {
          "Armstrongs Financial Adviser": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Strategic Planning Solutions": {
          "Strategic Planning Solutions": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Thriving Wealth": {
          "Thriving Wealth": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Rasiah Private Wealth Management": {
          "Rasiah Private Wealth Management": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Lendier Finance": {
          "Lendier Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Super Equity": {
          "Super Equity": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Affiniti Finance": {
          "Affiniti Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Steven Adnan": {
          "Steven Adnan": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Seed Finance Broking": {
          "Seed Finance Broking": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Chris Green GYB": {
          "Chris Green GYB": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Metrohm Australia": {
          "Metrohm Australia": {
            "total": 8,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Mortgage Domayne": {
          "Mortgage Domayne": {
            "total": 13,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Transact Holdings 1": {
          "Transact Holdings 1": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "APositive": {
          "APositive": {
            "total": 8,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Dokio": {
          "Dokio": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AHS Financial": {
          "AHS Financial": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Capital Collective": {
          "Capital Collective": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Phoenix Lending": {
          "Phoenix Lending": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Clayton Capital AUS": {
          "Clayton Capital AUS": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Prowse Financial Group": {
          "Prowse Financial Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Profitline Finance": {
          "Profitline Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Adelaide Commercial Finance": {
          "Adelaide Commercial Finance": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Maze Mortgage Broking": {
          "Maze Mortgage Broking": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Philo Capital Services": {
          "Philo Capital Services": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Money.com.au": {
          "Money.com.au": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "DJ Smith Group": {
          "DJ Smith Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Loan Monster": {
          "Loan Monster": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Chatham House Financial": {
          "Chatham House Financial": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Life Sumo": {
          "Life Sumo": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "The Projex Company": {
          "The Projex Company": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Whiteroom Finance": {
          "Whiteroom Finance": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Eden Finance": {
          "Eden Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Slomoi Immerman Partners": {
          "Slomoi Immerman Partners": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "At Finance": {
          "At Finance": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Fornaro Accountants": {
          "Fornaro Accountants": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "WestGen Finance": {
          "WestGen Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "LSJ Davey": {
          "LSJ Davey": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ozland Group Services": {
          "Ozland Group Services": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Amplified Lending Solutions": {
          "Amplified Lending Solutions": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Marin Financial": {
          "Marin Financial": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Birdwood Energy": {
          "Birdwood Energy": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "The Wealth Network": {
          "The Wealth Network": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Mercury Financial Group": {
          "Mercury Financial Group": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Proxima Financial Group": {
          "Proxima Financial Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Matera Settlements": {
          "Matera Settlements": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "FuturePoint Wealth": {
          "FuturePoint Wealth": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Mecca Finance": {
          "Mecca Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Maslow Wealth": {
          "Maslow Wealth": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Real Mortgage Solutions": {
          "Real Mortgage Solutions": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Mono Wealth Advisory": {
          "Mono Wealth Advisory": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Realth Property Group": {
          "Realth Property Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Verity Finance Group": {
          "Verity Finance Group": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Net Intellect": {
          "Net Intellect": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Via Financial Group": {
          "Via Financial Group": {
            "total": 8,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "PR Solar Solutions": {
          "PR Solar Solutions": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Accrue Financial Group": {
          "Accrue Financial Group": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Rethink Wealth": {
          "Rethink Wealth": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Key Mortgage Brokers": {
          "Key Mortgage Brokers": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "CYF Finance": {
          "CYF Finance": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Clearwater Finance": {
          "Clearwater Finance": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Pinnacle Financial Advisers": {
          "Pinnacle Financial Advisers": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Lendeez": {
          "Lendeez": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Bear Plumbing": {
          "Bear Plumbing": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Bottlecycler Australia": {
          "Bottlecycler Australia": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Propel Financial Advice": {
          "Propel Financial Advice": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Neptune Finance Australia": {
          "Neptune Finance Australia": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Gabriel Financial Services": {
          "Gabriel Financial Services": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "National Pacific Finance": {
          "National Pacific Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Maddern Financial Advisers": {
          "Maddern Financial Advisers": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ignite Financial NQ": {
          "Ignite Financial NQ": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Dixon Construction": {
          "Dixon Construction": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Oui Finance": {
          "Oui Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Prudent Finance": {
          "Prudent Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Bendigo Lending Centre": {
          "Bendigo Lending Centre": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Aspire Accountants and Advisors": {
          "Aspire Accountants and Advisors": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Nexia Perth Financial Solutions": {
          "Nexia Perth Financial Solutions": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Superyacht Crew Academy": {
          "Superyacht Crew Academy": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "PlanningSolo Licensing": {
          "PlanningSolo Licensing": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Nexus Loans": {
          "Nexus Loans": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Quantum Financial Solutions": {
          "Quantum Financial Solutions": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Synstrat Accounting": {
          "Synstrat Accounting": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Tips Financial Services": {
          "Tips Financial Services": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Azzaro Finance": {
          "Azzaro Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Mangion Financial Services": {
          "Mangion Financial Services": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "CF Wealth Management": {
          "CF Wealth Management": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "R.J.C. Evans & Co": {
          "R.J.C. Evans & Co": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Crest Financial Services": {
          "Crest Financial Services": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Halstead Financial Services": {
          "Halstead Financial Services": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Delux Building Management Group": {
          "Delux Building Management Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "My Loan Partners": {
          "My Loan Partners": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Surety Life": {
          "Surety Life": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Belfast Wealth Management": {
          "Belfast Wealth Management": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Blackwood Financial Solutions": {
          "Blackwood Financial Solutions": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "HTS Construction": {
          "HTS Construction": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Driven Finance Group": {
          "Driven Finance Group": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "SCF Brokerage": {
          "SCF Brokerage": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Sapphire Loans": {
          "Sapphire Loans": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Finance 48": {
          "Finance 48": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ruby Financial Services": {
          "Ruby Financial Services": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Inside Edge Novated Leasing": {
          "Inside Edge Novated Leasing": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "FinanceWest Solutions": {
          "FinanceWest Solutions": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "The Finance Experience": {
          "The Finance Experience": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Zaldivia Finance": {
          "Zaldivia Finance": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Centrewest Financial Services": {
          "Centrewest Financial Services": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Tutt Bryant": {
          "Tutt Bryant": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Simplified Finance Broking": {
          "Simplified Finance Broking": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "CHG Wealth": {
          "CHG Wealth": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ripple Finance": {
          "Ripple Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Beanstalk AgTech": {
          "Beanstalk AgTech": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Pronto Capital": {
          "Pronto Capital": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Zella Money": {
          "Zella Money": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Beyond Construction": {
          "Beyond Construction": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Andrews Finance": {
          "Andrews Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Cogniti Wealth": {
          "Cogniti Wealth": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Maze Financial": {
          "Maze Financial": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Tenner Financial Planning": {
          "Tenner Financial Planning": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "The Bayside Investor": {
          "The Bayside Investor": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "M Finance": {
          "M Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Cultivate Wealth": {
          "Cultivate Wealth": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Refit Commercial Flooring": {
          "Refit Commercial Flooring": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "ASC Water Tanks": {
          "ASC Water Tanks": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Total Wealth Management": {
          "Total Wealth Management": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Point Consulting Group": {
          "Point Consulting Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Coastline Private Wealth": {
          "Coastline Private Wealth": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Motivate Realty": {
          "Motivate Realty": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Marlun": {
          "Marlun": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Alchemy Finance": {
          "Alchemy Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "MoneySmith Advice": {
          "MoneySmith Advice": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Freedom Funding": {
          "Freedom Funding": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Next Step Finance Solutions": {
          "Next Step Finance Solutions": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Robert Trewin Mortgage Broking": {
          "Robert Trewin Mortgage Broking": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Venture Finance": {
          "Venture Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AFA Mortgage Brokers": {
          "AFA Mortgage Brokers": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Complete Finance Group": {
          "Complete Finance Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Medstock": {
          "Medstock": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "HYROX World": {
          "HYROX World": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Regional Migration Australia": {
          "Regional Migration Australia": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Chatfield Consulting": {
          "Chatfield Consulting": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Blue Gum Loans": {
          "Blue Gum Loans": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Vigeo Financial Solutions": {
          "Vigeo Financial Solutions": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Bespoke Finance Group": {
          "Bespoke Finance Group": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Wealth Simplicity": {
          "Wealth Simplicity": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Fletch Law": {
          "Fletch Law": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "The Toolbox Team": {
          "The Toolbox Team": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "The Lending Collective": {
          "The Lending Collective": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Eclipse Financial Planning": {
          "Eclipse Financial Planning": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Initiative Financial Advisers": {
          "Initiative Financial Advisers": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Walmac Finance": {
          "Walmac Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "IFS Lending": {
          "IFS Lending": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Alphington Private Wealth": {
          "Alphington Private Wealth": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "A & T Financial Advisers": {
          "A & T Financial Advisers": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Doohanlife": {
          "Doohanlife": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "MortgageHQ": {
          "MortgageHQ": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Track Financial": {
          "Track Financial": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Steinfort Financial Servies": {
          "Steinfort Financial Servies": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "MoneyQuest Wellington Point": {
          "MoneyQuest Wellington Point": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AGS": {
          "AGS": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Bolder Wealth": {
          "Bolder Wealth": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "OSC Financial Services": {
          "OSC Financial Services": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Highview Finance": {
          "Highview Finance": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Connect Mortgages": {
          "Connect Mortgages": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Boutique Finance Group": {
          "Boutique Finance Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Surrey Road Finance": {
          "Surrey Road Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Horizon Financial Planners": {
          "Horizon Financial Planners": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "LittleSpring": {
          "LittleSpring": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Bongiorno & Partners FP": {
          "Bongiorno & Partners FP": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Global Pathway Finance": {
          "Global Pathway Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Coastal Finance and Property": {
          "Coastal Finance and Property": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Infinite Finance Australia": {
          "Infinite Finance Australia": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Meliora Financial Group": {
          "Meliora Financial Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ford Scott Financial Planning": {
          "Ford Scott Financial Planning": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Swyft Home Loans": {
          "Swyft Home Loans": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Financial Spectrum": {
          "Financial Spectrum": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Project M Group": {
          "Project M Group": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Lifenet Financial Advice": {
          "Lifenet Financial Advice": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Atkinson Saynor Private Wealth": {
          "Atkinson Saynor Private Wealth": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Wealthy Self": {
          "Wealthy Self": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Coral Coast Finance": {
          "Coral Coast Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Complete Financial Planning": {
          "Complete Financial Planning": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Wealth Architects": {
          "Wealth Architects": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Granite Financial Services": {
          "Granite Financial Services": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Gold Seal Finance": {
          "Gold Seal Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Sheffield Financial Group": {
          "Sheffield Financial Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "KHI Finance Solutions Balgowlah": {
          "KHI Finance Solutions Balgowlah": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "KHI Finance Solutions Liverpool": {
          "KHI Finance Solutions Liverpool": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Mortgage Express": {
          "Mortgage Express": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "KHI Finance Solutions": {
          "KHI Finance Solutions": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Beaumonde Homes": {
          "Beaumonde Homes": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Next Level Financial Planning": {
          "Next Level Financial Planning": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Picture Wealth Services": {
          "Picture Wealth Services": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Resolution Wealth Partner": {
          "Resolution Wealth Partner": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Wealthhq": {
          "Wealthhq": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "YouFin Solutions": {
          "YouFin Solutions": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Achievement Finance": {
          "Achievement Finance": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Bick Finance Group": {
          "Bick Finance Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Blackrock Industries": {
          "Blackrock Industries": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Intro Finance": {
          "Intro Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Condor Finance Partners": {
          "Condor Finance Partners": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Loan Port": {
          "Loan Port": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "VAP FP Academy": {
          "VAP FP Academy": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Oracle Group Insurance Brokers": {
          "Oracle Group Insurance Brokers": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Active Finaus": {
          "Active Finaus": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Invested Home Loans": {
          "Invested Home Loans": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Power Mortgages": {
          "Power Mortgages": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Turn Right": {
          "Turn Right": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Business Chamber Queensland": {
          "Business Chamber Queensland": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "TranQuill Legal": {
          "TranQuill Legal": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "SK Finance Group": {
          "SK Finance Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AMA Precast": {
          "AMA Precast": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Crafted Finance Australia": {
          "Crafted Finance Australia": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Napoleon Finance": {
          "Napoleon Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "GRC Essentials": {
          "GRC Essentials": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "G.J. Gardner Homes": {
          "G.J. Gardner Homes": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Yenom Money": {
          "Yenom Money": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Noetic Finance": {
          "Noetic Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Your Lending Solutions": {
          "Your Lending Solutions": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Skate Capital WA": {
          "Skate Capital WA": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Fulham Finance": {
          "Fulham Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ambition Finance": {
          "Ambition Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Enopac Property Group": {
          "Enopac Property Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "WA Finance Services": {
          "WA Finance Services": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Solis Fire": {
          "Solis Fire": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "FinSource": {
          "FinSource": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Legal Training Australia": {
          "Legal Training Australia": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "McPhails Furniture": {
          "McPhails Furniture": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Lending Concepts": {
          "Lending Concepts": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Cic WA": {
          "Cic WA": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AAMC Training Group": {
          "AAMC Training Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Strategic Brokers": {
          "Strategic Brokers": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Longview Capital Partners": {
          "Longview Capital Partners": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ekam Capital": {
          "Ekam Capital": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Opus Wealth": {
          "Opus Wealth": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Total Choice Home Loans": {
          "Total Choice Home Loans": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Intuitive Advice": {
          "Intuitive Advice": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Numero Uno Finance": {
          "Numero Uno Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Lakeside Financial": {
          "Lakeside Financial": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Direct Advisers": {
          "Direct Advisers": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Haikal Finance": {
          "Haikal Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "MCG Advisory": {
          "MCG Advisory": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Future Gen Solutions": {
          "Future Gen Solutions": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Select Advice": {
          "Select Advice": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Vantage Finance Group": {
          "Vantage Finance Group": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Financial Edge Group": {
          "Financial Edge Group": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Australian Finance Hub": {
          "Australian Finance Hub": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Broker Bros": {
          "Broker Bros": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Bell Financial": {
          "Bell Financial": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Alcove": {
          "Alcove": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "O S Financial Services": {
          "O S Financial Services": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Rising Tide Financial Services": {
          "Rising Tide Financial Services": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Your Vision Financial Solutions": {
          "Your Vision Financial Solutions": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Equitas Mortgage & Finance": {
          "Equitas Mortgage & Finance": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Mr Insurance": {
          "Mr Insurance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "The Keyman Group": {
          "The Keyman Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Bluestone Recruitment": {
          "Bluestone Recruitment": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Wright Financial Advice": {
          "Wright Financial Advice": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "WK Solutions": {
          "WK Solutions": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "EME Finance": {
          "EME Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Succession Matters": {
          "Succession Matters": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Truly Connected": {
          "Truly Connected": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Landmark Investments": {
          "Landmark Investments": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Insurance People": {
          "Insurance People": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Motivate Property Group": {
          "Motivate Property Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Capital for Castles": {
          "Capital for Castles": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "House of Finance AUS": {
          "House of Finance AUS": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Dizzy Property Group": {
          "Dizzy Property Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Hutton Financial Services": {
          "Hutton Financial Services": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Orange Mortgage": {
          "Orange Mortgage": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Fine Jewellery": {
          "Fine Jewellery": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Straddle Finance": {
          "Straddle Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Oakmont Financial Group": {
          "Oakmont Financial Group": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Grow Well Financial": {
          "Grow Well Financial": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Anova Financial Group": {
          "Anova Financial Group": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Health Predictions": {
          "Health Predictions": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Australian Insurance": {
          "Australian Insurance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Nacre Consulting": {
          "Nacre Consulting": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Sprouts Finance": {
          "Sprouts Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "High Street Advisory": {
          "High Street Advisory": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "FGO Finance Group": {
          "FGO Finance Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "MyChoice Home Loans": {
          "MyChoice Home Loans": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Cadzter Accountants": {
          "Cadzter Accountants": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Australian Finance Brokerage": {
          "Australian Finance Brokerage": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Hub Advice": {
          "Hub Advice": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      },
      "Legazpi": {
        "A1 Diabetes": {
          "Admediary Mva": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "CHW & FPHW Complete Home Services": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Alleviate Tax OB": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Admediary Tort": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Admediary GOLD SSDI": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "A1 Dts Reorder Campaign Q3 B 2025": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Admediary": {
          "Admediary Mva": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "CHW & FPHW Complete Home Services": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Alleviate Tax OB": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Admediary Tort": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Admediary GOLD SSDI": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "A1 Dts Reorder Campaign Q3 B 2025": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Choice Home Warranty": {
          "Admediary Mva": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "CHW & FPHW Complete Home Services": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Alleviate Tax OB": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Admediary Tort": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Admediary GOLD SSDI": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "A1 Dts Reorder Campaign Q3 B 2025": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Alleviate": {
          "Admediary Mva": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "CHW & FPHW Complete Home Services": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Alleviate Tax OB": {
            "total": 2,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 1
          },
          "Admediary Tort": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Admediary GOLD SSDI": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "A1 Dts Reorder Campaign Q3 B 2025": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "CCM Superpowered Media MVA": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "What If Media CHW Live Voice": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "What If Media Auto Insurance": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Spataro Media": {
          "Spataro Media ADP": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Call Core Media": {
          "CCM Superpowered Media MVA": {
            "total": 38,
            "agent": 35,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 2
          },
          "What If Media CHW Live Voice": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Alleviate Tax OB": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "What If Media Auto Insurance": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "CCM MVA LV": {
            "total": 15,
            "agent": 15,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Insurance Express": {
          "Web Transfer Campaign": {
            "total": 16,
            "agent": 15,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Digital Media Solutions": {
          "DMS EDU": {
            "total": 34,
            "agent": 32,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "DMS Edu Matching": {
            "total": 10,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "AIFI": {
          "DAT": {
            "total": 61,
            "agent": 58,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "VIIZ": {
          "Directory Assistants": {
            "total": 48,
            "agent": 46,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "What If Media": {
          "CCM Superpowered Media MVA": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "What If Media CHW Live Voice": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Alleviate Tax OB": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "What If Media Auto Insurance": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "What if Media MVA": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Best Company": {
          "Best Company Reviews": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Clearone Advantage": {
          "Coa Pp Debt": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Park West": {
          "Tier 2": {
            "total": 45,
            "agent": 34,
            "qa": 5,
            "supervisor": 0,
            "team_leader": 6
          },
          "Tier 1": {
            "total": 49,
            "agent": 45,
            "qa": 4,
            "supervisor": 0,
            "team_leader": 0
          },
          "Assessment Services": {
            "total": 4,
            "agent": 0,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 1
          },
          "DS 123 Openers": {
            "total": 17,
            "agent": 15,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Thrive Consumer": {
          "Thrive Consumer Debt": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Baidu": {
          "Lidar Annotation": {
            "total": 121,
            "agent": 119,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Faema Management": {
          "Faema EA": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      },
      "Manila": {
        "VIIZ": {
          "Directory Assistants": {
            "total": 58,
            "agent": 51,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 5
          },
          "Frontier": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Azazie": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "K2 Claims Services": {
          "Us Directory Assistance": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "K2 Claims": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Scan Group": {
          "Embrace Services": {
            "total": 9,
            "agent": 8,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Scan Members": {
            "total": 35,
            "agent": 32,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          },
          "The Broker Support Services": {
            "total": 21,
            "agent": 19,
            "qa": 1,
            "supervisor": 1,
            "team_leader": 0
          },
          "All Process": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Chariot Energy": {
          "Voice CS": {
            "total": 40,
            "agent": 38,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "Voice Sales": {
            "total": 2,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Back Office Collections": {
            "total": 7,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Back End Process": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Back Office Sales": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "UNO Bank": {
          "All Process": {
            "total": 3,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          },
          "UNO Digital Service": {
            "total": 40,
            "agent": 38,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "UNO L1 Support": {
            "total": 10,
            "agent": 8,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Teleserv": {
          "Teleserv": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Cogeco": {
          "Voice General Customer Care": {
            "total": 333,
            "agent": 321,
            "qa": 4,
            "supervisor": 0,
            "team_leader": 8
          },
          "Chat General Customer Care": {
            "total": 4,
            "agent": 0,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Azazie": {
          "Azazie": {
            "total": 2,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "Directory Assistants": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Frontier": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Avon": {
          "Avon": {
            "total": 10,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Apple": {
          "Apple": {
            "total": 6,
            "agent": 5,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "MBA": {
          "Merchants Benefit Administration": {
            "total": 20,
            "agent": 18,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "All Process": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "AT&T": {
          "BME CHAT": {
            "total": 42,
            "agent": 39,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          },
          "SMB Concierge & Master Program": {
            "total": 14,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Bmc": {
            "total": 161,
            "agent": 152,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 9
          },
          "All Process": {
            "total": 9,
            "agent": 0,
            "qa": 8,
            "supervisor": 1,
            "team_leader": 0
          },
          "Wireless Loyalty": {
            "total": 83,
            "agent": 74,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 7
          },
          "Mid Market Retention": {
            "total": 21,
            "agent": 19,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 1
          },
          "Wireline Enterprise": {
            "total": 42,
            "agent": 39,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          },
          "Wireline Complex": {
            "total": 13,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "Mid Market Care": {
            "total": 10,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "BDR": {
            "total": 13,
            "agent": 12,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Indirect Back Office": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Alaska": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Connect Community": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Pinglend": {
          "Pinglend": {
            "total": 2,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "All Process": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Global": {
          "All Process": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Frontier": {
          "Frontier": {
            "total": 57,
            "agent": 50,
            "qa": 2,
            "supervisor": 4,
            "team_leader": 1
          },
          "Directory Assistants": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Azazie": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Park West": {
          "Tier 1": {
            "total": 66,
            "agent": 59,
            "qa": 3,
            "supervisor": 2,
            "team_leader": 2
          },
          "First Party Collection": {
            "total": 14,
            "agent": 14,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Virtuox": {
          "Patient Support": {
            "total": 14,
            "agent": 13,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "All Process": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "American Water": {
          "Oncourse Home Solutions": {
            "total": 42,
            "agent": 40,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Ventus AI": {
          "Dental Insurance Verification": {
            "total": 10,
            "agent": 9,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Stratus": {
          "All Process": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Ameriflex": {
          "All Process": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "MobileX Global": {
          "MobileX Global": {
            "total": 6,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "WCT": {
          "Patient Intake": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Medical Billing": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Cognishield": {
          "Patient Support": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "What If Media": {
          "What If Media CHW Live Voice": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "What if Media Retirement Savings": {
            "total": 10,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "What if Media MVA": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Xpress Business Loans": {
          "SB Xpress Business Loans": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Admediary": {
          "Admediary Mva": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Global Acquisition": {
          "Debt Settlement": {
            "total": 2,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Digital Media Solutions": {
          "DMS EDU": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ece Financial": {
          "ECE Financial Debt": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Call Core Media": {
          "CCM MVA LV": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "CCM Superpowered Media MVA": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      },
      "Silang": {
        "Pointerleads": {
          "Pointerleads Roofing SB": {
            "total": 2,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Alleviate": {
          "Alleviate Tax OB": {
            "total": 4,
            "agent": 2,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 1
          },
          "SB Xpress Business Loans": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Affiliate Debt": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "What if Media Affiliate Debt Program": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Xpress Business Loans": {
          "Alleviate Tax OB": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "SB Xpress Business Loans": {
            "total": 2,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Azazie": {
          "Azazie": {
            "total": 29,
            "agent": 27,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 1
          }
        },
        "What If Media": {
          "What If Media Auto Insurance": {
            "total": 11,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "What if Media MVA": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "What if Media Retirement Savings": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "What if Media Affiliate Debt Program": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "What If Media CHW Live Voice": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Alleviate Tax OB": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Affiliate Debt": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Insurance Express": {
          "Web Transfer Campaign": {
            "total": 30,
            "agent": 28,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "Auto Approve": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Auto Approve": {
          "Web Transfer Campaign": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Auto Approve": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Ece Financial": {
          "ECE Financial Debt": {
            "total": 2,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Storm Impact Homes": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Storm Impact Homes": {
          "ECE Financial Debt": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Storm Impact Homes": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Clearone Advantage": {
          "Clearone Advantage": {
            "total": 100,
            "agent": 89,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 10
          },
          "Coa Sales Team": {
            "total": 3,
            "agent": 0,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 0
          },
          "Coa LV Fronters": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Interest Media": {
          "IM Affiliate HW": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Mortgage Moneyline": {
          "Accelerated Home Loans": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Lands End": {
          "Customer Service": {
            "total": 26,
            "agent": 26,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Park West": {
          "Tier 1": {
            "total": 85,
            "agent": 76,
            "qa": 5,
            "supervisor": 0,
            "team_leader": 4
          }
        },
        "Call Core Media": {
          "CCM Superpowered Media MVA": {
            "total": 24,
            "agent": 24,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "CCM MVA LV": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Verias": {
          "Verias AFD": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Verias FE": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Newsmax": {
          "Newsmax": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Skybridge Media": {
          "Skybridge Debt": {
            "total": 10,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AAA Minneapolis Insurance Agency": {
          "Minneapolis Health Insurance": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Renegade Marketing": {
          "Summit Funding": {
            "total": 19,
            "agent": 19,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "SF Home Equity": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Project Belle": {
          "Bell Cares": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ifficient": {
          "Ifficient ADP": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Ifficient FE": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "PPG": {
          "PPG FE": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Flat Iron Media": {
          "Alleviate Tax OB": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Affiliate Debt": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "What if Media Affiliate Debt Program": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Digital Media Solutions": {
          "DMS EDU": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Madison Parker": {
          "Madison Parker Outbound": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Voyant Digital Media Group": {
          "Voyant Home Services": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Voyant Debt": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Launch Media Solutions": {
          "Launch Potato AFD": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "PriorityPlus Financial": {
          "PPF Customer Service": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Baidu": {
          "Lidar Annotation": {
            "total": 26,
            "agent": 26,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      }
    }
  },
  "LATAM": {
    "Belize": {
      "Belize City": {
        "Cruisebound": {
          "Customer Support Services": {
            "total": 6,
            "agent": 4,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Gatestone": {
          "GST Citizens MC": {
            "total": 38,
            "agent": 36,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "GST Citizens Pay": {
            "total": 28,
            "agent": 26,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "GST Citizens RLS": {
            "total": 62,
            "agent": 57,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 4
          },
          "GST Citizens CC": {
            "total": 32,
            "agent": 30,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "GST Kohls": {
            "total": 83,
            "agent": 74,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 8
          },
          "GST BMO Bank": {
            "total": 16,
            "agent": 15,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "GST Citizens QA": {
            "total": 9,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "GST Shaw": {
            "total": 9,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "GST Citizens Clickers": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "GST Citizens CAX": {
            "total": 13,
            "agent": 12,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "ROI": {
          "ROI HUNTER": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "CXPERTS": {
          "Hugo Boss": {
            "total": 14,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "CXPERTS CX": {
            "total": 6,
            "agent": 4,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "Hagger Clothing": {
            "total": 10,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Avis Budget Group": {
          "Car Customer Service": {
            "total": 30,
            "agent": 28,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "Truck Customer Service": {
            "total": 15,
            "agent": 13,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "Truck Reservations": {
            "total": 19,
            "agent": 18,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Zayo": {
          "ZAYO Dispatch": {
            "total": 15,
            "agent": 14,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "ZAYO Disconnect": {
            "total": 14,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Access and Badging": {
            "total": 15,
            "agent": 14,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Quantus": {
          "Quantus PPP": {
            "total": 11,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Falcon": {
          "Falcon INS": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Walker Advertising": {
          "MVA Personal Injury": {
            "total": 15,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Triten Law": {
          "Triten Law": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Lands End": {
          "Customer Service": {
            "total": 206,
            "agent": 197,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 9
          }
        },
        "TimeProofUSA": {
          "TP Customer Service": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Axxis Healthcare": {
          "North Scripts": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      },
      "San Ignacio": {
        "CXPERTS": {
          "CXPERTS CX": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Gatestone": {
          "GST Citizens A&CC": {
            "total": 32,
            "agent": 27,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 4
          },
          "GST GSB": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "GST Citizens Bank": {
            "total": 48,
            "agent": 44,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 3
          }
        },
        "California Clinic Management": {
          "Patient Access Coordination": {
            "total": 24,
            "agent": 23,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "United": {
          "United INS": {
            "total": 26,
            "agent": 24,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Falcon": {
          "Falcon INS": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Zippy Loans": {
          "Zippy Customer Service": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      },
      "Orange Walk": {
        "CXPERTS": {
          "CXPERTS CX": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "KGISL": {
          "KGISL TIB": {
            "total": 33,
            "agent": 30,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          },
          "KGISL CIT": {
            "total": 46,
            "agent": 40,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 3
          },
          "KGISL DAS": {
            "total": 9,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "AIP": {
          "AIP LS": {
            "total": 199,
            "agent": 182,
            "qa": 10,
            "supervisor": 1,
            "team_leader": 6
          }
        },
        "Lands End": {
          "Customer Service": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      }
    },
    "Colombia": {
      "Medellin": {
        "Ideal Living CS": {
          "IL Whiteglove": {
            "total": 104,
            "agent": 102,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "Customer Support Blended": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "TimeProofUSA": {
          "TP Customer Service": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Altice": {
          "Inbound Retention": {
            "total": 173,
            "agent": 158,
            "qa": 2,
            "supervisor": 13,
            "team_leader": 0
          },
          "Outbound Retention": {
            "total": 10,
            "agent": 9,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Mobile Care": {
            "total": 55,
            "agent": 52,
            "qa": 1,
            "supervisor": 2,
            "team_leader": 0
          },
          "Customer Care Support": {
            "total": 66,
            "agent": 62,
            "qa": 1,
            "supervisor": 3,
            "team_leader": 0
          }
        },
        "United Parks & Resorts": {
          "United Parks & Resorts": {
            "total": 21,
            "agent": 19,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Mpower": {
          "Mpower": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Puppyspot": {
          "Puppyspot": {
            "total": 19,
            "agent": 17,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "Puppyspot Sales": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Bear Down Brands": {
          "Customer Support Blended": {
            "total": 6,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Healthpointe": {
          "Main Queue": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Skybridge Media": {
          "Skybridge Debt": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      }
    },
    "El Salvador": {
      "San Salvador": {
        "Clearone Advantage": {
          "Clearone Advantage": {
            "total": 9,
            "agent": 7,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Honorlock": {
          "Proctoring": {
            "total": 62,
            "agent": 59,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 1
          },
          "Customer Support": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "United Parks & Resorts": {
          "United Parks & Resorts": {
            "total": 156,
            "agent": 144,
            "qa": 4,
            "supervisor": 1,
            "team_leader": 7
          },
          "Global Reward Solutions": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "DS 123 Openers": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "United Parks & Resorts BI": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Cloudflare": {
          "IL Better Bladder Inbound": {
            "total": 14,
            "agent": 14,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Purity Catalog": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Purity Free Bottle": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Newsmax": {
          "IL Better Bladder Inbound": {
            "total": 14,
            "agent": 14,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Purity Catalog": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Purity Free Bottle": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ideal Living IB Sales": {
          "IL Better Bladder Inbound": {
            "total": 33,
            "agent": 31,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "IL Superthotics Inbound": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "IL Paint Zoom Inbound": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "IL Prosvent Inbound": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "IL Prosvent SF Overflow": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "IL Rotorazer Inbound": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "IL Walkfit Platinum Inbound": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "IL Profemin": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Purity Catalog": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Purity Free Bottle": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Pilgrim": {
          "IL Better Bladder Inbound": {
            "total": 15,
            "agent": 15,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Purity Catalog": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Purity Free Bottle": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Wright Flood": {
          "IL Better Bladder Inbound": {
            "total": 15,
            "agent": 15,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Purity Catalog": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Purity Free Bottle": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AT&T": {
          "SSE": {
            "total": 22,
            "agent": 21,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Wireless Loyalty": {
            "total": 85,
            "agent": 80,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 3
          },
          "BMTS": {
            "total": 266,
            "agent": 248,
            "qa": 8,
            "supervisor": 1,
            "team_leader": 9
          },
          "Wireline Loyalty": {
            "total": 14,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Firstnet Loyalty": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Carlton One Engagement": {
          "Global Reward Solutions": {
            "total": 13,
            "agent": 10,
            "qa": 1,
            "supervisor": 1,
            "team_leader": 1
          },
          "DS 123 Openers": {
            "total": 2,
            "agent": 0,
            "qa": 1,
            "supervisor": 1,
            "team_leader": 0
          },
          "Credit Advisors": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Customer Service": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "United Parks & Resorts": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "DMEC Capital Services": {
          "Global Reward Solutions": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "DS 123 Openers": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Credit Advisors": {
            "total": 7,
            "agent": 6,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Customer Service": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Park West": {
          "Global Reward Solutions": {
            "total": 2,
            "agent": 0,
            "qa": 1,
            "supervisor": 1,
            "team_leader": 0
          },
          "DS 123 Openers": {
            "total": 7,
            "agent": 4,
            "qa": 1,
            "supervisor": 1,
            "team_leader": 1
          },
          "Credit Advisors": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Customer Service": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "United Parks & Resorts": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Azazie": {
          "Azazie": {
            "total": 7,
            "agent": 5,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Purity": {
          "IL Better Bladder Inbound": {
            "total": 12,
            "agent": 12,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Purity Catalog": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Purity Free Bottle": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Purity Omind": {
            "total": 2,
            "agent": 0,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ideal Living CS": {
          "IL Whiteglove": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Avis Budget Group": {
          "Car Customer Service": {
            "total": 30,
            "agent": 26,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 2
          },
          "Truck Reservations": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Truck Customer Service": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Cogeco": {
          "Voice General Customer Care": {
            "total": 107,
            "agent": 103,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 3
          }
        },
        "Chariot Energy": {
          "Voice CS": {
            "total": 6,
            "agent": 4,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "PSA": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "California Clinic Management": {
          "Patient Access Coordination": {
            "total": 91,
            "agent": 85,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 4
          }
        },
        "Scan Group": {
          "Scan Members": {
            "total": 90,
            "agent": 79,
            "qa": 5,
            "supervisor": 0,
            "team_leader": 6
          },
          "Continuity of Care": {
            "total": 19,
            "agent": 17,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "Care Coordinator": {
            "total": 39,
            "agent": 37,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Travelpro": {
          "Travelpro": {
            "total": 36,
            "agent": 34,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Frontier": {
          "Frontier": {
            "total": 15,
            "agent": 13,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "MVA Personal Injury": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Walker Advertising": {
          "Frontier": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "MVA Personal Injury": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ameriflex": {
          "Voice CS": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "PSA": {
            "total": 12,
            "agent": 10,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Magnilife": {
          "Magnilife": {
            "total": 6,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Stratus": {
          "Tech Monitoring": {
            "total": 27,
            "agent": 25,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "EEG Reporting Clerk": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Sales Support": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "PointCare": {
          "Customer Service": {
            "total": 15,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "MobileX Global": {
          "MobileX Global": {
            "total": 9,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Altice": {
          "Inbound Retention": {
            "total": 446,
            "agent": 406,
            "qa": 9,
            "supervisor": 28,
            "team_leader": 3
          },
          "Sales Enablement": {
            "total": 22,
            "agent": 19,
            "qa": 1,
            "supervisor": 2,
            "team_leader": 0
          },
          "Outbound Retention": {
            "total": 37,
            "agent": 33,
            "qa": 2,
            "supervisor": 2,
            "team_leader": 0
          },
          "Customer Care Support": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "DNE Resources": {
          "DNE Customer Service": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Greater Philadelphia": {
          "Customer Service": {
            "total": 11,
            "agent": 10,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "All Client": {
          "All Process": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Total Womens Health": {
          "Total Womens Health": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Transform Credit": {
          "Customer Service": {
            "total": 16,
            "agent": 15,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Greenbits": {
          "Billing Support": {
            "total": 9,
            "agent": 8,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "SJ Health": {
          "SJ Claims": {
            "total": 10,
            "agent": 9,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "SJ POV": {
            "total": 11,
            "agent": 10,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "OrthoFi": {
          "OrthoFi Claims": {
            "total": 3,
            "agent": 0,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Medical Group": {
          "Medical Inbound": {
            "total": 24,
            "agent": 21,
            "qa": 2,
            "supervisor": 1,
            "team_leader": 0
          },
          "Medical Claims": {
            "total": 11,
            "agent": 10,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Healthpointe": {
          "Main Queue": {
            "total": 62,
            "agent": 57,
            "qa": 1,
            "supervisor": 4,
            "team_leader": 0
          },
          "Workers Comp": {
            "total": 16,
            "agent": 14,
            "qa": 1,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Covered Credit": {
          "Provider Support": {
            "total": 2,
            "agent": 1,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "American Water": {
          "Oncourse Home Solutions": {
            "total": 95,
            "agent": 90,
            "qa": 1,
            "supervisor": 4,
            "team_leader": 0
          }
        },
        "All Care Therapies": {
          "Speech Therapies": {
            "total": 23,
            "agent": 22,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Phisycal Therapies": {
            "total": 8,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Proctor Financial": {
          "Loss Draft": {
            "total": 18,
            "agent": 16,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "Insurance": {
            "total": 14,
            "agent": 13,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Mortgage": {
            "total": 17,
            "agent": 16,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Limelife By Alcone": {
          "Customer Service": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Family Care Health Centers": {
          "Customer Service": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Family Care Health Centers": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Magnus Health": {
          "Customer Service": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "Magnus Health": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Order Port": {
          "Technical Support": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Shiner Law Group": {
          "Shiner Law Group": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Sensio": {
          "Sensio": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Alleviate": {
          "Alleviate Tax RSS": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      }
    },
    "Jamaica": {
      "Kingston": {
        "Telaid": {
          "Telaid": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "AT&T": {
          "Collections": {
            "total": 68,
            "agent": 61,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 4
          },
          "BDR": {
            "total": 9,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Proctor Financial": {
          "Mortgage": {
            "total": 57,
            "agent": 52,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 4
          }
        },
        "Associated Materials": {
          "Associated Materials": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Kansas Counselors": {
          "KCI Counselors": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "CCA": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Achieve Collection": {
          "Achieve Collection": {
            "total": 54,
            "agent": 50,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 4
          }
        },
        "Union Pacific": {
          "Union Pacific": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "B2B Collection": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Achieve CS": {
          "Achieve CS": {
            "total": 19,
            "agent": 18,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "TimeProofUSA": {
          "TP Customer Service": {
            "total": 31,
            "agent": 30,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "TP QA and Verification": {
            "total": 6,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "TP SMS Service": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Happy Money": {
          "Customer Service": {
            "total": 18,
            "agent": 17,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Hoveround": {
          "Hoveround IB": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Transform Credit": {
          "Customer Service": {
            "total": 27,
            "agent": 26,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Americor Funding": {
          "Americor Collections": {
            "total": 10,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Americor CS": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Blue Frog Loan": {
          "Loan origination": {
            "total": 12,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Collections": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Belmont": {
          "Belmont": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      }
    }
  },
  "Unknown": {
    "Unknown": {
      "Davao": {
        "WCO Group": {
          "WCO Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Now Finance Group": {
          "Now Finance Group": {
            "total": 16,
            "agent": 14,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "WealthCo Advisory": {
          "WealthCo Advisory": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Prosper Advisory": {
          "Prosper Advisory": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Bentleys": {
          "Bentleys": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ruppert Legal": {
          "Ruppert Legal": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Amber Business Support": {
          "Amber Business Support": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Riverina Fire Solutions": {
          "Riverina Fire Solutions": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "EstimateOne": {
          "EstimateOne": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "The Wealth Doctor": {
          "The Wealth Doctor": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Pronto Capital": {
          "Pronto Capital": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Fornaro Accountants": {
          "Fornaro Accountants": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Stuart Grieve Consulting": {
          "Stuart Grieve Consulting": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ipiphany AI": {
          "Ipiphany AI": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Birdwood Energy": {
          "Birdwood Energy": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Global": {
          "All Process": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "CompleteFinance Management": {
          "CompleteFinance Management": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Thriving Wealth": {
          "Thriving Wealth": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ally Wealth Management": {
          "Ally Wealth Management": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Forward Path Advisory": {
          "Forward Path Advisory": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Two Broker Girls": {
          "Two Broker Girls": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Hunter Technical": {
          "Hunter Technical": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Sedley Koschel Wealth": {
          "Sedley Koschel Wealth": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "My Wealth Mentor": {
          "My Wealth Mentor": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ozgroup Finance": {
          "Ozgroup Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Priority1 Wealth": {
          "Priority1 Wealth": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Wollemi Wealth Management": {
          "Wollemi Wealth Management": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Norwest Orthodontics": {
          "Norwest Orthodontics": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "National Pacific Finance": {
          "National Pacific Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Lateral Event Management": {
          "Lateral Event Management": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "BK Financial": {
          "BK Financial": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Highview Finance": {
          "Highview Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Strategic Brokers": {
          "Strategic Brokers": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Westbridge Asset Management": {
          "Westbridge Asset Management": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "BTB Money": {
          "BTB Money": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "VAP FP Academy": {
          "VAP FP Academy": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "KMBA Accounting": {
          "KMBA Accounting": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "SHB Business and Wealth Advisers": {
          "SHB Business and Wealth Advisers": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "TD Shopfitting": {
          "TD Shopfitting": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Spot Therapy Hub": {
          "Spot Therapy Hub": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ocean Edge Finance": {
          "Ocean Edge Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ozland Group Services": {
          "Ozland Group Services": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Sherwood Construction Solutions": {
          "Sherwood Construction Solutions": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Foundation Wealth Planners": {
          "Foundation Wealth Planners": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Money Road": {
          "Money Road": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Compound Private Wealth": {
          "Compound Private Wealth": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "JLC Financial Planning": {
          "JLC Financial Planning": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Wealth Logic": {
          "Wealth Logic": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Tribe Financial": {
          "Tribe Financial": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Austral Credit House": {
          "Austral Credit House": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Novalend": {
          "Novalend": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "New Level Lending": {
          "New Level Lending": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Innovatus Media": {
          "Innovatus Media": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Level Up CA": {
          "Level Up CA": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "OASIS NextGen Consulting": {
          "OASIS NextGen Consulting": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "CPS NSW": {
          "CPS NSW": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Aequitas Investment Partners": {
          "Aequitas Investment Partners": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Steel City Financial Planners": {
          "Steel City Financial Planners": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Vida Wealth": {
          "Vida Wealth": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "STRUD Finance": {
          "STRUD Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Sheffield Financial Group": {
          "Sheffield Financial Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Hye Tech Computer Solutions": {
          "Hye Tech Computer Solutions": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Pathwise Wealth": {
          "Pathwise Wealth": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Border Finance": {
          "Border Finance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Financial Edge Group": {
          "Financial Edge Group": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Force Finance South West": {
          "Force Finance South West": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "HYROX World": {
          "HYROX World": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Edgesmith": {
          "Edgesmith": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      }
    }
  }
}
```
