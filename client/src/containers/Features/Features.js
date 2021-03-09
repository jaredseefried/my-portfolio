import React from 'react';
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';
import WebAppDev from '../../images/full-stack-developer-main.jpg'

import './Features.css'

function Features() {

  const featured = [
    {
      src: WebAppDev,
      className: '234',
      id: '123',
      title: 'Web Application Development',
      text: 'this is text for the description',
      alt: 'alt text'
    },
    {
      src: WebAppDev,
      className: '234',
      id: '123',
      title: 'Web Application Development',
      text: 'this is text for the description',
      alt: 'alt text'
    },
    {
      src: WebAppDev,
      className: '234',
      id: '123',
      title: 'Web Application Development',
      text: 'this is text for the description',
      alt: 'alt text'
    },

  ]

  return (
    <div className="features-container col-12" id='features-container'>
      <div className='features-wrapper'>
        <div className='row'>
          <h1 className='display-3 text-center col-12'>Features</h1>
        </div>
        <div className='row' style={{ margin: '0 auto', width: '90%' }}>
          {featured.map((item, i) => (
            <FeaturedCard
              {...featured}
              key={i}
              src={item.src}
              alt={item.alt}
              id={item.id}
              text={item.text}
              title={item.title}
              className={item.className}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Features;