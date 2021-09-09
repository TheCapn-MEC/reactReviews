import React, {useState} from 'react'
import data from './data'
import Review from '../components/Review'
import '../styles/styles.css'
import {BsStarFill} from 'react-icons/bs'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const App = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '80%',
        },
        thumb: {
            backgroundColor: '#FFD700'
        },
        margin: {
            height: theme.spacing(3),
        },
    }));

    const StarSlider = withStyles({
        track: {
            backgroundColor: 'black'
        },
        rail: {
            backgroundColor: 'transparent'
        },
        mark: {
            backgroundColor: 'transparent'
        },
        thumb: {
            backgroundColor: 'transparent',
            '&:focus, &:hover, &$active': {
                boxShadow: 'none',
             },
        }
    })(Slider);

    const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 0.5,
        label: '0.5',
    },
    {
        value: 1,
        label: '1',
    },
    {
        value: 1.5,
        label: '1.5',
    },
    {
        value: 2,
        label: '2'
    },
        {
        value: 2.5,
        label: '2.5',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 3.5,
        label: '3.5',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 4.5,
        label: '4.5'
    },
    {
        value: 5,
        label: '5'
    }
    ];
    const classes = useStyles();


    const reviews = data;
    let [currentReview, setcurrentReview] = useState(0)
    const prevReview = () => {
        if(currentReview > 0){
            setcurrentReview(currentReview -= 1)
        }else{
            setcurrentReview(reviews.length-1)
        }
    }
    const nextReview = () => {
        if(currentReview < reviews.length-1){
            setcurrentReview(currentReview += 1)
        }else{
            setcurrentReview(0)
        }
    }
    const randReview = () => {
        setcurrentReview(Math.floor(Math.random() * reviews.length))
    }

    let currentStars = 5;
    const postReview = () => {
        if(
            document.getElementById('name').value !== '' &&
            document.getElementById('job').value !== '' &&
            document.getElementById('thoughts').value !== ''
        ){
            reviews.push(
                {
                    id: reviews.length+1,
                    rating: currentStars,
                    name: document.getElementById('name').value,
                    job: document.getElementById('job').value,
                    image:
                    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                    text: document.getElementById('thoughts').value,
                },
            )
            document.getElementById('name').value = '';
            document.getElementById('job').value = '';
            document.getElementById('thoughts').value = '';
        }
    }

    const getValue = (x,y) => {
        currentStars = y;
    }

    const thumbComponent = (props) => {
        return (
            <span {...props}>
                <BsStarFill color='#FFD700' />
            </span>
        )
    }

    return (
        <>
            <Review key={reviews[currentReview]} review={reviews[currentReview]} />
            <div id='btnPanel'>
                <button onClick={prevReview} id='prevBtn'>Previous</button>
                <button onClick={randReview} id='randBtn'>Random</button>
                <button onClick={nextReview} id='nextBtn'>Next</button>
            </div>

            <div id='postReview'>
                <h1>Post your own review!</h1>
                <br />

                <div className={classes.root} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <Typography id="discrete-slider-custom" gutterBottom>
                        How many stars?
                    </Typography>
                    <StarSlider
                        defaultValue={5}
                        aria-labelledby="discrete-slider-custom"
                        step={0.5}
                        valueLabelDisplay="off"
                        marks={marks}
                        min={0}
                        max={5}
                        onChangeCommitted={getValue}
                        ThumbComponent={thumbComponent}
                    />
                </div>
                <div id='input1'>
                    <input type='text' placeholder='Name' id='name' /><br />
                    <input type='text' placeholder='Job' id='job' /><br />
                </div>
                <textarea type='text' placeholder='What do you have to say?' id='thoughts' /><br />
                <button onClick={postReview}>Post</button>
            </div>
        </>
    )
}

export default App
