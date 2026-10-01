import type { Dict } from './en';

/**
 * Contenu français. Même structure que src/i18n/en.ts.
 * Les titres officiels des publications et du brevet ne sont jamais traduits
 * (ils proviennent de src/data/).
 */
export const fr: Dict = {
  langName: 'Français',
  // TODO_FRENCH_TAGLINE_CONFIRM — traduction provisoire du slogan; remplacer ici si une version officielle est approuvée.
  tagline: 'REPROGRAMMER L’IMMUNITÉ INNÉE POUR FAIRE TAIRE LES MALADIES DU SNC',
  taglineLines: ['REPROGRAMMER L’IMMUNITÉ INNÉE', 'POUR FAIRE TAIRE LES MALADIES DU SNC'],

  nav: {
    home: 'Accueil',
    about: 'À propos',
    science: 'Science',
    pipeline: 'Pipeline',
    research: 'Recherche',
    researchOverview: 'Aperçu de la recherche',
    publications: 'Publications',
    patent: 'Brevet et propriété intellectuelle',
    contact: 'Nous joindre',
    cta: 'Collaborer avec nous',
    menu: 'Menu',
    close: 'Fermer le menu',
    skip: 'Aller au contenu',
    primary: 'Principale',
    switchTo: 'English',
    switchToShort: 'EN',
    switchLabel: 'View this page in English',
    researchMenu: 'Sous-menu Recherche',
  },

  common: {
    exploreScience: 'Découvrir notre science',
    partner: 'Collaborer avec RNOVA',
    publishedScience: 'Consulter la science publiée',
    readPaper: 'Lire l’article',
    viewAll: 'Voir toutes les publications',
    source: 'Source',
    sources: 'Sources',
    learnMore: 'En savoir plus',
    conceptual: 'Illustration conceptuelle — il ne s’agit pas de données expérimentales.',
    stageTbc: 'Stade à confirmer',
    email: 'Courriel',
    copyEmail: 'Copier le courriel',
    copied: 'Copié',
    backToTop: 'Haut de page',
    preclinical: 'Stade de recherche',
    doi: 'DOI',
  },

  footer: {
    statement: 'Reprogrammer l’immunité innée pour faire taire les maladies du SNC',
    navHeading: 'Entreprise',
    researchHeading: 'Recherche',
    contactHeading: 'Nous joindre',
    disclaimer:
      'Les programmes de RNOVA Tx sont aux stades de la recherche et du développement préclinique. Aucun produit thérapeutique de RNOVA Tx n’est approuvé pour un usage clinique. Les renseignements présentés sur ce site ne constituent pas un avis médical.',
    rights: 'Tous droits réservés.',
  },

  meta: {
    home: {
      title: 'RNOVA Tx | Thérapies à ARN pour les maladies du SNC',
      description:
        'RNOVA Tx est une société de biotechnologie québécoise qui développe des thérapies antisens ciblées visant SRSF3 afin de reprogrammer l’immunité innée dysfonctionnelle dans la SLA et les maladies neurodégénératives apparentées.',
    },
    about: {
      title: 'À propos | RNOVA Tx',
      description:
        'L’histoire, la mission et l’équipe de RNOVA Tx — issues de la recherche sur la microglie et l’immunité innée à l’Université Laval et au Centre de recherche CERVO, à Québec.',
    },
    science: {
      title: 'Science | SRSF3 et contrôle traductionnel de l’immunité innée | RNOVA Tx',
      description:
        'Comment la microglie perd ses fonctions immunitaires dans les maladies chroniques du SNC, pourquoi la traduction constitue un point de contrôle thérapeutique et comment un antisens dirigé contre SRSF3 vise à reprogrammer l’immunité innée.',
    },
    pipeline: {
      title: 'Pipeline | RNOVA Tx',
      description:
        'RNOVA Tx fait progresser des programmes d’antisens ciblés dirigés contre SRSF3, menés par la SLA, ainsi qu’une plateforme de livraison ciblée de nouvelle génération.',
    },
    research: {
      title: 'Aperçu de la recherche | RNOVA Tx',
      description:
        'Le parcours scientifique publié derrière RNOVA Tx : des réseaux divergents d’ARNm et de protéines dans la microglie au ciblage expérimental de SRSF3.',
    },
    publications: {
      title: 'Publications | RNOVA Tx',
      description:
        'Publications révisées par les pairs sur SRSF3, la microglie, la SLA et la traduction des gènes immunitaires innés, qui fondent la plateforme de RNOVA Tx.',
    },
    patent: {
      title: 'Brevet et propriété intellectuelle | RNOVA Tx',
      description:
        'Propriété intellectuelle fondatrice liée à SRSF3 : brevet américain nᵒ 11,530,258 B2 — utilisation d’agents SRSF3 pour le traitement d’affections neurologiques.',
    },
    contact: {
      title: 'Nous joindre | RNOVA Tx',
      description:
        'Communiquez avec RNOVA Tx au sujet de partenariats stratégiques, de développement des affaires pharmaceutiques, de collaborations scientifiques et d’investissement.',
    },
  },

  home: {
    hero: {
      eyebrow: 'Thérapies à ARN · Immunité innée · SNC',
      lede:
        'RNOVA Tx développe des thérapies antisens ciblées, conçues pour moduler SRSF3 et reprogrammer les réponses immunitaires innées dysfonctionnelles dans les maladies neurodégénératives.',
      states: ['Traduction réprimée', 'SRSF3 ciblée', 'Traduction rétablie'],
      diagramTitle: 'De l’ARN à la protéine immunitaire rétablie',
      diagramDesc:
        'Un brin d’ARN se dirige vers un ribosome. Un nœud régulateur représentant SRSF3 freine d’abord la traduction; lorsqu’il est levé, une chaîne de protéine immunitaire émerge du ribosome.',
      scrollHint: 'Défiler',
      labels: { rna: 'ARNm immunitaire', ribosome: 'Ribosome', srsf3: 'SRSF3', protein: 'Protéine immunitaire' },
    },
    challenge: {
      index: '01',
      kicker: 'Le défi',
      title: 'L’immunité du cerveau ne fait pas que s’emballer. Elle s’épuise.',
      body: [
        'La microglie constitue la population de cellules immunitaires résidentes du système nerveux central (SNC). Elle maintient l’homéostasie des tissus, surveille son environnement et réagit aux lésions.',
        'Dans les maladies neurodégénératives chroniques, la microglie peut demeurer activée de façon persistante et devenir fonctionnellement déréglée. Des travaux publiés dans des modèles de SLA montrent qu’au fil de la maladie, elle perd progressivement des fonctions immunitaires protectrices comme la phagocytose.',
        'RNOVA Tx s’attaque à cette perte de compétence immunitaire — et non simplement à un « excès d’inflammation ».',
      ],
      states: [
        { label: 'Homéostatique', text: 'Surveillance, élimination, soutien des tissus' },
        { label: 'Activation chronique', text: 'Activation persistante dans la maladie' },
        { label: 'Dysfonctionnelle', text: 'Phagocytose réduite, réponse immunitaire affaiblie' },
      ],
      diagramTitle: 'Transition conceptuelle de la fonction microgliale dans la maladie chronique',
      cite: 'Barreto-Núñez et al., Glia, 2024',
    },
    brake: {
      index: '02',
      kicker: 'Le frein traductionnel',
      title: 'Le message est là. La protéine, non.',
      intro:
        'Dans la microglie activée, les ARNm immunitaires innés les plus fortement induits peuvent atteindre le ribosome sans pour autant devenir des protéines. Les travaux publiés de l’équipe ont identifié la protéine de liaison à l’ARN SRSF3 à ce point de contrôle.',
      steps: [
        { title: 'Les gènes immunitaires s’activent', text: 'Une stimulation immunitaire innée augmente fortement la transcription de certains gènes immunitaires.' },
        { title: 'L’ARNm atteint le ribosome', text: 'Les transcrits sont exportés et s’associent aux ribosomes dans le cytoplasme.' },
        { title: 'La traduction est freinée', text: 'Un groupe de transcrits immunitaires fortement induits n’est pas traduit en protéines.' },
        { title: 'SRSF3 au point de contrôle', text: 'La répression passe par la région 3′UTR des transcrits et fait intervenir la protéine SRSF3.' },
        { title: 'Lever le frein', text: 'La réduction de SRSF3 dans des systèmes expérimentaux a rétabli la synthèse de protéines immunitaires sélectionnées.' },
      ],
      cite: 'Boutej et al., Cell Reports, 2017 · Rahimian et al., Molecular Therapy, 2024',
    },
    approach: {
      index: '03',
      kicker: 'L’approche RNOVA',
      titleLines: ['Lever le frein.', 'Reprogrammer la fonction immunitaire.'],
      body:
        'Plutôt que de supprimer globalement la signalisation inflammatoire, RNOVA Tx développe des thérapies antisens dirigées contre SRSF3 qui visent à rétablir des réponses immunitaires innées fonctionnelles, au niveau de la traduction de l’ARN.',
      points: [
        { title: 'Moduler SRSF3', text: 'Des oligonucléotides antisens conçus pour réduire SRSF3 dans les cellules immunitaires innées.' },
        { title: 'Lever la répression', text: 'Objectif : lever la répression traductionnelle de transcrits immunitaires sélectionnés.' },
        { title: 'Rétablir la production de protéines', text: 'Une synthèse de novo de protéines immunitaires a été observée dans des systèmes expérimentaux.' },
        { title: 'Reprogrammer la fonction', text: 'But : une réponse immunitaire innée plus fonctionnelle dans les maladies du SNC.' },
      ],
      note: 'Tous les programmes de RNOVA Tx en sont aux stades de la recherche et du développement préclinique.',
    },
    tech: {
      index: '04',
      kicker: 'Thérapies à ARN ciblées',
      title: 'Deux piliers technologiques',
      pillars: [
        {
          tag: 'Stratégie antisens',
          name: 'TAT2-SRSF3',
          text: 'Des oligonucléotides antisens dirigés contre SRSF3, conjugués à un peptide de pénétration cellulaire pour favoriser leur entrée dans les cellules immunitaires. Fondés sur la biologie de la cible décrite dans les travaux publiés et le brevet fondateur de RNOVA.',
          bullets: ['Cible : SRSF3', 'Modalité : oligonucléotide antisens', 'Statut : stade de recherche'],
        },
        {
          tag: 'Ciblage de nouvelle génération',
          name: 'EAT-ME-SRSF3',
          text: 'Une stratégie émergente de livraison ciblée, conçue pour améliorer l’accès thérapeutique des antisens anti-SRSF3 à certaines populations de cellules immunitaires innées.',
          bullets: ['Livraison sélective en développement', 'Conçue pour les cellules immunitaires innées', 'Statut : stade de recherche'],
        },
      ],
    },
    reach: {
      index: '05',
      kicker: 'Portée thérapeutique',
      title: 'La SLA d’abord. Pas seulement la SLA.',
      body:
        'La SLA est notre indication principale. Comme le dysfonctionnement de l’immunité innée est une caractéristique commune à de nombreuses maladies neurodégénératives, l’approche SRSF3 pourrait s’étendre à d’autres troubles apparentés du SNC.',
      lead: { tag: 'Indication principale', name: 'SLA', text: 'Sclérose latérale amyotrophique — la cible du programme principal de RNOVA Tx et la maladie dans laquelle l’équipe a caractérisé le dysfonctionnement microglial.' },
      advancement: [
        { tag: 'Avancement', name: 'Maladies neurodégénératives apparentées', text: 'Notamment la démence frontotemporale (DFT), la maladie d’Alzheimer (MA) et les démences apparentées.' },
      ],
      footnote: 'Tous les programmes de RNOVA Tx en sont aux stades de la recherche et du développement préclinique. Aucune efficacité clinique n’a été démontrée.',
    },
    published: {
      index: '06',
      kicker: 'Fondée sur la science publiée',
      title: 'Révisée par les pairs dès le départ.',
      milestones: [
        { year: '2017', journal: 'Cell Reports', text: 'Dans la microglie activée, des ARNm immunitaires innés fortement induits ne sont pas traduits. SRSF3 est identifiée comme régulateur de cette répression traductionnelle.' },
        { year: '2024', journal: 'Glia', text: 'Dans un modèle de SLA, la microglie chroniquement activée perd progressivement ses fonctions immunitaires, dont sa capacité phagocytaire, et développe un protéome inhabituel.' },
        { year: '2024', journal: 'Molecular Therapy', text: 'Après un AVC expérimental, un ARNsi dirigé contre SRSF3 rétablit la traduction de protéines immunitaires sélectionnées dans la microglie et les macrophages.' },
      ],
    },
    pipelinePreview: {
      index: '07',
      kicker: 'Pipeline',
      title: 'Une plateforme SRSF3, menée par la SLA.',
      cta: 'Voir le pipeline',
    },
    path: {
      index: '08',
      kicker: 'De la découverte vers la clinique',
      title: 'Le parcours de développement',
      legend: { published: 'Appuyé par la recherche publiée', active: 'Priorité actuelle', tbc: 'Statut à confirmer', planned: 'Prévu' },
    },
    partner: {
      title: 'Faire progresser un nouveau paradigme en immunothérapie du SNC.',
      body:
        'RNOVA Tx accueille les échanges avec des partenaires pharmaceutiques, biotechnologiques, scientifiques et de développement qui s’intéressent aux thérapies à ARN et aux maladies neurodégénératives.',
      cta: 'Collaborer avec RNOVA',
    },
  },

  about: {
    hero: {
      kicker: 'À propos de RNOVA Tx',
      title: 'D’une découverte sur la microglie à une entreprise thérapeutique.',
      lede:
        'RNOVA Tx est une société de biotechnologie québécoise qui transforme la recherche sur la régulation de l’ARN et l’immunité innée en thérapies ciblées pour les maladies du SNC.',
    },
    story: {
      kicker: 'Notre histoire',
      title: 'Deux décennies de recherche sur la microglie. Un point de contrôle.',
      steps: [
        { title: 'L’immunité innée de la microglie', text: 'Des recherches de longue date à l’Université Laval et au Centre de recherche CERVO sur la réponse de la microglie aux lésions cérébrales et à la neurodégénérescence.' },
        { title: 'Un point de contrôle traductionnel', text: 'Le profilage parallèle des ARNm et des protéines microgliales a révélé que des transcrits immunitaires clés ne sont pas traduits — et a mis en cause SRSF3.' },
        { title: 'Une hypothèse thérapeutique', text: 'Si SRSF3 freine la synthèse de protéines immunitaires dans la microglie malade, la réduire pourrait rétablir une réponse immunitaire plus fonctionnelle.' },
        { title: 'Des stratégies antisens', text: 'Des outils antisens dirigés contre SRSF3 ont été développés et étudiés dans des systèmes expérimentaux, appuyés par une propriété intellectuelle fondatrice.' },
        { title: 'RNOVA Tx', text: 'RNOVA Tx a été créée pour faire progresser cette approche vers la clinique, en commençant par la SLA.' },
      ],
    },
    mission: {
      kicker: 'Mission',
      text: 'Transformer les découvertes sur la régulation de l’ARN et l’immunité innée en thérapies ciblées contre des maladies dévastatrices du SNC.',
    },
    vision: {
      kicker: 'Vision',
      text: 'Un avenir où l’immunité dysfonctionnelle du SNC peut être reprogrammée sur le plan thérapeutique, au niveau de la régulation de l’ARN.',
    },
    team: {
      kicker: 'Équipe',
      title: 'Les personnes derrière RNOVA Tx',
      founders: 'Cofondatrices',
      members: 'Équipe de recherche',
    },
    roots: {
      kicker: 'Racines scientifiques',
      title: 'Québec, Canada',
      text: 'Issue de la recherche menée à l’Université Laval et au Centre de recherche CERVO, au sein de l’écosystème québécois en pleine croissance des sciences de la vie liées à l’ARN.',
      facts: [
        { label: 'Emplacement', value: 'Québec, Canada' },
        { label: 'Racines scientifiques', value: 'Université Laval · Centre de recherche CERVO' },
        { label: 'Domaine', value: 'Thérapies à ARN pour les maladies du SNC' },
      ],
    },
  },

  science: {
    hero: {
      kicker: 'Science',
      title: 'Rétablir la fonction immunitaire au niveau de l’ARN.',
      lede:
        'Notre raisonnement scientifique en sept étapes — de la biologie de la microglie à une stratégie antisens ciblée dirigée contre SRSF3.',
    },
    toc: 'Sur cette page',
    s1: {
      index: '01',
      title: 'La microglie et l’immunité du SNC',
      body: [
        'La microglie est la principale population de cellules immunitaires du cerveau et de la moelle épinière. En conditions physiologiques, elle est essentielle au maintien de l’homéostasie des tissus et surveille constamment son environnement.',
        'Après une lésion ou en présence de maladie, la microglie amorce et régule les réponses immunitaires innées. Une réponse microgliale opportune et bien contrôlée contribue à limiter les dommages au système nerveux.',
      ],
      cites: ['boutej-2017', 'rahimian-2024'],
    },
    s2: {
      index: '02',
      title: 'Maladie chronique et dérèglement fonctionnel',
      body: [
        'Dans la SLA, la microglie activée est une caractéristique marquante de la pathologie. En étudiant la microglie à différents stades de la maladie dans le modèle murin SOD1-G93A, l’équipe a constaté qu’aux stades avancés, les cellules présentaient une capacité phagocytaire nettement réduite et une réponse affaiblie aux stimulations immunitaires innées.',
        'Sur le plan protéique, la microglie des stades avancés développait une signature inhabituelle dont les principales fonctions étaient liées au métabolisme de l’ARN plutôt qu’à l’immunité. Le portrait n’est pas celui d’une « bonne » ou d’une « mauvaise » inflammation : la microglie chroniquement activée perd graduellement son identité immunitaire et devient fonctionnellement inefficace.',
      ],
      cites: ['barreto-nunez-2024', 'beland-2020'],
    },
    s3: {
      index: '03',
      title: 'La traduction de l’ARN, un point de contrôle thérapeutique',
      body: [
        'Les gènes sont transcrits en ARN messager (ARNm), que les ribosomes traduisent en protéines. Mesurer uniquement l’ARNm suppose que davantage de messages produit davantage de protéines.',
        'Dans la microglie activée, cette hypothèse ne tient plus. Les transcrits immunitaires innés les plus fortement induits étaient liés aux ribosomes, mais n’étaient pas détectés sous forme de protéines — alors que les transcrits non régulés étaient traduits normalement. La traduction devient elle-même un point de contrôle.',
      ],
      flow: ['ADN', 'ARNm', 'Ribosome', 'Protéine'],
      gapTitle: 'L’écart',
      gapText: 'Beaucoup d’ARNm, peu ou pas de protéines',
      cites: ['boutej-2017'],
    },
    s4: {
      index: '04',
      title: 'SRSF3',
      body: [
        'SRSF3 (facteur d’épissage riche en sérine et en arginine 3, aussi appelé SRp20) est le plus petit membre de la famille des protéines SR, des protéines de liaison à l’ARN. Comme les autres protéines SR, elle participe à l’épissage alternatif; elle joue aussi un rôle dans l’exportation, la stabilité et la traduction des ARNm.',
        'Les travaux publiés de l’équipe associent SRSF3 à la répression traductionnelle de transcrits immunitaires innés sélectionnés et fortement induits dans la microglie et les macrophages. Cette répression passe par la région 3′ non traduite (3′UTR) des transcrits, qui contient de nombreux sites de liaison putatifs de SRSF3. SRSF3 ne contrôle pas tous les gènes immunitaires : son effet est sélectif.',
        'La forme phosphorylée de SRSF3 augmente dans la microglie et les macrophages activés après une stimulation immunitaire et après un AVC expérimental.',
      ],
      facts: [
        { label: 'Famille', value: 'Protéines SR (liaison à l’ARN)' },
        { label: 'Alias', value: 'SRp20' },
        { label: 'Rôle étudié', value: 'Répression traductionnelle sélective' },
        { label: 'Mécanisme', value: 'Dépendant de la 3′UTR' },
      ],
      cites: ['boutej-2017', 'rahimian-2024'],
    },
    s5: {
      index: '05',
      title: 'L’hypothèse thérapeutique de RNOVA',
      disease: {
        title: 'Maladie / activation chronique',
        steps: [
          'État régulateur de SRSF3 accru ou déréglé',
          'Traduction de certains ARNm immunitaires freinée',
          'Moins de protéines immunitaires fonctionnelles produites',
          'Phénotype immunitaire dysfonctionnel',
        ],
      },
      concept: {
        title: 'Concept RNOVA',
        steps: [
          'Antisens dirigé contre SRSF3',
          'Modulation / réduction de SRSF3',
          'Levée de la répression traductionnelle sélective',
          'Synthèse de novo de protéines immunitaires (systèmes expérimentaux)',
          'Réponse fonctionnelle rétablie et reprogrammée',
        ],
      },
      note:
        'Dans des modèles expérimentaux publiés, la réduction de SRSF3 à l’aide d’outils de silençage de l’ARN a rétabli la traduction de protéines immunitaires sélectionnées dans la microglie et les macrophages. Un bénéfice thérapeutique chez les patients n’a pas été démontré.',
      cites: ['boutej-2017', 'rahimian-2024'],
    },
    s6: {
      index: '06',
      title: 'Antisens ciblés',
      body: [
        'Les oligonucléotides antisens (ASO) sont de courts brins d’acides nucléiques synthétiques qui se lient à une séquence d’ARN précise. RNOVA Tx utilise la chimie antisens pour réduire la production de SRSF3.',
        'Comme SRSF3 remplit des fonctions dans de nombreux types cellulaires, la destination du médicament est déterminante. RNOVA Tx développe des stratégies de livraison visant à favoriser l’entrée dans les cellules immunitaires innées — notamment une approche antisens conjuguée à un peptide (TAT2-SRSF3) et une stratégie de ciblage sélectif de nouvelle génération (EAT-ME-SRSF3).',
      ],
      eatMe:
        'EAT-ME-SRSF3 est une stratégie de ciblage émergente en cours de développement. Elle est conçue pour améliorer la livraison des antisens anti-SRSF3 à certaines populations de cellules immunitaires innées. Les détails techniques ne sont pas divulgués à ce stade.',
    },
    s7: {
      index: '07',
      title: 'Ce qui distingue cette approche',
      body:
        'De nombreuses approches de la neuroinflammation visent à atténuer la signalisation inflammatoire. RNOVA Tx explore une idée complémentaire : rétablir les fonctions protectrices que perd la microglie chroniquement activée, en agissant sur la traduction des messages immunitaires.',
      compare: [
        { label: 'Niveau d’action', a: 'Voies de signalisation, cytokines ou récepteurs', b: 'Traduction de l’ARN de transcrits immunitaires sélectionnés' },
        { label: 'Objectif', a: 'Réduire l’activité inflammatoire', b: 'Rétablir une production fonctionnelle de protéines immunitaires' },
        { label: 'Cellule cible', a: 'Souvent large', b: 'Conçue pour les cellules immunitaires innées' },
      ],
      compareHeads: ['', 'Suppression globale', 'Approche RNOVA'],
      disclaimer: 'Comparaison conceptuelle seulement. Aucune supériorité clinique n’est revendiquée.',
    },
  },

  pipeline: {
    hero: {
      kicker: 'Pipeline',
      title: 'Des antisens ciblés dirigés contre SRSF3.',
      lede:
        'RNOVA Tx fait progresser une plateforme SRSF3 menée par la SLA et appuyée par une stratégie de livraison ciblée de nouvelle génération. Tous les programmes en sont aux stades de la recherche et du développement préclinique.',
    },
    headers: { program: 'Programme', modality: 'Modalité', indication: 'Indication', stage: 'Stade' },
    tbc: 'Stade à confirmer',
    kinds: { lead: 'Principal', advancement: 'Avancement', platform: 'Plateforme' },
    target: 'Cible',
    legend: 'Les stades de développement ne sont affichés qu’une fois confirmés. Un tracé pointillé indique que le stade n’a pas encore été rendu public.',
    note: 'Aucun programme de RNOVA Tx n’a atteint les essais cliniques. Les noms de programmes, les indications et les stades seront mis à jour à mesure qu’ils seront confirmés.',
  },

  research: {
    hero: {
      kicker: 'Aperçu de la recherche',
      title: 'Le parcours publié qui mène à RNOVA Tx.',
      lede:
        'Chaque étape du concept RNOVA repose sur des recherches révisées par les pairs menées au laboratoire Kriz de l’Université Laval et au Centre de recherche CERVO.',
    },
    timeline: [
      { year: '2016', title: 'Biologie microgliale fondamentale dans la SLA', text: 'Les phénotypes microgliaux évoluent de façon adaptative aux stades précliniques de la SLA liée à SOD1, l’IL-10 contrôlant les réponses microgliales précoces.', pubs: ['gravel-2016'] },
      { year: '2017', title: 'Des réseaux d’ARNm et de protéines divergents', text: 'Le profilage ribosomique de la microglie in vivo montre que des ARNm immunitaires fortement induits ne sont pas traduits après une stimulation immunitaire innée.', pubs: ['boutej-2017'] },
      { year: '2017', title: 'Répression traductionnelle associée à SRSF3', text: 'La répression dépend de la 3′UTR et fait intervenir SRSF3; l’inhibition de SRSF3 accroît la synthèse de protéines immunitaires in vitro et in vivo.', pubs: ['boutej-2017'] },
      { year: '2020', title: 'Repenser l’immunité dans la SLA', text: 'Inflammation excessive et réponses immunitaires inefficaces peuvent coexister dans la SLA.', pubs: ['beland-2020'] },
      { year: '2024', title: 'Dysfonctionnement microglial chronique', text: 'La microglie chroniquement activée dans la SLA perd ses fonctions immunitaires et acquiert un protéome inhabituel.', pubs: ['barreto-nunez-2024'] },
      { year: '2024', title: 'Ciblage expérimental de SRSF3', text: 'Après un AVC expérimental, un ARNsi dirigé contre SRSF3 rétablit la traduction de protéines immunitaires sélectionnées dans la microglie et les macrophages.', pubs: ['rahimian-2024'] },
      { year: 'Aujourd’hui', title: 'Développement translationnel de RNOVA Tx', text: 'Développement de thérapies antisens ciblées dirigées contre SRSF3, menées par la SLA.', pubs: [] },
    ],
    links: { publications: 'Bibliothèque de publications', patent: 'Brevet et PI' },
  },

  publications: {
    hero: {
      kicker: 'Publications',
      title: 'La science, dans des revues révisées par les pairs.',
      lede: 'Les publications qui fondent la plateforme de RNOVA Tx. Les titres sont présentés dans leur langue de publication.',
    },
    filterLabel: 'Filtrer par thème',
    all: 'Toutes',
    authors: 'Auteurs',
    why: 'Pourquoi c’est important',
    count: (n: number) => `${n} publication${n === 1 ? '' : 's'}`,
  },

  patent: {
    hero: {
      kicker: 'Brevet et PI',
      title: 'Une propriété intellectuelle fondatrice.',
      lede: 'La plateforme SRSF3 s’appuie sur un brevet américain délivré et des demandes internationales connexes.',
    },
    patentLabel: 'Brevet',
    titleLabel: 'Titre officiel',
    issued: 'Délivré le',
    covers: 'Ce qu’il couvre',
    coversNote: 'Résumé en langage courant. Seules les revendications du brevet délivré en définissent la portée réelle.',
    inventors: 'Inventeurs',
    assignee: 'Titulaire',
    filing: 'Données de dépôt',
    application: 'Demande',
    pct: 'Demande PCT',
    priority: 'Priorité',
    claims: 'Revendications',
    family: 'Famille de brevets',
    familyNote: 'Selon le registre public de WO 2019/095064. Les statuts peuvent évoluer.',
    jurisdiction: 'Territoire',
    number: 'Numéro',
    status: 'Statut',
    relationship: 'Lien avec RNOVA Tx',
    official: 'Voir sur Google Patents',
    uspto: 'Recherche publique de brevets de l’USPTO',
  },

  contact: {
    hero: {
      kicker: 'Nous joindre',
      title: 'Faisons progresser la prochaine génération de thérapies à ARN.',
      lede: 'Nous accueillons les échanges sur les partenariats, les collaborations et l’investissement.',
    },
    audiences: [
      { title: 'Partenariats stratégiques', text: 'Codéveloppement et discussions de licence.' },
      { title: 'Développement des affaires pharmaceutiques', text: 'Échanges sur la plateforme et les programmes.' },
      { title: 'Collaboration scientifique', text: 'Biologie de l’ARN, microglie et modèles de maladies du SNC.' },
      { title: 'Investissement et demandes corporatives', text: 'Échanges sur l’entreprise et son financement.' },
    ],
    emailUs: 'Écrivez-nous',
    location: 'Emplacement',
    roots: 'Racines scientifiques',
    mailSubject: 'Demande — RNOVA Tx',
  },

  notFound: {
    title: 'Page introuvable',
    text: 'La page que vous cherchez n’existe pas ou a été déplacée.',
    cta: 'Retour à l’accueil',
  },
};
