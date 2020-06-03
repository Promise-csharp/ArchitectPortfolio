import React, { Component } from 'react'
import BarLoader from '../../components/LoadingBars/BarLoader'
import './projects.scss'

export default class ProjectPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            loaded:false,
            loadingElement:<BarLoader />
        }
        window.addEventListener('DOMContentLoaded', () => {

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const id = entry.target.getAttribute('id');
                    if (entry.intersectionRatio > 0) {
                        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
                    } else {
                        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
                    }
                });
            });
        
            // Track all sections that have an `id` applied
            document.querySelectorAll('section[id]').forEach((section) => {
                observer.observe(section);
            });  
        });
    }

    componentDidMount() {
        window.scrollTo(0, 0);
      }

    Loaded = () => {
        this.setState({
            loaded:true,
            loadingElement:<div/>
        })
    }

    render() {

        return (
            <div>                
                {this.props.contents}
            </div>
        )
    }
}