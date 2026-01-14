import React from 'react';

const Experience = () => {
  const workExperience = [
    {
     id: 1,
      period: 'Feb - May 2025',
      role: 'Web Developer and Production Assistant',
      company: 'Blvck Entertainment Production Inc. - OJT',
      responsibilities: [
        'Partnered with the creative team, stakeholders to define system requirements for the company website',
        'Designed/implemented solutions using ReactJs and Tailwind CSS, ensuring alignment with business branding',
        'Conducted requirements validation and iterative updates based on stakeholder feedback',
        'Provided technical support and documentation for desktop, peripheral, and operating systems',
        'Acted as a liaison between business users and the technical team for routine requests and troubleshooting'
      ]
    },
    {
       id: 2,
      period: 'Sept - Dec 2025',
      role: 'Customer Care Representative',
      company: 'Alorica Philippines',
      responsibilities: [
        'Assist customers with account inquiries, billing questions, plan changes, and service issues',
        'Troubleshoot basic to moderate technical problems for mobile, internet, and device services',
        'Resolve customer concerns professionally and de-escalate issues when necessary',
        'Accurately document customer interactions and update account information',
        'Promote company products, services, and add-ons when appropriate',
        'Meet performance metrics such as customer satisfaction, call quality, and resolution time'
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Information Technology',
      school: 'STI College Caloocan',
      period: '2021 - 2025',
      achievements: [
        'Magna Cum Laude',
        'Consistent President Lister',
        'Awarded Best Thesis Award in Data Structures and Algorithms'
      ]
    },
    {
      id: 2,
      degree: 'Information Communications and Technology (ICT)',
      school: 'La Consolacion College Caloocan',
      period: '2019 - 2021',
      achievements: [
        'Consistent Honor Student',
        'Made programs in Visual Basic and Animations in Adobe Flash'
      ]
    }
  ];

  const tools = [
    'React.js',
    'Node.js',
    'Java',
    'Python',
    'C#',
    'HTML/CSS/JavaScript',
    'SQL Databases',
    'Figma',
    'Adobe Flash'
  ];

  const awards = [
    'Award of Course Completion: Java Foundations - June 27, 2022',
    'Award of Course Completion: Systems Administration - July 4, 2022',
    'Best Gamified Capstone Mythology Game - December 6, 2024',
    'Integration of React Native with XAMPP database: Enhancing Mobile backend connectivity - March 26, 2025'
  ];

  return (
    <section
      id="experience"
      className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/Assets/bg4.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-6xl mx-auto">
          {/* Cow Sticker positioned at right side of title */}
          <div className="relative flex items-center justify-center mb-12">
            <h2 className="font-libre text-4xl md:text-5xl lg:text-6xl font-bold text-center italic" style={{ color: '#922B2E' }}>
              Experience
            </h2>
            <img
              src="/Assets/obj7-cow.png"
              alt="Cow decoration"
              className="absolute right-0 md:right-8 lg:right-16 top-1/2 transform -translate-y-3/4 w-24 md:w-32 lg:w-40 animate-float z-10"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Work Experience */}
            <div className="space-y-6">
              <h3 className="font-libre text-2xl md:text-3xl font-bold mb-6" style={{ color: '#922B2E' }}>
                Work Experience
              </h3>
              
              {workExperience.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-libre text-xl font-bold" style={{ color: '#922B2E' }}>
                        {exp.role}
                      </h4>
                      <p className="font-dm-sans text-pink-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-dm-sans bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-2">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="font-dm-sans text-sm flex items-start" style={{ color: '#922B2E' }}>
                        <span className="text-pink-400 mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Tools & Software */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
                <h3 className="font-libre text-2xl font-bold mb-4" style={{ color: '#922B2E' }}>
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, idx) => (
                    <span key={idx} className="bg-pink-50 text-pink-600 px-4 py-2 rounded-full text-sm font-dm-sans font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Education & Awards */}
            <div className="space-y-6">
              <h3 className="font-libre text-2xl md:text-3xl font-bold mb-6" style={{ color: '#922B2E' }}>
                Education
              </h3>
              
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl"
                >
                  <div className="flex items-start mb-3">
                    <span className="text-pink-400 mr-3 mt-1 text-2xl">🎓</span>
                    <div className="flex-1">
                      <h4 className="font-libre text-xl font-bold" style={{ color: '#922B2E' }}>
                        {edu.degree}
                      </h4>
                      <p className="font-dm-sans font-semibold text-pink-400 mt-1">
                        {edu.school}
                      </p>
                      <span className="font-dm-sans text-sm text-gray-500 mt-1 inline-block">
                        {edu.period}
                      </span>
                      
                      <ul className="space-y-1 mt-3">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="font-dm-sans text-sm flex items-start" style={{ color: '#922B2E' }}>
                            <span className="text-pink-400 mr-2">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              {/* Awards & Certificates */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
                <h3 className="font-libre text-2xl font-bold mb-4" style={{ color: '#922B2E' }}>
                  Awards & Certificates
                </h3>
                <ul className="space-y-2">
                  {awards.map((award, idx) => (
                    <li key={idx} className="font-dm-sans text-sm flex items-start" style={{ color: '#922B2E' }}>
                      <span className="text-pink-400 mr-2">🏆</span>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;
