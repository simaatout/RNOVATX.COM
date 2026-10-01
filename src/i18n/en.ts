/**
 * English copy. Every string on the site lives here or in src/i18n/fr.ts.
 * Keep both files in the same shape — TypeScript will flag a missing key in fr.ts.
 */
export const en = {
  langName: 'English',
  tagline: 'REPROGRAMMING INNATE IMMUNITY TO SILENCE CNS DISEASES',
  taglineLines: ['REPROGRAMMING INNATE IMMUNITY', 'TO SILENCE CNS DISEASES'],

  nav: {
    home: 'Home',
    about: 'About',
    science: 'Science',
    pipeline: 'Pipeline',
    research: 'Research',
    researchOverview: 'Research Overview',
    publications: 'Publications',
    patent: 'Patent & IP',
    contact: 'Contact',
    cta: 'Partner with us',
    menu: 'Menu',
    close: 'Close menu',
    skip: 'Skip to content',
    primary: 'Primary',
    switchTo: 'Français',
    switchToShort: 'FR',
    switchLabel: 'Voir cette page en français',
    researchMenu: 'Research submenu',
  },

  common: {
    exploreScience: 'Explore our science',
    partner: 'Partner with RNOVA',
    publishedScience: 'Explore the published science',
    readPaper: 'Read the paper',
    viewAll: 'View all publications',
    source: 'Source',
    sources: 'Sources',
    learnMore: 'Learn more',
    conceptual: 'Conceptual illustration — not experimental data.',
    stageTbc: 'Stage to be confirmed',
    email: 'Email',
    copyEmail: 'Copy email',
    copied: 'Copied',
    backToTop: 'Back to top',
    preclinical: 'Research stage',
    doi: 'DOI',
  },

  footer: {
    statement: 'Reprogramming Innate Immunity to Silence CNS Diseases',
    navHeading: 'Company',
    researchHeading: 'Research',
    contactHeading: 'Contact',
    disclaimer:
      'RNOVA Tx programs are in research and preclinical development. No RNOVA Tx therapeutic product has been approved for clinical use. Information on this site is not medical advice.',
    rights: 'All rights reserved.',
  },

  meta: {
    home: {
      title: 'RNOVA Tx | RNA Therapeutics for CNS Diseases',
      description:
        'RNOVA Tx is a Québec-based biotechnology company developing cell-targeted antisense therapeutics that modulate SRSF3 to reprogram dysfunctional innate immunity in ALS, Alzheimer’s disease and related neurodegenerative diseases.',
    },
    about: {
      title: 'About | RNOVA Tx',
      description:
        'The RNOVA Tx story, mission and team — rooted in microglia and innate immunity research at Université Laval and the CERVO Brain Research Centre in Québec City.',
    },
    science: {
      title: 'Science | SRSF3 and Translational Control of Innate Immunity | RNOVA Tx',
      description:
        'How microglia lose immune function in chronic CNS disease, why translation is a therapeutic control point, and how SRSF3-directed antisense aims to reprogram innate immunity.',
    },
    pipeline: {
      title: 'Pipeline | RNOVA Tx',
      description:
        'RNOVA Tx is advancing SRSF3-directed targeted antisense programs in ALS and Alzheimer’s disease, with a next-generation cell-targeted delivery platform.',
    },
    research: {
      title: 'Research Overview | RNOVA Tx',
      description:
        'The published scientific path behind RNOVA Tx: from diverging mRNA and protein networks in microglia to experimental targeting of SRSF3.',
    },
    publications: {
      title: 'Publications | RNOVA Tx',
      description:
        'Peer-reviewed publications on SRSF3, microglia, ALS and innate immune translation that underpin the RNOVA Tx platform.',
    },
    patent: {
      title: 'Patent & Intellectual Property | RNOVA Tx',
      description:
        'Foundational SRSF3 intellectual property: U.S. Patent No. 11,530,258 B2 — use of SRSF3 agents for the treatment of neurological conditions.',
    },
    contact: {
      title: 'Contact | RNOVA Tx',
      description:
        'Contact RNOVA Tx about strategic partnerships, pharmaceutical business development, scientific collaboration and investment.',
    },
  },

  home: {
    hero: {
      eyebrow: 'RNA therapeutics · Innate immunity · CNS',
      lede:
        'RNOVA Tx is developing cell-targeted antisense therapeutics designed to modulate SRSF3 and reprogram dysfunctional innate immune responses in neurodegenerative disease.',
      states: ['Translation repressed', 'SRSF3 targeted', 'Translation restored'],
      diagramTitle: 'From RNA to restored immune protein',
      diagramDesc:
        'An RNA strand moves toward a ribosome. A regulatory node representing SRSF3 first holds translation back; as it is released, a chain of immune protein emerges from the ribosome.',
      scrollHint: 'Scroll',
      labels: { rna: 'Immune mRNA', ribosome: 'Ribosome', srsf3: 'SRSF3', protein: 'Immune protein' },
    },
    challenge: {
      index: '01',
      kicker: 'The challenge',
      title: 'Brain immunity doesn’t just overreact. It fails.',
      body: [
        'Microglia are the resident immune cells of the central nervous system (CNS). They maintain tissue homeostasis, survey their environment and respond to injury.',
        'In chronic neurodegenerative disease, microglia can become persistently activated and functionally dysregulated. Published work in ALS models shows that, over the course of disease, they progressively lose protective immune functions such as phagocytosis.',
        'RNOVA Tx focuses on that loss of immune competence — not simply on “too much inflammation”.',
      ],
      states: [
        { label: 'Homeostatic', text: 'Surveillance, clearance, tissue support' },
        { label: 'Chronically activated', text: 'Persistent activation in disease' },
        { label: 'Dysregulated', text: 'Reduced phagocytosis, weakened immune response' },
      ],
      diagramTitle: 'Conceptual transition of microglial function in chronic disease',
      cite: 'Barreto-Núñez et al., Glia, 2024',
    },
    brake: {
      index: '02',
      kicker: 'The translational brake',
      title: 'The message is there. The protein isn’t.',
      intro:
        'In activated microglia, the most highly induced innate immune mRNAs can reach the ribosome yet fail to become protein. The team’s published work identified the RNA-binding protein SRSF3 at this regulatory checkpoint.',
      steps: [
        { title: 'Immune genes switch on', text: 'Innate immune challenge strongly increases transcription of selected immune genes.' },
        { title: 'mRNA reaches the ribosome', text: 'The transcripts are exported and associate with ribosomes in the cytoplasm.' },
        { title: 'Translation is held back', text: 'A cluster of highly upregulated immune transcripts is not translated into protein.' },
        { title: 'SRSF3 at the checkpoint', text: 'Repression acts through the transcripts’ 3′UTR and involves the RNA-binding protein SRSF3.' },
        { title: 'Release the brake', text: 'Reducing SRSF3 in experimental systems restored synthesis of selected immune proteins.' },
      ],
      cite: 'Boutej et al., Cell Reports, 2017 · Rahimian et al., Molecular Therapy, 2024',
    },
    approach: {
      index: '03',
      kicker: 'The RNOVA approach',
      titleLines: ['Release the brake.', 'Reprogram immune function.'],
      body:
        'Rather than broadly suppressing inflammatory signalling, RNOVA Tx is developing SRSF3-directed antisense therapeutics that aim to restore functional innate immune responses at the level of RNA translation.',
      points: [
        { title: 'Modulate SRSF3', text: 'Antisense oligonucleotides designed to reduce SRSF3 in innate immune cells.' },
        { title: 'Release repression', text: 'Aim: lift translational repression of selected immune transcripts.' },
        { title: 'Restore protein output', text: 'De novo immune protein synthesis has been observed in experimental systems.' },
        { title: 'Reprogram function', text: 'Goal: a more functional innate immune response in CNS disease.' },
      ],
      note: 'All RNOVA Tx programs are at the research and preclinical stage.',
    },
    tech: {
      index: '04',
      kicker: 'Targeted RNA therapeutics',
      title: 'Two technology pillars',
      pillars: [
        {
          tag: 'Antisense strategy',
          name: 'TAT2-SRSF3',
          text: 'SRSF3-directed antisense oligonucleotides conjugated to a cell-penetrating peptide to support uptake into immune cells. Built on the target biology described in RNOVA’s published research and foundational patent.',
          bullets: ['Target: SRSF3', 'Modality: antisense oligonucleotide', 'Status: research stage'],
        },
        {
          tag: 'Next-generation targeting',
          name: 'EAT-ME-SRSF3',
          text: 'An emerging cell-targeted delivery strategy designed to improve therapeutic access of SRSF3-directed antisense to selected innate immune cell populations.',
          bullets: ['Cell-selective delivery under development', 'Designed for innate immune cells', 'Status: research stage'],
        },
      ],
    },
    reach: {
      index: '05',
      kicker: 'Therapeutic reach',
      title: 'Two lead indications. One platform.',
      body:
        'ALS and Alzheimer’s disease are our lead indications. Because dysfunctional innate immunity is a shared feature of many neurodegenerative diseases, the SRSF3 approach may advance to related CNS disorders.',
      core: { short: 'ALS · AD', tag: 'Lead indications' },
      leads: [
        { tag: 'Lead indication', name: 'ALS', text: 'Amyotrophic lateral sclerosis — the disease in which the team characterized microglial dysfunction, with preclinical evidence for SRSF3 targeting in ALS mouse models, including TDP-43 models.' },
        { tag: 'Lead indication', name: 'Alzheimer’s disease', text: 'A second lead indication, supported by preclinical studies of SRSF3 targeting in mouse models.' },
      ],
      advancement: { tag: 'Advancement', name: 'Related neurodegenerative diseases', text: 'Including the ALS–frontotemporal dementia (FTD) spectrum and other conditions marked by microglial dysfunction.' },
      footnote: 'All RNOVA Tx programs are preclinical. Evidence to date comes from experimental models; clinical efficacy has not been established.',
    },
    published: {
      index: '06',
      kicker: 'Built on published science',
      title: 'Peer-reviewed from the start.',
      milestones: [
        { year: '2017', journal: 'Cell Reports', text: 'In activated microglia, highly upregulated innate immune mRNAs are not translated. SRSF3 is identified as a regulator of this translational repression.' },
        { year: '2024', journal: 'Glia', text: 'Chronically activated microglia in an ALS model progressively lose immune functions, including phagocytic capacity, and develop an unconventional proteome.' },
        { year: '2024', journal: 'Molecular Therapy', text: 'After experimental stroke, SRSF3-directed siRNA restores translation of selected immune proteins in microglia/macrophages.' },
      ],
    },
    pipelinePreview: {
      index: '07',
      kicker: 'Pipeline',
      title: 'An SRSF3 platform for ALS and Alzheimer’s disease.',
      cta: 'View pipeline',
    },
    path: {
      index: '08',
      kicker: 'From discovery toward translation',
      title: 'The development path',
      legend: { published: 'Supported by published research', active: 'Current focus', tbc: 'Status to be confirmed', planned: 'Planned' },
    },
    partner: {
      title: 'Advancing a new paradigm in CNS immunotherapy.',
      body:
        'RNOVA Tx welcomes conversations with pharmaceutical, biotechnology, scientific and development partners interested in RNA therapeutics and neurodegenerative disease.',
      cta: 'Partner with RNOVA',
    },
  },

  about: {
    hero: {
      kicker: 'About RNOVA Tx',
      title: 'From a discovery in microglia to a therapeutic company.',
      lede:
        'RNOVA Tx is a Québec-based biotechnology company translating research on RNA regulation and innate immunity into targeted therapeutics for CNS diseases.',
    },
    story: {
      kicker: 'Our story',
      title: 'Two decades of microglia research. One regulatory checkpoint.',
      steps: [
        { title: 'Microglial innate immunity', text: 'Long-standing research at Université Laval and the CERVO Brain Research Centre on how microglia respond to brain injury and neurodegeneration.' },
        { title: 'A translational checkpoint', text: 'Parallel profiling of microglial mRNAs and proteins revealed that key immune transcripts are held back from translation — and implicated SRSF3.' },
        { title: 'A therapeutic hypothesis', text: 'If SRSF3 restrains immune protein synthesis in diseased microglia, reducing it could restore a more functional immune response.' },
        { title: 'Antisense strategies', text: 'SRSF3-directed antisense tools were developed and studied in experimental systems, supported by foundational intellectual property.' },
        { title: 'RNOVA Tx', text: 'RNOVA Tx was created to advance this approach toward the clinic, beginning with ALS and Alzheimer’s disease.' },
      ],
    },
    mission: {
      kicker: 'Mission',
      text: 'To translate discoveries in RNA regulation and innate immunity into targeted therapeutics for devastating CNS diseases.',
    },
    vision: {
      kicker: 'Vision',
      text: 'A future in which dysfunctional CNS immunity can be therapeutically reprogrammed at the level of RNA regulation.',
    },
    team: {
      kicker: 'Team',
      title: 'The people behind RNOVA Tx',
      founders: 'Co-founders',
      members: 'Research team',
    },
    roots: {
      kicker: 'Scientific roots',
      title: 'Québec City, Canada',
      text: 'Rooted in research from Université Laval and the CERVO Brain Research Centre, within Québec’s growing RNA life-science ecosystem.',
      facts: [
        { label: 'Location', value: 'Québec City, Canada' },
        { label: 'Scientific roots', value: 'Université Laval · CERVO Brain Research Centre' },
        { label: 'Focus', value: 'RNA therapeutics for CNS diseases' },
      ],
    },
  },

  science: {
    hero: {
      kicker: 'Science',
      title: 'Restoring immune function at the level of RNA.',
      lede:
        'Our scientific rationale in seven steps — from the biology of microglia to a cell-targeted antisense strategy directed at SRSF3.',
    },
    toc: 'On this page',
    s1: {
      index: '01',
      title: 'Microglia and CNS immunity',
      body: [
        'Microglia are the principal immune cells of the brain and spinal cord. Under physiological conditions they are essential for maintaining tissue homeostasis and continuously survey their environment.',
        'After injury or in disease, microglia initiate and regulate innate immune responses. A timely, well-controlled microglial response helps limit damage to the nervous system.',
      ],
      cites: ['boutej-2017', 'rahimian-2024'],
    },
    s2: {
      index: '02',
      title: 'Chronic disease and functional dysregulation',
      body: [
        'In ALS, activated microglia are a prominent feature of pathology. Studying microglia at different disease stages in the SOD1-G93A mouse model, the team found that cells from advanced disease showed markedly reduced phagocytic capacity and a diminished response to innate immune challenge.',
        'At the protein level, advanced-stage microglia developed an unconventional signature whose top functions were linked to RNA metabolism rather than immunity. The picture is not simply “good” or “bad” inflammation: chronically activated microglia gradually lose their immune identity and become functionally inefficient.',
      ],
      cites: ['barreto-nunez-2024', 'beland-2020'],
    },
    s3: {
      index: '03',
      title: 'RNA translation as a therapeutic control point',
      body: [
        'Genes are transcribed into messenger RNA (mRNA), which ribosomes translate into protein. Measuring mRNA alone assumes that more message means more protein.',
        'In activated microglia, that assumption breaks down. The most highly upregulated innate immune transcripts were bound to ribosomes yet were not detected as protein — while unregulated transcripts were translated normally. Translation itself becomes a point of control.',
      ],
      flow: ['DNA', 'mRNA', 'Ribosome', 'Protein'],
      gapTitle: 'The gap',
      gapText: 'High mRNA, little or no protein',
      cites: ['boutej-2017'],
    },
    s4: {
      index: '04',
      title: 'SRSF3',
      body: [
        'SRSF3 (serine/arginine-rich splicing factor 3, also known as SRp20) is the smallest member of the SR protein family of RNA-binding proteins. Like other SR proteins it participates in alternative splicing, and it also has roles in mRNA export, stability and translation.',
        'The team’s published work implicates SRSF3 in the translational repression of selected, highly upregulated innate immune transcripts in microglia/macrophages. Repression acts through the transcripts’ 3′ untranslated region (3′UTR), which contains many putative SRSF3 binding sites. SRSF3 does not control every immune gene — its effect is selective.',
        'The phosphorylated form of SRSF3 increases in activated microglia/macrophages after immune challenge and after experimental stroke.',
      ],
      facts: [
        { label: 'Family', value: 'SR proteins (RNA-binding)' },
        { label: 'Alias', value: 'SRp20' },
        { label: 'Role studied', value: 'Selective translational repression' },
        { label: 'Mechanism', value: '3′UTR-mediated' },
      ],
      cites: ['boutej-2017', 'rahimian-2024'],
    },
    s5: {
      index: '05',
      title: 'RNOVA’s therapeutic hypothesis',
      disease: {
        title: 'Disease / chronic activation',
        steps: [
          'SRSF3 regulatory state increased or dysregulated',
          'Translation of selected immune mRNAs restrained',
          'Fewer functional immune proteins produced',
          'Dysfunctional immune phenotype',
        ],
      },
      concept: {
        title: 'RNOVA concept',
        steps: [
          'SRSF3-directed antisense',
          'Modulation / reduction of SRSF3',
          'Release of selected translational repression',
          'De novo immune protein synthesis (experimental systems)',
          'Restored, reprogrammed functional response',
        ],
      },
      note:
        'In published experimental models, reducing SRSF3 with RNA-silencing tools restored translation of selected immune proteins in microglia/macrophages. Whether this translates into therapeutic benefit in patients has not been established.',
      cites: ['boutej-2017', 'rahimian-2024'],
    },
    s6: {
      index: '06',
      title: 'Cell-targeted antisense',
      body: [
        'Antisense oligonucleotides (ASOs) are short, synthetic nucleic-acid strands that bind a specific RNA sequence. RNOVA Tx uses antisense chemistry to reduce SRSF3 production.',
        'Because SRSF3 has functions in many cell types, where the drug goes matters. RNOVA Tx is developing delivery strategies intended to favour uptake by innate immune cells — including a peptide-conjugated antisense approach (TAT2-SRSF3) and a next-generation, cell-selective targeting strategy (EAT-ME-SRSF3).',
      ],
      eatMe:
        'EAT-ME-SRSF3 is an emerging targeting strategy under development. It is designed to improve delivery of SRSF3-directed antisense to selected innate immune cell populations. Technical details are not disclosed at this stage.',
    },
    s7: {
      index: '07',
      title: 'Why this approach is different',
      body:
        'Many approaches to neuroinflammation aim to dampen inflammatory signalling. RNOVA Tx is exploring a complementary idea: restoring the protective functions that chronically activated microglia lose, by acting on how immune messages are translated.',
      compare: [
        { label: 'Level of action', a: 'Signalling pathways, cytokines or receptors', b: 'RNA translation of selected immune transcripts' },
        { label: 'Goal', a: 'Reduce inflammatory activity', b: 'Restore functional immune protein output' },
        { label: 'Target cell', a: 'Often broad', b: 'Designed for innate immune cells' },
      ],
      compareHeads: ['', 'Broad suppression', 'RNOVA approach'],
      disclaimer: 'Conceptual comparison only. No clinical superiority is claimed.',
    },
  },

  pipeline: {
    hero: {
      kicker: 'Pipeline',
      title: 'SRSF3-directed targeted antisense.',
      lede:
        'RNOVA Tx is advancing an SRSF3 platform in ALS and Alzheimer’s disease, supported by a next-generation cell-targeted delivery strategy. All programs are at the research and preclinical stage.',
    },
    headers: { program: 'Program', modality: 'Modality', indication: 'Indication', stage: 'Stage' },
    tbc: 'Stage to be confirmed',
    kinds: { lead: 'Lead', advancement: 'Advancement', platform: 'Platform' },
    target: 'Target',
    legend: 'Development stages are shown only once confirmed. A dashed track means the stage has not yet been published.',
    note: 'No RNOVA Tx program has entered clinical trials. Program names, indications and stages will be updated as they are confirmed.',
  },

  research: {
    hero: {
      kicker: 'Research overview',
      title: 'The published path to RNOVA Tx.',
      lede:
        'Each step in the RNOVA concept rests on peer-reviewed research from the Kriz laboratory at Université Laval and the CERVO Brain Research Centre.',
    },
    timeline: [
      { year: '2016', title: 'Foundational microglial biology in ALS', text: 'Microglial phenotypes shift adaptively in preclinical stages of SOD1-mediated ALS, with IL-10 controlling early microglial responses.', pubs: ['gravel-2016'] },
      { year: '2017', title: 'Diverging mRNA and protein networks', text: 'Ribosome profiling of microglia in vivo shows that highly upregulated immune mRNAs are not translated after innate immune challenge.', pubs: ['boutej-2017'] },
      { year: '2017', title: 'SRSF3-associated translational repression', text: 'Repression is 3′UTR-mediated and involves SRSF3; SRSF3 knockdown increases synthesis of immune proteins in vitro and in vivo.', pubs: ['boutej-2017'] },
      { year: '2020', title: 'Rethinking immunity in ALS', text: 'Excessive inflammation and inefficient immune responses can coexist in ALS.', pubs: ['beland-2020'] },
      { year: '2024', title: 'Chronic microglial dysfunction in neurodegeneration', text: 'Chronically activated ALS microglia lose immune functions and acquire an unconventional proteome.', pubs: ['barreto-nunez-2024'] },
      { year: '2024', title: 'Experimental SRSF3 targeting', text: 'After experimental stroke, SRSF3-directed siRNA restores translation of selected immune proteins in microglia/macrophages.', pubs: ['rahimian-2024'] },
      { year: 'Now', title: 'RNOVA Tx translational development', text: 'Development of cell-targeted SRSF3-directed antisense therapeutics for ALS and Alzheimer’s disease.', pubs: [] },
    ],
    links: { publications: 'Publication library', patent: 'Patent & IP' },
  },

  publications: {
    hero: {
      kicker: 'Publications',
      title: 'The science, in peer-reviewed journals.',
      lede: 'Publications that underpin the RNOVA Tx platform. Titles are shown as published.',
    },
    filterLabel: 'Filter by topic',
    all: 'All',
    authors: 'Authors',
    why: 'Why it matters',
    count: (n: number) => `${n} publication${n === 1 ? '' : 's'}`,
  },

  patent: {
    hero: {
      kicker: 'Patent & IP',
      title: 'Foundational intellectual property.',
      lede: 'The SRSF3 platform is supported by a granted U.S. patent and related international filings.',
    },
    patentLabel: 'Patent',
    titleLabel: 'Official title',
    issued: 'Issued',
    covers: 'What it covers',
    coversNote: 'Plain-language summary. The claims of the issued patent define its actual scope.',
    inventors: 'Inventors',
    assignee: 'Assignee',
    filing: 'Filing data',
    application: 'Application',
    pct: 'PCT application',
    priority: 'Priority',
    claims: 'Claims',
    family: 'Patent family',
    familyNote: 'As listed on the public record for WO 2019/095064. Status may change.',
    jurisdiction: 'Jurisdiction',
    number: 'Number',
    status: 'Status',
    relationship: 'Relationship to RNOVA Tx',
    official: 'View on Google Patents',
    uspto: 'USPTO Patent Public Search',
  },

  contact: {
    hero: {
      kicker: 'Contact',
      title: 'Let’s advance the next generation of RNA therapeutics.',
      lede: 'We welcome conversations about partnership, collaboration and investment.',
    },
    audiences: [
      { title: 'Strategic partnerships', text: 'Co-development and licensing discussions.' },
      { title: 'Pharmaceutical business development', text: 'Platform and program-level conversations.' },
      { title: 'Scientific collaboration', text: 'RNA biology, microglia and CNS disease models.' },
      { title: 'Investment & corporate inquiries', text: 'Company and financing conversations.' },
    ],
    emailUs: 'Write to us',
    location: 'Location',
    roots: 'Scientific roots',
    mailSubject: 'Inquiry — RNOVA Tx',
  },

  notFound: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved.',
    cta: 'Back to home',
  },
};

export type Dict = typeof en;
