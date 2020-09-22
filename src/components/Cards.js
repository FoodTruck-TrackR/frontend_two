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
							src='images/img-9.jpg'
							text='Explore the hidden tastes of street food'
							label='Fresh'
							path='/services'
						/>
						<CardItem
							src='images/img-10.jpg'
							text='Food Trucks all over the world'
							label='Easy'
							path='/services'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src='images/img-12.jpg'
							text='Some of the greatest talent in the culinary world'
							label='Fun'
							path='/services'
						/>
						<CardItem
							src='images/img-14.jpg'
							text='Experience tacos or burgers or even steaks like you never imagined!'
							label='anywhere'
							path='/products'
						/>
						<CardItem
							src='images/img-11.jpg'
							text='History of food trucks'
							label='Anytime'
							path='/sign-up'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
