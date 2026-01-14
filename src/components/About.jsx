import React, { useState, useEffect } from 'react';

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/Assets/about1.jpg',
    '/Assets/about2.jpg',
    '/Assets/about3.jpg'
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="about"
      className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/Assets/bg2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Heart Sticker */}
      <img
        src="/Assets/obj5-heart.png"
        alt="Heart decoration"
        className="absolute top-20 right-8 md:right-16 lg:right-24 w-28 md:w-36 lg:w-44 animate-pulse z-25"
      />

      <div className="container mx-auto px-4 z-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-libre text-4xl md:text-5xl lg:text-6xl font-bold text-center italic mb-12 relative z-40" style={{ color: '#922B2E' }}>
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Photo Carousel */}
            <div className="relative w-full max-w-md mx-auto md:max-w-none">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="relative w-full" style={{ paddingBottom: '133.33%' }}>
                  <img
                    src={images[currentImage]}
                    alt={`About me ${currentImage + 1}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl transition-all duration-500"
                  />
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentImage === index ? 'bg-pink-400 w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <h3 className="font-libre text-2xl md:text-3xl font-bold mb-4" style={{ color: '#922B2E' }}>
                  Hi, I'm Iris! 👋
                </h3>
                
                <p className="font-dm-sans text-base md:text-lg leading-relaxed mb-4" style={{ color: '#922B2E' }}>
                  I’m an IT graduate who loves blending functionality with aesthetics to create clean,
                  engaging designs. I’m passionate about learning new things and I enjoy taking on challenges that help me grow.
                  Traveling is one of my biggest inspirations, as it fuels my creativity and gives me
                  fresh perspectives that I bring into my work.
                </p>
                
                <p className="font-dm-sans text-base md:text-lg leading-relaxed mb-4" style={{ color: '#922B2E' }}>
                  As a freelance graphic designer and IT, I collaborate with diverse clients to 
                  create custom designs and functional digital solutions tailored to their needs. I design 
                  logos, branding materials, marketing assets, and digital content, while also developing 
                  programs and systems that align with client requirements.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-pink-50 rounded-xl p-4 text-center">
                    <h4 className="font-libre text-2xl md:text-3xl font-bold text-pink-400">1+</h4>
                    <p className="font-dm-sans text-gray-600 text-sm">Year Freelancing</p>
                  </div>
                  <div className="bg-pink-50 rounded-xl p-4 text-center">
                    <h4 className="font-libre text-2xl md:text-3xl font-bold text-pink-400">20+</h4>
                    <p className="font-dm-sans text-gray-600 text-sm">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
