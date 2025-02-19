import { ChecklistPage } from '../types';

export const checklistData: ChecklistPage[] = [
  {
    title: "Prepare the patient",
    items: [
      {
        text: "Reliable IV / IO access",
      },
      {
        text: "Optimise position",
        subitems: [
          "Sit-up?",
          "Mattress hard"
        ]
      },
      {
        text: "Airway assessment",
        subitems: [
          "Identify cricothyroid membrane",
          "Awake intubation option?"
        ]
      },
      {
        text: "Optimal preoxygenation",
        subitems: [
          "3 mins or ETO₂ > 85%",
          "Consider CPAP / NIV / HFNO",
          "Nasal O₂"
        ]
      },
      {
        text: "Optimise patient state",
        subitems: [
          "Fluid / pressor/ inotrope",
          "Aspirate NG tube",
          "Delayed sequence induction"
        ]
      },
      {
        text: "Allergies?",
        subitems: [
          "↑ Potassium risk?\n- avoid suxamethonium"
        ]
      }
    ]
  },
  {
    title: "Prepare the equipment",
    items: [
      {
        text: "Apply monitors",
        subitems: [
          "SpO₂ / waveform ETCO₂ / ECG / BP (check cycling)"
        ]
      },
      {
        text: "Check equipment",
        subitems: [
          "Tracheal tubes x 2\n- cuffs checked",
          "Tube tie / tapes",
          "Direct laryngoscopes x 2",
          "Videolaryngoscope",
          "Bougie / stylet",
          "Working suction",
          "Supraglottic airways",
          "Guedel / nasal airways",
          "Flexible scope / Aintree",
          "FONA set"
        ]
      },
      {
        text: "Check drugs",
        subitems: [
          "Induction - consider ketamine",
          "Opioid",
          "Relaxant",
          "Pressor / inotrope",
          "Maintenance sedation"
        ]
      }
    ]
  },
  {
    title: "Prepare the team",
    items: [
      {
        text: "Allocate roles",
        subitems: [
          "Team Leader",
          "1st Intubator",
          "2nd Intubator",
          "Cricoid force",
          "Intubator's assistant",
          "Drugs",
          "Monitoring patient",
          "Runner",
          "MILS (if indicated)",
          "Who will perform FONA?"
        ]
      },
      "Who do we call for help?",
      "Who is noting the time?"
    ]
  },
  {
    title: "Prepare for difficulty",
    items: [
      "Can we wake the patient if intubation fails?",
      {
        text: 'Verbalise "Airway Plan is:"',
        subitems: [
          {
            text: "Plan A:",
            subitems: ["Drugs & laryngoscopy"]
          },
          {
            text: "Plan B/C:",
            subitems: [
              "Supraglottic airway",
              "Face-mask",
              "Fibreoptic intubation via supraglottic airway"
            ]
          },
          {
            text: "Plan D:",
            subitems: [
              "FONA",
              "Scalpel-bougie-tube"
            ]
          }
        ]
      },
      "Does anyone have questions or concerns?"
    ]
  }
];