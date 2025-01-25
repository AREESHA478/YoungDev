// src/components/Home.js
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './App.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome To Home Page!</h1>
      <LazyLoadImage
        alt={'Image description'}
        height={400}
        src={'https://c4.wallpaperflare.com/wallpaper/680/38/342/forest-leaves-beautiful-waterfall-landscape-photography-wallpaper-thumb.jpg'}
        width={700}
      />
  <h2>The Heart of the Forest</h2>
  <p>
Nestled deep within a vibrant green forest, this stunning waterfall emerges like a hidden jewel, cascading over weathered rocks in a dance of motion and sound. The water’s rhythmic descent creates a soothing melody that harmonizes with the rustling of leaves and the occasional chirping of birds. Sunlight filters gently through the dense canopy above, casting dappled shadows on the moss-covered stones, adding a magical touch to the serene atmosphere. The cool mist rising from the falls kisses your skin, offering a refreshing embrace that feels like nature’s own welcome. It’s a scene of raw, unfiltered beauty, where time seems to pause, allowing you to immerse yourself in the tranquility of the wild.br  </p>

<p>Surrounded by lush vegetation, the area feels untouched by the rush of modern life, as if it has been preserved solely for those who seek solace in nature. The waterfall serves as the centerpiece of this enchanting landscape, a symbol of nature’s enduring power and grace. The vibrant greens of the forest contrast beautifully with the sparkling clarity of the water, creating a palette of colors that soothes the eyes and the spirit. This is not just a place; it’s an experience—a sanctuary where the heart finds peace, the mind finds clarity, and the soul reconnects with the earth’s purest form of beauty.</p>
    </div>
  );
};

export default Home;