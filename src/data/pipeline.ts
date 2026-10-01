import type { Localized } from './site';

/**
 * ============================================================================
 *  PIPELINE — single source of truth for the Home preview and Pipeline page.
 * ============================================================================
 *
 * TODO_SUPERVISOR_CONFIRM_PIPELINE
 * TODO_SUPERVISOR_CONFIRM_PROGRAM_NAMES
 * TODO_SUPERVISOR_CONFIRM_PIPELINE_STAGES
 * TODO_SUPERVISOR_CONFIRM_INDICATION_LABELS
 *
 * How to update once confirmed:
 *   1. Replace `name` with the approved program name (EN + FR).
 *   2. Set `stageIndex` to the index in `stages` the program has REACHED
 *      (0 = Discovery … 4 = Phase I). Leave `null` while unconfirmed —
 *      the chart then shows a neutral "stage to be confirmed" track and
 *      never implies progress.
 *   3. Set `confirmed: true`.
 *
 * Never show EAT-ME as clinically validated. Keep its description high level.
 */

export const stages: Localized[] = [
  { en: 'Discovery', fr: 'Découverte' },
  { en: 'Lead optimization', fr: 'Optimisation du candidat' },
  { en: 'Preclinical', fr: 'Préclinique' },
  { en: 'IND-enabling', fr: 'Études précliniques réglementaires' },
  { en: 'Phase I', fr: 'Phase I' },
];

export interface Program {
  id: string;
  name: Localized;
  isPlaceholderName: boolean;
  target: string;
  modality: Localized;
  indication: Localized;
  kind: 'lead' | 'advancement' | 'platform';
  stageIndex: number | null;
  confirmed: boolean;
  disclosure: 'public';
  note: Localized;
}

export const programs: Program[] = [
  {
    id: 'lead-als',
    name: { en: 'Lead program', fr: 'Programme principal' }, // TODO_SUPERVISOR_CONFIRM_PROGRAM_NAMES
    isPlaceholderName: true,
    target: 'SRSF3',
    modality: { en: 'Targeted antisense oligonucleotide', fr: 'Oligonucléotide antisens ciblé' },
    indication: { en: 'Amyotrophic lateral sclerosis (ALS)', fr: 'Sclérose latérale amyotrophique (SLA)' },
    kind: 'lead',
    stageIndex: null, // TODO_SUPERVISOR_CONFIRM_PIPELINE_STAGES
    confirmed: false,
    disclosure: 'public',
    note: {
      en: 'Lead indication. SRSF3-directed antisense designed to release translational repression of selected innate immune transcripts in microglia/macrophages.',
      fr: 'Indication principale. Antisens dirigé contre SRSF3, conçu pour lever la répression traductionnelle de transcrits immunitaires innés sélectionnés dans la microglie et les macrophages.',
    },
  },
  {
    id: 'advancement-neuro',
    name: { en: 'Advancement program', fr: 'Programme d’avancement' }, // TODO_SUPERVISOR_CONFIRM_PROGRAM_NAMES
    isPlaceholderName: true,
    target: 'SRSF3',
    modality: { en: 'Targeted antisense oligonucleotide', fr: 'Oligonucléotide antisens ciblé' },
    indication: {
      en: 'FTD, Alzheimer’s disease and related dementias', // TODO_SUPERVISOR_CONFIRM_INDICATION_LABELS
      fr: 'DFT, maladie d’Alzheimer et démences apparentées',
    },
    kind: 'advancement',
    stageIndex: null,
    confirmed: false,
    disclosure: 'public',
    note: {
      en: 'Exploring the relevance of the SRSF3 checkpoint in neurodegenerative conditions beyond ALS.',
      fr: 'Évaluation de la pertinence du point de contrôle SRSF3 dans des maladies neurodégénératives au-delà de la SLA.',
    },
  },
  {
    id: 'eat-me-platform',
    name: { en: 'EAT-ME-SRSF3', fr: 'EAT-ME-SRSF3' },
    isPlaceholderName: false,
    target: 'SRSF3',
    modality: {
      en: 'Next-generation cell-targeted antisense',
      fr: 'Antisens ciblé de nouvelle génération',
    },
    indication: { en: 'Multiple CNS opportunities', fr: 'Plusieurs occasions dans le SNC' },
    kind: 'platform',
    stageIndex: null,
    confirmed: false,
    disclosure: 'public',
    note: {
      en: 'Cell-selective delivery strategy under development, designed to improve access of SRSF3-directed antisense to selected innate immune cells.',
      fr: 'Stratégie de livraison sélective en cours de développement, conçue pour améliorer l’accès des antisens anti-SRSF3 à certaines cellules immunitaires innées.',
    },
  },
];

/**
 * Development path (Home §08). `status`:
 *   'published' — supported by peer-reviewed publications (shown as evidence, not as a completed regulatory stage)
 *   'active'    — confirmed current focus (set only once confirmed)
 *   'planned'   — future stage
 *   'tbc'       — status to be confirmed
 */
export type PathStatus = 'published' | 'active' | 'planned' | 'tbc';

export const developmentPath: { label: Localized; detail: Localized; status: PathStatus }[] = [
  {
    label: { en: 'Discovery', fr: 'Découverte' },
    detail: {
      en: 'SRSF3 identified as a regulator of immune mRNA translation in microglia.',
      fr: 'SRSF3 identifiée comme régulateur de la traduction des ARNm immunitaires dans la microglie.',
    },
    status: 'published',
  },
  {
    label: { en: 'Target validation', fr: 'Validation de la cible' },
    detail: {
      en: 'SRSF3 knockdown releases translation of immune proteins in experimental models.',
      fr: 'L’inhibition de SRSF3 rétablit la traduction de protéines immunitaires dans des modèles expérimentaux.',
    },
    status: 'published',
  },
  {
    label: { en: 'Preclinical validation', fr: 'Validation préclinique' },
    detail: { en: 'Disease-model studies of SRSF3-directed antisense.', fr: 'Études de l’antisens anti-SRSF3 dans des modèles de maladie.' },
    status: 'tbc', // TODO_SUPERVISOR_CONFIRM_PIPELINE_STAGES
  },
  {
    label: { en: 'Lead optimization', fr: 'Optimisation du candidat' },
    detail: { en: 'Selection and optimization of a targeted development candidate.', fr: 'Sélection et optimisation d’un candidat ciblé.' },
    status: 'tbc',
  },
  {
    label: { en: 'IND-enabling', fr: 'Études réglementaires' },
    detail: { en: 'Formal safety, pharmacology and manufacturing studies.', fr: 'Études formelles d’innocuité, de pharmacologie et de fabrication.' },
    status: 'planned',
  },
  {
    label: { en: 'Phase I', fr: 'Phase I' },
    detail: { en: 'First-in-human clinical evaluation.', fr: 'Première évaluation clinique chez l’humain.' },
    status: 'planned',
  },
];
