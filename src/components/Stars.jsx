import React from 'react'
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'

const Stars = (rating) => {
    let tempArr = []
    for(let i = rating.stars; i > rating.stars-5; i--){
        if(i === 0.5){
            tempArr.push('half')
        }else if(i > 0){
            tempArr.push('full')
        }else{
            tempArr.push('empty')
        }
    }
    return (tempArr.map((dummy) => {
        if(dummy === 'full'){
            return(<BsStarFill size={40} style={{margin: '0.1rem', color: '#FFD700'}} />)
        }else if(dummy === 'half'){
            return(<BsStarHalf size={40} style={{margin: '0.1rem', color: '#FFD700'}} />)
        }else {
            return(<BsStar size={40} style={{margin: '0.1rem', color: '#FFD700'}} />)
        }
    }))
}

export default Stars
