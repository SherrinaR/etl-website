import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

// container to hold all of the individual card items
function Cards() {
  return (
    <div className='cards'>
        <h1>The Lord awaits you</h1>
        <div className='cards--container'>
            <div className='cards--wrapper'>
                <ul className='cards--item'>
                    <CardItem 
                        src='images\bible-study.jpg'
                        text='In the beginning God created the heavens and the earth'
                        label='Bible Ministry'
                        path='/services'
                    />
                    <CardItem 
                        src='images\bible-study.jpg'
                        text='In the beginning God created the heavens and the earth'
                        label='Prayer Ministry'
                        path='/contact'
                    />
                </ul>
                <ul className='cards--item'>
                    <CardItem 
                        src='images\bible-study.jpg'
                        text='In the beginning God created the heavens and the earth'
                        label='Marriage Ministry'
                        path='/contact'
                    />
                    <CardItem 
                        src='images\bible-study.jpg'
                        text='In the beginning God created the heavens and the earth'
                        label='Mission Work'
                        path='/mission'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards