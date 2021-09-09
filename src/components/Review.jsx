import React from 'react'
import Stars from './Stars'

const Review = ({review}) => {
    const {id, rating, name, job, image, text} = review

    const capitalize = (str) => {
        let temp = str.split(' ')
        for(let i = 0; i < temp.length; i++){
            temp[i] = temp[i][0].toUpperCase() + temp[i].substr(1);
        }
        return temp.join(' ')
    }

    return (
        <div id='reviews'>
            <div className='review'>
                <div style={{position: 'absolute'}}><Stars stars={rating} /></div>
                <br /><br /><br />
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={image} alt={name} />
                    <div>
                        <h1>By: {capitalize(name)}</h1>
                        <h2>{capitalize(job)}</h2>
                    </div>
                </div>
                <br />
                <p>{text}</p>
                <p style={{position: 'relative', top: '2rem', left: '100%', fontWeight: 'bold'}}>{id}</p>
                <br />
            </div>
        </div>
    )
}

export default Review
