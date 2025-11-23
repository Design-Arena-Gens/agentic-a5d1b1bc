import Hero from "./components/Hero";
import Section from "./components/Section";
import Timeline, { TimelineItem } from "./components/Timeline";

const timeline: TimelineItem[] = [
  {
    phase: "Cadre stratégique & mobilisation interne",
    period: "Mai - Juin 2024",
    focus:
      "Aligner ECOGiC, la direction d'Expomer et les partenaires publics autour d'une vision commune.",
    deliverables: [
      "Atelier de cadrage avec la direction pour valider le positionnement « Renaissances Littorales »",
      "Cartographie des parties prenantes prioritaires : régions côtières, clusters maritimes, startups bleues",
      "Note de positionnement & manifeste éditorial pour diffusion externe",
      "Kit de prospection sponsor & dossier d'intention médias"
    ]
  },
  {
    phase: "Conception des contenus & partenariats",
    period: "Juillet - Septembre 2024",
    focus:
      "Structurer les parcours visiteurs, sécuriser les démonstrations et bâtir la programmation scientifique.",
    deliverables: [
      "Programmation prévisionnelle des 4 dômes d'expérience et de la scène centrale",
      "Signature des partenariats avec laboratoires, ONG marines et clusters industriels",
      "Sélection officielle des innovateurs (startups, artistes, collectivités)",
      "Plan de communication 360° : digital, RP, influence, activation territoriale"
    ]
  },
  {
    phase: "Production & scénographie",
    period: "Octobre - Novembre 2024",
    focus:
      "Produire les modules immersifs, orchestrer la logistique et déployer l'écosystème digital.",
    deliverables: [
      "Fabrication des structures modulaires biosourcées et mise en place des matériaux low-carbon",
      "Développement de l'application « Carnet de Bord Expomer » (guidage, matchmaking, impact tracking)",
      "Formation des médiateurs scientifiques et répétitions générales",
      "Campagne de teasing grand public et activation des communautés littorales"
    ]
  },
  {
    phase: "Exploitation & héritage",
    period: "Décembre 2024",
    focus:
      "Maximiser l'impact pendant le salon et prolonger la dynamique au-delà de l'événement.",
    deliverables: [
      "Dashboard temps-réel sur les KPI d'affluence, engagement et CO₂ évité",
      "Programme d'accélération post-event pour les 10 projets phares",
      "Livre blanc « Résilience Côtière 2030 » et diffusion aux décideurs",
      "Restitution médias & dispositif de veille pour la 3e édition"
    ]
  }
];

const axes = [
  {
    title: "Renaissances Littorales",
    description:
      "Repenser la ville côtière face à l'érosion, la montée des eaux et la pression démographique. Mise en avant des solutions d'ingénierie verte, d'aménagement résilient et d'économie circulaire maritime."
  },
  {
    title: "Biomatériaux & économie bleue",
    description:
      "Zoom sur les matériaux biosourcés issus d'algues, de co-produits de pêche et de biofabrication. Focus sur la traçabilité, la mécanisation locale et les opportunités industrielles."
  },
  {
    title: "Souveraineté énergétique portuaire",
    description:
      "Mini-grids côtiers, hydrogène, stockage offshore et smart grids portuaires. Démonstrations en conditions réelles avec data en direct."
  },
  {
    title: "Culture océanique & inclusion",
    description:
      "Projets artistiques, immersions pédagogiques et récits des communautés de pêcheurs. Une agora citoyenne pour co-créer les politiques publiques."
  }
];

const audiences = [
  {
    name: "Collectivités littorales & ministères",
    needs:
      "Accéder à des solutions concrètes pour leurs plans d'adaptation climatique et structurer des financements mixtes."
  },
  {
    name: "Industriels & porteurs de projets bleus",
    needs:
      "Prototyper, tester et déployer rapidement des innovations en partenariat avec les territoires."
  },
  {
    name: "Investisseurs à impact & bailleurs",
    needs:
      "Identifier des portefeuilles de projets bancables et des modèles PPP alignés sur les ODD."
  },
  {
    name: "Grand public, jeunes & créatifs",
    needs:
      "S'inspirer, comprendre les enjeux et s'engager dans les métiers de la transition maritime."
  }
];

const experiences = [
  {
    title: "Dôme 01 · « Ligne de rivage augmentée »",
    items: [
      "Mapping immersif évolutif des projections climatiques à 2050 sur les côtes d'Afrique de l'Ouest",
      "Table tactile de co-conception d'aménagements biosourcés avec restitution 3D instantanée",
      "Cabinet des matières vivantes : galerie de biomatériaux certifiés (algues, coquillages, typha)"
    ]
  },
  {
    title: "Dôme 02 · « Ports régénératifs »",
    items: [
      "Jumeau numérique d'un port intelligent avec data énergie/flux logistiques en direct",
      "Demo « cold ironing mobile » alimentée par micro-réseau solaire + stockage hydrogène",
      "Atelier maintenance prédictive & IA appliquée aux infrastructures portuaires"
    ]
  },
  {
    title: "Dôme 03 · « Nouvelles économies bleues »",
    items: [
      "Village startup avec 18 projets sélectionnés, pitchs dynamiques et vote du public",
      "Corner financement : speed-meetings investisseurs, bailleurs, banques régionales",
      "Lab expérimental d'économie circulaire : ateliers upcycling, biofabrication en live"
    ]
  },
  {
    title: "Dôme 04 · « Culture & récits océans »",
    items: [
      "Scénographie sonore immersive retraçant les voix des communautés littorales",
      "Studio média pour podcasts et émissions live avec influenceurs durables",
      "Exposition d'art éco-responsable et résidences d'artistes en partenariat avec l'OIF"
    ]
  }
];

const metrics = [
  {
    label: "5 000+ visiteurs attendus",
    detail: "Dont 45% de professionnels et 30 délégations internationales ciblées."
  },
  {
    label: "120 exposants & démonstrateurs",
    detail: "Objectif : 35% d'innovations africaines, 25% de solutions à TRL élevé."
  },
  {
    label: "Impact carbone maîtrisé",
    detail: "Plan sobriété énergétique (-35% vs édition 1) + compensation via projets bleus."
  },
  {
    label: "Fonds d'amorçage Expomer",
    detail: "Création d'un véhicule financier de 2 M€ pour accompagner 10 projets pilotes."
  }
];

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 sm:gap-20 sm:px-10 sm:py-20">
      <Hero />
      <Section
        eyebrow="Concept directeur"
        title="Vision 2024 · « Renaissances Littorales »"
        lead="Positionner Expomer comme le rendez-vous de référence en Afrique pour la régénération des territoires côtiers, en articulant solutions industrielles, mobilisation citoyenne et création artistique."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {axes.map((axis) => (
            <article
              key={axis.title}
              className="flex flex-col gap-3 rounded-2xl border border-emerald-900/10 bg-ecogic-sand/60 p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-ecogic-forest">{axis.title}</h3>
              <p className="text-sm text-neutral-700">{axis.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Objectifs stratégiques"
        title="4 piliers pour accélérer la transition maritime"
        lead="Créer des retombées mesurables pour les territoires partenaires et pour ECOGiC en tant que bureau d'ingénierie et d'innovation."
      >
        <div id="objectifs" className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-3 rounded-2xl border border-emerald-900/10 bg-white/90 p-5">
            <h3 className="text-lg font-semibold text-ecogic-green">
              Piloter l&apos;agenda des politiques publiques
            </h3>
            <p className="text-sm text-neutral-700">
              Formuler des recommandations concrètes pour les plans nationaux
              d&apos;adaptation et mettre en scène des retours d&apos;expérience inspirants.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-emerald-900/10 bg-white/90 p-5">
            <h3 className="text-lg font-semibold text-ecogic-green">
              Booster la visibilité d&apos;ECOGiC
            </h3>
            <p className="text-sm text-neutral-700">
              Démontrer notre capacité à orchestrer des projets système et à fédérer un
              consortium international autour de la transition bleue.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-emerald-900/10 bg-white/90 p-5">
            <h3 className="text-lg font-semibold text-ecogic-green">
              Générer des opportunités business
            </h3>
            <p className="text-sm text-neutral-700">
              Pipeline de projets : 12 contrats d&apos;ingénierie ciblés et 4 pilotes
              territoriaux à lancer en 2025.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-emerald-900/10 bg-white/90 p-5">
            <h3 className="text-lg font-semibold text-ecogic-green">
              Engager les citoyens & jeunes talents
            </h3>
            <p className="text-sm text-neutral-700">
              Programme d&apos;éducation océanique, hackathon étudiants et parcours métiers
              pour 500 jeunes.
            </p>
          </div>
        </div>
      </Section>
      <Section
        eyebrow="Cibles prioritaires"
        title="Segmentations visiteurs & parties prenantes"
        lead="Adapter la proposition de valeur et le parcours à chaque audience clé pour maximiser l'engagement et les retombées."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {audiences.map((audience) => (
            <article
              key={audience.name}
              className="flex flex-col gap-3 rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-ecogic-forest">
                {audience.name}
              </h3>
              <p className="text-sm text-neutral-700">{audience.needs}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Expériences immersives"
        title="Parcours en 4 dômes thématiques + Agora centrale"
        lead="Chaque dôme raconte une facette de la renaissance littorale et combine démonstrations, data live et expériences narratives."
      >
        <div className="grid gap-6">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="flex flex-col gap-4 rounded-2xl border border-emerald-900/10 bg-ecogic-sand/80 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-ecogic-forest">
                {experience.title}
              </h3>
              <ul className="grid gap-3 text-sm text-neutral-700 sm:grid-cols-2">
                {experience.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl bg-white/80 p-3 shadow-sm"
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ecogic-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Performance & héritage"
        title="Indicateurs clés de succès"
        lead="Un reporting en temps réel pour piloter les retombées économiques, sociales et environnementales."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="flex flex-col gap-3 rounded-2xl border border-emerald-900/10 bg-white/95 p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-ecogic-forest">
                {metric.label}
              </h3>
              <p className="text-sm text-neutral-700">{metric.detail}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Partenariats & gouvernance"
        title="Co-construction multi-acteurs"
        lead="Un modèle de gouvernance agile pour garantir la cohérence stratégique et la performance opérationnelle."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex flex-col gap-3 rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-ecogic-forest">
              Comité de pilotage stratégique
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-700">
              <li>
                Représentants ECOGiC, Direction Expomer, Ministère de l&apos;Environnement,
                Port Autonome.
              </li>
              <li>
                Réunions mensuelles + sprint review toutes les 3 semaines pour suivi des
                livrables.
              </li>
              <li>
                Indicateurs suivis : avancement projets, budget, impact carbone, satisfaction
                partenaires.
              </li>
            </ul>
          </article>
          <article className="flex flex-col gap-3 rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-ecogic-forest">
              Partenariats stratégiques ciblés
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-700">
              <li>
                Académiques : Université de la Mer, IRD, écoles d&apos;architecture & design.
              </li>
              <li>
                Industriels : acteurs portuaires, énergies marines renouvelables, fintech
                bleues.
              </li>
              <li>
                Sociétal : associations communautaires, réseaux de femmes de la mer, artistes
                engagés.
              </li>
            </ul>
          </article>
        </div>
      </Section>
      <Section
        eyebrow="Communication"
        title="Stratégie d'influence & activation digitale"
        lead="Amplifier la portée d'Expomer avant, pendant et après l'événement."
      >
        <div className="grid gap-5">
          <div className="rounded-2xl border border-emerald-900/10 bg-white/90 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-ecogic-forest">
              Narration en trois actes
            </h3>
            <ul className="mt-3 grid gap-3 text-sm text-neutral-700 sm:grid-cols-3">
              <li>
                <strong className="font-semibold text-ecogic-green">Acte 1 ·</strong> Teasing
                d&apos;innovations (web-séries, reels, mini-docs) + annonce des ambassadeurs.
              </li>
              <li>
                <strong className="font-semibold text-ecogic-green">Acte 2 ·</strong> Couverture
                live via hub média, data stories et live-shopping des solutions exposées.
              </li>
              <li>
                <strong className="font-semibold text-ecogic-green">Acte 3 ·</strong> Capitalisation
                (after movie, rapports interactifs, podcast « Voix du littoral »).
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-900/10 bg-white/90 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-ecogic-forest">
              Plateforme digitale Expomer
            </h3>
            <p className="mt-3 text-sm text-neutral-700">
              Application web progressive offrant un carnet de bord personnalisé, matchmaking
              B2B, suivi des conférences et mesure d&apos;impact environnemental et social en
              temps réel.
            </p>
          </div>
        </div>
      </Section>
      <Section
        eyebrow="Feuille de route"
        title="Planning macro & livrables clés"
        lead="Un déroulé en quatre phases pour sécuriser la préparation et capitaliser sur l'événement."
        className="bg-gradient-to-br from-white via-white to-ecogic-sand/70"
      >
        <div id="program">
          <Timeline items={timeline} />
        </div>
      </Section>
      <footer className="flex flex-col items-center gap-4 rounded-3xl bg-ecogic-forest px-8 py-10 text-center text-white shadow-2xl">
        <p className="text-lg font-semibold uppercase tracking-[0.25em] text-white/70">
          ECOGiC · Expomer 2024
        </p>
        <p className="max-w-2xl text-sm text-white/80">
          Ce concept est conçu pour positionner Expomer comme l&apos;accélérateur incontournable
          des transitions littorales en Afrique. Approche orientée impact, coalition
          d&apos;acteurs et héritage durable constituent la feuille de route proposée.
        </p>
      </footer>
    </main>
  );
}
