import React, {Component} from 'react';
import MediaCard from '../../../../components/MediaCard/MediaCard'
import SectionTitle from '../../../../components/Title/SectionTitle'
import Divider from '@material-ui/core/Divider';

export default function ProjectCard() {

    return (
        <div>
            <SectionTitle title='Projects' />
            <MediaCard 
                title= 'Project Title 1'
                body='Body'
                subText='Subtext'
                hoverText='View Project'
                image='https://via.placeholder.com/400'
            />
            <MediaCard 
                title= 'Project Title 2'
                body='Body'
                subText='Subtext'
                hoverText='View Project'
                image='https://via.placeholder.com/400'
            />
        </div>
    )
}