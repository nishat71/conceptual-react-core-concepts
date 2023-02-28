import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({countIncrease}) => {
    const [guns, setGuns] = useState([]);
    // console.log(guns);


    // const datas = async () => {
    //     const res = await fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`);
    //     const data = await res.json();
    //     setGuns(data);
    // }

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
        // datas();
    }, []);


    return (
        <div className='mt-5'>
            <div className='my-5'>
                <h1 className='text-4xl text-center font-bold mt-5'>Welcome To Gun Store</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus odit est officiis?
                    Commodi, accusamus ea? Et modi nemo consectetur id minima cum culpa deserunt ad?</p>
            </div>
            <div className='w-[90%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                {
                    guns.map(gun => <SingleGun gun={gun} countIncrease={countIncrease}></SingleGun>) //gun name e j array pacchi prottekbar loop kore,seta k directly patay dibo, only property o patano jay //single data na patay e puro object k patay dibo
                }
            </div>
        </div>
    );
};

export default AllGun;

//data load kore fetch kore dekano, state e datagula rakbo (state e data gula change hote pare)
//useEffect diye data fetch korar kaj krbo