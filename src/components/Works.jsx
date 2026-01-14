import React, { useState, useEffect } from 'react';

const Works = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' or 'art'
  const [selectedArt, setSelectedArt] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel for modal images
  useEffect(() => {
    if (selectedWork && selectedWork.images && selectedWork.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex < selectedWork.images.length - 1 ? prevIndex + 1 : 0
        );
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [selectedWork]);

  const works = [
    {
      id: 1,
      title: 'Dayawism: A Philippine Mythology 2D RPG',
      image: '/Assets/work1.png',
      images: ['/Assets/work1.png', '/Assets/work1-a.png', '/Assets/work1-b.png', '/Assets/work1-c.png'],
      category: 'Web Design',
      technologies: ['UI/UX', 'Game development', 'Bootstrap', '', 'Node.js'],
      details: 'This game merges the rich cultural heritage of Filipino mythology with modern game mechanics to engage students in learning about ancient mythological creatures, gods, and legends. Through an interactive journey, players explore various chapters based on Filipino folklore, completing quests, battling creatures in turn-based combat, and answering educational quizzes to progress.'
    },
    {
      id: 2,
      title: 'BLVCK Entertainment Official Website',
      image: '/Assets/work6.png',
      images: ['/Assets/work6.png', '/Assets/work6-artists.png', '/Assets/work6-media.png', '/Assets/work6-about.png'],
      category: 'Web Development',
      technologies: ['React.js', 'Vite', 'Tailwind CSS'],
      details: 'Official digital presence for BLVCK Entertainment, a modern website built with React and Vite. The website showcases the company\'s brand identity, artist roster, film productions, media content, and entertainment services including movies, concerts, advertisements, and talent management. Features responsive design, embedded YouTube and TikTok content, dynamic navigation, and a professional dark-themed aesthetic with modular component architecture for future scalability.'
    },
    {
      id: 3,
      title: 'TrackIt: Expenses Tracker',
      image: '/Assets/work2.png',
      category: 'App',
      technologies: ['UI/UX', ' Website Builder', 'Founder Tools'],
      details: 'TrackIt is an intuitive and efficient expense tracking app designed to help users manage their finances with ease. By providing real-time insights into spending patterns, TrackIt allows users to set and monitor budget goals, track daily expenses, and gain a clear overview of their financial progress. With features like detailed reports, activity graphs, and seamless integration with your financial data, TrackIt empowers users to make smarter, more informed decisions about their spending, all while staying organized and on top of their financial goals.'
    },
    {
      id: 4,
      title: 'TECHLIB: Library Management System',
      image: '/Assets/work3.png',
      category: 'System',
      technologies: ['Barcode Technology', 'Database Management', 'System Design'],
      details: 'TECHLIB is a Library Management System designed for Acacia Elementary School that automates library operations including book tracking, member management, and borrowing transactions. The system features barcode-based book identification, automated record keeping, real-time availability updates, and comprehensive report generation. It replaces manual processes with a computerized solution that minimizes errors, improves accuracy, and speeds up library operations for librarians, students, and school administrators.'
    },
    {
      id: 5,
      title: 'Telegram-Controlled Web Automation System',
      image: '/Assets/work4.png',
      category: 'Automation',
      technologies: ['Python', 'Playwright', 'Telegram Bot', 'Web Automation'],
      details: 'A Python-based automation framework that demonstrates remote-controlled browser automation using Telegram bot commands. The system manages multiple test accounts, performs automated web interactions, and features CAPTCHA detection, error handling with automatic retries, proxy support, and comprehensive logging. It integrates Playwright for browser automation with a Telegram bot interface for remote control, providing real-time monitoring and detailed execution logs for debugging and analysis.'
    },
    {
      id: 6,
      title: 'Chrome Extension Facebook AutoLogout',
      image: '/Assets/work5.png',
      category: 'Extension',
      technologies: ['Chrome Extension', 'JavaScript', 'Chrome APIs', 'Web Automation'],
      details: 'A Google Chrome Extension designed to automate repetitive navigation actions on Facebook Messages with a focus on privacy and security settings. Features user-controlled automation with configurable loop counts (1-1000) and delays (500-10,000ms), automated navigation to encrypted chats and security alerts, start/stop controls via popup UI, and uses Chrome Extension APIs (tabs, activeTab, scripting). The extension provides privacy-conscious users with an efficient way to manage security settings without manual repetitive navigation, all while keeping data local to the browser.'
    }
  ];

  const artworks = [
    { id: 1, image: '/Assets/art1.png', title: 'Art Piece 1' },
    { id: 2, image: '/Assets/art2.png', title: 'Art Piece 2' },
    { id: 3, image: '/Assets/art3.gif', title: 'Art Piece 3' },
    { id: 4, image: '/Assets/art4.png', title: 'Art Piece 4' },
    { id: 5, image: '/Assets/art5.png', title: 'Art Piece 5' },
    { id: 6, image: '/Assets/art6.png', title: 'Art Piece 6' },
    { id: 7, image: '/Assets/art7.png', title: 'Art Piece 7' },
    { id: 8, image: '/Assets/art8.gif', title: 'Art Piece 8' },
    { id: 9, image: '/Assets/art9.png', title: 'Art Piece 9' },
    { id: 10, image: '/Assets/art10.png', title: 'Art Piece 10' },
    { id: 11, image: '/Assets/art11.png', title: 'Art Piece 11' },
    { id: 12, image: '/Assets/art12.png', title: 'Art Piece 12' },
    { id: 13, image: '/Assets/art13.png', title: 'Art Piece 13' },
    { id: 14, image: '/Assets/art14.png', title: 'Art Piece 14' },
    { id: 15, image: '/Assets/art15.png', title: 'Art Piece 15' },
    { id: 16, image: '/Assets/art16.png', title: 'Art Piece 16' },
    { id: 17, image: '/Assets/art17.png', title: 'Art Piece 17' },
    { id: 18, image: '/Assets/art18.gif', title: 'Art Piece 18' }
  ];

  const displayedWorks = showAll ? works : works.slice(0, 4);

  return (
    <section
      id="works"
      className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/Assets/bg3.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-libre text-4xl md:text-5xl lg:text-6xl font-bold text-center italic mb-4" style={{ color: '#922B2E' }}>
            My Works
          </h2>
          
          <p className="font-dm-sans text-center text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#922B2E' }}>
            Explore a selection of my recent projects and creative endeavors
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('projects')}
              className={`font-dm-sans px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 ${
                activeTab === 'projects'
                  ? 'bg-pink-400 text-white'
                  : 'bg-white hover:bg-pink-100'
              }`}
              style={{ color: activeTab === 'projects' ? 'white' : '#922B2E' }}
            >
              Technical Projects
            </button>
            <button
              onClick={() => setActiveTab('art')}
              className={`font-dm-sans px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 ${
                activeTab === 'art'
                  ? 'bg-pink-400 text-white'
                  : 'bg-white hover:bg-pink-100'
              }`}
              style={{ color: activeTab === 'art' ? 'white' : '#922B2E' }}
            >
              Art Gallery
            </button>
          </div>

          {/* Projects Grid */}
          {activeTab === 'projects' && (
            <>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {displayedWorks.map((work) => (
                  <div
                    key={work.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                    onClick={() => setSelectedWork(work)}
                  >
                <div className="relative overflow-hidden h-64 md:h-72">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-pink-400 text-white px-4 py-2 rounded-full font-dm-sans text-sm font-semibold">
                    {work.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-libre text-2xl font-bold text-gray-800 mb-3">
                    {work.title}
                  </h3>
                  
                  <p className="font-dm-sans text-gray-600 mb-4 leading-relaxed">
                    {work.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-sm font-dm-sans font-medium"
                      >
                        {tech}
                      </span>
                        ))}
                  </div>
                </div>
              </div>
                ))}
              </div>

              {/* View All Button for Projects */}
              <div className="text-center mt-12">
                <button 
                  onClick={() => setShowAll(!showAll)}
                  className="font-dm-sans bg-pink-300 hover:bg-pink-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {showAll ? 'Show Less' : 'View All Projects'}
                </button>
              </div>
            </>
          )}

          {/* Art Gallery Grid */}
          {activeTab === 'art' && (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {artworks.map((art) => (
                <div
                  key={art.id}
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  onClick={() => setSelectedArt(art)}
                >
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="font-libre text-xl font-bold text-white mb-1">
                        {art.title}
                      </h3>
                      <p className="font-dm-sans text-white/90 text-sm">
                        Click to view full size
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal for Work Details */}
      {selectedWork && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedWork(null);
            setCurrentImageIndex(0);
          }}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setSelectedWork(null);
                setCurrentImageIndex(0);
              }}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors duration-200 z-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image Carousel */}
            <div className="relative mb-6">
              <img
                src={selectedWork.images ? selectedWork.images[currentImageIndex] : selectedWork.image}
                alt={selectedWork.title}
                className="w-full h-64 object-cover rounded-2xl"
              />
              
              {/* Navigation Arrows - only show if multiple images */}
              {selectedWork.images && selectedWork.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => 
                      prev > 0 ? prev - 1 : selectedWork.images.length - 1
                    )}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-200 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => setCurrentImageIndex((prev) => 
                      prev < selectedWork.images.length - 1 ? prev + 1 : 0
                    )}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-200 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedWork.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          currentImageIndex === index 
                            ? 'bg-pink-400 w-6' 
                            : 'bg-white/60 hover:bg-white'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <h3 className="font-libre text-3xl font-bold text-gray-800 mb-4">
              {selectedWork.title}
            </h3>
            
            <p className="font-dm-sans text-gray-700 text-lg mb-6 leading-relaxed">
              {selectedWork.details}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedWork.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-pink-50 text-pink-600 px-4 py-2 rounded-full text-sm font-dm-sans font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <button className="font-dm-sans bg-pink-300 hover:bg-pink-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 w-full">
              View Live Project
            </button>
          </div>
        </div>
      )}

      {/* Art Gallery Lightbox Modal */}
      {selectedArt && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArt(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setSelectedArt(null)}
              className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors duration-200 flex items-center gap-2 font-dm-sans"
            >
              <span>Close</span>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedArt.image}
                alt={selectedArt.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="font-libre text-2xl md:text-3xl font-bold text-white">
                  {selectedArt.title}
                </h3>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = artworks.findIndex(a => a.id === selectedArt.id);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : artworks.length - 1;
                setSelectedArt(artworks[prevIndex]);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = artworks.findIndex(a => a.id === selectedArt.id);
                const nextIndex = currentIndex < artworks.length - 1 ? currentIndex + 1 : 0;
                setSelectedArt(artworks[nextIndex]);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
