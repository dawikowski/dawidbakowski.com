'use client'

import { ScrambleHeading } from './ScrambleHeading'
import { TimelineCard } from '@/components/TimelineCard'

const timelineEvents = [
  {
    id: '2023-present',
    year: '2023 - Present',
    title: 'Cloud Solution Engineer',
    company: 'MHP - A Porsche Company',
    image: '/images/mhp.jpg',
    additionalInfo: 'Working Student Position',
    modalImages: ['/images/mhp1.jpg', '/images/mhp2.jpg', '/images/mhp3.jpg', '/images/mhp4.jpg'],
    skills: ['Cloud Architecture', 'AWS', 'Azure', 'Kubernetes', 'Docker', 'CI/CD'],
    description: 'As a Cloud Solution Engineer at MHP, I am responsible for designing and implementing scalable cloud solutions for automotive clients. I work closely with cross-functional teams to optimize cloud infrastructure and improve overall system performance.',
    achievements: [
      'Implemented a containerized microservices architecture, reducing deployment time by 40%',
      'Designed and deployed a multi-cloud disaster recovery solution, ensuring 99.99% uptime for critical systems',
      'Optimized cloud costs, resulting in a 25% reduction in monthly cloud spending'
    ]
  },
  {
    id: '2023-microsoft',
    year: '2023',
    title: 'Cloud Solution Architect',
    company: 'Microsoft',
    image: '/images/microsoft.jpg',
    additionalInfo: 'Working Student Position',
    modalImages: ['/images/microsoft1.jpg', '/images/microsoft2.jpg'],
    skills: ['Azure', 'Cloud Architecture', 'Solution Design', 'Technical Consulting'],
    description: 'At Microsoft, I worked as a Cloud Solution Architect, focusing on designing and implementing Azure-based solutions for enterprise clients. I provided technical guidance and best practices to ensure successful cloud adoption and migration strategies.',
    achievements: [
      'Architected a serverless solution for a finance client, reducing operational costs by 35%',
      'Led workshops on Azure best practices, training over 50 IT professionals',
      'Developed a reference architecture for IoT data processing, adopted by multiple manufacturing clients'
    ]
  },
  {
    id: '2022-masterplan',
    year: '2022',
    title: 'Information Program Manager',
    company: 'Masterplan',
    image: '/images/masterplan.jpg',
    additionalInfo: 'Working Student Position',
    modalImages: ['/images/masterplan1.jpg', '/images/masterplan2.jpg', '/images/masterplan3.jpg'],
    skills: ['Project Management', 'Data Analysis', 'Process Optimization', 'Stakeholder Management'],
    description: 'As an Information Program Manager at Masterplan, I was responsible for overseeing the implementation of information management systems and processes. I worked closely with various departments to streamline data flow and improve decision-making processes.',
    achievements: [
      'Implemented a new CRM system, increasing sales team efficiency by 20%',
      'Developed and executed a data governance strategy, ensuring GDPR compliance',
      'Created automated reporting dashboards, reducing manual reporting time by 60%'
    ]
  }
]

export function TimelineSection({ scramble, className }: { scramble: boolean; className?: string }) {
  return (
    <section id="work" className={`${className} py-8 pt-28`}>
      <ScrambleHeading
        text="# work experience"
        className="text-2xl sm:text-3xl font-bold mb-12"
        scramble={scramble}
      />
      <div className="relative">
        <div className="absolute left-1/2 top-0 w-px h-full bg-gray-800 transform -translate-x-1/2" />
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <TimelineCard
              key={event.id}
              {...event}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

