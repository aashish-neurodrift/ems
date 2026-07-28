# Org Tree — Geography → Country → Location → Client → Process

## User Requirement (Categories)

| Category | Rule | Count |
|---|---|---|
| agent | org_role=Production Specialist + dept=Operations | 12,661 |
| qa | dept=Quality Assurance + org_role=Quality Analyst | 267 |
| supervisor | org_role=Supervisor | 272 |
| team_leader | org_role=Team leader | 635 |

Total classified: 13,835 (source: [user_requirements.json](user_requirements.json))

Tree built from these 13,835 users. Geography and Country are derived from the raw `office_name` (city) field — MWP's payload does not return Geo/Country directly; see [USER_MANAGEMENT.md](USER_MANAGEMENT.md) for the caveat. `Process` is always the leaf node — leaves hold category counts (total/agent/qa/supervisor/team_leader), not individual user records.

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
            "total": 61,
            "agent": 58,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          }
        },
        "AIFI": {
          "FLS T2": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "FLS T1": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AIFI,AIFI": {
          "FLS T1,FLS T2": {
            "total": 1,
            "agent": 0,
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
            "total": 14,
            "agent": 14,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "BO CDO": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ariston": {
          "Ariston": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Altares": {
          "Altares Siret": {
            "total": 16,
            "agent": 14,
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
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
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
        "Argel": {
          "Argel": {
            "total": 46,
            "agent": 44,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Cardata": {
          "Cardata": {
            "total": 3,
            "agent": 3,
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
        "ABB E-Mobility": {
          "ABB E-Mobility": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Travelpro": {
          "Travelpro": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Azazie": {
          "Azazie": {
            "total": 9,
            "agent": 8,
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
          }
        },
        "CATI,CATI,CATI,Toyota,Toyota,Toyota,Ariston,Ariston,Ariston": {
          "CATI,Toyota,Ariston,CATI,Toyota,Ariston,CATI,Toyota,Ariston": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Chateau Deau,Chateau Deau": {
          "BO CDO,CDO Reception": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Travelpro,Travelpro,ABB E-Mobility,ABB E-Mobility": {
          "Travelpro,ABB E-Mobility,Travelpro,ABB E-Mobility": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      }
    },
    "Kosovo": {
      "Prishtine": {
        "Alleviate": {
          "Alleviate": {
            "total": 18,
            "agent": 15,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          },
          "Alleviate Tax RSS": {
            "total": 12,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Smile 2 Impress": {
          "Italian": {
            "total": 17,
            "agent": 17,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Spanish": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "UK English": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Germany": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "The Credit Pros": {
          "The Credit Pros Sales": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Smile 2 Impress,Smile 2 Impress,Smile 2 Impress,Alleviate,Alleviate,Alleviate": {
          "French,Alleviate,Alleviate Tax RSS,French,Alleviate,Alleviate Tax RSS": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Smile 2 Impress,Smile 2 Impress,Smile 2 Impress": {
          "US English,Spanish,Italian": {
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
          "CTL Engage": {
            "total": 1,
            "agent": 1,
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
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Data Tams": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Premier Device Unlock": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "DSL Migration": {
            "total": 96,
            "agent": 92,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 4
          },
          "Connect Community": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Premier Order Processing": {
            "total": 7,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Premier Web Order Issue": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Premier Business Center": {
            "total": 16,
            "agent": 16,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "AIA-B": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Scan Group": {
          "Scan Members": {
            "total": 22,
            "agent": 21,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "NRG": {
          "NRG Stream": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "NRG NorthEast IB": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "NRG NorthEast OB": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "NRG,NRG": {
          "NRG NorthEast IB,NRG NorthEast OB": {
            "total": 7,
            "agent": 7,
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
        "Global": {
          "Shared Services International": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "AT&T,AT&T,AT&T": {
          "Premier Order Processing,Premier Web Order Issue,Premier Device Unlock": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Wireline Complex,Data Tams,AIA-B": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "NRG,NRG,NRG": {
          "NRG Stream,NRG NorthEast IB,NRG NorthEast OB": {
            "total": 2,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "AT&T,AT&T": {
          "Premier Business Center,Premier Business Direct": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      },
      "Boca": {
        "AT&T": {
          "Firstnet Loyalty": {
            "total": 15,
            "agent": 14,
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
          "Fnt": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Collections": {
            "total": 14,
            "agent": 14,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Firstnet": {
            "total": 107,
            "agent": 101,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 6
          },
          "FN Tech": {
            "total": 22,
            "agent": 20,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "All Process": {
            "total": 3,
            "agent": 1,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 0
          },
          "BMTS": {
            "total": 28,
            "agent": 26,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Scan Group": {
          "Scan Members": {
            "total": 15,
            "agent": 15,
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
            "total": 7,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Unassigned": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Color.com": {
          "Appointment Scheduling": {
            "total": 7,
            "agent": 6,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AT&T": {
          "Firstnet Loyalty": {
            "total": 55,
            "agent": 53,
            "qa": 0,
            "supervisor": 2,
            "team_leader": 0
          },
          "Firstnet": {
            "total": 45,
            "agent": 42,
            "qa": 0,
            "supervisor": 2,
            "team_leader": 1
          },
          "All Process": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Touchfuse": {
          "Touchfuse": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Scan Group": {
          "Scan Members": {
            "total": 53,
            "agent": 50,
            "qa": 0,
            "supervisor": 3,
            "team_leader": 0
          },
          "The Broker Support Services": {
            "total": 25,
            "agent": 24,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "PCM": {
          "PCM Impairments": {
            "total": 9,
            "agent": 8,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Blains,Blains,Touchfuse,Touchfuse": {
          "Blains,Touchfuse,Blains,Touchfuse": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
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
        "ACM,ACM,Sensio,Sensio": {
          "ACM,Sensio,ACM,Sensio": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "ACM": {
          "ACM": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Sensio,Cinemark": {
          "Sensio,Sensio": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Sensio": {
          "Sensio": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "App Direct": {
          "App Direct": {
            "total": 12,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Sensio,Sensio,Cinemark,Cinemark": {
          "Sensio,Cinemark,Sensio,Cinemark": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "ACM,ACM,Sensio,Sensio,Cinemark,Cinemark,Wright Flood,Wright Flood": {
          "ACM,Sensio,ACM,Sensio,ACM,Sensio,ACM,Sensio": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "ACM,ACM,ACM,ACM,Sensio,Sensio,Sensio,Sensio,EZ Shield,EZ Shield,EZ Shield,EZ Shield,Wright Flood,Wright Flood,Wright Flood,Wright Flood": {
          "ACM,Sensio,EZ Shield,Wright Flood,ACM,Sensio,EZ Shield,Wright Flood,ACM,Sensio,EZ Shield,Wright Flood,ACM,Sensio,EZ Shield,Wright Flood": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "App Direct,App Direct,Sensio,Sensio": {
          "App Direct,Sensio,App Direct,Sensio": {
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
            "total": 8,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO Seller Support": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Lumen": {
          "L3 LNP": {
            "total": 20,
            "agent": 18,
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
          "L3 Port Outs": {
            "total": 15,
            "agent": 14,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "L3 Projects": {
            "total": 18,
            "agent": 18,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "ASR Internet BB": {
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
          "L3 BSP": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "TPI - TW Port In": {
            "total": 2,
            "agent": 2,
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
          }
        },
        "AT&T": {
          "ANR Disconnect": {
            "total": 45,
            "agent": 42,
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
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Peerless Network": {
          "Peerless LNP": {
            "total": 9,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Agilitas Sports": {
          "Agilitas Customer Support": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Traya": {
          "Traya OB Training": {
            "total": 65,
            "agent": 65,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Traya OB": {
            "total": 3,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Windstream,Windstream,Lumen,Lumen": {
          "L3 Projects,LNP,L3 Projects,LNP": {
            "total": 1,
            "agent": 0,
            "qa": 1,
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
        }
      },
      "Chandigarh": {
        "SBI Cards": {
          "FI & RCU North": {
            "total": 11,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "FI & RCU Blended": {
          "FI & RCU North": {
            "total": 224,
            "agent": 209,
            "qa": 0,
            "supervisor": 2,
            "team_leader": 13
          }
        },
        "BANK OF BARODA": {
          "BOB Collection": {
            "total": 147,
            "agent": 138,
            "qa": 3,
            "supervisor": 1,
            "team_leader": 5
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
        "MVVNL": {
          "MVVNL": {
            "total": 67,
            "agent": 0,
            "qa": 0,
            "supervisor": 62,
            "team_leader": 5
          }
        },
        "JBVNL": {
          "JBVNL": {
            "total": 13,
            "agent": 0,
            "qa": 0,
            "supervisor": 13,
            "team_leader": 0
          }
        },
        "PSPCL": {
          "PSPCL": {
            "total": 41,
            "agent": 0,
            "qa": 0,
            "supervisor": 41,
            "team_leader": 0
          }
        },
        "WBSEDCL": {
          "WBSEDCL": {
            "total": 11,
            "agent": 0,
            "qa": 0,
            "supervisor": 9,
            "team_leader": 2
          }
        },
        "CPDL": {
          "CPDL": {
            "total": 2,
            "agent": 0,
            "qa": 0,
            "supervisor": 2,
            "team_leader": 0
          }
        },
        "UPCL": {
          "UPCL": {
            "total": 6,
            "agent": 0,
            "qa": 0,
            "supervisor": 6,
            "team_leader": 0
          }
        },
        "Global": {
          "Shared Services International": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "India Domestic": {
          "Shared Services Domestic": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      },
      "Siliguri": {
        "AJIO": {
          "AJIO C & R": {
            "total": 120,
            "agent": 114,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 5
          },
          "AJIO Dropship": {
            "total": 33,
            "agent": 33,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO Social Media": {
            "total": 14,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "AJIO Commercial": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "AJIO Email": {
            "total": 86,
            "agent": 81,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 3
          },
          "AJIO IB": {
            "total": 82,
            "agent": 66,
            "qa": 11,
            "supervisor": 0,
            "team_leader": 5
          },
          "AJIO Review Moderator": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO Repeat Desk": {
            "total": 12,
            "agent": 12,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO IB GIG": {
            "total": 53,
            "agent": 53,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO Chat": {
            "total": 14,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "JioMart": {
          "Jiomart Voice": {
            "total": 71,
            "agent": 69,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Tira": {
          "Tira Customer Support": {
            "total": 121,
            "agent": 119,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Shein": {
          "Shein Email": {
            "total": 11,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Shein IB": {
            "total": 18,
            "agent": 17,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Shein Chat": {
            "total": 9,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Traya": {
          "Traya OB Training": {
            "total": 254,
            "agent": 254,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Traya OB": {
            "total": 100,
            "agent": 86,
            "qa": 6,
            "supervisor": 0,
            "team_leader": 8
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
        "AJIO,AJIO": {
          "AJIO C & R,AJIO Repeat Desk": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Meesho": {
          "Meesho IB": {
            "total": 2,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "AJIO,AJIO,Shein,Shein": {
          "AJIO Dropship,SHEIN C & R,AJIO Dropship,SHEIN C & R": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        }
      },
      "Noida": {
        "Tata": {
          "Tata Audit": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "TTL Collection": {
            "total": 22,
            "agent": 20,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        }
      },
      "Kolkata": {
        "FI & RCU Blended": {
          "FI & RCU East": {
            "total": 461,
            "agent": 458,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          }
        },
        "Meesho": {
          "Meesho Supplier Procurement": {
            "total": 28,
            "agent": 26,
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
          "Supplier Procurement": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "OYO": {
          "OYO UK": {
            "total": 9,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "OYO US": {
            "total": 28,
            "agent": 27,
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
          }
        },
        "JioMart": {
          "Jiomart Chat": {
            "total": 89,
            "agent": 87,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "Jiomart Social Media": {
            "total": 11,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Jiomart CRV": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Jiomart Voice": {
            "total": 26,
            "agent": 21,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 2
          },
          "JioMart RPQC": {
            "total": 13,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
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
            "total": 116,
            "agent": 109,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 5
          },
          "Tier 2 Backend Support": {
            "total": 51,
            "agent": 48,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Quest Analytics": {
          "Quest Outbound": {
            "total": 37,
            "agent": 36,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Avride": {
          "Bot Operators": {
            "total": 69,
            "agent": 67,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Arvind Lifestyle": {
          "Arvind Lifestyle": {
            "total": 16,
            "agent": 15,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "BANK OF BARODA": {
          "BOB Collection": {
            "total": 64,
            "agent": 61,
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
        "AJIO": {
          "AJIO IB": {
            "total": 11,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO IB GIG": {
            "total": 9,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Vikram Solar": {
          "VS OB Sales": {
            "total": 6,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Honorlock": {
          "Proctoring": {
            "total": 55,
            "agent": 55,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Customer Support": {
            "total": 8,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Image Reviewer": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "SBI Cards": {
          "FI & RCU East": {
            "total": 27,
            "agent": 22,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 5
          }
        },
        "HDFC Bank": {
          "FI & RCU East": {
            "total": 10,
            "agent": 10,
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
        "Aditya Birla Finance": {
          "FI & RCU East": {
            "total": 1,
            "agent": 1,
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
        "Baseline Llc": {
          "Baseline HW LV PH": {
            "total": 1,
            "agent": 0,
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
            "total": 24,
            "agent": 0,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 21
          },
          "All Process": {
            "total": 9,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 9
          }
        },
        "Honorlock,Honorlock,Honorlock": {
          "Image Reviewer,Proctoring,Customer Support": {
            "total": 5,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 4
          }
        },
        "India Domestic": {
          "Shared Services Domestic": {
            "total": 5,
            "agent": 0,
            "qa": 0,
            "supervisor": 2,
            "team_leader": 3
          }
        },
        "Meesho,Meesho,JioMart,JioMart": {
          "Meesho Supplier Procurement,Jiomart Chat,Meesho Supplier Procurement,Jiomart Chat": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Achieve Collection,Achieve Collection,Achieve Collection,Achieve Collection,Achieve CS,Achieve CS,Achieve CS,Achieve CS,Americor Funding,Americor Funding,Americor Funding,Americor Funding": {
          "Achieve Collection,Achieve CS,Americor Collections,Americor CS,Achieve Collection,Achieve CS,Americor Collections,Americor CS,Achieve Collection,Achieve CS,Americor Collections,Americor CS": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "OYO,OYO": {
          "OYO US,OYO UK": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      },
      "Durgapur": {
        "Meesho": {
          "Meesho Seller Support": {
            "total": 95,
            "agent": 88,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 6
          },
          "Meesho Seller Support QC": {
            "total": 158,
            "agent": 152,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 4
          },
          "Meesho Email": {
            "total": 80,
            "agent": 77,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          },
          "Meesho Supplier Procurement": {
            "total": 4,
            "agent": 3,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Meesho Chat": {
            "total": 93,
            "agent": 88,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 3
          },
          "Meesho Farmiso": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Meesho Fraud": {
            "total": 18,
            "agent": 18,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Meesho IB PT": {
            "total": 53,
            "agent": 50,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          },
          "Meesho PT English": {
            "total": 24,
            "agent": 24,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Meesho IB English": {
            "total": 20,
            "agent": 20,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Meesho IB": {
            "total": 24,
            "agent": 24,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AJIO": {
          "AJIO C & R": {
            "total": 48,
            "agent": 45,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          },
          "AJIO Chat": {
            "total": 291,
            "agent": 280,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 10
          },
          "AJIO Repeat Desk": {
            "total": 7,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "AJIO Luxe": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO IB": {
            "total": 91,
            "agent": 84,
            "qa": 5,
            "supervisor": 0,
            "team_leader": 2
          },
          "AJIO Email": {
            "total": 1,
            "agent": 0,
            "qa": 1,
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
          }
        },
        "AJIO,AJIO": {
          "AJIO Chat,AJIO C & R": {
            "total": 2,
            "agent": 0,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO Chat,AJIO Luxe": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "AJIO IB,AJIO Premium": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AJIO,AJIO,Shein,Shein": {
          "AJIO IB,Shein IB,AJIO IB,Shein IB": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "JioMart": {
          "Jiomart Voice": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Meesho,Meesho": {
          "Meesho Email,Meesho Fraud": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
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
            "total": 13,
            "agent": 13,
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
            "total": 3,
            "agent": 3,
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
            "total": 18,
            "agent": 17,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Apple": {
          "Apple": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AIFI": {
          "DAT": {
            "total": 61,
            "agent": 57,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 4
          }
        },
        "Revolt Motors": {
          "Lead Generation": {
            "total": 22,
            "agent": 21,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Inbound CS": {
            "total": 7,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Lumen,Lumen,Apple,Apple": {
          "Apple,L3 LNP,Apple,L3 LNP": {
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
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          }
        },
        "India Domestic": {
          "Shared Services Domestic": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      },
      "Howrah": {
        "AIFI": {
          "DAT": {
            "total": 129,
            "agent": 121,
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
          }
        },
        "Meesho": {
          "Meesho Onboarding": {
            "total": 63,
            "agent": 61,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "Meesho Seller Support QC": {
            "total": 86,
            "agent": 81,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 3
          },
          "Meesho IB": {
            "total": 124,
            "agent": 117,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 6
          },
          "Meesho SS Blended": {
            "total": 94,
            "agent": 91,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          },
          "Meesho IB English": {
            "total": 13,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Meesho Supplier Procurement": {
            "total": 31,
            "agent": 30,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Meesho IB PT": {
            "total": 77,
            "agent": 76,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Pay Nearby": {
          "Pay Nearby OB": {
            "total": 70,
            "agent": 67,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          }
        },
        "Choice Home Warranty": {
          "CHW & FPHW Complete Home Services": {
            "total": 24,
            "agent": 23,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Alleviate": {
          "Alleviate Tax RSS": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Alleviate": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AJIO": {
          "AJIO IB GIG": {
            "total": 41,
            "agent": 40,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
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
        "India Domestic": {
          "Shared Services Domestic": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "OYO,OYO,OYO,OYO,AIFI,AIFI,AIFI,AIFI,Digital Media Solutions,Digital Media Solutions,Digital Media Solutions,Digital Media Solutions": {
          "OYO US,OYO UK,AIFI OB,DMS ACA,OYO US,OYO UK,AIFI OB,DMS ACA,OYO US,OYO UK,AIFI OB,DMS ACA": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Meesho,Meesho,Pay Nearby,Pay Nearby": {
          "Pay Nearby OB,Meesho SS Blended,Pay Nearby OB,Meesho SS Blended": {
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
            "total": 293,
            "agent": 271,
            "qa": 9,
            "supervisor": 0,
            "team_leader": 13
          },
          "Meesho IB English": {
            "total": 28,
            "agent": 28,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Meesho IB PT": {
            "total": 129,
            "agent": 127,
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
          }
        }
      },
      "Mumbai": {
        "One Assist": {
          "One Assist": {
            "total": 12,
            "agent": 9,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Traya": {
          "Traya Sales": {
            "total": 67,
            "agent": 64,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          },
          "Traya OB": {
            "total": 98,
            "agent": 89,
            "qa": 4,
            "supervisor": 0,
            "team_leader": 5
          },
          "Traya Chat": {
            "total": 18,
            "agent": 17,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Traya Sales Training": {
            "total": 104,
            "agent": 104,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Traya OB Training": {
            "total": 38,
            "agent": 38,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Traya Chat Training": {
            "total": 20,
            "agent": 20,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
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
            "total": 63,
            "agent": 58,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Park West": {
          "Tier 1": {
            "total": 52,
            "agent": 49,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          }
        },
        "Tata": {
          "TTL Collection": {
            "total": 23,
            "agent": 22,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Global": {
          "Shared Services International": {
            "total": 1,
            "agent": 0,
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
            "total": 4,
            "agent": 3,
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
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Virtuox": {
          "Virtuox Outbound & Faxing": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Patient Support": {
            "total": 43,
            "agent": 40,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          },
          "Order Review": {
            "total": 7,
            "agent": 6,
            "qa": 0,
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
          "Docusign Business Development": {
            "total": 3,
            "agent": 3,
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
          },
          "All Process": {
            "total": 3,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          }
        },
        "Unacast": {
          "Data operations support": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ship Your Car Now": {
          "Ship Your Car Now": {
            "total": 41,
            "agent": 39,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Park West": {
          "DS 123 Openers": {
            "total": 26,
            "agent": 16,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 8
          },
          "Tier 2": {
            "total": 66,
            "agent": 60,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 3
          },
          "Assessment Services": {
            "total": 19,
            "agent": 18,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Tier 1": {
            "total": 57,
            "agent": 48,
            "qa": 8,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Rugdoctor": {
          "Rug Doctor US": {
            "total": 19,
            "agent": 18,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
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
        "Stratus": {
          "Intake": {
            "total": 10,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Tech Monitoring": {
            "total": 37,
            "agent": 35,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "CSR": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Stratus Tech": {
            "total": 2,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Telaid": {
          "Telaid": {
            "total": 86,
            "agent": 81,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 4
          },
          "All Process": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "MBA": {
          "Merchants Benefit Administration": {
            "total": 14,
            "agent": 11,
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
          "Checkpoint TAC": {
            "total": 17,
            "agent": 16,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "All Process": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Checkpoint MS": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ameriflex": {
          "CRS": {
            "total": 7,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "PSA": {
            "total": 9,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Leonardo Hotels": {
          "Reservation": {
            "total": 91,
            "agent": 81,
            "qa": 5,
            "supervisor": 0,
            "team_leader": 5
          }
        },
        "Mpower": {
          "Mpower NY": {
            "total": 21,
            "agent": 20,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Mpower": {
            "total": 10,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Stripe": {
          "Stripe BD": {
            "total": 7,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Puppyspot": {
          "Puppyspot": {
            "total": 10,
            "agent": 9,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "VIIZ": {
          "VIIZ": {
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
        "Healthcare HR": {
          "MOA": {
            "total": 9,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "SkyBitz": {
          "Tank Monitoring & Trailer Tracking Helpdesk": {
            "total": 20,
            "agent": 19,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Alpha Electric And Gas": {
          "All Process": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Sentient Jet": {
          "Sentient Jet": {
            "total": 22,
            "agent": 21,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Flight Management": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
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
        "Ameriflex,Ameriflex": {
          "PSA,CRS": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Telaid,Telaid": {
          "Telaid,Project Coordinator": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Checkpoint,Checkpoint": {
          "Checkpoint MS,Checkpoint PC": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Stratus,Stratus": {
          "Stratus Tech,Tech Monitoring": {
            "total": 3,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Intake,CSR": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Honorlock": {
          "Customer Support": {
            "total": 23,
            "agent": 22,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Proctoring": {
            "total": 25,
            "agent": 24,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
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
        "Cruisebound": {
          "Back Office": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Awareness Technologies,Awareness Technologies,Ship Your Car Now,Ship Your Car Now": {
          "Awareness Technology,Ship Your Car Now,Awareness Technology,Ship Your Car Now": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Telaid,Telaid,Telaid,SkyBitz,SkyBitz,SkyBitz": {
          "Telaid,Tank Monitoring & Trailer Tracking Helpdesk,Petroleum Logistics,Telaid,Tank Monitoring & Trailer Tracking Helpdesk,Petroleum Logistics": {
            "total": 1,
            "agent": 0,
            "qa": 1,
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
        "Rugdoctor,Rugdoctor,Stratus,Stratus": {
          "Rug Doctor US,Stratus Tech,Rug Doctor US,Stratus Tech": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Stratus,Stratus,Stratus,Sentient Jet,Sentient Jet,Sentient Jet": {
          "Stratus Tech,Sentient Jet,Tech Monitoring,Stratus Tech,Sentient Jet,Tech Monitoring": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Virtuox,Virtuox,Virtuox": {
          "Virtuox Outbound & Faxing,Patient Support,Order Review": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Park West,Park West": {
          "Tier 1,Tier 2": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Honorlock,Honorlock,Honorlock,Honorlock": {
          "Image Reviewer,Proctoring,QA Engineering,Customer Support": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Global": {
          "Shared Services International": {
            "total": 2,
            "agent": 0,
            "qa": 0,
            "supervisor": 2,
            "team_leader": 0
          }
        }
      },
      "Legazpi": {
        "Call Core Media": {
          "CCM MVA LV": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "CCM Superpowered Media MVA": {
            "total": 50,
            "agent": 48,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Spataro Media": {
          "Spataro Media ADP": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Admediary": {
          "Admediary Tort": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Admediary GOLD SSDI": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Digital Media Solutions": {
          "DMS EDU": {
            "total": 46,
            "agent": 44,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "DMS Edu Matching": {
            "total": 3,
            "agent": 3,
            "qa": 0,
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
          },
          "Clearone Advantage": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Insurance Express": {
          "Web Transfer Campaign": {
            "total": 17,
            "agent": 16,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "AIFI": {
          "DAT": {
            "total": 47,
            "agent": 44,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "What If Media": {
          "What If Media Auto Insurance": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
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
        "Park West": {
          "Tier 2": {
            "total": 31,
            "agent": 23,
            "qa": 5,
            "supervisor": 0,
            "team_leader": 3
          },
          "Tier 1": {
            "total": 62,
            "agent": 53,
            "qa": 6,
            "supervisor": 0,
            "team_leader": 3
          },
          "DS 123 Openers": {
            "total": 21,
            "agent": 19,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "A1 Diabetes": {
          "A1 Dts Reorder Campaign Q3 B 2025": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "VIIZ": {
          "VIIZ": {
            "total": 33,
            "agent": 31,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Temu": {
          "Content Moderation": {
            "total": 11,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 4
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
        "All Client": {
          "All Process": {
            "total": 3,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 2
          }
        },
        "Call Core Media,Call Core Media,Call Core Media,Call Core Media,What If Media,What If Media,What If Media,What If Media,Alleviate,Alleviate,Alleviate,Alleviate": {
          "CCM Superpowered Media MVA,What If Media CHW Live Voice,Alleviate,What If Media Auto Insurance,CCM Superpowered Media MVA,What If Media CHW Live Voice,Alleviate,What If Media Auto Insurance,CCM Superpowered Media MVA,What If Media CHW Live Voice,Alleviate,What If Media Auto Insurance": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "A1 Diabetes,A1 Diabetes,A1 Diabetes,A1 Diabetes,A1 Diabetes,A1 Diabetes,Admediary,Admediary,Admediary,Admediary,Admediary,Admediary,Choice Home Warranty,Choice Home Warranty,Choice Home Warranty,Choice Home Warranty,Choice Home Warranty,Choice Home Warranty,Alleviate,Alleviate,Alleviate,Alleviate,Alleviate,Alleviate": {
          "Admediary Mva,CHW & FPHW Complete Home Services,Alleviate,Admediary Tort,Admediary GOLD SSDI,A1 Dts Reorder Campaign Q3 B 2025,Admediary Mva,CHW & FPHW Complete Home Services,Alleviate,Admediary Tort,Admediary GOLD SSDI,A1 Dts Reorder Campaign Q3 B 2025,Admediary Mva,CHW & FPHW Complete Home Services,Alleviate,Admediary Tort,Admediary GOLD SSDI,A1 Dts Reorder Campaign Q3 B 2025,Admediary Mva,CHW & FPHW Complete Home Services,Alleviate,Admediary Tort,Admediary GOLD SSDI,A1 Dts Reorder Campaign Q3 B 2025": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Global": {
          "Shared Services International": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      },
      "Manila": {
        "VIIZ": {
          "VIIZ": {
            "total": 67,
            "agent": 61,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 4
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
            "total": 42,
            "agent": 39,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          },
          "The Broker Support Services": {
            "total": 15,
            "agent": 13,
            "qa": 1,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Avon": {
          "Avon": {
            "total": 13,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
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
            "total": 42,
            "agent": 40,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "Voice Sales": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Back End Process": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Back Office Collections": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Back Office Sales": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "K2 Claims Services": {
          "K2 Claims": {
            "total": 7,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Apple": {
          "Apple": {
            "total": 7,
            "agent": 6,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "MBA": {
          "Merchants Benefit Administration": {
            "total": 21,
            "agent": 19,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "AT&T": {
          "BME CHAT": {
            "total": 41,
            "agent": 38,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          },
          "SMB Concierge & Master Program": {
            "total": 15,
            "agent": 14,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Bmc": {
            "total": 271,
            "agent": 250,
            "qa": 4,
            "supervisor": 0,
            "team_leader": 17
          },
          "Wireline Complex": {
            "total": 13,
            "agent": 12,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Wireline Enterprise": {
            "total": 67,
            "agent": 63,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 4
          },
          "Mid Market Retention": {
            "total": 35,
            "agent": 32,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 2
          },
          "Mid Market Care": {
            "total": 13,
            "agent": 12,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Wireless Loyalty": {
            "total": 193,
            "agent": 186,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 5
          },
          "Connect Community": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "All Process": {
            "total": 16,
            "agent": 0,
            "qa": 13,
            "supervisor": 3,
            "team_leader": 0
          },
          "Indirect Back Office": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Coastline": {
          "Coastline OB": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "UNO Bank": {
          "UNO Digital Service": {
            "total": 37,
            "agent": 36,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "UNO L1 Support": {
            "total": 9,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "All Process": {
            "total": 4,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 3
          }
        },
        "Frontier": {
          "Frontier": {
            "total": 66,
            "agent": 59,
            "qa": 2,
            "supervisor": 5,
            "team_leader": 0
          }
        },
        "Park West": {
          "Tier 1": {
            "total": 58,
            "agent": 56,
            "qa": 0,
            "supervisor": 2,
            "team_leader": 0
          }
        },
        "Cogeco": {
          "Voice General Customer Care": {
            "total": 133,
            "agent": 126,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 6
          }
        },
        "Virtuox": {
          "Patient Support": {
            "total": 14,
            "agent": 13,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Ventus AI": {
          "Dental Insurance Verification": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Pinglend": {
          "All Process": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Pinglend": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "South Florida Medical Group": {
          "Unassigned": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "MobileX Global": {
          "MobileX Global": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "WCT": {
          "Patient Intake": {
            "total": 3,
            "agent": 3,
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
          "What If Media Auto Insurance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "What if Media MVA": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
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
        },
        "Azazie": {
          "Azazie": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "UNO Bank,UNO Bank": {
          "UNO Digital Service,UNO L1 Support": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Cogeco,Cogeco": {
          "Voice General Customer Care,Chat General Customer Care": {
            "total": 2,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "All Client": {
          "All Process": {
            "total": 3,
            "agent": 0,
            "qa": 0,
            "supervisor": 3,
            "team_leader": 0
          }
        },
        "Global": {
          "Shared Services International": {
            "total": 5,
            "agent": 0,
            "qa": 0,
            "supervisor": 4,
            "team_leader": 1
          },
          "All Process": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Chariot Energy,Chariot Energy,Chariot Energy,Chariot Energy,Chariot Energy,UNO Bank,UNO Bank,UNO Bank,UNO Bank,UNO Bank": {
          "Back Office Collections,UNO Digital Service,UNO L1 Support,Back Office Sales,Back End Process,Back Office Collections,UNO Digital Service,UNO L1 Support,Back Office Sales,Back End Process": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "K2 Claims Services,K2 Claims Services": {
          "Us Directory Assistance,K2 Claims": {
            "total": 1,
            "agent": 0,
            "qa": 0,
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
        "Chariot Energy,Chariot Energy,Chariot Energy": {
          "Back Office Collections,Voice Sales,Back Office Sales": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "VIIZ,VIIZ,VIIZ,Frontier,Frontier,Frontier,Azazie,Azazie,Azazie": {
          "VIIZ,Frontier,Azazie,VIIZ,Frontier,Azazie,VIIZ,Frontier,Azazie": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Virtuox,Stratus,MBA,Ameriflex,Scan Group": {
          "All Process,All Process,All Process,All Process,All Process": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      },
      "Silang": {
        "Clearone Advantage": {
          "Clearone Advantage": {
            "total": 149,
            "agent": 139,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 8
          },
          "Coa Sales Team": {
            "total": 3,
            "agent": 0,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "What If Media": {
          "What if Media MVA": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "What If Media Auto Insurance": {
            "total": 11,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "What if Media Affiliate Debt Program": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "What if Media Retirement Savings": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Growth Spark": {
          "Growth Spark MCA": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Xpress Business Loans": {
          "SB Xpress Business Loans": {
            "total": 19,
            "agent": 18,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
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
        "Azazie": {
          "Azazie": {
            "total": 30,
            "agent": 28,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 1
          }
        },
        "Newsmax": {
          "Newsmax": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Call Core Media": {
          "CCM Superpowered Media MVA": {
            "total": 42,
            "agent": 42,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Park West": {
          "Tier 1": {
            "total": 93,
            "agent": 84,
            "qa": 5,
            "supervisor": 0,
            "team_leader": 4
          }
        },
        "Insurance Express": {
          "Web Transfer Campaign": {
            "total": 37,
            "agent": 36,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Ece Financial": {
          "ECE Financial Debt": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Dial Xpress": {
          "Dial Xpress Auto": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "PriorityPlus Financial": {
          "PPF Customer Service": {
            "total": 6,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "CPX Interactive,Growth Spark": {
          "Growth Spark MCA,Growth Spark MCA": {
            "total": 1,
            "agent": 1,
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
        "Flat Iron Media": {
          "Affiliate Debt": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Accelerated Debt Relief": {
          "Accelerated Debt Relief LV": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Woods Holding": {
          "Woods Holding Insurance": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Consumer Debt Help Association": {
          "Consumer Retention": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Renegade Marketing": {
          "Summit Funding": {
            "total": 6,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "SF Home Equity": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Alleviate": {
          "Alleviate": {
            "total": 8,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Alleviate Tax RSS": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Interest Media": {
          "Interest Media ADP": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Digital Media Solutions": {
          "DMS EDU": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "PPG": {
          "PPG FE": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
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
        },
        "Launch Media Solutions": {
          "Launch Potato AFD": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "CPX Interactive": {
          "Allstate Consumer Auto Insurance": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Lands End": {
          "Customer Service": {
            "total": 22,
            "agent": 22,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "What If Media,What If Media,What If Media,Alleviate,Alleviate,Alleviate,Flat Iron Media,Flat Iron Media,Flat Iron Media": {
          "Alleviate,Affiliate Debt,What if Media Affiliate Debt Program,Alleviate,Affiliate Debt,What if Media Affiliate Debt Program,Alleviate,Affiliate Debt,What if Media Affiliate Debt Program": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Pointerleads": {
          "Pointerleads Roofing SB": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Alleviate,Alleviate,Xpress Business Loans,Xpress Business Loans": {
          "Alleviate,SB Xpress Business Loans,Alleviate,SB Xpress Business Loans": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "What If Media,What If Media,What If Media": {
          "What If Media Auto Insurance,What if Media MVA,What if Media Retirement Savings": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Insurance Express,Insurance Express,Auto Approve,Auto Approve": {
          "Web Transfer Campaign,Auto Approve,Web Transfer Campaign,Auto Approve": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Ece Financial,Ece Financial,Storm Impact Homes,Storm Impact Homes": {
          "ECE Financial Debt,Storm Impact Homes,ECE Financial Debt,Storm Impact Homes": {
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
  "LATAM": {
    "Belize": {
      "Belize City": {
        "Gatestone": {
          "GST Citizens RLS": {
            "total": 55,
            "agent": 48,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 5
          },
          "GST Citizens MC": {
            "total": 42,
            "agent": 39,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          },
          "GST Citizens QA": {
            "total": 9,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "GST Citizens Clickers": {
            "total": 5,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "GST Kohls": {
            "total": 87,
            "agent": 78,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 8
          },
          "GST Shaw": {
            "total": 9,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "GST Citizens CAX": {
            "total": 15,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "GST Citizens Pay": {
            "total": 33,
            "agent": 29,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 3
          },
          "GST Citizens CC": {
            "total": 30,
            "agent": 28,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "CXPERTS": {
          "Hugo Boss": {
            "total": 13,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          },
          "CXPERTS CX": {
            "total": 8,
            "agent": 6,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          },
          "Hagger Clothing": {
            "total": 11,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Zayo": {
          "ZAYO Dispatch": {
            "total": 14,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "ZAYO Disconnect": {
            "total": 7,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Access and Badging": {
            "total": 16,
            "agent": 15,
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
        "Avis Budget Group": {
          "Truck Customer Service": {
            "total": 69,
            "agent": 66,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          },
          "Car Customer Service Voice": {
            "total": 60,
            "agent": 57,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
          }
        },
        "ROI": {
          "ROI HUNTER": {
            "total": 21,
            "agent": 18,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
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
        "TimeProofUSA": {
          "TP Customer Service": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Lands End": {
          "Customer Service": {
            "total": 74,
            "agent": 71,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 3
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
        },
        "Cruisebound": {
          "Customer Support Services": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Walker Advertising": {
          "MVA Personal Injury": {
            "total": 22,
            "agent": 20,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Cruisebound,Cruisebound": {
          "Customer Support Services,Back Office": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Global": {
          "Shared Services International": {
            "total": 4,
            "agent": 0,
            "qa": 0,
            "supervisor": 4,
            "team_leader": 0
          }
        },
        "Avis Budget Group,Avis Budget Group,Avis Budget Group,Avis Budget Group": {
          "Reservation Voice Tier 1,Reservations Voice Tier 2,Truck Reservations,Truck Customer Service": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      },
      "Orange Walk": {
        "KGISL": {
          "KGISL TIB": {
            "total": 36,
            "agent": 31,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 3
          },
          "KGISL CIT": {
            "total": 47,
            "agent": 42,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 2
          },
          "KGISL DAS": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "AIP": {
          "AIP LS": {
            "total": 216,
            "agent": 202,
            "qa": 8,
            "supervisor": 0,
            "team_leader": 6
          }
        },
        "Lands End": {
          "Customer Service": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Global": {
          "Shared Services International": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        }
      },
      "San Ignacio": {
        "United": {
          "United INS": {
            "total": 29,
            "agent": 28,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
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
        "Gatestone": {
          "GST Citizens A&CC": {
            "total": 32,
            "agent": 27,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 4
          },
          "GST Citizens MC": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "GST Citizens Bank": {
            "total": 50,
            "agent": 47,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          },
          "GST GSB": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "California Clinic Management": {
          "Patient Access Coordination": {
            "total": 27,
            "agent": 26,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
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
        },
        "Global": {
          "Shared Services International": {
            "total": 3,
            "agent": 0,
            "qa": 0,
            "supervisor": 3,
            "team_leader": 0
          }
        }
      }
    },
    "Colombia": {
      "Medellin": {
        "Ideal Living CS": {
          "IL Whiteglove": {
            "total": 102,
            "agent": 101,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "United Parks & Resorts": {
          "United Parks & Resorts": {
            "total": 22,
            "agent": 21,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Altice": {
          "Inbound Retention": {
            "total": 209,
            "agent": 193,
            "qa": 2,
            "supervisor": 14,
            "team_leader": 0
          },
          "Outbound Retention": {
            "total": 15,
            "agent": 13,
            "qa": 0,
            "supervisor": 2,
            "team_leader": 0
          },
          "Mobile Care": {
            "total": 19,
            "agent": 17,
            "qa": 0,
            "supervisor": 2,
            "team_leader": 0
          },
          "Customer Care Support": {
            "total": 38,
            "agent": 36,
            "qa": 0,
            "supervisor": 2,
            "team_leader": 0
          },
          "Unassigned": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "All Process": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Puppyspot": {
          "Puppyspot": {
            "total": 19,
            "agent": 17,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Bear Down Brands": {
          "Customer Support Blended": {
            "total": 7,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Limelife By Alcone": {
          "Customer Service": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
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
        "TimeProofUSA": {
          "TP Customer Service": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
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
        "All Client": {
          "All Process": {
            "total": 2,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Cricut": {
          "Cricut": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      }
    },
    "El Salvador": {
      "San Salvador": {
        "Clearone Advantage": {
          "Clearone Advantage": {
            "total": 25,
            "agent": 23,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Honorlock": {
          "Proctoring": {
            "total": 53,
            "agent": 52,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Customer Support": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Cloudflare,Newsmax,Ideal Living IB Sales,Pilgrim,Wright Flood": {
          "IL Better Bladder Inbound,IL Better Bladder Inbound,IL Better Bladder Inbound,IL Better Bladder Inbound,IL Better Bladder Inbound": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "AT&T": {
          "SSE": {
            "total": 21,
            "agent": 20,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Wireless Loyalty": {
            "total": 64,
            "agent": 56,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 6
          },
          "Bmc": {
            "total": 161,
            "agent": 149,
            "qa": 4,
            "supervisor": 1,
            "team_leader": 7
          },
          "BMTS": {
            "total": 94,
            "agent": 85,
            "qa": 4,
            "supervisor": 0,
            "team_leader": 5
          },
          "Wireline Loyalty": {
            "total": 31,
            "agent": 31,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Firstnet Loyalty": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "ATT Credentialing": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Purity,Cloudflare,Newsmax,Ideal Living IB Sales,Pilgrim,Wright Flood": {
          "IL Better Bladder Inbound,IL Better Bladder Inbound,IL Better Bladder Inbound,IL Better Bladder Inbound,IL Better Bladder Inbound,IL Better Bladder Inbound": {
            "total": 12,
            "agent": 12,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ideal Living IB Sales": {
          "IL Better Bladder Inbound": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "IL Walkfit Platinum Inbound": {
            "total": 2,
            "agent": 2,
            "qa": 0,
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
        "United Parks & Resorts": {
          "United Parks & Resorts": {
            "total": 144,
            "agent": 133,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 9
          },
          "United Parks & Resorts BI": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Purity,Purity,Cloudflare,Cloudflare,Newsmax,Newsmax,Ideal Living IB Sales,Ideal Living IB Sales,Pilgrim,Pilgrim,Wright Flood,Wright Flood": {
          "Purity Catalog,Purity Free Bottle,Purity Catalog,Purity Free Bottle,Purity Catalog,Purity Free Bottle,Purity Catalog,Purity Free Bottle,Purity Catalog,Purity Free Bottle,Purity Catalog,Purity Free Bottle": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Mpower": {
          "Mpower": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Chariot Energy": {
          "Voice CS": {
            "total": 7,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Purity,Purity,Cloudflare,Cloudflare,Newsmax,Newsmax,Pilgrim,Pilgrim,Wright Flood,Wright Flood": {
          "Purity Catalog,Purity Free Bottle,Purity Catalog,Purity Free Bottle,Purity Catalog,Purity Free Bottle,Purity Catalog,Purity Free Bottle,Purity Catalog,Purity Free Bottle": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Scan Group": {
          "Scan Members": {
            "total": 101,
            "agent": 94,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 7
          },
          "Care Coordinator": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Ideal Living IB Sales,Pilgrim,Wright Flood": {
          "IL Better Bladder Inbound,IL Better Bladder Inbound,IL Better Bladder Inbound": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Cogeco": {
          "Voice General Customer Care": {
            "total": 44,
            "agent": 41,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 2
          }
        },
        "Travelpro": {
          "Travelpro": {
            "total": 38,
            "agent": 37,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Frontier": {
          "Frontier": {
            "total": 14,
            "agent": 13,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Avis Budget Group": {
          "Car Customer Service Voice": {
            "total": 47,
            "agent": 45,
            "qa": 1,
            "supervisor": 1,
            "team_leader": 0
          },
          "Truck Commercial": {
            "total": 22,
            "agent": 21,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Car Customer Service Email": {
            "total": 2,
            "agent": 1,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          },
          "Truck Customer Service": {
            "total": 12,
            "agent": 12,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Unassigned": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Ameriflex": {
          "PSA": {
            "total": 11,
            "agent": 10,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Pharma Force": {
          "Pharmacy member support": {
            "total": 6,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Tech Support": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Park West": {
          "DS 123 Openers": {
            "total": 5,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "MobileX Global": {
          "MobileX Global": {
            "total": 10,
            "agent": 9,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "California Clinic Management": {
          "Patient Access Coordination": {
            "total": 63,
            "agent": 58,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 4
          }
        },
        "PointCare": {
          "Customer Service": {
            "total": 16,
            "agent": 15,
            "qa": 0,
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
        "Carlton One Engagement": {
          "Global Reward Solutions": {
            "total": 12,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Altice": {
          "Inbound Retention": {
            "total": 325,
            "agent": 302,
            "qa": 5,
            "supervisor": 17,
            "team_leader": 1
          },
          "Outbound Retention": {
            "total": 43,
            "agent": 39,
            "qa": 1,
            "supervisor": 3,
            "team_leader": 0
          },
          "Sales Enablement": {
            "total": 24,
            "agent": 21,
            "qa": 1,
            "supervisor": 2,
            "team_leader": 0
          },
          "Customer Care Support": {
            "total": 24,
            "agent": 18,
            "qa": 3,
            "supervisor": 3,
            "team_leader": 0
          }
        },
        "Total Womens Health": {
          "Total Womens Health": {
            "total": 3,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
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
          "Sales Support": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "DMEC Capital Services": {
          "Credit Advisors": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Customer Service": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Transform Credit": {
          "Customer Service": {
            "total": 20,
            "agent": 19,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "AT&T,AT&T": {
          "BMTS,Wireless Loyalty": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Bmc,BMTS": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "OrthoFi": {
          "OrthoFi Claims": {
            "total": 7,
            "agent": 4,
            "qa": 2,
            "supervisor": 1,
            "team_leader": 0
          },
          "Patient Care": {
            "total": 12,
            "agent": 7,
            "qa": 3,
            "supervisor": 2,
            "team_leader": 0
          }
        },
        "SJ Health": {
          "SJ Claims": {
            "total": 12,
            "agent": 11,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          },
          "SJ POV": {
            "total": 8,
            "agent": 7,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Healthpointe": {
          "Main Queue": {
            "total": 64,
            "agent": 59,
            "qa": 1,
            "supervisor": 4,
            "team_leader": 0
          },
          "Workers Comp": {
            "total": 17,
            "agent": 15,
            "qa": 1,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "American Water": {
          "Oncourse Home Solutions": {
            "total": 104,
            "agent": 98,
            "qa": 2,
            "supervisor": 3,
            "team_leader": 1
          }
        },
        "Medical Group": {
          "Medical Inbound": {
            "total": 23,
            "agent": 20,
            "qa": 2,
            "supervisor": 1,
            "team_leader": 0
          },
          "Medical Claims": {
            "total": 7,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Magnus Health": {
          "Magnus Health": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
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
        "Borbas Pharmacy": {
          "Verifications": {
            "total": 11,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Refills": {
            "total": 6,
            "agent": 5,
            "qa": 0,
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
        "Order Port": {
          "Technical Support": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Proctor Financial": {
          "Loss Draft": {
            "total": 12,
            "agent": 10,
            "qa": 1,
            "supervisor": 1,
            "team_leader": 0
          },
          "Mortgage": {
            "total": 15,
            "agent": 15,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Insurance": {
            "total": 13,
            "agent": 12,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "All Care Therapies": {
          "Speech Therapies": {
            "total": 26,
            "agent": 25,
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
        "Greater Philadelphia": {
          "Unassigned": {
            "total": 7,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
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
        "Limelife By Alcone": {
          "Customer Service": {
            "total": 7,
            "agent": 6,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Family Care Health Centers": {
          "Family Care Health Centers": {
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
        "Azazie": {
          "Azazie": {
            "total": 12,
            "agent": 10,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Sensio": {
          "Sensio": {
            "total": 11,
            "agent": 11,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Purity": {
          "Purity Omind": {
            "total": 2,
            "agent": 0,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Cricut,Cricut,Cricut,Carlton One Engagement,Carlton One Engagement,Carlton One Engagement,Park West,Park West,Park West": {
          "Cricut,Global Reward Solutions,DS 123 Openers,Cricut,Global Reward Solutions,DS 123 Openers,Cricut,Global Reward Solutions,DS 123 Openers": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Frontier,Frontier,Walker Advertising,Walker Advertising": {
          "Frontier,MVA Personal Injury,Frontier,MVA Personal Injury": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Chariot Energy,Chariot Energy,Ameriflex,Ameriflex": {
          "Voice CS,PSA,Voice CS,PSA": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Carlton One Engagement,Carlton One Engagement,Carlton One Engagement,Carlton One Engagement,DMEC Capital Services,DMEC Capital Services,DMEC Capital Services,DMEC Capital Services,Park West,Park West,Park West,Park West": {
          "Global Reward Solutions,DS 123 Openers,Credit Advisors,Customer Service,Global Reward Solutions,DS 123 Openers,Credit Advisors,Customer Service,Global Reward Solutions,DS 123 Openers,Credit Advisors,Customer Service": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
            "team_leader": 0
          }
        },
        "Medical Group,Medical Group": {
          "Medical Inbound,Medical Claims": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 1,
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
        "Ideal Living IB Sales,Ideal Living IB Sales,Ideal Living IB Sales,Ideal Living IB Sales,Ideal Living IB Sales,Ideal Living IB Sales,Ideal Living IB Sales,Ideal Living IB Sales": {
          "IL Superthotics Inbound,IL Paint Zoom Inbound,IL Prosvent Inbound,IL Prosvent SF Overflow,IL Rotorazer Inbound,IL Walkfit Platinum Inbound,IL Better Bladder Inbound,IL Profemin": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Apex Financial Freedom": {
          "Debt Settlement Enrollment": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "All Client": {
          "All Process": {
            "total": 2,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 2
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
            "total": 67,
            "agent": 58,
            "qa": 3,
            "supervisor": 0,
            "team_leader": 6
          }
        },
        "Proctor Financial": {
          "Mortgage": {
            "total": 63,
            "agent": 59,
            "qa": 2,
            "supervisor": 0,
            "team_leader": 2
          },
          "Insurance": {
            "total": 1,
            "agent": 0,
            "qa": 1,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Associated Materials": {
          "Associated Materials": {
            "total": 7,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Kansas Counselors": {
          "KCI Counselors": {
            "total": 9,
            "agent": 8,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Unassigned": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Achieve Collection": {
          "Achieve Collection": {
            "total": 53,
            "agent": 49,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 4
          },
          "Unassigned": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Union Pacific,Union Pacific": {
          "Union Pacific,B2B Collection": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Union Pacific": {
          "Union Pacific": {
            "total": 4,
            "agent": 4,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Achieve CS": {
          "Achieve CS": {
            "total": 21,
            "agent": 20,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "TimeProofUSA": {
          "TP Customer Service": {
            "total": 22,
            "agent": 21,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Unassigned": {
            "total": 1,
            "agent": 1,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Happy Money": {
          "Customer Service": {
            "total": 13,
            "agent": 12,
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
            "total": 19,
            "agent": 18,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "DNE Resources": {
          "DNE Customer Service": {
            "total": 6,
            "agent": 5,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Americor Funding": {
          "Americor Collections": {
            "total": 7,
            "agent": 6,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          },
          "Americor CS": {
            "total": 7,
            "agent": 7,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          },
          "Unassigned": {
            "total": 2,
            "agent": 2,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 0
          }
        },
        "Belmont": {
          "Belmont": {
            "total": 4,
            "agent": 3,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Achieve Collection,Achieve Collection,Achieve CS,Achieve CS": {
          "Achieve Collection,Achieve CS,Achieve Collection,Achieve CS": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        },
        "Blue Frog Loan,Blue Frog Loan": {
          "Loan origination,Collections": {
            "total": 1,
            "agent": 0,
            "qa": 0,
            "supervisor": 0,
            "team_leader": 1
          }
        }
      }
    }
  }
}
```
