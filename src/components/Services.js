import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktail',
        info:
          'Duis qui cillum esse sint exercitation cupidatat nostrud ex aliquip aliqua aliqua labore id.',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'Duis qui cillum esse sint exercitation cupidatat nostrud ex aliquip aliqua aliqua labore id.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info:
          'Duis qui cillum esse sint exercitation cupidatat nostrud ex aliquip aliqua aliqua labore id.',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest beer',
        info:
          'Duis qui cillum esse sint exercitation cupidatat nostrud ex aliquip aliqua aliqua labore id.',
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
