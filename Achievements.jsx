import { Award, Users, Trophy, CheckCircle } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      icon: Users,
      title: 'Successful Volunteer in DriveBlaze',
      description: 'Actively participated and contributed to the DriveBlaze initiative, demonstrating commitment to community service.',
      category: 'Volunteering',
      color: 'cyan',
    },
    {
      icon: Users,
      title: 'SMF PR Team Member',
      description: 'Served as a member of the Social Media and PR team, handling communications and outreach activities.',
      category: 'Leadership',
      color: 'sky',
    },
    {
      icon: Users,
      title: 'Volunteer at Ecstatia 2026, UEMK',
      description: 'Contributing as a volunteer for Ecstatia 2026, one of the premier events at University of Engineering and Management, Kolkata.',
      category: 'Volunteering',
      color: 'blue',
    },
    {
      icon: Trophy,
      title: 'Best Vlog Award - IEEE "Wired of Words"',
      description: 'Won the Best Vlog award at the IEEE event "Wired of Words", showcasing creativity and technical communication skills.',
      category: 'Recognition',
      color: 'cyan',
    },
  ];

  const memberships = [
    { name: 'IEEE MTTS', full: 'Institute of Electrical and Electronics Engineers - Microwave Theory and Techniques Society' },
    { name: 'IEEE CS', full: 'Institute of Electrical and Electronics Engineers - Computer Society' },
    { name: 'Google Developer Groups', full: 'Member of Google Developer Groups community' },
  ];

  const certifications = [
    {
      title: 'Certified in Cyber Security',
      description: 'Completed comprehensive training and certification in Cyber Security fundamentals and practices.',
    },
  ];

  return (
    <div data-testid="achievements-page" className="page-container bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <h1 className="section-title text-center" data-testid="achievements-title">
          Achievements & Recognition
        </h1>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Main Achievements */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const colorClasses = {
                  cyan: 'bg-cyan-100 text-cyan-600',
                  sky: 'bg-sky-100 text-sky-600',
                  blue: 'bg-blue-100 text-blue-600',
                };

                return (
                  <div
                    key={index}
                    className="card hover:shadow-xl transition-shadow duration-300"
                    data-testid={`achievement-${index}`}
                  >
                    <div className={`p-3 rounded-xl mb-4 inline-block ${colorClasses[achievement.color]}`}>
                      <achievement.icon size={28} />
                    </div>
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {achievement.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Professional Memberships */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-cyan-100 rounded-xl">
                <Award className="text-cyan-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Professional Memberships</h2>
            </div>
            <div className="space-y-4">
              {memberships.map((membership, index) => (
                <div key={index} className="card" data-testid={`membership-${index}`}>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{membership.name}</h3>
                      <p className="text-gray-600">{membership.full}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-sky-100 rounded-xl">
                <Trophy className="text-sky-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="card bg-gradient-to-br from-cyan-50 to-sky-50" data-testid={`certification-${index}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                  <p className="text-gray-700 text-lg">{cert.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Achievements;