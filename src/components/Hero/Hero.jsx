import React, { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
    const [count, setCount] = useState(0);
    const [reachedThousand, setReachedThousand] = useState(false);
    const [popUp,setPopUp] =useState('');
    const [background,setBackground]= useState();
    const [image,setImage]= useState('default');

    useEffect(()=>{
        setPopUp('Welcome!');
    },[]);

    const increase = () => {
        let newCount = count;
        if (count < 10) {
            newCount = count + 1;
        } else if (count < 100) {
            newCount = count + 10;
        } else if (count < 1000) {
            newCount = count + 100;
        }
        setCount(newCount);

        if (newCount >= 1000) {
            setReachedThousand(true);
            setPopUp('You have reached 1000!');
            setBackground('#A2ABAB');
            setImage('b-1000');
        } else if (newCount >= 100 && newCount < 1000) {
            setPopUp('You have reached 100!');
            setBackground('#3b9e9e');
            setImage('b-100');
        } else if (newCount >= 10 && newCount < 100) {
            setPopUp('You have reached 10!');
            setBackground('#0b5050');
            setImage('b-10');
        }
    };

    const decrease = () => {
        let newCount = count;
        if (count <= 1000 && count > 100) {
            newCount = count - 100;
            setBackground('#3b9e9e');
            setImage('b-100');
        } else if (count <= 100 && count > 10) {
            newCount = count - 10;
            setBackground('#0b5050');
            setImage('b-10');
        } else if (count <= 10 && count >= 1) {
            newCount = count - 1;
            setBackground('#DFF3E4');
            setImage('default');
        }
        setCount(newCount);

        if (newCount <= 0) {
            setReachedThousand(false);
            setPopUp('Count has reset to 0!');
        } else if (newCount >= 100 && newCount < 1000) {
            setPopUp('You have reached 100!');
        } else if (newCount >= 10 && newCount < 100) {
            setPopUp('You have reached 10!');
        }
    };

    return (
        <section className={image} id='NaHero'>
            <div className='NaH1Button' style={{ backgroundColor: background}}>
                <h1>{count}</h1>
                <div className='NaButtons'>
                    {!reachedThousand ? (
                        <button onClick={increase}>Increase</button>
                    ) : (
                        <button onClick={decrease}>Decrease</button>
                    )}
                </div>
            </div>
            {popUp && (
                <div className='NaPopUp'>
                    <p>{popUp}</p>
                    <button onClick={() => setPopUp('')}>Close</button>
                </div>
            )}
        </section>
    );
}


