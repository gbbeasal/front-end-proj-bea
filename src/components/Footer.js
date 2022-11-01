import '../styles/footerindex.css';
import React from 'react';

export function Footer(){
    return(
        <div className='main-footer'>
            <div className='row-1'>
                <div className='col'>
                    <ul className='socials'>
                        <li>
                            <a href="https://www.facebook.com/muji.ph">
                                <img src="https://www.muji.com/img/misc_facebook.png" alt="Facebook Link"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/muji_ph/">
                                <img src="https://www.muji.com/img/misc_instagram.png" alt="Instagram Link"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/MUJI_PH">
                                <img src="https://www.muji.com/img/misc_twitter.png" alt="Twitter Link"/>
                            </a>    
                        </li>
                    </ul>
                </div>
            </div>

            <div className='row-2'>
                <div className='col'>
                    <ul className='links'>
                        <li>
                            <a href="/Store" class="no-underline">Store Info</a>
                        </li>
                        <li>
                            <a href="/about" class="no-underline">About MUJI</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=8ybW48rKBME" class="no-underline">Message from MUJI</a>
                        </li>
                    </ul>
                    <hr></hr>
                    <ul>
                        <li>
                            <a href="https://www.youtube.com/watch?v=8ybW48rKBME" class="no-underline">Philippines</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p className='text-muted'>Frontend Design Project by BSal</p>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=8ybW48rKBME" class="no-underline">MUJI Philippines Corp.</a>
                        </li>
                        <li>
                            <a href="/credits" class="no-underline">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}