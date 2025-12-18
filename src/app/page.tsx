import Image from 'next/image';
import Link from 'next/link';
import {
  BookX,
  FileCheck2,
  GanttChartSquare,
  Github,
  Laptop,
  Linkedin,
  Rocket,
  Sparkles,
  TrendingDown,
  Users,
  Verified,
} from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const journeyStats = [
  {
    icon: <TrendingDown className="h-10 w-10 text-primary" />,
    value: '41.8%',
    label: 'Graduate Unemployment Rate (vs National Avg)',
  },
  {
    icon: <BookX className="h-10 w-10 text-primary" />,
    value: '1.5 / 5',
    label: 'Average Curriculum Relevance Score (Student Verdict)',
  },
  {
    icon: <GanttChartSquare className="h-10 w-10 text-primary" />,
    value: 'The 3-Year Wall',
    label: '70% of jobs require experience; <20% open to entry-level.',
  },
];

const solutionFeatures = [
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    title: 'Simulated Work',
    description: 'Agile, Jira, and real deadlines instead of textbooks.',
  },
  {
    icon: <Verified className="h-8 w-8 text-primary" />,
    title: 'Verified Portfolio',
    description: 'Replacing text CVs with GitHub/Behance-style commercial grade work.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'The USP',
    description: "Turning '0 years experience' into '1 year of verified competency' in 6 months.",
  },
];

const milestones = [
  {
    phase: 'Phase 1: Research & Validation',
    description: 'Interviews with faculty, employers, and recent graduates to map the competency landscape.',
  },
  {
    phase: 'Phase 2: Identifying the "Blame Game"',
    description: 'Pinpointing the systemic gaps and the diffusion of responsibility between academia and industry.',
  },
  {
    phase: 'Phase 3: Developing the Fellowship Model (MVP)',
    description: 'Designing a minimum viable product for the clinical residency program based on validated needs.',
  },
];

const leanCanvasImage = PlaceHolderImages.find(p => p.id === 'lean-canvas');
const skillsCanyonImage = PlaceHolderImages.find(p => p.id === 'skills-canyon');

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex h-[calc(100vh-3.5rem)] min-h-[500px] w-full items-center justify-center"
        >
          <div className="container px-4 text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              The Competency Bridge
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-headline text-2xl font-medium text-primary md:text-3xl">
              “Don’t just learn the job. Do the job.”
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
              Investigating the Skills Gap in Egyptian Applied Sciences.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#solution">View the Solution</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section id="journey" className="w-full bg-card py-20 lg:py-28">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                The Competency Crisis
              </h2>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Graduates face an average 7-year transition to meaningful work. The &apos;Social Contract&apos; is broken: Academic credentials no longer guarantee market readiness.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {journeyStats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="items-center">
                    {stat.icon}
                    <CardTitle className="pt-4 text-4xl font-bold text-primary">{stat.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="w-full py-20 lg:py-28">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                A Clinical Residency for Tech
              </h2>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                A specialized fellowship transforming graduates from &apos;unusable&apos; to &apos;market-ready&apos; through simulated work experience, not classrooms.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
              {solutionFeatures.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prototype Section */}
        <section id="prototype" className="w-full bg-card py-20 lg:py-28">
          <div className="container grid grid-cols-1 gap-12 px-4 md:items-center lg:gap-20">
            <div className="flex flex-col justify-center">
              <h2 className="font-headline text-center text-3xl font-bold tracking-tight md:text-4xl">
                Development & Milestones
              </h2>
              <ul className="mt-8 space-y-8">
                {milestones.map((milestone, index) => (
                  <li key={index} className="relative pl-10">
                    <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <div className="absolute left-3 top-8 h-full border-l-2 border-dashed border-primary/50"></div>
                    <h3 className="text-xl font-semibold">{milestone.phase}</h3>
                    <p className="mt-1 text-muted-foreground">{milestone.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              {leanCanvasImage && (
                <div className="space-y-2">
                   <h3 className="text-lg font-semibold text-center">Lean Canvas Diagram</h3>
                   <Card className="overflow-hidden">
                    <Image
                      src={leanCanvasImage.imageUrl}
                      alt="Lean Canvas Diagram"
                      width={1280}
                      height={720}
                      className="w-full object-cover"
                      data-ai-hint={leanCanvasImage.imageHint}
                    />
                  </Card>
                </div>
              )}
               {skillsCanyonImage && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-center">Skills Canyon Diagram</h3>
                  <Card className="overflow-hidden">
                    <Image
                      src={skillsCanyonImage.imageUrl}
                      alt="Skills Canyon Diagram"
                      width={600}
                      height={400}
                      className="w-full object-cover"
                      data-ai-hint={skillsCanyonImage.imageHint}
                    />
                  </Card>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Future Section */}
        <section id="future" className="w-full py-20 lg:py-28">
          <div className="container px-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              The Road Ahead
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
              The goal is to dismantle the &apos;3-Year Wall.&apos; We are moving beyond academic reform to co-create solutions with industry partners.
            </p>
            <Card className="mx-auto mt-12 max-w-md bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2 text-lg text-accent">
                  <Rocket className="h-5 w-5" />
                  <span>North Star Metric</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  Placement Rate within 90 days of graduation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
