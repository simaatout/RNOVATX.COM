import type { Localized } from './site';

/**
 * Public, peer-reviewed publications that support the RNOVA Tx concept.
 *
 * Rules:
 *  - `title` is the official title and is never translated.
 *  - `relevance` is RNOVA's plain-language context and IS translated.
 *  - Only add papers that are published and verifiable (DOI).
 *  - Never add manuscripts that are not yet published.
 */
export type Topic = 'srsf3' | 'microglia' | 'als' | 'cns-injury' | 'neuroinflammation';

export interface Publication {
  id: string;
  year: number;
  journal: string;
  citation: string; // volume/pages
  title: string;
  authors: string;
  shortCite: string; // e.g. "Boutej et al., Cell Reports, 2017"
  doi: string;
  topics: Topic[];
  featured?: boolean;
  relevance: Localized;
}

export const publications: Publication[] = [
  {
    id: 'boutej-2017',
    year: 2017,
    journal: 'Cell Reports',
    citation: '21(11):3220–3233',
    title:
      'Diverging mRNA and Protein Networks in Activated Microglia Reveal SRSF3 Suppresses Translation of Highly Upregulated Innate Immune Transcripts',
    authors:
      'Boutej H, Rahimian R, Thammisetty SS, Béland LC, Lalancette-Hébert M, Kriz J',
    shortCite: 'Boutej et al., Cell Reports, 2017',
    doi: '10.1016/j.celrep.2017.11.058',
    topics: ['srsf3', 'microglia', 'neuroinflammation'],
    featured: true,
    relevance: {
      en: 'The founding discovery. By profiling ribosome-bound mRNAs and newly made peptides in microglia in vivo, the study found that the most highly upregulated innate immune transcripts were not translated after immune challenge. This selective, 3′UTR-mediated repression involved the RNA-binding protein SRSF3, and SRSF3 knockdown released translation of several immune proteins.',
      fr: 'La découverte fondatrice. En analysant in vivo les ARNm liés aux ribosomes et les peptides nouvellement synthétisés dans la microglie, l’étude a montré que les transcrits immunitaires innés les plus fortement induits n’étaient pas traduits après une stimulation immunitaire. Cette répression sélective, dépendante de la région 3′UTR, implique la protéine de liaison à l’ARN SRSF3; l’inhibition de SRSF3 a rétabli la traduction de plusieurs protéines immunitaires.',
    },
  },
  {
    id: 'barreto-nunez-2024',
    year: 2024,
    journal: 'Glia',
    citation: '72(7):1319–1339',
    title:
      'Chronically activated microglia in ALS gradually lose their immune functions and develop unconventional proteome',
    authors:
      'Barreto-Núñez R, Béland LC, Boutej H, Picher-Martel V, Dupré N, Barbeito L, Kriz J',
    shortCite: 'Barreto-Núñez et al., Glia, 2024',
    doi: '10.1002/glia.24531',
    topics: ['microglia', 'als'],
    featured: true,
    relevance: {
      en: 'Characterizes microglia across disease stages in the SOD1-G93A model of ALS. In advanced disease, microglia showed reduced phagocytic capacity, a diminished response to innate immune challenge and an unconventional protein signature — supporting the view that chronically activated microglia become functionally inefficient immune cells rather than simply “over-inflamed”.',
      fr: 'Caractérise la microglie à différents stades de la maladie dans le modèle SOD1-G93A de la SLA. À un stade avancé, la microglie présente une capacité phagocytaire réduite, une réponse affaiblie aux stimulations immunitaires innées et une signature protéique inhabituelle — ce qui appuie l’idée qu’une microglie chroniquement activée devient une cellule immunitaire peu efficace, plutôt que simplement « trop inflammatoire ».',
    },
  },
  {
    id: 'rahimian-2024',
    year: 2024,
    journal: 'Molecular Therapy',
    citation: '32(3):783–799',
    title:
      'Targeting SRSF3 restores immune mRNA translation in microglia/macrophages following cerebral ischemia',
    authors: 'Rahimian R, Guruswamy R, Boutej H, Cordeau P Jr, Weng YC, Kriz J',
    shortCite: 'Rahimian et al., Molecular Therapy, 2024',
    doi: '10.1016/j.ymthe.2024.01.004',
    topics: ['srsf3', 'microglia', 'cns-injury'],
    featured: true,
    relevance: {
      en: 'Extends the SRSF3 checkpoint to sterile inflammation after experimental stroke. Highly upregulated immune mRNAs were again not translated, and phosphorylated SRSF3 rose in microglia/macrophages. Intranasal SRSF3-directed siRNA alleviated translational arrest of selected immune genes, induced de novo synthesis of immune proteins and was associated with smaller ischemic lesions in mice.',
      fr: 'Étend le point de contrôle SRSF3 à l’inflammation stérile après un AVC expérimental. Les ARNm immunitaires fortement induits n’étaient pas traduits et la forme phosphorylée de SRSF3 augmentait dans la microglie et les macrophages. Un ARNsi dirigé contre SRSF3, administré par voie intranasale, a levé l’arrêt traductionnel de gènes immunitaires sélectionnés, induit la synthèse de novo de protéines immunitaires et a été associé à des lésions ischémiques plus petites chez la souris.',
    },
  },
  {
    id: 'gravel-2016',
    year: 2016,
    journal: 'Journal of Neuroscience',
    citation: '36(3):1031–1048',
    title:
      'IL-10 Controls Early Microglial Phenotypes and Disease Onset in ALS Caused by Misfolded Superoxide Dismutase 1',
    authors: 'Gravel M, Béland LC, Soucy G, Abdelhamid E, Rahimian R, Gravel C, Kriz J',
    shortCite: 'Gravel et al., J Neurosci, 2016',
    doi: '10.1523/JNEUROSCI.0854-15.2016',
    topics: ['microglia', 'als'],
    relevance: {
      en: 'Earlier foundational work on microglial states in ALS models, describing an adaptive shift in microglial phenotypes in preclinical stages of SOD1-mediated disease and a role for IL-10 in controlling early microglial responses and disease onset.',
      fr: 'Travaux fondateurs antérieurs sur les états microgliaux dans les modèles de SLA, décrivant une adaptation des phénotypes microgliaux aux stades précliniques de la maladie liée à SOD1 et le rôle de l’IL-10 dans le contrôle des réponses microgliales précoces et de l’apparition de la maladie.',
    },
  },
  {
    id: 'beland-2020',
    year: 2020,
    journal: 'Brain Communications',
    citation: '2(2):fcaa124',
    title:
      'Immunity in amyotrophic lateral sclerosis: blurred lines between excessive inflammation and inefficient immune responses',
    authors:
      'Béland LC, Markovinovic A, Jakovac H, De Marchi F, Bilic E, Mazzini L, Kriz J, Munitic I',
    shortCite: 'Béland et al., Brain Communications, 2020',
    doi: '10.1093/braincomms/fcaa124',
    topics: ['als', 'neuroinflammation'],
    relevance: {
      en: 'A review framing ALS immunity beyond “too much inflammation”, discussing how excessive inflammation and inefficient immune responses can coexist — the conceptual backdrop for restoring, rather than simply suppressing, innate immune function.',
      fr: 'Une revue qui situe l’immunité dans la SLA au-delà de l’idée d’un « excès d’inflammation » et montre comment inflammation excessive et réponses immunitaires inefficaces peuvent coexister — le cadre conceptuel d’une approche qui vise à rétablir la fonction immunitaire innée plutôt qu’à simplement la supprimer.',
    },
  },
];

export const topicLabels: Record<Topic, Localized> = {
  srsf3: { en: 'SRSF3', fr: 'SRSF3' },
  microglia: { en: 'Microglia', fr: 'Microglie' },
  als: { en: 'ALS', fr: 'SLA' },
  'cns-injury': { en: 'CNS injury', fr: 'Lésion du SNC' },
  neuroinflammation: { en: 'Neuroinflammation', fr: 'Neuroinflammation' },
};

export const doiUrl = (doi: string) => `https://doi.org/${doi}`;
export const pubById = (id: string) => publications.find((p) => p.id === id)!;
