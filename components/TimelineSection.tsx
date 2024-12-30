'use client'

import { ScrambleHeading } from './ScrambleHeading'
import { TimelineCard } from '@/components/TimelineCard'

const timelineEvents = [
  {
    id: '2023-present',
    year: 'oct 2023 - present',
    title: 'cloud solution engineer',
    company: 'mhp - a porsche company',
    website: 'https://www.mhp.com/de/',
    additionalInfo: 'working student position',
    modalImages: [
      '/images/mhp1.jpg',
      '/images/mhp2.jpg'
    ],
    skills: ['cloud computing', 'solution architecture', 'azure', 'ci/cd', 'devops', 'powershell & scripting'],
    description: 'as a cloud solution engineer at mhp, i design and implement scalable cloud solutions. i collaborate with cross-functional teams to optimize cloud infrastructure and improve overall system performance. my work involves automating tasks, enhancing devops practices, and leading cloud projects from start to finish.',
    achievements: [
      'led multiple cloud automation projects improving operational efficiency',
      'implemented azure-based infrastructure solutions for the company',
      'enhanced system reliability through automated cloud management',
      'helped teams adopt better devops practices in their cloud projects',
      'lucky to be surrounded by skilled engineers who help me grow'
    ]
  },
  {
    id: '2023-microsoft',
    year: 'dec 2022 - may 2023',
    title: 'cloud solution architect',
    company: 'microsoft',
    website: 'https://www.microsoft.com',
    additionalInfo: 'working student position',
    modalImages: [
      '/images/microsoft1.jpg',
      '/images/microsoft2.jpg'
    ],
    skills: ['cloud computing', 'solution architecture', 'azure & openai', 'ai/ml', 'technical presentations'],
    description: 'as a cloud solution architect at microsoft, i researched potential applications of ai & openai for banking and insurance sectors. i collaborated with product teams to solve technical gaps and prioritize solutions. beyond the technical work, i shared knowledge through regular training sessions and helped drive sustainability initiatives.',
    achievements: [
      'researched ai applications for financial services industry',
      'created a demo showcasing azure openai capabilities and architectures',
      'led bi-weekly training sessions on microsoft cloud technologies',
      'helped improving automation solutions for critical reporting processes',
      'fortunate to work with and learn from brilliant engineers and architects'
    ]
  },
  {
    id: '2022-masterplan',
    year: 'jan 2022 - nov 2022',
    title: 'information & process management',
    company: 'masterplan',
    website: 'https://www.masterplan.com',
    additionalInfo: 'working student position',
    modalImages: [
      '/images/masterplan1.jpg',
      '/images/masterplan2.jpg'
    ],
    skills: ['information security', 'process management', 'enterprise architecture', 'technical documentation'],
    description: 'as an information & process manager at masterplan, i coordinated processes between different departments focusing on security and compliance. i worked closely with the ciso and legal team to improve communication flows and documentation. my role involved bridging technical and business requirements while ensuring security standards.',
    achievements: [
      'developed comprehensive technical documentation for enterprise architecture',
      'coordinated communication between engineering, product and legal departments',
      'created faq database focusing on it security and data protection',
      'implemented new procedures for security incident communication',
      'helped with iso 27001 security surveys and assessments'
    ]
  }
]

export function TimelineSection({ className }: { className?: string }) {
  return (
    <section id="work" className={`${className} py-8 pt-28`}>
      <ScrambleHeading
        text="# work experience"
        className="text-2xl sm:text-3xl font-bold mb-12"
        scramble={false}
      />
      <div className="relative">
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gray-900/30 dark:bg-white/30 transform -translate-x-1/2" />
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <TimelineCard
              key={event.id}
              {...event}
              isLeft={index % 2 === 0}
              className="mb-8"
            />
          ))}
        </div>
      </div>
    </section>
  )
}


