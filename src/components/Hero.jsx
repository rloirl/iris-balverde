import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/Assets/bg1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Decorative Stickers */}
      <img
        src="/Assets/obj4-flower.png"
        alt="Flower decoration"
        className="absolute top-1/4 left-3 md:left-8 lg:left-20 -translate-y-1/3 w-32 md:w-48 lg:w-60 animate-float z-10"
      />
      
      {/* Butterfly and Rabbit - Overlapping on Right Side */}
      <img
        src="/Assets/obj1-butterfly.png"
        alt="Butterfly decoration"
        className="absolute top-[20%] right-1 md:right-4 lg:right-12 w-28 md:w-40 lg:w-60 animate-float-delayed z-20"
      />
      
      <img
        src="/Assets/obj2-rabbit.png"
        alt="Rabbit decoration"
        className="absolute top-1/2 right-1 md:right-4 lg:right-20 w-32 md:w-44 lg:w-45 animate-float z-10"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-libre text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight italic" style={{ color: '#922B2E' }}>
            Hi, my name is <span className="text-pink-400">Iris!</span>
          </h1>
          <h1 className="font-libre text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight italic" style={{ color: '#922B2E' }}>
            I'm a Web Developer
          </h1>
          
          {/* Get to know me section */}
          <div className="flex flex-col items-center my-8">
            <p className="font-dm-sans text-lg md:text-xl text-gray-700 mb-4" style={{ color: '#922B2E' }}>
              Get to know me!
            </p>
            <img
              src="/Assets/obj3-me.png"
              alt="Get to know me"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="w-32 md:w-40 lg:w-48 hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
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

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
