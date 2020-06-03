import React, { Component } from 'react'
import ProjectPage from '../projects'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ParallaxCarousel from '../../../components/ParallaxCarousel/ParallaxCarousel';

// Import images
import Exterior from '../../../img/greenhouse/render-exterior-greenhouse.jpg'
import grwrmInterior from '../../../img/greenhouse/render-grwrm-interior-2.jpg'
import inGreenhouse from '../../../img/greenhouse/render-ingreenhouse-final.jpg'
import Landscape from '../../../img/greenhouse/render-landscape-1.jpg'
import Qlab from '../../../img/greenhouse/render-qlab-interior.jpg'

const data = [
    {
        id: 1,
        title: 'Greenhouse',
        subtitle: 'Exterior',
        image: Exterior,
    },
    {
        id: 2,
        title: 'Air Max',
        subtitle: '270 P',
        image: grwrmInterior
    },
    {
        id: 3,
        title: 'Air Max',
        subtitle: 'Deluxe',
        image: inGreenhouse
    },
    {
        id: 4,
        title: 'Air Max',
        subtitle: 'Deluxe',
        image: Landscape
    },
    {
        id: 5,
        title: 'Air Max',
        subtitle: 'Deluxe',
        image: Qlab
    },
  ];

export default class Greenhouse extends Component {

    render() {

        return (
            <div>
                <ProjectPage 
                    contents={[
                        <div>
                            <main>
                                <div>
                                    <h1>Greenhouse &amp; Processing Facilities</h1>
                                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                                        <Link color="inherit" href="/">
                                            Home
                                        </Link>
                                        <Link color="inherit" href="/#projects">
                                            Projects
                                        </Link>
                                        <Typography color="textPrimary">Greenhouse &amp; Processing Facilities</Typography>
                                    </Breadcrumbs>
                                    <ParallaxCarousel data={data}/>
                                    <section id="overview">
                                        <h2>Overview</h2>
                                        <p>…</p>
                                    </section>
                                    <section id="request-response">
                                        <h2>Request &amp; Response</h2>
                                        <p>…</p>
                                    </section>
                                    <section id="authentication">
                                        <h2>Authentication</h2>
                                        <p>…</p>
                                    </section>
                                    <section id="endpoints">
                                        <h2>Endpoints</h2>
                                        <section id="endpoints--root">
                                            <h3>Root</h3>
                                            <p>…</p>
                                        </section>
                                        <section id="endpoints--cities-overview">
                                            <h3>Cities Overview</h3>
                                            <p>…</p>
                                        </section>
                                        <section id="endpoints--city-detail">
                                            <h3>City Detail</h3>
                                            <p>…</p>
                                        </section>
                                        <section id="endpoints--city-config">
                                            <h3>City Config</h3>
                                            <p>…</p>
                                        </section>
                                        <section id="endpoints--city-spots-overview">
                                            <h3>City Spots Overview</h3>
                                            <p>…</p>
                                        </section>
                                        <section id="endpoints--city-spot-detail">
                                            <h3>City Spot Detail</h3>
                                            <p>…</p>
                                        </section>
                                        <section id="endpoints--city-icons-overview">
                                            <h3>City Icons Overview</h3>
                                            <p>…</p>
                                        </section>
                                        <section id="endpoints--city-icon-detail">
                                            <h3>City Icon Detail</h3>
                                            <p>…</p>
                                        </section>
                                    </section>
                                    <section id="links">
                                        <h2>Links</h2>
                                        <p>…</p>
                                    </section>
                                    <section id="expanders">
                                        <h2>Expanders</h2>
                                        <p>…</p>
                                    </section>
                                    <section id="filters">
                                        <h2>Filters</h2>
                                        <p>…</p>
                                    </section>
                                </div>
                                <nav class="section-nav">
                                    <ol className="nav-li">
                                        <li><a href="#overview">Overview</a></li>
                                        <li><a href="#request-response">Request &amp; Response</a></li>
                                        <li><a href="#authentication">Authentication</a></li>
                                        <li><a href="#endpoints">Endpoints</a>
                                            <ul className="nav-li">
                                                <li class=""><a href="#endpoints--root">Root</a></li>
                                                <li class=""><a href="#endpoints--cities-overview">Cities Overview</a></li>
                                                <li class=""><a href="#endpoints--city-detail">City Detail</a></li>
                                                <li class=""><a href="#endpoints--city-config">City Config</a></li>
                                                <li class=""><a href="#endpoints--city-spots-overview">City Spots Overview</a></li>
                                                <li class=""><a href="#endpoints--city-spot-detail">City Spot Detail</a></li>
                                                <li class=""><a href="#endpoints--city-icons-overview">City Icons Overview</a></li>
                                                <li class=""><a href="#endpoints--city-icon-detail">City Icon Detail</a></li>
                                            </ul>
                                        </li>
                                        <li class=""><a href="#links">Links</a></li>
                                        <li class=""><a href="#expanders">Expanders</a></li>
                                        <li class=""><a href="#filters">Filters</a></li>
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