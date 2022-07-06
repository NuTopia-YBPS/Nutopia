//stylesheets
import styles from "../styles/pages/Event.module.scss";
//data
import {
  ArenaOfValor,
  KnockOut,
  TruthOrDebug,
  LogAndBlog,
  Designscape,
  Otakuiz,
  Bassdrop,
  PandoraBlocks,
} from "./pages/events";

const EventsList = [
  {
    title: ArenaOfValor.title,
    description: ArenaOfValor.details.shortDescription,
    date: ArenaOfValor.details.date,
    time: ArenaOfValor.details.time,
    venue: ArenaOfValor.details.venue,
    grades: ArenaOfValor.details.grades,
    link: ArenaOfValor.link,
    image: ArenaOfValor.details.image,
    accent: ArenaOfValor.details.accent,
    selector: styles.aov,
    isTeamEvent: true,
    maxMembers: {
      default: 3,
      mobile: 4,
      pc: 5,
      console: 2,
    },
  },
  {
    title: KnockOut.title,
    description: KnockOut.details.shortDescription,
    date: KnockOut.details.date,
    time: KnockOut.details.time,
    venue: KnockOut.details.venue,
    grades: KnockOut.details.grades,
    link: KnockOut.link,
    image: KnockOut.details.image,
    accent: KnockOut.details.accent,
    selector: styles.ko,
    isTeam: false,
    maxMembers: {
      default: 1,
    },
  },
  {
    title: TruthOrDebug.title,
    description: TruthOrDebug.details.shortDescription,
    date: TruthOrDebug.details.date,
    time: TruthOrDebug.details.time,
    venue: TruthOrDebug.details.venue,
    grades: TruthOrDebug.details.grades,
    link: TruthOrDebug.link,
    image: TruthOrDebug.details.image,
    accent: TruthOrDebug.details.accent,
    selector: styles.td,
    isTeam: true,
    maxMembers: {
      default: 3,
    },
  },
  {
    title: LogAndBlog.title,
    description: LogAndBlog.details.shortDescription,
    date: LogAndBlog.details.date,
    time: LogAndBlog.details.time,
    venue: LogAndBlog.details.venue,
    grades: LogAndBlog.details.grades,
    link: LogAndBlog.link,
    image: LogAndBlog.details.image,
    accent: LogAndBlog.details.accent,
    selector: styles.lab,
    isTeam: false,
    maxMembers: {
      default: 1,
    },
  },
  {
    title: Designscape.title,
    description: Designscape.details.shortDescription,
    date: Designscape.details.date,
    time: Designscape.details.time,
    venue: Designscape.details.venue,
    grades: Designscape.details.grades,
    link: Designscape.link,
    image: Designscape.details.image,
    accent: Designscape.details.accent,
    selector: styles.ds,
    isTeam: false,
    maxMembers: {
      default: 1,
    },
  },
  {
    title: Otakuiz.title,
    description: Otakuiz.details.shortDescription,
    date: Otakuiz.details.date,
    time: Otakuiz.details.time,
    venue: Otakuiz.details.venue,
    grades: Otakuiz.details.grades,
    link: Otakuiz.link,
    image: Otakuiz.details.image,
    accent: Otakuiz.details.accent,
    selector: styles.otk,
    isTeam: true,
    maxMembers: {
      default: 3,
    },
  },
  {
    title: Bassdrop.title,
    description: Bassdrop.details.shortDescription,
    date: Bassdrop.details.date,
    time: Bassdrop.details.time,
    venue: Bassdrop.details.venue,
    grades: Bassdrop.details.grades,
    link: Bassdrop.link,
    image: Bassdrop.details.image,
    accent: Bassdrop.details.accent,
    selector: styles.bd,
    isTeam: false,
    maxMembers: {
      default: 1,
    },
  },
  {
    title: PandoraBlocks.title,
    description: PandoraBlocks.details.shortDescription,
    date: PandoraBlocks.details.date,
    time: PandoraBlocks.details.time,
    venue: PandoraBlocks.details.venue,
    grades: PandoraBlocks.details.grades,
    link: PandoraBlocks.link,
    image: PandoraBlocks.details.image,
    accent: PandoraBlocks.details.accent,
    selector: styles.bd,
    isTeam: true,
    maxMembers: {
      default: 3,
    },
  },
];

export default EventsList;
