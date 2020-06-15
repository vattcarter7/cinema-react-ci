import React from 'react';

import './MainContent.scss';
import SlideShow from '../slide-show/SlideShow';

const MainContent = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&w=1000&q=80'
    }
  ];

  return (
    <div className="main-content">
      <SlideShow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
    </div>
  );
};

export default MainContent;
