import React, { useState } from 'react';
import ShowTrains from './ShowTrains';
import banner from '../img/Parasuram-Express-Stylised-photo-Paravur-Kerala (1).jpg'

const HomePage = () => {

    // const [userData,setUserData]=useState(user);

    const backgroundStyle = {
        background: 'rgb(40, 40, 43)',
        color: 'white',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const titleStyle = {
        textAlign: 'center',
        fontSize: '2.5rem', // You can adjust the font size as needed
        fontWeight: 'bold',
        margin: '1rem 0', // Adding some margin to the top and bottom
    };

    return (
        <div style={backgroundStyle}>
            <h1 style={titleStyle}>Journey Booker</h1>
            {/* <img src='https://24coaches.com/wp-content/uploads/2020/03/Parasuram-Express-Stylised-photo-Paravur-Kerala.jpg' width="100%" alt="Train" /> */}
        <img src={banner} alt='train' width="100%"></img>
            <div>
                {/* <ShowTrains userData={user}></ShowTrains> */}
            </div>
        </div>
    );
}

export default HomePage;
