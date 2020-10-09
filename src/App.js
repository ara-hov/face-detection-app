import React, { useState, useRef } from 'react';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/image-link-form/ImageLinkForm';
import './App.css';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ParticlesAnimation from './components/particles/ParticlesAnimation';
import Clarifai from 'clarifai';
import FaceRecognition from './components/face-recognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: '0ba32864e1d941e4a5a5875f4107938f',
});

const App = () => {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState({});
  const inputImage = useRef(null);

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const width = Number(inputImage.current.width);
    const height = Number(inputImage.current.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = (box) => {
    console.log('displayFaceBox -> box', box);
    setBox(box);
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onButtonSubmit = () => {
    setImageUrl(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) => displayFaceBox(calculateFaceLocation(response)))
      .catch((err) => console.log(err));
  };

  return (
    <div className='App'>
      <ParticlesAnimation />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <FaceRecognition imageUrl={imageUrl} inputImage={inputImage} box={box} />
    </div>
  );
};

export default App;
