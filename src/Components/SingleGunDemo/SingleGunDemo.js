import React from 'react';
import './SingleGunDemo.css'


const SingleGunDemo = (props) => {
    const { gun } = props;
    const { bullet, name, img, action } = gun;

    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure>
                    <img className='w-96 h-64' src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <div className="badge badge-outline">{action}</div>
                        <div className="badge badge-outline">{bullet}</div>
                        <div className='mt-4'>
                            <button className='btn btn-sm btn-primary mr-2'>Add To Cart</button>
                            <button className='btn btn-sm btn-success'>Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleGunDemo;