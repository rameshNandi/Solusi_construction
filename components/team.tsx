export default function Team() {
  const members = [
    {
      name: "Alfred Smith",
      role: "Senior Agent",
      image: "/professional-man-agent-portrait.jpg",
    },
    {
      name: "Sarah Brown",
      role: "Property Manager",
      image: "/professional-woman-real-estate.jpg",
    },
    {
      name: "Emma Wilson",
      role: "Sales Expert",
      image: "/professional-woman-consultant.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-[#1a2b3a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Team Member</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="text-center group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl h-72">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-[#f4d03f] text-sm font-semibold">{member.role}</p>
              <div className="flex justify-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-[#f4d03f] flex items-center justify-center text-[#1a2b3a] font-bold">
                  f
                </div>
                <div className="w-8 h-8 rounded-full bg-[#f4d03f] flex items-center justify-center text-[#1a2b3a] font-bold">
                  t
                </div>
                <div className="w-8 h-8 rounded-full bg-[#f4d03f] flex items-center justify-center text-[#1a2b3a] font-bold">
                  in
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
