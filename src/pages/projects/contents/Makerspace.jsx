import React, { Component } from 'react'
import ProjectPage from '../projects'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ParallaxCarousel from '../../../components/ParallaxCarousel/ParallaxCarousel';

// Import images
import ExteriorPerspective from '../../../img/maker-space/1-thumbnail-outsideperspective.jpg'
import Elevation from '../../../img/maker-space/2-elevation.jpg'
import Section from '../../../img/maker-space/3-section.jpg'
import firstFloor from '../../../img/maker-space/4-firstfloor.jpg'
import secondFloor from '../../../img/maker-space/5-secondfloor.jpg'
import interiorPerspective from '../../../img/maker-space/6-interior-perspective.jpg'

const data = [
    {
        id: 1,
        title: 'Greenhouse',
        subtitle: 'Exterior',
        image: ExteriorPerspective,
    },
    {
        id: 2,
        title: 'Air Max',
        subtitle: '270 P',
        image: Elevation,
    },
    {
        id: 3,
        title: 'Air Max',
        subtitle: 'Deluxe',
        image: Section,
    },
    {
        id: 4,
        title: 'Air Max',
        subtitle: 'Deluxe',
        image: firstFloor,
    },
    {
        id: 5,
        title: 'Air Max',
        subtitle: 'Deluxe',
        image: secondFloor,
    },
    {
        id: 6,
        title: 'Air Max',
        subtitle: 'Deluxe',
        image: interiorPerspective,
    },
  ];

export default class Makerspace extends Component {

    render() {

        return (
            <div>
                <ProjectPage 
                    contents={[
                        <div>
                            <main>
                                <div>
                                    <h1>Makerspace</h1>
                                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                                        <Link color="inherit" href="/">
                                            Home
                                        </Link>
                                        <Link color="inherit" href="/#projects">
                                            Projects
                                        </Link>
                                        <Typography color="textPrimary">Makerspace</Typography>
                                    </Breadcrumbs>
                                    <ParallaxCarousel data={data}/>
                                    <section id="overview">
                                        <h2>Overview</h2>
                                        <p>This project is a modern Makerspace for public use. The site is along the Lachine Canal between Montreal Old-Port and Griffintown. This is a forward-thinking civic building proposal. Historically, Montreal’s Old Port was a robust industrial engine and hub of manufacturing activity. Lachine Canal, a major shipping and transportation artery facilitated the expansion of light industry in the area throughout the 19th and early 20th centuries.</p>
                                    </section>
                                    <section id="the-program">
                                        <h2>The Program</h2>
                                        <p>Making / Sharing / Learning Makerspaces are creative spaces that are often located in communities, schools, as well as public and academic libraries. These areas are designed to engage participants in hands-on activities that teach twenty-first-century skills. The emphasis in makerspaces is placed upon educating students in STEM subjects as well as digital and information literacy. 
                                        Furthermore, the collaborative nature of makerspaces encourages the development of ideas through an ongoing exchange of ideas. New models of light industry are well served in makerspace environments (blockchain, robotics, artificial intelligence, nanotechnology, media arts) and coexist alongside old models of light industry (fashion, industrial design, metalworking, furniture making).</p>
                                    </section>
                                    <section id="location">
                                        <h2>Location</h2>
                                        <p>De la Commune West and Bonaventure Highway. The site acts as a hinge between two historical parts of the city separated by Bonaventure Highway. The highway already underwent massive changes. In the last 10 years the city worked on bringing this elevated main access to the city on the ground level. This move is part of the desire to link both neighbourhoods into a more coherent whole. </p>
                                    </section>
                                    <section id="design">
                                        <h2>Design</h2>
                                        <section id="design--exterior-perspective">
                                            <h3>Exterior Perspective</h3>
                                            <img className="project-figure" src={ExteriorPerspective} alt='' />
                                            <p>The main concept of this design is the long banding sections that shift vertically  and in parallel to the Canal, while each band varies in pitch as they fold into the landscape. </p>
                                        </section>
                                        <section id="design--east-elevation">
                                            <h3>East Elevation</h3>
                                            <img className="project-figure" src={Elevation} alt='' />
                                            <p>The elevation shows a glass facade blacked-out, fogged over and clear plates of glass giving interesting peaks to the inside and dynamic shadows throughout the interior. To the far left, one can see the outdoor display boards meant for people passing-by to get an idea of the creative works happening on the inside. </p>
                                        </section>
                                        <section id="design--section-cut">
                                            <h3>Section Cut</h3>
                                            <img className="project-figure" src={Section} alt='' />
                                            <p>The section shows the slow rising stairs that are overlooked by the balconies that lead to the art studios. One can also see how the bands fold into the landscape in the atrium space. </p>
                                        </section>
                                        <section id="design--floor-plans">
                                            <h3>Floor Plans</h3>
                                            <img className="project-figure" src={firstFloor} alt='' />
                                            <img className="project-figure" src={secondFloor} alt='' />
                                            <p>The ground floor plan shows the circulation of the ramps throughout the entire site. Starting from the main entrance of both the open market space and the main building to the ramps between the displayboards leading people through the outdoor gallery. </p>
                                        </section>
                                        <section id="design--interior-vignette">
                                            <h3>Interior Vignette</h3>
                                            <img className="project-figure" src={interiorPerspective} alt='' />
                                            <p>Standing at the top of the stairs showing the balconies and the shutter-like shadows created by the varying heights in the bands.</p>
                                        </section>
                                    </section>
                                </div>
                                <nav class="section-nav">
                                    <ol className="nav-li">
                                        <li><a href="#overview">Overview</a></li>
                                        <li><a href="#the-program">The Program</a></li>
                                        <li><a href="#location">Location</a></li>
                                        <li><a href="#design">Design</a>
                                            <ul className="nav-li">
                                                <li class=""><a href="#design--exterior-perspective">Exterior Perspective</a></li>
                                                <li class=""><a href="#design--east-elevation">East ELevation</a></li>
                                                <li class=""><a href="#design--section-cut">Section Cut</a></li>
                                                <li class=""><a href="#design--floor-plans">Floor Plans</a></li>
                                                <li class=""><a href="#design--interior-vignette">Interior Vignette</a></li>
                                            </ul>
                                        </li>
                                    </ol>
                                </nav>
                            </main>
                        </div>
                    ]}
                />
            </div>
        )
    }
}