import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => { //directly props distructuting kore action name e receive krte pari
    const [modalData, setModalData] = useState({});
    // console.log(modalData);
    const { gun, countIncrease } = props;
    // console.log(gun);
    const { action, bullet, img, name, price, capacity } = gun;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure>
                    <img className='w-96 h-64' src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-neutral">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <div className="badge badge-outline">{action}</div>
                        <div className="badge badge-outline">{bullet}</div>
                        <div className='mt-4'>
                            <button onClick={() => countIncrease()} className="btn btn-sm btn-primary mr-2">Add To Cart</button>
                            {/* <button className="btn btn-sm btn-success">Details</button> */}
                            <label onClick={() => setModalData(gun)} htmlFor="my-modal-3" className="btn btn-sm btn-success">Details</label>
                        </div>
                    </div>
                </div>
            </div>
            {modalData && (
                <Modal data={modalData} setModalData={setModalData}></Modal> //data pataisi cz ai data modal e dekabo, setModalData functin pataisi cz state clear krbo
            )}
        </div>
    );
};

export default SingleGun;