import React from 'react';
import MediaCard from '../../../../components/MediaCard/MediaCard'
import SectionTitle from '../../../../components/Title/SectionTitle'

export default function ProjectCard() {

    return (
        <div>
            <SectionTitle title='Projects' />
            <MediaCard 
                title= 'Project Title 1'
                body='Body'
                subText='Subtext'
                hoverText='View Project'
                displayType='row'
                link='/'
                image='https://via.placeholder.com/400'
                altText='400x400 placeholder'
            />
            <MediaCard 
                title= 'Project Title 2'
                body='Body'
                subText='Subtext'
                hoverText='View Project'
                displayType='row'
                link='/'
                image='https://via.placeholder.com/400'
                altText='400x400 placeholder'
            />
        </div>
    )
}