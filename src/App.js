import React, {Component} from 'react';
import './App.css';
import {Accordion, Grid, Header, Icon, Image, List} from "semantic-ui-react";
import 'semantic-ui-css/semantic.css';

class App extends Component {
    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({activeIndex: newIndex})
    }

    constructor(props) {
        super(props);

        this.state = {activeIndex: 0}
    }

    render() {
        const {activeIndex} = this.state

        return (
            <div style={{marginTop: '3%'}}>
                <Header as='h1' icon textAlign='center'>
                    <Image centered size='massive' circular
                           src='http://azeromania.fr/assets/images/steam_avatar/TOTOO.png'/>
                    <Header.Content>Thomas Ottone</Header.Content>
                    <Header.Content as='h2'>Big Data Engineer</Header.Content>
                </Header>

                <Grid centered>
                    <Grid.Column width={6}>

                        <Grid.Row>
                            <Accordion styled>
                                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                                    <Icon name='question circle outline' size="large"/>
                                    Who am I?
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 0}>
                                    <p>
                                        Initially I studied science. I have a strong background in analytical chemistry,
                                        biology and physics.
                                    </p>
                                    <p>
                                        I've graduated with a BSc in Mass Spectrometry and I've been working at the
                                        Pasteur Institut of Paris for over 3 years. I worked on the analysis and the
                                        extraction of proteins from bacterial strains such as <i>Neisseria
                                        meningitidis</i>. Basically when the bacteria is in the blood system, the
                                        structure of a pili (a "part" of the bacteria) is modified (post-translational
                                        modifications). My role was to identify the structure of a the glycosylated
                                        peptide.
                                    </p>
                                    <p>
                                        For the identification of the peptide we need to perform liquid-chromatography
                                        coupled with a mass spectrometer (LC/MS). We also used nuclear magnetic
                                        resonance (NMR).
                                    </p>
                                    <p>
                                        I also worked with antibodies to confirm the vaccin used was efficient against a
                                        certain diseasse. Hydrogen/deuterium exchange (HDX) was the technique used (also
                                        coupled with a mass spectrometer.
                                    </p>
                                    <p>
                                        If you're still here congrats! Maybe you're interested with that. Feel free to
                                        ask me more about that.
                                    </p>
                                </Accordion.Content>

                                <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                                    <Icon name='computer' size="large"/>
                                    How I reached in the IT?
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 1}>
                                    <p>
                                        As a scientist I am extremely attentive to details. Why this happen? How? When?
                                        Where?
                                    </p>
                                    <p>
                                        Unfortunatly there is not a lot of jobs in science, when you're specialized, you
                                        only do that. I did not agreed that fact. I always want to learn more.
                                    </p>

                                    <p>
                                        I've always been with computers since my first age. I already learnt some code
                                        before (but in science that doesn't help with anything) and one day I asked
                                        muself why not change?
                                    </p>
                                    <p>
                                        Indeed the IT world is the future, there is a lot of projects, ideas, etc. I
                                        want to be a part of it.
                                    </p>
                                    <p>
                                        I received a job offer from Capgemini, they offered me 3 months of courses and
                                        they hired me (mid-2017).
                                    </p>
                                </Accordion.Content>

                                <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                                    <Icon name='check circle outline' color="green" size="large"/>
                                    What I achieved?
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 2}>
                                    <List bulleted>
                                        <List.Item as='h5'>Mission 1 (Oct. 2017 - Now):</List.Item>
                                        <List.Description>
                                            <p>
                                                I've been working for a year at the DGGN (Direction Générale de la
                                                Gendarmerie
                                                Nationale) with the STSISI (Service des Technologies et des Systèmes
                                                d'Information de la Sécurité Intérieure) for the DGPN (Direction
                                                Générale de la
                                                Police Nationale).
                                            </p>
                                            <p>
                                                As it is confidential I cannot talk about what I'm working on. However
                                                I'm working on technos such as React/Redux/Saga,
                                                Scala/Spark/SolR/Redis/Hive/OrientDB/Hadoop/Cloudera
                                            </p>
                                        </List.Description>
                                    </List>
                                </Accordion.Content>
                            </Accordion>
                        </Grid.Row>
                        <Grid.Row>
                            <div style={{textAlign: 'center', marginTop: '5%'}}>
                                <Icon size='huge' color='blue' name="react"/>
                                <Icon size='huge' color='yellow' name="js square"/>
                                <Icon size='huge' color='orange' name="aws"/>
                                <Icon size='huge' color='green' name="node js"/>
                                <Icon size='huge' color='green' name="vuejs"/>
                                <Icon size='huge' color='red' name="angular"/>
                                <Icon size='huge' color='yellow' name="python"/>
                                <Icon size='huge' color='grey' name="database"/>
                            </div>
                        </Grid.Row>
                        <Grid.Row>
                            <div style={{textAlign: 'center', marginTop: '5%'}}>
                                {/*Apple*/}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                                    <title>apple</title>
                                    <g className="nc-icon-wrapper">
                                        <path fill="#B3B3B3"
                                              d="M42.998,35.227c-1.039,2.301-1.535,3.328-2.873,5.361c-1.864,2.839-4.494,6.375-7.753,6.405 c-2.895,0.027-3.639-1.884-7.569-1.861S20.054,47.027,17.159,47c-3.259-0.029-5.749-3.222-7.615-6.063 c-5.216-7.94-5.761-17.257-2.544-22.21c2.286-3.522,5.894-5.58,9.285-5.58c3.453,0,5.624,1.893,8.48,1.893 c2.77,0,4.457-1.896,8.45-1.896c3.018,0,6.216,1.643,8.495,4.482C34.243,21.717,35.457,32.376,42.998,35.227L42.998,35.227z"/>
                                        <path fill="#B3B3B3"
                                              d="M30.607,8.176C32.058,6.314,33.158,3.687,32.758,1c-2.37,0.162-5.14,1.67-6.758,3.635 c-1.469,1.783-2.682,4.428-2.21,6.999C26.375,11.715,29.052,10.17,30.607,8.176L30.607,8.176z"/>
                                    </g>
                                </svg>

                                {/*Windows*/}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                                    <title>microsoft</title>
                                    <g className="nc-icon-wrapper">
                                        <rect x="3" y="3" fill="#E86C60" width="20" height="20"/>
                                        <rect x="25" y="3" fill="#72C472" width="20" height="20"/>
                                        <rect x="3" y="25" fill="#43A6DD" width="20" height="20"/>
                                        <rect x="25" y="25" fill="#EFD358" width="20" height="20"/>
                                    </g>
                                </svg>

                                {/*Linux*/}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                                    <title>linux</title>
                                    <g className="nc-icon-wrapper">
                                        <path
                                            d="M22.625,10.125c2.031-.472,5.813,2.937,7.937,6.75a41.774,41.774,0,0,1,4,12.625c.438,3.125,1.313,9.981-.812,11.553S26.592,43.5,23.233,43.562s-7.671-.124-9.171-4.374-1.937-7.626-1.374-10.438S16,20.938,17,19.5s1.029-1.266,1.4-3.688S20.329,10.658,22.625,10.125Z"
                                            fill="#fff"/>
                                        <path
                                            d="M17.9,45.428c2.851-1.371,8.879-1.227,12.993,0s1.876-11.78.343-8.21a8.618,8.618,0,0,1-7.832,5.323c-6.6,0-8.68-4.728-8.68-4.728Z"
                                            fill="#020204"/>
                                        <path
                                            d="M31.451,46.523c1.746,1.165,3.7-.048,4.715-1.034a14.146,14.146,0,0,1,3.586-2.671,8.842,8.842,0,0,0,3.2-2.021c.385-.65.336-1.4-.674-1.973a4.614,4.614,0,0,1-2.334-2.406c-.217-.963-.024-1.853-.77-2.431s-4.278-.605-5.293-.649-2.527-.385-2.96,0-.192,1.877-.168,2.7a44.208,44.208,0,0,1-.361,4.908C30.223,41.879,28.924,44.839,31.451,46.523Z"
                                            fill="#f5bd0c"/>
                                        <path
                                            d="M17.8,16.411V7.659A6.659,6.659,0,0,1,24.455,1h0a6.659,6.659,0,0,1,6.659,6.659v6.009c0,2.166,2.779,5.017,4.583,7a16.048,16.048,0,0,1,3.537,8.3c.253,2.743-.191,5.9-2.526,6.965-2.057.939-4.067-.139-3.966-2.7.034-.847.393-5.523-.762-8.88a96.12,96.12,0,0,0-4.574-9.757s-8.275-1.72-8.275.337A8.88,8.88,0,0,1,17.8,20.742c-1.552,2.779-4.548,7.724-4.151,11.73,1.251,1.861,3.429,3.182,4.331,3.9s1.588,2.055,1.047,2.849-3.1.252-3.862,0S10.9,34.06,10.469,33.266a4.261,4.261,0,0,1-.036-3.429c.506-1.408,1.769-3.248,2.346-4.981a19.872,19.872,0,0,1,2.779-5.125C16.749,18.071,17.507,17.927,17.8,16.411Z"
                                            fill="#020204"/>
                                        <ellipse cx="25.64" cy="10.444" rx="2.178" ry="3.116" fill="#fff"/>
                                        <path
                                            d="M21.86,10.292c.121,1.447-.592,2.687-1.594,2.771s-1.728-1.034-1.849-2.481.409-2.674,1.41-2.758S21.738,8.845,21.86,10.292Z"
                                            fill="#fff"/>
                                        <ellipse cx="25.64" cy="10.66" rx="1.498" ry="1.057"
                                                 transform="translate(14.045 35.891) rotate(-87.895)" fill="#020204"/>
                                        <ellipse cx="20.136" cy="10.735" rx="0.938" ry="1.353"
                                                 transform="translate(-1.442 3.313) rotate(-9.083)" fill="#020204"/>
                                        <path
                                            d="M22.62,11.009c1.3,0,2.442,1.041,3.134,1.233s1.678.283,2.063,1-.1,1.636-1.155,2.165-2.334,2.022-4.234,2.022-2.6-1.732-3.3-2.286a1.166,1.166,0,0,1-.362-1.757C19.185,12.675,21.2,11.009,22.62,11.009Z"
                                            fill="#f5bd0c"/>
                                        <path
                                            d="M18.77,45.585c1.2-1.955.409-3.754-.914-5.269a65.39,65.39,0,0,1-4.018-6.184c-.65-.987-1.54-1.877-2.43-1.733s-1.516,1.757-2.094,2.238-2.791.048-3.464.77-.048,3.3-.169,4.524-.77,1.876-.842,2.454.12,1.227,1.2,1.612,5.125,1.4,6.521,1.708S17.231,48.087,18.77,45.585Z"
                                            fill="#f5bd0c"/>
                                    </g>
                                </svg>
                            </div>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}

export default App;
