import React, { useState } from 'react';

const Services = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const services = [
    {
      id: 1,
      name: 'Web Development & Design',
      description: 'Full-stack development with React, Node.js, and responsive design',
      image: '/Assets/item1.png',
      position: { top: '60%', left: '30%', width: '30%' }
    },
    {
      id: 2,
      name: 'UI/UX Design',
      description: 'User interface design, prototyping, and experience optimization',
      image: '/Assets/item2.png',
      position: {  top: '65%', left: '50%', width: '20%' }
    },
    {
      id: 3,
      name: 'Graphic Design & Branding',
      description: 'Digital illustration, brand identity, and marketing materials',
      image: '/Assets/item3.png',
      position: { top: '35%', left: '25%', width: '30%' }
    },
    {
      id: 4,
      name: 'Custom System Development',
      description: 'Database-driven applications, management systems, and APIs',
      image: '/Assets/item4.png',
      position: { top: '40%', left: '50%', width: '20%' }
    },
    {
      id: 5,
      name: 'Automation & Bot Development',
      description: 'Web automation, Telegram/Discord bots, and task automation',
      image: '/Assets/item6.png',
      position: { top: '40%', left: '70%', width: '15%' }
      
    },
    
    {
      id: 6,
      name: 'Game Development',
      description: '2D game design, educational games, and interactive experiences',
      image: '/Assets/item5.png',
      position: { top: '65%', left: '70%', width: '20%' }
      
    }
  ];

  return (
    <section
      id="services"
      className="min-h-screen relative flex items-center justify-center py-12 md:py-16 overflow-hidden"
      style={{
        backgroundColor: '#FAF1E8'
      }}
    >
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-4xl mx-auto">
          {/* Title with Decorative Element */}
          <div className="relative flex items-center justify-center mb-4">
            <h2 
              className="font-libre text-3xl md:text-4xl lg:text-5xl font-bold text-center italic"
              style={{ color: '#922B2E' }}
            >
              Services
            </h2>
          </div>

          {/* Tagline */}
          <p 
            className="font-libre text-base md:text-lg lg:text-xl text-center italic mb-6 md:mb-8 max-w-3xl mx-auto px-4"
            style={{ color: '#922B2E' }}
          >
            Your digital dreams are closer than you think—just a splash of design, a sprinkle of code, and a whole lot of creative magic.
          </p>
          
          {/* Cart Container with Items */}
          <div className="relative w-full max-w-3xl md:max-w-4xl mx-auto">
            {/* Decorative Elements */}
            <img
              src="/Assets/obj9-mush.png"
              alt="Cow decoration"
              className="absolute -left-8 md:-left-12 lg:-left-16 top-50 md:top-56 lg:top-56 w-20 md:w-40 lg:w-48 animate-float z-20"
            />
            <img
              src="/Assets/obj8-plastic.png"
              alt="Plastic decoration"
              className="absolute -right-8 md:-right-12 lg:-right-16 top-8 md:top-12 lg:top-16 w-20 md:w-40 lg:w-48 animate-float z-20"
            />
            
            {/* Cart Background */}
            <div className="relative w-full" style={{ paddingBottom: '85%' }}>
              <img
                src="/Assets/services-cart.png"
                alt="Services Cart"
                className="absolute inset-0 w-full h-full object-contain"
              />
              
              {/* Service Items Inside Cart */}
              {services.map((service) => (
                <div
                  key={service.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110"
                  style={{
                    top: service.position.top,
                    left: service.position.left,
                    width: service.position.width || '18%',
                    zIndex: hoveredItem === service.id ? 100 : 10
                  }}
                  onMouseEnter={() => setHoveredItem(service.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-auto object-contain drop-shadow-lg"
                  />
                  
                  {/* Hover Tooltip */}
                  {hoveredItem === service.id && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-2xl shadow-2xl p-4 w-56 md:w-64 animate-fadeIn z-50">
                      <h3 className="font-libre text-sm md:text-base font-bold mb-1" style={{ color: '#922B2E' }}>
                        {service.name}
                      </h3>
                      <p className="font-dm-sans text-xs md:text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
                    </div>
                  )}
                </div>
              ))}
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

export default Services;
