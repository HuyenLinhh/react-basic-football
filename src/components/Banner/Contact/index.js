import React from 'react';
import './style.css';
export const Contact = () => {
    return (
        <div className="contact">
            <div className="infor">
                <img id='cadeaux' src='https://e7.pngegg.com/pngimages/824/604/png-clipart-gift-green-christmas-small-clean-red-gift-box-fruit-green-ribbon-thumbnail.png' />
                <div>
                    <p id='trial'>Try a free session </p>
                    <span> To experience our training </span>
                </div>

            </div>
            <button className="button"> 07722 001 864</button>
            <button className="button"> Book free session</button>
        </div>
    );
}