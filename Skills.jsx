import { Languages, Users, Clock, Shield } from 'lucide-react';

export const Skills = () => {
  const languageSkills = [
    { name: 'Bengali', level: 'Mother Tongue', percentage: 100 },
    { name: 'English', level: 'Proficient', percentage: 90 },
    { name: 'Hindi', level: 'Proficient', percentage: 85 },
  ];

  const professionalSkills = [
    {
      icon: Users,
      title: 'Teamwork & Leadership',
      description: 'Experienced in leading teams and collaborating effectively in group projects and volunteer initiatives.',
      color: 'cyan',
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Skilled at prioritizing tasks, meeting deadlines, and balancing academic and extracurricular commitments.',
      color: 'sky',
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Certified in Cyber Security with knowledge of security protocols, threat analysis, and protection mechanisms.',
      color: 'blue',
    },
  ];

  return (
    <div data-testid="skills-page" className="page-container bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <h1 className="section-title text-center" data-testid="skills-title">
          Skills & Expertise
        </h1>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Language Skills */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-cyan-100 rounded-xl">
                <Languages className="text-cyan-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Language Proficiency</h2>
            </div>
            
            <div className="space-y-6">
              {languageSkills.map((lang) => (
                <div key={lang.name} className="card">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{lang.name}</h3>
                    <span className="text-cyan-600 font-semibold">{lang.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-sky-500 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Skills */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {professionalSkills.map((skill) => {
                const colorClasses = {
                  cyan: 'bg-cyan-100 text-cyan-600 border-cyan-200',
                  sky: 'bg-sky-100 text-sky-600 border-sky-200',
                  blue: 'bg-blue-100 text-blue-600 border-blue-200',
                };
                
                return (
                  <div
                    key={skill.title}
                    className="card border-2 border-transparent hover:border-cyan-200 transition-all duration-300"
                  >
                    <div className={`p-4 rounded-xl mb-4 inline-block ${colorClasses[skill.color]}`}>
                      <skill.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{skill.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Technical Knowledge */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Knowledge</h2>
            <div className="card">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Security Protocols', 'Threat Analysis', 'Network Security', 'Risk Assessment'].map(
                  (tech) => (
                    <div
                      key={tech}
                      className="p-4 bg-gradient-to-br from-cyan-50 to-sky-50 rounded-lg text-center hover:shadow-md transition-shadow duration-300"
                    >
                      <p className="font-semibold text-gray-900">{tech}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;