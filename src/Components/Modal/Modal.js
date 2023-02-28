import React from 'react';

const Modal = (props) => { //data name e receive krlm
    console.log(props);
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative card w-full bg-base-100 shadow-xl">
                    <label onClick={() => props.setModalData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <figure>
                        <img className='w-96 h-64' src={props.data.img} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-lg font-bold">
                        {props.data.name}
                            <div className="badge badge-secondary">{props.data.action}</div>
                        </h2>
                        <p className='my-2'>Bullet:{props.data.bullet}</p>
                        <p className=''>Action:{props.data.action ? props.data.action : "Not Found"}</p> 
                        {/* condition rendereing krte pari */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
