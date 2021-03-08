import React from 'react';
import FeaturedCard from '../components/FeaturedCard';
import WebAppDev from '../images/full-stack-developer-main.jpg'

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
    <div className="features-container col-12">
      <div className='row col-12'>
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
  );
}

export default Features;