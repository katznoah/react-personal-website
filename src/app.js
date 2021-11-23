import React from 'react';
import Nav from './nav';
import Section from './section';
import CollCol from './collcol';
import vals from './vals';
import ProjCards from './projcards';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Section className="section-top container-fluid text-center">
                    <h2 className="title"><strong>Developer && Student</strong></h2>
                    <br />
                    <img alt="noah" class="head" src="https://katznoah.github.io/img/picture_of_me.png"></img>
                </Section>
                <Section className="bg-info text-white container-fluid text-center">
                    <div className="container">
                        <h3 className="title"><strong>Hi, I'm Noah</strong></h3>
                        <p className="pad">I'm a Student and Developer interested in</p>
                        <p className="pad">Web Application Security and Full Stack Development.</p> <br />
                        <p className="pad">I'm currently looking for a full-time Software Engineering position,</p>
                        <p>and I hope to pursue a Master's Degree in Computer Science.</p>
                    </div>
                </Section>
                <Section id="Resume" className="bg-white text-info container-fluid text-center">
                    <div className="container">
                        <h2 className="header">Resume</h2>
                        <hr />
                        <div className="row">
                                <CollCol id="ud" title="University of Delaware" json={vals.ud} />
                                <CollCol id="work" title="Work Experience" json={vals.work} />
                                <CollCol id="skills" title="Skills" json={vals.skills} />
                        </div>
                    </div>
                </Section>
                <Section className="bg-info text-white container-fluid text-center">
                    <h2 className="header">Projects</h2>
                    <hr />
                    <div id="Projects" className="container">
                            <ProjCards />
                    </div>
                </Section>
            </div>
        );
    }
}

export default App;