import type { Localized } from './site';

/**
 * Foundational IP — metadata verified against the granted patent document
 * (US 11,530,258 B2) and the public Google Patents family record.
 *
 * TODO_IP_LICENSE_STATUS_CONFIRM
 *   The relationship between RNOVA Tx and this patent (licence, option,
 *   assignment, exclusivity, territory) has NOT been publicly confirmed.
 *   Until it is, `relationship` below must stay neutral. Do not state that
 *   RNOVA Tx "owns" or "exclusively licenses" this patent.
 *   When confirmed, update `relationship` (EN + FR) and set `licenceConfirmed: true`.
 */
export const licenceConfirmed = false;

export interface FamilyMember {
  jurisdiction: Localized;
  number: string;
  note: Localized;
}

export const foundationalPatent = {
  number: 'US 11,530,258 B2',
  numberPlain: '11,530,258',
  title:
    'Use of SRSF3 agents for the treatment and/or prevention of neurological conditions, cancer, bacterial infections or viral infections',
  issued: { en: 'December 20, 2022', fr: '20 décembre 2022' },
  inventors: ['Jasna Kriz', 'Hejer Boutej'],
  assignee: 'Université Laval (Québec, Canada)',
  application: 'U.S. Appl. No. 16/763,906',
  pct: 'PCT/CA2018/051452 (filed November 15, 2018)',
  pctFr: 'PCT/CA2018/051452 (déposée le 15 novembre 2018)',
  wo: 'WO 2019/095064 A1',
  priority: { en: 'U.S. provisional 62/586,567 — November 15, 2017', fr: 'Demande provisoire américaine 62/586,567 — 15 novembre 2017' },
  claims: 15,
  officialUrl: 'https://patents.google.com/patent/US11530258B2/en',
  usptoUrl: 'https://ppubs.uspto.gov/pubwebapp/',

  /** Plain-language summary of what the independent claim covers. Kept deliberately within claim scope. */
  covers: {
    en: [
      'Methods of treating specified neurological conditions — including ALS, frontotemporal lobar degeneration (FTD), Alzheimer’s disease, Parkinson’s disease and vascular dementia, among others listed in the claims — by administering an SRSF3 agent to a patient.',
      'The claimed SRSF3 agents are antibodies or antisense/RNA-interference agents that inhibit the expression or function of SRSF3.',
      'Dependent claims address antisense oligonucleotides directed to the 5′ region of human SRSF3 mRNA (including morpholino chemistry) and antibody formats.',
    ],
    fr: [
      'Des méthodes de traitement de certaines affections neurologiques — notamment la SLA, la dégénérescence lobaire frontotemporale (DFT), la maladie d’Alzheimer, la maladie de Parkinson et la démence vasculaire, parmi d’autres énumérées dans les revendications — par l’administration d’un agent SRSF3 à un patient.',
      'Les agents SRSF3 revendiqués sont des anticorps ou des agents antisens / d’interférence ARN qui inhibent l’expression ou la fonction de SRSF3.',
      'Des revendications dépendantes portent sur des oligonucléotides antisens dirigés contre la région 5′ de l’ARNm humain de SRSF3 (y compris la chimie morpholino) et sur des formats d’anticorps.',
    ],
  },

  /** Family members listed on the public WO 2019/095064 record. */
  family: [
    { jurisdiction: { en: 'United States', fr: 'États-Unis' }, number: 'US 11,530,258 B2', note: { en: 'Granted', fr: 'Délivré' } },
    { jurisdiction: { en: 'Europe (EPO)', fr: 'Europe (OEB)' }, number: 'EP 3710015 B1', note: { en: 'Granted', fr: 'Délivré' } },
    { jurisdiction: { en: 'Canada', fr: 'Canada' }, number: 'CA 3095354 A1', note: { en: 'Published application', fr: 'Demande publiée' } },
    { jurisdiction: { en: 'China', fr: 'Chine' }, number: 'CN 111556761 A', note: { en: 'Published application', fr: 'Demande publiée' } },
    { jurisdiction: { en: 'Japan', fr: 'Japon' }, number: 'JP 2021502977 A', note: { en: 'Published application', fr: 'Demande publiée' } },
    { jurisdiction: { en: 'PCT (WIPO)', fr: 'PCT (OMPI)' }, number: 'WO 2019/095064 A1', note: { en: 'International publication', fr: 'Publication internationale' } },
  ] as FamilyMember[],

  /** Neutral wording pending TODO_IP_LICENSE_STATUS_CONFIRM. */
  relationship: {
    en: 'The RNOVA Tx scientific platform is supported by foundational SRSF3 intellectual property originating from the laboratory of Dr. Jasna Kriz at Université Laval. The patent’s named inventors, Dr. Jasna Kriz and Dr. Hejer Boutej, are the co-founders of RNOVA Tx. Details of the commercial rights arrangement will be communicated once finalized.',
    fr: 'La plateforme scientifique de RNOVA Tx repose sur une propriété intellectuelle fondatrice liée à SRSF3, issue du laboratoire de la Dre Jasna Kriz à l’Université Laval. Les inventrices désignées du brevet, la Dre Jasna Kriz et la Dre Hejer Boutej, sont les cofondatrices de RNOVA Tx. Les modalités relatives aux droits commerciaux seront communiquées une fois finalisées.',
  },
};
