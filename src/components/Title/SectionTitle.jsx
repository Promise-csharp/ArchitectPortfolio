import React, {Component} from 'react';
import './SectionTitle.scss'

export default function SectionTitle(props) {

    return (
        <div className='title-container'>
            <h1 className='title divider'>
                <span>
                    {props.title}
                </span>
            </h1>
        </div>
    )
}