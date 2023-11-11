import React from 'react';
import Hero from './components/Hero/Hero';
import TravelBlog from './components/TravelBlog/TravelBlog';
import TravelData from './assets/TravelData';

function App() {
  return (
    <div className="App">
      <Hero />
      {TravelData.map((data) => (
        <TravelBlog
          key={data.id}
          heading={data.placeHeading}
          image1={data.placeImg1}
          image2={data.placeImg2}
          image3={data.placeImg3}
          description={data.placeDescription}
        />
      ))}
    </div>
  );
}

export default App;