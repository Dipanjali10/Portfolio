import { GraduationCap, Heart, Target } from 'lucide-react';

export const About = () => {
  return (
    <div data-testid="about-page" className="page-container bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <h1 className="section-title text-center" data-testid="about-title">
          About Me
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <div className="card">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-cyan-100 rounded-lg">
                <GraduationCap className="text-cyan-600" size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hello! I'm Dipanjali Dutta</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I am a passionate B.Tech student specializing in Computer Science and Engineering with a focus on Cyber Security at the University of Engineering and Management, Kolkata (UEMK). Born on December 10, 2005, I have always been driven by a curiosity to understand technology and its potential to transform lives.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My academic journey has been marked by excellence, achieving 95.6% in Class 10 (2022) and 90.2% in Class 12 (2024). Beyond academics, I am deeply involved in various technical communities and volunteer initiatives that allow me to contribute meaningfully to society while expanding my skillset.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Full Name</p>
                <p className="text-gray-900 font-medium">Dipanjali Dutta</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
                <p className="text-gray-900 font-medium">10th December, 2005</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Father's Name</p>
                <p className="text-gray-900 font-medium">Dipak Dutta</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Mother's Name</p>
                <p className="text-gray-900 font-medium">Shibani Dutta</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Blood Group</p>
                <p className="text-gray-900 font-medium">O+</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="text-gray-900 font-medium">Destination Apartment, Konnagar 712235</p>
              </div>
            </div>
          </div>

          {/* Strengths and Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Heart className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Strengths</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Leadership Skills
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Time Management
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Teamwork
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Communication
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Areas of Growth</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  Managing Stress
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  Overthinking
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                I continuously work on improving these areas through mindfulness and structured planning.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h4 className="font-bold text-lg text-gray-900">B.Tech in CSE - Cyber Security</h4>
                <p className="text-cyan-600 font-medium">University of Engineering and Management, Kolkata</p>
                <p className="text-gray-600 mt-1">2024 - Present</p>
              </div>
              <div className="border-l-4 border-sky-500 pl-6">
                <h4 className="font-bold text-lg text-gray-900">Class 12 (Higher Secondary)</h4>
                <p className="text-sky-600 font-medium">Percentage: 90.2%</p>
                <p className="text-gray-600 mt-1">Passed in 2024</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-bold text-lg text-gray-900">Class 10 (Secondary)</h4>
                <p className="text-blue-600 font-medium">Percentage: 95.6%</p>
                <p className="text-gray-600 mt-1">Passed in 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;