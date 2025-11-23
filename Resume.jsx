import { Download, User, GraduationCap, Briefcase, Award, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Resume = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div data-testid="resume-page" className="page-container bg-gray-50">
      <div className="section-container">
        {/* Download Button */}
        <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Resume</h1>
          <Button
            data-testid="download-resume-btn"
            onClick={handleDownload}
            className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download size={20} className="mr-2" />
            Download / Print
          </Button>
        </div>

        {/* Resume Content */}
        <div id="resume-content" className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-12">
          {/* Header */}
          <div className="border-b-4 border-cyan-500 pb-8 mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">DIPANJALI DUTTA</h1>
            <p className="text-xl text-cyan-600 font-semibold mb-4">B.Tech in CSE - Cyber Security</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-600" />
                <span>+91 7029807448</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-cyan-600" />
                <span>neha.ppmb@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-cyan-600" />
                <span>Konnagar 712235</span>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-cyan-100 p-2 rounded-lg">
                <User className="text-cyan-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">PERSONAL INFORMATION</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 pl-12">
              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-semibold text-gray-900">10th December, 2005</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Blood Group</p>
                <p className="font-semibold text-gray-900">O+</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Father's Name</p>
                <p className="font-semibold text-gray-900">Dipak Dutta</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Mother's Name</p>
                <p className="font-semibold text-gray-900">Shibani Dutta</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-sky-100 p-2 rounded-lg">
                <GraduationCap className="text-sky-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">EDUCATION</h2>
            </div>
            <div className="space-y-4 pl-12">
              <div>
                <h3 className="font-bold text-lg text-gray-900">B.Tech in Computer Science and Engineering (Cyber Security)</h3>
                <p className="text-cyan-600 font-semibold">University of Engineering and Management, Kolkata</p>
                <p className="text-gray-600">2024 - Present</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Higher Secondary (Class 12)</h3>
                <p className="text-sky-600 font-semibold">Percentage: 90.2%</p>
                <p className="text-gray-600">Passed in 2024</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Secondary (Class 10)</h3>
                <p className="text-blue-600 font-semibold">Percentage: 95.6%</p>
                <p className="text-gray-600">Passed in 2022</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Briefcase className="text-blue-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">SKILLS</h2>
            </div>
            <div className="pl-12">
              <div className="mb-4">
                <h3 className="font-bold text-gray-900 mb-2">Languages</h3>
                <p className="text-gray-700">Bengali (Mother Tongue), English (Proficient), Hindi (Proficient)</p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold text-gray-900 mb-2">Professional Skills</h3>
                <p className="text-gray-700">Leadership, Teamwork, Time Management, Communication, Cyber Security</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Technical Knowledge</h3>
                <p className="text-gray-700">Security Protocols, Threat Analysis, Network Security, Risk Assessment</p>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <Award className="text-green-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">ACHIEVEMENTS & ACTIVITIES</h2>
            </div>
            <ul className="space-y-2 pl-12 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>Successful volunteer in DriveBlaze initiative</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>SMF PR Team Member</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>Volunteer at Ecstatia 2026, UEMK</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>Best Vlog Award - IEEE Event "Wired of Words"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>Member of IEEE MTTS (Microwave Theory and Techniques Society)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>Member of IEEE CS (Computer Society)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>Member of Google Developer Groups</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>Certified in Cyber Security</span>
              </li>
            </ul>
          </section>

          {/* Strengths & Weaknesses */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">STRENGTHS & AREAS OF GROWTH</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Strengths</h3>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Leadership Skills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Time Management</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Areas of Growth</h3>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>Managing Stress</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>Overthinking</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          .page-container {
            padding-top: 0 !important;
          }
          nav, button {
            display: none !important;
          }
          #resume-content {
            box-shadow: none !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;