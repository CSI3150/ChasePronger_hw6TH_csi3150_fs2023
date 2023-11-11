// It is assumed that this file will be placed inside the src folder
// Do not forget to first import the full path of all your images that is present in the Assets sub-directory as shown below
// import Place1Image1 from "./Assets/filename.extension" and similarly for the rest.
// You can use the images that I have provided or use your own
// I have provided a lorem ipsum content for description. Just use that. No need to spend time figuring out a description.

import TokyoImage1 from './images/TokyoImage1.jpg';
import TokyoImage2 from './images/TokyoImage2.jpg';
import TokyoImage3 from './images/TokyoImage3.jpg';
import LondonImage1 from './images/LondonImage1.jpg';
import LondonImage2 from './images/LondonImage2.jpg';
import LondonImage3 from './images/LondonImage3.jpg';
import SFImage1 from './images/SFImage1.jpg';
import SFImage2 from './images/SFImage2.jpg';
import SFImage3 from './images/SFImage3.jpg';
import HeroBgImage from './images/HeroSection-bg-image.jpg';

const TravelData = [
  {
    id: 1,
    placeHeading: "Tokyo",
    placeImg1: TokyoImage1,
    placeImg2: TokyoImage2,
    placeImg3: TokyoImage3,
    placeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  },
  {
    id: 2,
    placeHeading: "London",
    placeImg1: LondonImage1,
    placeImg2: LondonImage2,
    placeImg3: LondonImage3,
    placeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  },
  {
    id: 3,
    placeHeading: "San Francisco",
    placeImg1: SFImage1,
    placeImg2: SFImage2,
    placeImg3: SFImage3,
    placeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  },
];

export default TravelData;
