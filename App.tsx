import React, { useState } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { Hero } from './components/Hero';
import { ArtworkShowcase } from './components/ArtworkShowcase';
import { AnimationShowcase } from './components/AnimationShowcase';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ScrollProgress } from './components/ScrollProgress';
import { AmbientColor } from './types';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // 🎨 PORTFOLIO CONFIGURATION 🎨
  // This is where you can update all the content on your website.
  const portfolioData = {
    // 1. YOUR NAME: This appears at the very top of the site.
    artistName: "劉若蕎",

    // 2. YOUR BIO: This is the text shown in the 'About' section.
    bio: "I create digital art that explores the spaces between reality and imagination. Each piece is an invitation to pause, to feel, and to see the world through a different lens. My work is deeply personal, yet I hope it resonates universally — capturing moments of beauty, wonder, transformation.",

    // 3. YOUR EMAIL: This is where people can contact you.
    email: "ssayciao@gmail.com",

    // 4. ARTWORKS: Add your images here. 
    // To add a new image:
    // - Upload your image file to the 'public/artwork' folder.
    // - Copy one of the blocks below (from { to },) and paste it.
    // - Update the 'url' to match your filename (e.g., '/artwork/yourname.jpg').
    artworks: [
      {
        id: '7',
        url: '/artwork/image7.jpg',
        title: 'Vieux Port de La Rochelle',
        medium: 'Soft pastel',
        year: '2024',
        description: 'In 2024, the artist embarked on a 35-day solo journey to France, drawing inspiration from the picturesque landscapes of La Rochelle, Nantes, and Paris. This experience culminated in a captivating series of pastel artworks that reflect this enchanting period. In this work, the soft pastel hues depict a harbor scene featuring fortified stone towers and sailboats silhouetted against a vibrant pink and orange sunset.'
      },
      {
        id: '4',
        url: '/artwork/image4.jpg',
        title: 'Stairways in Montmartre, Paris',
        medium: 'Soft pastel',
        year: '2024',
        description: 'Framed by lush foliage, this vertical landscape depicts a staircase from Montmartre : the classic street lamps, the iconic graffiti walls, and offers a stunning view of the distant Paris skyline.'
      },
      {
        id: '9',
        url: '/artwork/image12.jpg',
        title: 'Musée Dobrée, Nantes',
        medium: 'Soft pastel',
        year: '2024',
        description: 'Artist visited numerous art museums during her stay in France. This drawing captures a sunny autumn day outside the Musée Dobrée in Nantes, highlighting the vibrant colors of the sun-drenched brick wall.'
      },
      {
        id: '2',
        url: '/artwork/image8.jpeg',
        title: 'Aoiike, Japan',
        medium: 'Soft pastel',
        year: '2024',
        description: 'In summer 2024, artist had a brief visit in Biei, Hokkaido. This tranquil nature scene of the iconic lake Aoiike features a shimmering turquoise body of water and surrounded by soft, lush greenery.'
      },
      {
        id: '6',
        url: '/artwork/image6.jpg',
        title: 'Paris 6e Arr.',
        medium: 'Oil pastel',
        year: '2025',
        description: 'Rendered in vibrant, textured strokes, artist uses vigorous brushwork of oil pastel to portray a charming row of Parisien storefronts.'
      },
      {
        id: '8',
        url: '/artwork/image11.png',
        title: 'The Sakura Suite',
        medium: 'Digital art',
        year: '2023',
        description: 'This set of works captures the splendor of cherry blossoms blanketing the streets of Nagoya and Yokohama. The drifting petals weave a springtime dream of Japan, echoing the poetry of life.'
      },
    ],

    // 5. ANIMATIONS: Add your video animations here.
    // To add a new animation:
    // - Upload your .mp4 file to the 'public/animations' folder.
    // - Copy one of the blocks below and update the 'url' with your filename.
    animations: [
      {
        id: '1',
        url: '/animations/je_taime.mp4',
        title: 'A Love Poem',
        medium: 'Digital Animation',
        year: '2024',
        description: 'Audio by @mandymillealheure'
      },
      {
        id: '2',
        url: '/animations/LaRochelle.mp4',
        title: 'La Rochelle',
        medium: 'Digital Animation',
        year: '2024',
        description: 'First Prize Winner in the Video Competition, 2024, organized by the Bureau Français de Taipei'
      }
    ]
  };

  // Subtle, artistic ambient colors - no dynamic transitions
  const [ambientColors] = useState<AmbientColor>({
    primary: '#f0f0f5',
    secondary: '#f5f0f5',
    accent: '#f0f5f5'
  });

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      {/* Subtle ambient background */}
      <AmbientBackground colors={ambientColors} />

      {/* Navigation */}
      <Navigation
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* Minimal scroll progress */}
      <ScrollProgress />

      {/* Main Content */}
      <main>
        {currentPage === 'home' ? (
          <>
            {/* Hero Section */}
            <Hero
              artistName={portfolioData.artistName}
            />

            {/* Gallery Section */}
            <section
              id="gallery"
              className="section"
              style={{
                minHeight: 'auto',
                paddingTop: 'var(--spacing-2xl)',
                paddingBottom: 'var(--spacing-2xl)'
              }}
            >
              <div className="container">
                {/* Artwork Showcases */}
                {portfolioData.artworks.map((artwork, index) => (
                  <ArtworkShowcase
                    key={artwork.id}
                    artwork={artwork}
                    index={index}
                  />
                ))}
              </div>
            </section>

            {/* Animations Section */}
            <section
              id="animations"
              className="section"
              style={{
                minHeight: 'auto',
                paddingTop: 'var(--spacing-2xl)',
                paddingBottom: 'var(--spacing-2xl)'
              }}
            >
              <div className="container">
                {/* Section Title */}
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(var(--font-size-3xl), 5vw, var(--font-size-4xl))',
                    textAlign: 'center',
                    marginBottom: 'var(--spacing-xl)',
                    color: 'var(--color-text-primary)'
                  }}
                >
                  Animations
                </h2>

                {/* Animation Showcases */}
                {portfolioData.animations.map((animation, index) => (
                  <AnimationShowcase
                    key={animation.id}
                    animation={animation}
                    index={index}
                  />
                ))}
              </div>
            </section>
          </>
        ) : (
          /* About Section */
          <About bio={portfolioData.bio} />
        )}

        {/* Contact Section */}
        <Contact email={portfolioData.email} />
      </main>
    </div>
  );
};

export default App;
