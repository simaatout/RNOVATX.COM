import type { ImageMetadata } from 'astro';
import type { Localized } from './site';
import jasnaKriz from '../assets/team/jasna-kriz.webp';
import simaAlAtout from '../assets/team/sima-al-atout.png';

/**
 * Team — edit titles, bios and photos here.
 *
 * To add a photo: drop the file in src/assets/team/, import it above,
 * and set `photo` on the person. Initials are shown until then.
 *
 * TODO_TEAM_PHOTO_HEJER
 * TODO_TEAM_PHOTO_SONIA
 * TODO_TEAM_PHOTO_YUAN
 * TODO_TEAM_PHOTO_VICTOR
 *
 * Bios are limited to information that is public (institutional profiles,
 * peer-reviewed papers, the granted patent) or supplied by the person.
 * TODO_TEAM_BIO_CONFIRM — have each person approve their bio before launch
 * (Sonia Djebbar and Victor Coelho have little public information yet).
 */
export interface Person {
  id: string;
  name: string;
  initials: string;
  group: 'founders' | 'team';
  title: Localized;
  credentials?: string;
  photo?: ImageMetadata;
  photoPosition?: string;
  bio: Localized;
  links?: { label: string; href: string }[];
}

export const team: Person[] = [
  {
    id: 'jasna-kriz',
    name: 'Jasna Kriz',
    credentials: 'MD, PhD',
    initials: 'JK',
    group: 'founders',
    title: {
      en: 'Co-founder & Interim Chief Scientific Officer',
      fr: 'Cofondatrice et directrice scientifique par intérim',
    },
    photo: jasnaKriz,
    photoPosition: '50% 22%',
    bio: {
      en: 'Dr. Jasna Kriz is a Professor in the Department of Psychiatry and Neuroscience at Université Laval’s Faculty of Medicine and a researcher at the CERVO Brain Research Centre. Her work focuses on microglia and innate immunity in the healthy brain, brain injury and neurodegenerative diseases such as ALS. She is the lead inventor of the foundational SRSF3 patent.',
      fr: 'La Dre Jasna Kriz est professeure au Département de psychiatrie et de neurosciences de la Faculté de médecine de l’Université Laval et chercheuse au Centre de recherche CERVO. Ses travaux portent sur la microglie et l’immunité innée dans le cerveau sain, les lésions cérébrales et les maladies neurodégénératives comme la SLA. Elle est l’inventrice principale du brevet fondateur sur SRSF3.',
    },
    links: [{ label: 'CERVO profile', href: 'https://cervo.ulaval.ca/en/profile/jasna-kriz/' }],
  },
  {
    id: 'hejer-boutej',
    name: 'Hejer Boutej',
    credentials: 'PhD',
    initials: 'HB',
    group: 'founders',
    title: {
      en: 'Co-founder · MBA Candidate',
      fr: 'Cofondatrice · Candidate au MBA',
    },
    // photo: TODO_TEAM_PHOTO_HEJER
    bio: {
      en: 'Dr. Hejer Boutej is a co-founder of RNOVA Tx and co-inventor of the foundational SRSF3 patent. As first author of the 2017 Cell Reports study, she led the ribosome-profiling work showing that SRSF3 suppresses translation of highly upregulated innate immune transcripts in microglia. Her expertise spans transcriptomics, proteomics and models of neuroinflammation. She is currently an MBA candidate.',
      fr: 'La Dre Hejer Boutej est cofondatrice de RNOVA Tx et co-inventrice du brevet fondateur sur SRSF3. Première autrice de l’étude publiée en 2017 dans Cell Reports, elle a dirigé les travaux de profilage ribosomique montrant que SRSF3 réprime la traduction de transcrits immunitaires innés fortement induits dans la microglie. Son expertise couvre la transcriptomique, la protéomique et les modèles de neuroinflammation. Elle est actuellement candidate au MBA.',
    },
  },
  {
    id: 'sonia-djebbar',
    name: 'Sonia Djebbar',
    credentials: 'MSc',
    initials: 'SD',
    group: 'team',
    title: { en: 'Research Assistant', fr: 'Assistante de recherche' },
    // photo: TODO_TEAM_PHOTO_SONIA
    bio: {
      en: 'Sonia Djebbar is a research assistant supporting RNOVA Tx’s laboratory program. She contributes hands-on molecular and cellular biology work to the development and characterization of SRSF3-directed antisense tools.',
      fr: 'Sonia Djebbar est assistante de recherche au sein du programme de laboratoire de RNOVA Tx. Elle contribue, par ses travaux en biologie moléculaire et cellulaire, au développement et à la caractérisation des outils antisens dirigés contre SRSF3.',
    },
  },
  {
    id: 'yuan-cheng-weng',
    name: 'Yuan Cheng Weng',
    initials: 'YCW',
    group: 'team',
    title: { en: 'Research Assistant', fr: 'Assistant de recherche' },
    // photo: TODO_TEAM_PHOTO_YUAN
    bio: {
      en: 'Yuan Cheng Weng brings long-standing in vivo neuroscience research experience from the CERVO Brain Research Centre. A co-author on multiple peer-reviewed studies of microglia and innate immunity after brain injury, including the 2024 Molecular Therapy study on SRSF3 targeting, Yuan Cheng Weng contributes surgical and in vivo expertise to RNOVA Tx.',
      fr: 'Yuan Cheng Weng possède une longue expérience de la recherche in vivo en neurosciences au Centre de recherche CERVO. Coauteur de plusieurs études révisées par les pairs sur la microglie et l’immunité innée après une lésion cérébrale, dont l’étude de 2024 parue dans Molecular Therapy sur le ciblage de SRSF3, Yuan Cheng Weng apporte à RNOVA Tx son expertise chirurgicale et in vivo.',
    },
  },
  {
    id: 'victor-coelho',
    name: 'Victor Coelho',
    credentials: 'MSc',
    initials: 'VC',
    group: 'team',
    title: { en: 'PhD Student', fr: 'Doctorant' },
    // photo: TODO_TEAM_PHOTO_VICTOR
    bio: {
      en: 'Victor Coelho is a PhD student in the Neuroscience graduate program at Université Laval. His doctoral research investigates how SRSF3 contributes to microglial dysfunction in neurodegeneration, extending the RNOVA Tx scientific program beyond its lead ALS focus.',
      fr: 'Victor Coelho est doctorant au programme de neurosciences de l’Université Laval. Ses travaux de doctorat portent sur la contribution de SRSF3 au dysfonctionnement microglial dans la neurodégénérescence, prolongeant le programme scientifique de RNOVA Tx au-delà de son axe principal, la SLA.',
    },
  },
  {
    id: 'sima-al-atout',
    name: 'Sima Al Atout',
    credentials: 'MSc',
    initials: 'SA',
    group: 'team',
    title: { en: 'PhD Student', fr: 'Doctorante' },
    photo: simaAlAtout,
    photoPosition: '50% 30%',
    bio: {
      en: 'Sima Al Atout is a PhD student in Neuroscience at Université Laval, with training spanning genetics, cell and molecular biology, and biotechnology. She holds an MSc in Biotechnology from Northeastern University and an HBSc from the University of Toronto. Her interests centre on translational approaches to neurodegenerative disease and emerging RNA-based therapeutics.',
      fr: 'Sima Al Atout est doctorante en neurosciences à l’Université Laval. Sa formation couvre la génétique, la biologie cellulaire et moléculaire ainsi que la biotechnologie. Elle est titulaire d’une maîtrise en biotechnologie de la Northeastern University et d’un baccalauréat spécialisé (HBSc) de l’Université de Toronto. Ses intérêts portent sur les approches translationnelles des maladies neurodégénératives et les nouvelles thérapies à base d’ARN.',
    },
  },
];
