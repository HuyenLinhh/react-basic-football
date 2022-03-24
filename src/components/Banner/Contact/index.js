import React from 'react';
import { BiPhone, BiSend } from "react-icons/bi";
import './style.css';

export const Contact = () => {
    return (
        <div className="contact">
            <div className="infor">
                <img id='cadeaux' src='https://e7.pngegg.com/pngimages/824/604/png-clipart-gift-green-christmas-small-clean-red-gift-box-fruit-green-ribbon-thumbnail.png' />
                <div className='free_trial'>
                    <p id='trial'>Try a free session </p>
                    <span> To experience our training </span>
                </div>

            </div>

            <div className="button">
                <div className='icon_button' ><BiPhone /></div> 07722 001 864</div>

            <div className="button">
                <div className='icon_button'><BiSend /> </div> Book free session</div>
        </div >
    );
}