export type NeuprintAxes = {
  analyticity: number;
  flow: number;
  metacognition: number;
  authenticity: number;
};

export type RoleConfig = {
  role_code: string;
  job_id: string;
  onet_code: string;
  oecd_core_skills: string[];
  neuprint_axes_weights: NeuprintAxes;
  min_requirements: {
    arc_level: number;
    analyticity?: number;
    flow?: number;
    metacognition?: number;
    authenticity?: number;
  };
};

/**
 * NeuPrint Role Configs Full v1.0
 * - Group 1~15 aligned to Backend_13 JOB_INDEX job_id values
 * - Weights follow the fixed O*NET -> OECD -> NeuPrint 4-axis mapping principle supplied by the user
 * - onet_code uses user-provided codes where available; unresolved items are marked TO_VALIDATE rather than fabricated
 */

export const ROLE_CONFIGS_FULL_V1: RoleConfig[] = [
  // Group 1: Strategy·Analysis·Policy
  {
    role_code: "STRATEGY_ANALYST",
    job_id: "strategy_analyst",
    onet_code: "13-1111.00",
    oecd_core_skills: ["Complex Problem Solving", "Systems Thinking", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.42,
      flow: 0.14,
      metacognition: 0.30,
      authenticity: 0.14
    },
    min_requirements: { arc_level: 4, analyticity: 0.60 }
  },
  {
    role_code: "MANAGEMENT_ANALYST",
    job_id: "management_analyst",
    onet_code: "13-1111.00",
    oecd_core_skills: ["Systems Thinking", "Decision Making", "Communication"],
    neuprint_axes_weights: {
      analyticity: 0.42,
      flow: 0.14,
      metacognition: 0.30,
      authenticity: 0.14
    },
    min_requirements: { arc_level: 4, analyticity: 0.60 }
  },
  {
    role_code: "POLICY_ANALYST",
    job_id: "policy_analyst",
    onet_code: "19-3092.00",
    oecd_core_skills: ["Critical Thinking", "Judgment", "Systems Analysis"],
    neuprint_axes_weights: {
      analyticity: 0.42,
      flow: 0.14,
      metacognition: 0.30,
      authenticity: 0.14
    },
    min_requirements: { arc_level: 4, analyticity: 0.60 }
  },
  {
    role_code: "ECONOMIC_RESEARCHER",
    job_id: "economic_researcher",
    onet_code: "19-3011.00",
    oecd_core_skills: ["Critical Thinking", "Data Analysis", "Systems Thinking"],
    neuprint_axes_weights: {
      analyticity: 0.42,
      flow: 0.14,
      metacognition: 0.30,
      authenticity: 0.14
    },
    min_requirements: { arc_level: 4, analyticity: 0.60 }
  },
  {
    role_code: "FINANCIAL_ANALYST",
    job_id: "financial_analyst",
    onet_code: "13-2051.00",
    oecd_core_skills: ["Critical Thinking", "Monitoring", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.42,
      flow: 0.14,
      metacognition: 0.30,
      authenticity: 0.14
    },
    min_requirements: { arc_level: 4, analyticity: 0.60 }
  },
  {
    role_code: "RISK_ANALYST",
    job_id: "risk_analyst",
    onet_code: "13-2054.00",
    oecd_core_skills: ["Judgment", "Complex Problem Solving", "Monitoring"],
    neuprint_axes_weights: {
      analyticity: 0.42,
      flow: 0.14,
      metacognition: 0.30,
      authenticity: 0.14
    },
    min_requirements: { arc_level: 4, analyticity: 0.60 }
  },
  {
    role_code: "COMPLIANCE_OFFICER",
    job_id: "compliance_officer",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Monitoring", "Judgment", "Communication"],
    neuprint_axes_weights: {
      analyticity: 0.40,
      flow: 0.15,
      metacognition: 0.30,
      authenticity: 0.15
    },
    min_requirements: { arc_level: 4, analyticity: 0.60 }
  },
  {
    role_code: "INTERNAL_AUDITOR",
    job_id: "internal_auditor",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Monitoring", "Critical Thinking", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.40,
      flow: 0.15,
      metacognition: 0.30,
      authenticity: 0.15
    },
    min_requirements: { arc_level: 4, analyticity: 0.60 }
  },
  // Group 2: Data·AI·Intelligence
  {
    role_code: "DATA_ANALYST",
    job_id: "data_analyst",
    onet_code: "15-2051.00",
    oecd_core_skills: ["Critical Thinking", "Information Processing", "Active Learning"],
    neuprint_axes_weights: {
      analyticity: 0.40,
      flow: 0.29,
      metacognition: 0.17,
      authenticity: 0.14
    },
    min_requirements: { arc_level: 3, analyticity: 0.55, flow: 0.55 }
  },
  {
    role_code: "DATA_SCIENTIST",
    job_id: "data_scientist",
    onet_code: "15-2051.01",
    oecd_core_skills: ["Critical Thinking", "Complex Problem Solving", "Active Learning"],
    neuprint_axes_weights: {
      analyticity: 0.40,
      flow: 0.29,
      metacognition: 0.17,
      authenticity: 0.14
    },
    min_requirements: { arc_level: 3, analyticity: 0.55, flow: 0.55 }
  },
  {
    role_code: "BUSINESS_INTELLIGENCE_ANALYST",
    job_id: "business_intelligence_analyst",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Critical Thinking", "Information Processing", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.40,
      flow: 0.29,
      metacognition: 0.17,
      authenticity: 0.14
    },
    min_requirements: { arc_level: 3, analyticity: 0.55, flow: 0.55 }
  },
  {
    role_code: "MACHINE_LEARNING_ANALYST",
    job_id: "machine_learning_analyst",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Complex Problem Solving", "Active Learning", "Systems Thinking"],
    neuprint_axes_weights: {
      analyticity: 0.40,
      flow: 0.29,
      metacognition: 0.17,
      authenticity: 0.14
    },
    min_requirements: { arc_level: 3, analyticity: 0.55, flow: 0.55 }
  },
  {
    role_code: "STATISTICIAN",
    job_id: "statistician",
    onet_code: "15-2041.00",
    oecd_core_skills: ["Critical Thinking", "Information Processing", "Analytical Thinking"],
    neuprint_axes_weights: {
      analyticity: 0.38,
      flow: 0.30,
      metacognition: 0.17,
      authenticity: 0.15
    },
    min_requirements: { arc_level: 3, flow: 0.55 }
  },
  {
    role_code: "OPERATIONS_RESEARCH_ANALYST",
    job_id: "operations_research_analyst",
    onet_code: "15-2031.00",
    oecd_core_skills: ["Complex Problem Solving", "Systems Analysis", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.40,
      flow: 0.29,
      metacognition: 0.17,
      authenticity: 0.14
    },
    min_requirements: { arc_level: 3, analyticity: 0.55, flow: 0.55 }
  },
  {
    role_code: "INFORMATION_SECURITY_ANALYST",
    job_id: "information_security_analyst",
    onet_code: "15-1212.00",
    oecd_core_skills: ["Monitoring", "Critical Thinking", "Systems Analysis"],
    neuprint_axes_weights: {
      analyticity: 0.40,
      flow: 0.29,
      metacognition: 0.17,
      authenticity: 0.14
    },
    min_requirements: { arc_level: 3, analyticity: 0.55, flow: 0.55 }
  },
  // Group 3: Engineering·Technology·Architecture
  {
    role_code: "SOFTWARE_ENGINEER",
    job_id: "software_engineer",
    onet_code: "15-1252.00",
    oecd_core_skills: ["Complex Problem Solving", "Systems Analysis", "Active Learning"],
    neuprint_axes_weights: {
      analyticity: 0.35,
      flow: 0.33,
      metacognition: 0.19,
      authenticity: 0.13
    },
    min_requirements: { arc_level: 4, analyticity: 0.55 }
  },
  {
    role_code: "SYSTEMS_ARCHITECT",
    job_id: "systems_architect",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Systems Analysis", "Complex Problem Solving", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.36,
      flow: 0.30,
      metacognition: 0.20,
      authenticity: 0.14
    },
    min_requirements: { arc_level: 4, analyticity: 0.55 }
  },
  {
    role_code: "CLOUD_ENGINEER",
    job_id: "cloud_engineer",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Systems Analysis", "Monitoring", "Complex Problem Solving"],
    neuprint_axes_weights: {
      analyticity: 0.35,
      flow: 0.33,
      metacognition: 0.19,
      authenticity: 0.13
    },
    min_requirements: { arc_level: 4, analyticity: 0.55 }
  },
  {
    role_code: "DEVOPS_ENGINEER",
    job_id: "devops_engineer",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Monitoring", "Systems Analysis", "Time Sharing"],
    neuprint_axes_weights: {
      analyticity: 0.35,
      flow: 0.33,
      metacognition: 0.19,
      authenticity: 0.13
    },
    min_requirements: { arc_level: 4, analyticity: 0.55 }
  },
  {
    role_code: "NETWORK_ARCHITECT",
    job_id: "network_architect",
    onet_code: "15-1241.00",
    oecd_core_skills: ["Systems Analysis", "Complex Problem Solving", "Monitoring"],
    neuprint_axes_weights: {
      analyticity: 0.36,
      flow: 0.30,
      metacognition: 0.20,
      authenticity: 0.14
    },
    min_requirements: { arc_level: 4, analyticity: 0.55 }
  },
  {
    role_code: "QA_ENGINEER",
    job_id: "qa_engineer",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Monitoring", "Critical Thinking", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.35,
      flow: 0.33,
      metacognition: 0.19,
      authenticity: 0.13
    },
    min_requirements: { arc_level: 4, analyticity: 0.55 }
  },
  {
    role_code: "SAFETY_SYSTEMS_ENGINEER",
    job_id: "safety_systems_engineer",
    onet_code: "17-2111.00",
    oecd_core_skills: ["Monitoring", "Systems Analysis", "Judgment"],
    neuprint_axes_weights: {
      analyticity: 0.35,
      flow: 0.33,
      metacognition: 0.19,
      authenticity: 0.13
    },
    min_requirements: { arc_level: 4, analyticity: 0.55 }
  },
  // Group 4: Product·Service·Innovation
  {
    role_code: "PRODUCT_MANAGER",
    job_id: "product_manager",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Complex Problem Solving", "Communication", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.26,
      flow: 0.23,
      metacognition: 0.19,
      authenticity: 0.32
    },
    min_requirements: { arc_level: 3, authenticity: 0.50 }
  },
  {
    role_code: "SERVICE_DESIGNER",
    job_id: "service_designer",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Communication", "Systems Thinking", "Active Learning"],
    neuprint_axes_weights: {
      analyticity: 0.26,
      flow: 0.24,
      metacognition: 0.17,
      authenticity: 0.33
    },
    min_requirements: { arc_level: 3, authenticity: 0.55 }
  },
  {
    role_code: "UX_PLANNER",
    job_id: "ux_planner",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Communication", "Cognitive Flexibility", "Critical Thinking"],
    neuprint_axes_weights: {
      analyticity: 0.28,
      flow: 0.24,
      metacognition: 0.18,
      authenticity: 0.30
    },
    min_requirements: { arc_level: 3, authenticity: 0.50 }
  },
  {
    role_code: "BUSINESS_DEVELOPER",
    job_id: "business_developer",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Communication", "Decision Making", "Systems Thinking"],
    neuprint_axes_weights: {
      analyticity: 0.29,
      flow: 0.26,
      metacognition: 0.17,
      authenticity: 0.28
    },
    min_requirements: { arc_level: 3, authenticity: 0.50 }
  },
  {
    role_code: "INNOVATION_MANAGER",
    job_id: "innovation_manager",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Complex Problem Solving", "Active Learning", "Communication"],
    neuprint_axes_weights: {
      analyticity: 0.26,
      flow: 0.23,
      metacognition: 0.19,
      authenticity: 0.32
    },
    min_requirements: { arc_level: 3, authenticity: 0.50 }
  },
  {
    role_code: "R_AND_D_PLANNER",
    job_id: "r_and_d_planner",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Complex Problem Solving", "Systems Thinking", "Active Learning"],
    neuprint_axes_weights: {
      analyticity: 0.28,
      flow: 0.24,
      metacognition: 0.18,
      authenticity: 0.30
    },
    min_requirements: { arc_level: 3, authenticity: 0.50 }
  },
  {
    role_code: "NEW_VENTURE_STRATEGIST",
    job_id: "new_venture_strategist",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Decision Making", "Complex Problem Solving", "Communication"],
    neuprint_axes_weights: {
      analyticity: 0.28,
      flow: 0.24,
      metacognition: 0.18,
      authenticity: 0.30
    },
    min_requirements: { arc_level: 3, authenticity: 0.50 }
  },
  // Group 5: Education·Research·Training
  {
    role_code: "TEACHER",
    job_id: "teacher",
    onet_code: "25-2021.00",
    oecd_core_skills: ["Communication", "Learning to Learn", "Judgment"],
    neuprint_axes_weights: {
      analyticity: 0.27,
      flow: 0.18,
      metacognition: 0.33,
      authenticity: 0.22
    },
    min_requirements: { arc_level: 3, metacognition: 0.50, authenticity: 0.60 }
  },
  {
    role_code: "PROFESSOR",
    job_id: "professor",
    onet_code: "25-1194.00",
    oecd_core_skills: ["Communication", "Critical Thinking", "Learning to Learn"],
    neuprint_axes_weights: {
      analyticity: 0.27,
      flow: 0.18,
      metacognition: 0.33,
      authenticity: 0.22
    },
    min_requirements: { arc_level: 3, metacognition: 0.50 }
  },
  {
    role_code: "INSTRUCTIONAL_DESIGNER",
    job_id: "instructional_designer",
    onet_code: "25-9031.00",
    oecd_core_skills: ["Communication", "Systems Thinking", "Learning to Learn"],
    neuprint_axes_weights: {
      analyticity: 0.25,
      flow: 0.18,
      metacognition: 0.32,
      authenticity: 0.25
    },
    min_requirements: { arc_level: 3, metacognition: 0.50, authenticity: 0.55 }
  },
  {
    role_code: "EDUCATION_CONSULTANT",
    job_id: "education_consultant",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Communication", "Judgment", "Learning to Learn"],
    neuprint_axes_weights: {
      analyticity: 0.27,
      flow: 0.18,
      metacognition: 0.33,
      authenticity: 0.22
    },
    min_requirements: { arc_level: 3, metacognition: 0.50 }
  },
  {
    role_code: "RESEARCH_SCIENTIST",
    job_id: "research_scientist",
    onet_code: "19-2099.00",
    oecd_core_skills: ["Critical Thinking", "Active Learning", "Systems Analysis"],
    neuprint_axes_weights: {
      analyticity: 0.29,
      flow: 0.17,
      metacognition: 0.33,
      authenticity: 0.21
    },
    min_requirements: { arc_level: 3, analyticity: 0.55, metacognition: 0.50 }
  },
  {
    role_code: "RESEARCH_COORDINATOR",
    job_id: "research_coordinator",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Monitoring", "Communication", "Active Learning"],
    neuprint_axes_weights: {
      analyticity: 0.29,
      flow: 0.17,
      metacognition: 0.33,
      authenticity: 0.21
    },
    min_requirements: { arc_level: 3, metacognition: 0.50 }
  },
  {
    role_code: "ACADEMIC_ADVISOR",
    job_id: "academic_advisor",
    onet_code: "21-1012.00",
    oecd_core_skills: ["Communication", "Judgment", "Learning to Learn"],
    neuprint_axes_weights: {
      analyticity: 0.27,
      flow: 0.18,
      metacognition: 0.33,
      authenticity: 0.22
    },
    min_requirements: { arc_level: 3, metacognition: 0.50 }
  },
  // Group 6: Psychology·Counseling·Social Care
  {
    role_code: "COUNSELOR",
    job_id: "counselor",
    onet_code: "21-1014.00",
    oecd_core_skills: ["Communication", "Judgment", "Social Perceptiveness"],
    neuprint_axes_weights: {
      analyticity: 0.18,
      flow: 0.15,
      metacognition: 0.27,
      authenticity: 0.40
    },
    min_requirements: { arc_level: 4, authenticity: 0.60 }
  },
  {
    role_code: "CLINICAL_PSYCHOLOGIST",
    job_id: "clinical_psychologist",
    onet_code: "19-3033.00",
    oecd_core_skills: ["Judgment", "Critical Thinking", "Social Perceptiveness"],
    neuprint_axes_weights: {
      analyticity: 0.18,
      flow: 0.15,
      metacognition: 0.27,
      authenticity: 0.40
    },
    min_requirements: { arc_level: 4, authenticity: 0.60 }
  },
  {
    role_code: "SCHOOL_PSYCHOLOGIST",
    job_id: "school_psychologist",
    onet_code: "19-3034.00",
    oecd_core_skills: ["Communication", "Judgment", "Social Perceptiveness"],
    neuprint_axes_weights: {
      analyticity: 0.18,
      flow: 0.15,
      metacognition: 0.27,
      authenticity: 0.40
    },
    min_requirements: { arc_level: 4, authenticity: 0.60 }
  },
  {
    role_code: "SOCIAL_WORKER",
    job_id: "social_worker",
    onet_code: "21-1022.00",
    oecd_core_skills: ["Communication", "Judgment", "Social Perceptiveness"],
    neuprint_axes_weights: {
      analyticity: 0.18,
      flow: 0.15,
      metacognition: 0.27,
      authenticity: 0.40
    },
    min_requirements: { arc_level: 4, authenticity: 0.60 }
  },
  {
    role_code: "BEHAVIORAL_THERAPIST",
    job_id: "behavioral_therapist",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Communication", "Monitoring", "Social Perceptiveness"],
    neuprint_axes_weights: {
      analyticity: 0.18,
      flow: 0.15,
      metacognition: 0.27,
      authenticity: 0.40
    },
    min_requirements: { arc_level: 4, authenticity: 0.60 }
  },
  {
    role_code: "REHABILITATION_SPECIALIST",
    job_id: "rehabilitation_specialist",
    onet_code: "21-1015.00",
    oecd_core_skills: ["Communication", "Monitoring", "Judgment"],
    neuprint_axes_weights: {
      analyticity: 0.18,
      flow: 0.15,
      metacognition: 0.27,
      authenticity: 0.40
    },
    min_requirements: { arc_level: 4, authenticity: 0.60 }
  },
  // Group 7: Leadership·Executive·Public Governance
  {
    role_code: "EXECUTIVE_LEAD",
    job_id: "ceo_coo_cso",
    onet_code: "11-1011.00",
    oecd_core_skills: ["Decision Making", "Systems Thinking", "Communication"],
    neuprint_axes_weights: {
      analyticity: 0.26,
      flow: 0.21,
      metacognition: 0.25,
      authenticity: 0.28
    },
    min_requirements: { arc_level: 5, analyticity: 0.50 }
  },
  {
    role_code: "PUBLIC_POLICY_DIRECTOR",
    job_id: "public_policy_director",
    onet_code: "11-9199.00",
    oecd_core_skills: ["Decision Making", "Systems Analysis", "Communication"],
    neuprint_axes_weights: {
      analyticity: 0.26,
      flow: 0.21,
      metacognition: 0.25,
      authenticity: 0.28
    },
    min_requirements: { arc_level: 5, analyticity: 0.50 }
  },
  {
    role_code: "GOVERNMENT_ADMINISTRATOR",
    job_id: "government_administrator",
    onet_code: "11-3013.00",
    oecd_core_skills: ["Decision Making", "Monitoring", "Communication"],
    neuprint_axes_weights: {
      analyticity: 0.28,
      flow: 0.22,
      metacognition: 0.24,
      authenticity: 0.26
    },
    min_requirements: { arc_level: 5, analyticity: 0.50 }
  },
  {
    role_code: "PROGRAM_DIRECTOR",
    job_id: "program_director",
    onet_code: "11-9151.00",
    oecd_core_skills: ["Decision Making", "Systems Thinking", "Monitoring"],
    neuprint_axes_weights: {
      analyticity: 0.26,
      flow: 0.21,
      metacognition: 0.25,
      authenticity: 0.28
    },
    min_requirements: { arc_level: 5, analyticity: 0.50 }
  },
  {
    role_code: "PUBLIC_STRATEGY_LEAD",
    job_id: "public_strategy_lead",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Systems Thinking", "Decision Making", "Communication"],
    neuprint_axes_weights: {
      analyticity: 0.26,
      flow: 0.21,
      metacognition: 0.25,
      authenticity: 0.28
    },
    min_requirements: { arc_level: 5, analyticity: 0.50 }
  },
  // Group 8: Marketing·Sales·Communication
  {
    role_code: "MARKETING_STRATEGIST",
    job_id: "marketing_strategist",
    onet_code: "13-1161.00",
    oecd_core_skills: ["Communication", "Decision Making", "Critical Thinking"],
    neuprint_axes_weights: {
      analyticity: 0.18,
      flow: 0.24,
      metacognition: 0.16,
      authenticity: 0.42
    },
    min_requirements: { arc_level: 3, authenticity: 0.55 }
  },
  {
    role_code: "BRAND_MANAGER",
    job_id: "brand_manager",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Communication", "Decision Making", "Social Perceptiveness"],
    neuprint_axes_weights: {
      analyticity: 0.16,
      flow: 0.23,
      metacognition: 0.17,
      authenticity: 0.44
    },
    min_requirements: { arc_level: 3, authenticity: 0.55 }
  },
  {
    role_code: "SALES_DIRECTOR",
    job_id: "sales_director",
    onet_code: "11-2022.00",
    oecd_core_skills: ["Communication", "Decision Making", "Social Perceptiveness"],
    neuprint_axes_weights: {
      analyticity: 0.16,
      flow: 0.23,
      metacognition: 0.17,
      authenticity: 0.44
    },
    min_requirements: { arc_level: 3, authenticity: 0.55 }
  },
  {
    role_code: "PR_MANAGER",
    job_id: "pr_manager",
    onet_code: "11-2032.00",
    oecd_core_skills: ["Communication", "Social Perceptiveness", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.16,
      flow: 0.23,
      metacognition: 0.17,
      authenticity: 0.44
    },
    min_requirements: { arc_level: 3, authenticity: 0.55 }
  },
  {
    role_code: "COMMUNICATION_MANAGER",
    job_id: "communication_manager",
    onet_code: "11-2032.00",
    oecd_core_skills: ["Communication", "Decision Making", "Writing"],
    neuprint_axes_weights: {
      analyticity: 0.16,
      flow: 0.23,
      metacognition: 0.17,
      authenticity: 0.44
    },
    min_requirements: { arc_level: 3, authenticity: 0.55 }
  },
  {
    role_code: "MEDIA_PLANNER",
    job_id: "media_planner",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Communication", "Information Processing", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.18,
      flow: 0.24,
      metacognition: 0.16,
      authenticity: 0.42
    },
    min_requirements: { arc_level: 3, authenticity: 0.55 }
  },
  {
    role_code: "DIGITAL_MARKETER",
    job_id: "digital_marketer",
    onet_code: "13-1161.01",
    oecd_core_skills: ["Communication", "Information Processing", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.18,
      flow: 0.24,
      metacognition: 0.16,
      authenticity: 0.42
    },
    min_requirements: { arc_level: 3, authenticity: 0.55 }
  },
  // Group 9: Design·Content·Media
  {
    role_code: "UX_UI_DESIGNER",
    job_id: "ux_ui_designer",
    onet_code: "27-1024.00",
    oecd_core_skills: ["Communication", "Cognitive Flexibility", "Critical Thinking"],
    neuprint_axes_weights: {
      analyticity: 0.14,
      flow: 0.25,
      metacognition: 0.13,
      authenticity: 0.48
    },
    min_requirements: { arc_level: 3, authenticity: 0.60 }
  },
  {
    role_code: "GRAPHIC_DESIGNER",
    job_id: "graphic_designer",
    onet_code: "27-1024.00",
    oecd_core_skills: ["Communication", "Writing", "Cognitive Flexibility"],
    neuprint_axes_weights: {
      analyticity: 0.14,
      flow: 0.25,
      metacognition: 0.13,
      authenticity: 0.48
    },
    min_requirements: { arc_level: 3, authenticity: 0.60 }
  },
  {
    role_code: "VIDEO_PRODUCER",
    job_id: "video_producer",
    onet_code: "27-2012.00",
    oecd_core_skills: ["Communication", "Decision Making", "Cognitive Flexibility"],
    neuprint_axes_weights: {
      analyticity: 0.16,
      flow: 0.25,
      metacognition: 0.14,
      authenticity: 0.45
    },
    min_requirements: { arc_level: 3, authenticity: 0.60 }
  },
  {
    role_code: "CONTENT_STRATEGIST",
    job_id: "content_strategist",
    onet_code: "13-1161.00",
    oecd_core_skills: ["Writing", "Communication", "Critical Thinking"],
    neuprint_axes_weights: {
      analyticity: 0.14,
      flow: 0.25,
      metacognition: 0.13,
      authenticity: 0.48
    },
    min_requirements: { arc_level: 3, authenticity: 0.60 }
  },
  {
    role_code: "CREATIVE_DIRECTOR",
    job_id: "creative_director",
    onet_code: "11-2011.00",
    oecd_core_skills: ["Communication", "Decision Making", "Cognitive Flexibility"],
    neuprint_axes_weights: {
      analyticity: 0.12,
      flow: 0.24,
      metacognition: 0.14,
      authenticity: 0.50
    },
    min_requirements: { arc_level: 3, authenticity: 0.60 }
  },
  {
    role_code: "EDITOR",
    job_id: "editor",
    onet_code: "27-3041.00",
    oecd_core_skills: ["Writing", "Critical Thinking", "Communication"],
    neuprint_axes_weights: {
      analyticity: 0.14,
      flow: 0.25,
      metacognition: 0.13,
      authenticity: 0.48
    },
    min_requirements: { arc_level: 3, authenticity: 0.60 }
  },
  {
    role_code: "MULTIMEDIA_ARTIST",
    job_id: "multimedia_artist",
    onet_code: "27-1014.00",
    oecd_core_skills: ["Communication", "Cognitive Flexibility", "Writing"],
    neuprint_axes_weights: {
      analyticity: 0.16,
      flow: 0.25,
      metacognition: 0.14,
      authenticity: 0.45
    },
    min_requirements: { arc_level: 3, authenticity: 0.60 }
  },
  // Group 10: Healthcare·Life Science
  {
    role_code: "PHYSICIAN",
    job_id: "physician",
    onet_code: "29-1218.00",
    oecd_core_skills: ["Judgment", "Monitoring", "Communication"],
    neuprint_axes_weights: {
      analyticity: 0.26,
      flow: 0.18,
      metacognition: 0.30,
      authenticity: 0.26
    },
    min_requirements: { arc_level: 4, metacognition: 0.55 }
  },
  {
    role_code: "NURSE",
    job_id: "nurse",
    onet_code: "29-1141.00",
    oecd_core_skills: ["Monitoring", "Judgment", "Communication"],
    neuprint_axes_weights: {
      analyticity: 0.26,
      flow: 0.18,
      metacognition: 0.30,
      authenticity: 0.26
    },
    min_requirements: { arc_level: 4, metacognition: 0.55 }
  },
  {
    role_code: "MEDICAL_RESEARCHER",
    job_id: "medical_researcher",
    onet_code: "19-1042.00",
    oecd_core_skills: ["Critical Thinking", "Active Learning", "Systems Analysis"],
    neuprint_axes_weights: {
      analyticity: 0.28,
      flow: 0.17,
      metacognition: 0.30,
      authenticity: 0.25
    },
    min_requirements: { arc_level: 4, metacognition: 0.55 }
  },
  {
    role_code: "CLINICAL_DATA_MANAGER",
    job_id: "clinical_data_manager",
    onet_code: "11-9121.00",
    oecd_core_skills: ["Information Processing", "Monitoring", "Critical Thinking"],
    neuprint_axes_weights: {
      analyticity: 0.24,
      flow: 0.17,
      metacognition: 0.31,
      authenticity: 0.28
    },
    min_requirements: { arc_level: 4, metacognition: 0.55 }
  },
  {
    role_code: "BIOMEDICAL_SCIENTIST",
    job_id: "biomedical_scientist",
    onet_code: "19-1042.00",
    oecd_core_skills: ["Critical Thinking", "Systems Analysis", "Active Learning"],
    neuprint_axes_weights: {
      analyticity: 0.28,
      flow: 0.17,
      metacognition: 0.30,
      authenticity: 0.25
    },
    min_requirements: { arc_level: 4, analyticity: 0.55, metacognition: 0.55 }
  },
  {
    role_code: "PUBLIC_HEALTH_ANALYST",
    job_id: "public_health_analyst",
    onet_code: "19-1041.00",
    oecd_core_skills: ["Critical Thinking", "Systems Analysis", "Communication"],
    neuprint_axes_weights: {
      analyticity: 0.28,
      flow: 0.17,
      metacognition: 0.30,
      authenticity: 0.25
    },
    min_requirements: { arc_level: 4, analyticity: 0.55, metacognition: 0.55 }
  },
  // Group 11: Law·Compliance·Ethics
  {
    role_code: "LAWYER",
    job_id: "lawyer",
    onet_code: "23-1011.00",
    oecd_core_skills: ["Critical Thinking", "Judgment", "Writing"],
    neuprint_axes_weights: {
      analyticity: 0.36,
      flow: 0.13,
      metacognition: 0.28,
      authenticity: 0.23
    },
    min_requirements: { arc_level: 4, analyticity: 0.55 }
  },
  {
    role_code: "LEGAL_RESEARCHER",
    job_id: "legal_researcher",
    onet_code: "23-1011.00",
    oecd_core_skills: ["Critical Thinking", "Writing", "Information Processing"],
    neuprint_axes_weights: {
      analyticity: 0.36,
      flow: 0.13,
      metacognition: 0.28,
      authenticity: 0.23
    },
    min_requirements: { arc_level: 4, analyticity: 0.55 }
  },
  {
    role_code: "COMPLIANCE_MANAGER",
    job_id: "compliance_manager",
    onet_code: "11-9199.00",
    oecd_core_skills: ["Monitoring", "Judgment", "Writing"],
    neuprint_axes_weights: {
      analyticity: 0.32,
      flow: 0.13,
      metacognition: 0.29,
      authenticity: 0.26
    },
    min_requirements: { arc_level: 4, analyticity: 0.55 }
  },
  {
    role_code: "ETHICS_OFFICER",
    job_id: "ethics_officer",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Judgment", "Communication", "Monitoring"],
    neuprint_axes_weights: {
      analyticity: 0.34,
      flow: 0.14,
      metacognition: 0.28,
      authenticity: 0.24
    },
    min_requirements: { arc_level: 4, analyticity: 0.55 }
  },
  {
    role_code: "REGULATORY_AFFAIRS_SPECIALIST",
    job_id: "regulatory_affairs_specialist",
    onet_code: "13-1041.07",
    oecd_core_skills: ["Monitoring", "Writing", "Judgment"],
    neuprint_axes_weights: {
      analyticity: 0.34,
      flow: 0.14,
      metacognition: 0.28,
      authenticity: 0.24
    },
    min_requirements: { arc_level: 4, analyticity: 0.55 }
  },
  {
    role_code: "CONTRACT_SPECIALIST",
    job_id: "contract_specialist",
    onet_code: "13-1023.00",
    oecd_core_skills: ["Writing", "Critical Thinking", "Judgment"],
    neuprint_axes_weights: {
      analyticity: 0.34,
      flow: 0.14,
      metacognition: 0.28,
      authenticity: 0.24
    },
    min_requirements: { arc_level: 4, analyticity: 0.55 }
  },
  // Group 12: Operations·Quality·Safety·Logistics
  {
    role_code: "OPERATIONS_MANAGER",
    job_id: "operations_manager",
    onet_code: "11-1021.00",
    oecd_core_skills: ["Monitoring", "Decision Making", "Systems Thinking"],
    neuprint_axes_weights: {
      analyticity: 0.28,
      flow: 0.27,
      metacognition: 0.23,
      authenticity: 0.22
    },
    min_requirements: { arc_level: 3, flow: 0.50 }
  },
  {
    role_code: "QUALITY_MANAGER",
    job_id: "quality_manager",
    onet_code: "11-3051.00",
    oecd_core_skills: ["Monitoring", "Critical Thinking", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.28,
      flow: 0.27,
      metacognition: 0.23,
      authenticity: 0.22
    },
    min_requirements: { arc_level: 3, flow: 0.50 }
  },
  {
    role_code: "SAFETY_ENGINEER",
    job_id: "safety_engineer",
    onet_code: "17-2111.00",
    oecd_core_skills: ["Monitoring", "Judgment", "Systems Analysis"],
    neuprint_axes_weights: {
      analyticity: 0.31,
      flow: 0.30,
      metacognition: 0.21,
      authenticity: 0.18
    },
    min_requirements: { arc_level: 3, analyticity: 0.55, flow: 0.50 }
  },
  {
    role_code: "PROCESS_ANALYST",
    job_id: "process_analyst",
    onet_code: "13-1111.00",
    oecd_core_skills: ["Systems Analysis", "Monitoring", "Critical Thinking"],
    neuprint_axes_weights: {
      analyticity: 0.32,
      flow: 0.27,
      metacognition: 0.22,
      authenticity: 0.19
    },
    min_requirements: { arc_level: 3, analyticity: 0.55, flow: 0.50 }
  },
  {
    role_code: "SUPPLY_CHAIN_ANALYST",
    job_id: "supply_chain_analyst",
    onet_code: "13-1081.00",
    oecd_core_skills: ["Systems Analysis", "Monitoring", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.32,
      flow: 0.27,
      metacognition: 0.22,
      authenticity: 0.19
    },
    min_requirements: { arc_level: 3, analyticity: 0.55, flow: 0.50 }
  },
  {
    role_code: "LOGISTICS_PLANNER",
    job_id: "logistics_planner",
    onet_code: "13-1081.00",
    oecd_core_skills: ["Systems Analysis", "Time Sharing", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.30,
      flow: 0.28,
      metacognition: 0.22,
      authenticity: 0.20
    },
    min_requirements: { arc_level: 3, flow: 0.50 }
  },
  // Group 13: Finance·Investment·Insurance
  {
    role_code: "INVESTMENT_ANALYST",
    job_id: "investment_analyst",
    onet_code: "13-2051.00",
    oecd_core_skills: ["Critical Thinking", "Decision Making", "Monitoring"],
    neuprint_axes_weights: {
      analyticity: 0.42,
      flow: 0.14,
      metacognition: 0.25,
      authenticity: 0.19
    },
    min_requirements: { arc_level: 4, analyticity: 0.60 }
  },
  {
    role_code: "PORTFOLIO_MANAGER",
    job_id: "portfolio_manager",
    onet_code: "13-2052.00",
    oecd_core_skills: ["Decision Making", "Monitoring", "Critical Thinking"],
    neuprint_axes_weights: {
      analyticity: 0.38,
      flow: 0.14,
      metacognition: 0.26,
      authenticity: 0.22
    },
    min_requirements: { arc_level: 4, analyticity: 0.60 }
  },
  {
    role_code: "CREDIT_ANALYST",
    job_id: "credit_analyst",
    onet_code: "13-2041.00",
    oecd_core_skills: ["Judgment", "Critical Thinking", "Monitoring"],
    neuprint_axes_weights: {
      analyticity: 0.42,
      flow: 0.14,
      metacognition: 0.25,
      authenticity: 0.19
    },
    min_requirements: { arc_level: 4, analyticity: 0.60 }
  },
  {
    role_code: "ACTUARY",
    job_id: "actuary",
    onet_code: "15-2011.00",
    oecd_core_skills: ["Critical Thinking", "Information Processing", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.40,
      flow: 0.15,
      metacognition: 0.25,
      authenticity: 0.20
    },
    min_requirements: { arc_level: 4, analyticity: 0.60 }
  },
  {
    role_code: "INSURANCE_UNDERWRITER",
    job_id: "insurance_underwriter",
    onet_code: "13-2053.00",
    oecd_core_skills: ["Judgment", "Monitoring", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.40,
      flow: 0.15,
      metacognition: 0.25,
      authenticity: 0.20
    },
    min_requirements: { arc_level: 4, analyticity: 0.60 }
  },
  {
    role_code: "TREASURY_MANAGER",
    job_id: "treasury_manager",
    onet_code: "11-3031.00",
    oecd_core_skills: ["Decision Making", "Monitoring", "Information Processing"],
    neuprint_axes_weights: {
      analyticity: 0.38,
      flow: 0.14,
      metacognition: 0.26,
      authenticity: 0.22
    },
    min_requirements: { arc_level: 4, analyticity: 0.60 }
  },
  // Group 14: Culture·HR·Organization
  {
    role_code: "HR_MANAGER",
    job_id: "hr_manager",
    onet_code: "11-3121.00",
    oecd_core_skills: ["Communication", "Decision Making", "Social Perceptiveness"],
    neuprint_axes_weights: {
      analyticity: 0.16,
      flow: 0.19,
      metacognition: 0.28,
      authenticity: 0.37
    },
    min_requirements: { arc_level: 3, authenticity: 0.55 }
  },
  {
    role_code: "TALENT_MANAGER",
    job_id: "talent_manager",
    onet_code: "11-3121.00",
    oecd_core_skills: ["Communication", "Judgment", "Social Perceptiveness"],
    neuprint_axes_weights: {
      analyticity: 0.16,
      flow: 0.19,
      metacognition: 0.28,
      authenticity: 0.37
    },
    min_requirements: { arc_level: 3, authenticity: 0.55 }
  },
  {
    role_code: "ORGANIZATIONAL_DEVELOPMENT_MANAGER",
    job_id: "organizational_development_manager",
    onet_code: "13-1151.00",
    oecd_core_skills: ["Systems Thinking", "Communication", "Judgment"],
    neuprint_axes_weights: {
      analyticity: 0.16,
      flow: 0.19,
      metacognition: 0.28,
      authenticity: 0.37
    },
    min_requirements: { arc_level: 3, authenticity: 0.55 }
  },
  {
    role_code: "CULTURE_MANAGER",
    job_id: "culture_manager",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Communication", "Social Perceptiveness", "Judgment"],
    neuprint_axes_weights: {
      analyticity: 0.16,
      flow: 0.19,
      metacognition: 0.28,
      authenticity: 0.37
    },
    min_requirements: { arc_level: 3, authenticity: 0.55 }
  },
  {
    role_code: "RECRUITER",
    job_id: "recruiter",
    onet_code: "13-1071.00",
    oecd_core_skills: ["Communication", "Social Perceptiveness", "Decision Making"],
    neuprint_axes_weights: {
      analyticity: 0.18,
      flow: 0.20,
      metacognition: 0.27,
      authenticity: 0.35
    },
    min_requirements: { arc_level: 3, authenticity: 0.55 }
  },
  {
    role_code: "LEARNING_AND_DEVELOPMENT_SPECIALIST",
    job_id: "learning_and_development_specialist",
    onet_code: "13-1151.00",
    oecd_core_skills: ["Learning to Learn", "Communication", "Judgment"],
    neuprint_axes_weights: {
      analyticity: 0.18,
      flow: 0.20,
      metacognition: 0.27,
      authenticity: 0.35
    },
    min_requirements: { arc_level: 3, authenticity: 0.55 }
  },
  // Group 15: Automation·Digital Agent
  {
    role_code: "RPA_AGENT",
    job_id: "rpa_agent",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Time Sharing", "Information Processing", "Monitoring"],
    neuprint_axes_weights: {
      analyticity: 0.25,
      flow: 0.40,
      metacognition: 0.17,
      authenticity: 0.18
    },
    min_requirements: { arc_level: 2, flow: 0.55 }
  },
  {
    role_code: "CHATBOT_OPERATOR",
    job_id: "chatbot_operator",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Communication", "Monitoring", "Information Processing"],
    neuprint_axes_weights: {
      analyticity: 0.25,
      flow: 0.40,
      metacognition: 0.17,
      authenticity: 0.18
    },
    min_requirements: { arc_level: 2, flow: 0.55 }
  },
  {
    role_code: "AUTOMATED_QA_BOT",
    job_id: "automated_qa_bot",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Monitoring", "Information Processing", "Critical Thinking"],
    neuprint_axes_weights: {
      analyticity: 0.25,
      flow: 0.40,
      metacognition: 0.17,
      authenticity: 0.18
    },
    min_requirements: { arc_level: 2, flow: 0.55 }
  },
  {
    role_code: "REPORT_GENERATION_AGENT",
    job_id: "report_generation_agent",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Writing", "Information Processing", "Monitoring"],
    neuprint_axes_weights: {
      analyticity: 0.25,
      flow: 0.40,
      metacognition: 0.17,
      authenticity: 0.18
    },
    min_requirements: { arc_level: 2, flow: 0.55 }
  },
  {
    role_code: "MONITORING_AI",
    job_id: "monitoring_ai",
    onet_code: "TO_VALIDATE",
    oecd_core_skills: ["Monitoring", "Time Sharing", "Information Processing"],
    neuprint_axes_weights: {
      analyticity: 0.24,
      flow: 0.38,
      metacognition: 0.18,
      authenticity: 0.20
    },
    min_requirements: { arc_level: 2, flow: 0.55 }
  },
];

export default ROLE_CONFIGS_FULL_V1;
