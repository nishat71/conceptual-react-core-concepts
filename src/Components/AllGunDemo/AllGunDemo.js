import React, { useEffect, useState } from 'react';
import SingleGunDemo from '../SingleGunDemo/SingleGunDemo';
import './AllGunDemo.css'


const AllGunDemo = () => {
    const [guns, setGuns] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
    }, []);

    console.log(guns);


    return (
        <div className='mt-5'>
            <div className='my-5'>
                <h1 className='text-4xl text-center font-bold mt-5'>Welcome To Demo Gun Store</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus odit est officiis?
                    Commodi, accusamus ea? Et modi nemo consectetur id minima cum culpa deserunt ad?</p>
                <div className='w-[90%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                    {
                        guns.map(gun => <SingleGunDemo gun={gun}></SingleGunDemo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllGunDemo;