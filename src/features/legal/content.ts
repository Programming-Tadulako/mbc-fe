export type LegalSection = {
  id: string;
  title: string;
  body: string;
  bullets?: string[];
};

export const privacyMeta = {
  title: "Privacy Policy",
  subtitle:
    "How PT. Mitra Borneo Cemerlang collects, uses, and protects your information.",
  lastUpdated: "2026",
};

export const privacySections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    body: "PT. Mitra Borneo Cemerlang is committed to protecting the privacy of our clients, partners, and website visitors. This Privacy Policy explains what information we collect, why we collect it, and how we handle it in connection with our corporate vehicle rental services.",
  },
  {
    id: "data-collected",
    title: "Data We Collect",
    body: "When you engage with our services or contact us, we may collect the following categories of information:",
    bullets: [
      "Identity data: full name, position, and institutional affiliation of authorised representatives.",
      "Contact data: business email address, phone number, and office address.",
      "Contractual data: details required to draft and execute rental agreements, including NPWP and institutional registration numbers.",
      "Usage data: information about how you interact with our website (pages visited, referral source, browser type).",
      "Communication records: emails, messages, or notes exchanged during service inquiries and contract negotiations.",
    ],
  },
  {
    id: "data-use",
    title: "How We Use Your Data",
    body: "We process your personal information for the following lawful purposes:",
    bullets: [
      "To deliver vehicle rental services under signed agreements.",
      "To prepare, execute, and manage contracts and invoices.",
      "To communicate service updates, schedules, and maintenance notices.",
      "To comply with Indonesian tax and legal reporting obligations.",
      "To improve our website, services, and internal operations.",
      "To respond to inquiries and provide customer support.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention & Security",
    body: "We retain personal data only as long as necessary to fulfil the purposes outlined in this policy and to comply with applicable Indonesian law, including tax and commercial record-keeping requirements (generally a minimum of five years after contract termination). We implement administrative, technical, and physical safeguards — including access controls and encrypted communications — to protect your information against unauthorised access, disclosure, or loss.",
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: "As a data subject under applicable Indonesian law, you have the right to:",
    bullets: [
      "Request access to the personal data we hold about you.",
      "Request correction of inaccurate or incomplete data.",
      "Request deletion of data that is no longer necessary for its original purpose.",
      "Object to processing based on our legitimate interests.",
      "Withdraw consent at any time where processing is based on consent.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    body: "For any privacy-related questions, requests, or complaints, please reach out to us directly. We aim to respond within ten business days.",
    bullets: [
      "Email: mitraborneocemerlang@gmail.com",
      "Address: Citywalk Sudirman No.121 Jalan KH. Mas Mansyur Kelurahan Karet Tengsin, Tanah Abang, Jakarta Pusat 10220",
    ],
  },
];

export const termsMeta = {
  title: "Terms of Service",
  subtitle:
    "The terms and conditions governing use of MBC's corporate vehicle rental services.",
  lastUpdated: "2026",
};

export const termsSections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement to Terms",
    body: "By engaging PT. Mitra Borneo Cemerlang ('MBC') for vehicle rental services — whether by signing a contract, submitting a formal request, or otherwise using our services — you ('Client') agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.",
  },
  {
    id: "services",
    title: "Our Services",
    body: "MBC provides corporate vehicle rental solutions including, but not limited to:",
    bullets: [
      "Short-term and long-term vehicle rental under formal agreements.",
      "Driver-inclusive and self-drive rental options subject to availability.",
      "Fleet management support for government and institutional clients.",
      "Scheduled maintenance coordination to minimise operational downtime.",
    ],
  },
  {
    id: "eligibility",
    title: "Client Eligibility",
    body: "Our services are available exclusively to legal entities, government bodies, and authorised institutional representatives. Individual consumers are not eligible without prior written consent from MBC. Clients must provide valid institutional credentials (NIB, NPWP, or equivalent) before a rental agreement is executed.",
  },
  {
    id: "rental-conditions",
    title: "Rental Conditions",
    body: "The following conditions apply to all rental agreements:",
    bullets: [
      "Vehicles must be used only for lawful purposes and within the territory specified in the rental agreement.",
      "The Client is responsible for any traffic violations, fines, or penalties incurred during the rental period.",
      "Clients must report any damage, accident, or vehicle malfunction to MBC immediately.",
      "Unauthorised modifications or sub-letting of rented vehicles is strictly prohibited.",
      "Vehicles must be returned in the same condition as received, subject to normal wear and tear.",
    ],
  },
  {
    id: "payment",
    title: "Payment & Pricing",
    body: "Rental rates are established in writing prior to agreement execution. Invoices are issued monthly or as agreed. Payment is due within the period specified in the signed contract. Late payments may incur penalties as stipulated therein. MBC reserves the right to adjust rates upon renewal with a minimum 30-day written notice.",
  },
  {
    id: "sla",
    title: "Service Level Commitments",
    body: "MBC strives to meet the following service benchmarks, subject to force majeure and circumstances beyond our reasonable control:",
    bullets: [
      "Vehicle readiness: maintaining agreed fleet availability throughout the contract period.",
      "Timely logistics: delivery and collection of vehicles within the scheduled window.",
      "Responsive support: acknowledgement of service requests within one business day.",
      "Proactive maintenance: scheduled servicing to prevent operational disruptions.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: "To the maximum extent permitted by applicable Indonesian law, MBC's total liability arising from or related to a rental agreement shall not exceed the total rental fees paid by the Client in the three months preceding the event giving rise to the claim. MBC shall not be liable for any indirect, incidental, or consequential losses including lost revenue or business opportunities.",
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: "These Terms of Service are governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes arising from or in connection with these terms shall be resolved through good-faith negotiation. If negotiation fails, disputes shall be submitted to the competent court in Balikpapan, East Kalimantan.",
  },
  {
    id: "amendments",
    title: "Amendments",
    body: "MBC reserves the right to modify these Terms of Service at any time. Material changes will be communicated to active Clients via the contact details on file with a minimum notice period of 30 days. Continued use of our services after the effective date of changes constitutes acceptance of the revised terms.",
  },
  {
    id: "contact",
    title: "Contact",
    body: "For questions regarding these Terms of Service or any aspect of our rental agreements, please contact us:",
    bullets: [
      "Email: mitraborneocemerlang@gmail.com",
      "Address: Citywalk Sudirman No.121 Jalan KH. Mas Mansyur Kelurahan Karet Tengsin, Tanah Abang, Jakarta Pusat 10220",
    ],
  },
];
