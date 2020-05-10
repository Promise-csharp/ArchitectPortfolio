import React from 'react';
import './SectionTitle.scss'

export default function SectionTitle(props) {

    return (
        <div className='title-container'>
            <div className="spacer" id={props.id}></div>
            <h1 className='title divider'>
                <span>
                    {props.title}
                </span>
            </h1>
        </div>
    )
}