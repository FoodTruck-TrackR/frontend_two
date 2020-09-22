import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our newest truck vendors!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/photo-1559249799-db0607d7fd04.jpg'
              text='Explore the hidden tastes of street food'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/photo-1573918780733-c6cc6d4d5b31.jpg'
              text='Food Trucks all over the world'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/photo-1576595879571-5402d294c407.jpg'
              text='Some of the greatest talent in the culinary world'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/photo-1573918780733-c6cc6d4d5b31.jpg'
              text='Experience tacos or burgers or even steaks like younever imagined!'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/photo-1568090485840-e5028c87c152.jpg'
              text='History of food trucks'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;