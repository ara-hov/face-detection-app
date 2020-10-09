import React from 'react';
import './faceRecognition.scss';

const Facerecognition = ({ imageUrl, inputImage, box }) => {
  const { leftCol, topRow, rightCol, bottomRow } = box;
  return (
    <div className='imageContainer'>
      {imageUrl ? <img ref={inputImage} src={imageUrl} alt='imageUrl' /> : null}
      <div
        className='bounding-box'
        style={{
          top: topRow,
          right: rightCol,
          bottom: bottomRow,
          left: leftCol,
        }}
      ></div>
    </div>
  );
};

export default Facerecognition;
