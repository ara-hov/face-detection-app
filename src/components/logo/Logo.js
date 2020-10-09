import React from 'react';
import Tilt from 'react-tilt';
import logo from '../../assets/icons/face-id.png';

import './logo.scss';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt
        className='Tilt br2 shadow-2'
        options={{
          max: 35,
          reverse: true,
          perspective: 1000,
          scale: 1,
          easing: 'cubic-bezier(.03,.98,.52,.99)',
        }}
      >
        <div className='Tilt-inner pa3'>
          <img src={logo} alt='logo' />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
