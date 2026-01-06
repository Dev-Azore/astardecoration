import Image from 'next/image'
import { teamData } from '@/data/team'

export function TeamGrid() {
  return (
    <section className="py-20 bg-linear-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <div key={member.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <Image src={member.image} alt={member.name} width={128} height={128} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gold-300" />
              <h3 className="text-2xl font-bold text-gold-700 mb-1">{member.name}</h3>
              <p className="text-gray-700 font-medium mb-1">{member.role}</p>
              <p className="text-gray-600 mb-3">{member.bio}</p>
              <ul className="flex flex-wrap gap-2 justify-center text-xs text-amber-700">
                {member.expertise.map((skill) => (
                  <li key={skill} className="bg-amber-100 px-2 py-1 rounded-full">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
