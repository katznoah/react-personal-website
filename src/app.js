import React from 'react';
import Nav from './nav';
import Section from './section';
import CollCol from './collcol';
import vals from './vals';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Section className="section-top container-fluid text-center">
                    <h2 className="title"><strong>Developer && Student</strong></h2>
                    <h3 className="title">this is me</h3>
                    <img alt="noah" src="https://katznoah.github.io/img/picture_of_me.png"></img>
                </Section>
                <Section className="bg-info text-white container-fluid text-center">
                    <h3 className="title"><strong>Hi, I'm Noah</strong></h3>
                    <p className="pad">I'm a Student and Developer interested in</p>
                    <p className="pad">Web Application Security and Full Stack Development.</p> <br />
                    <p className="pad">I'm currently looking for a full-time Software Engineering position,</p>
                    <p>and I hope to pursue a Master's Degree in Computer Science.</p>
                </Section>
                <Section id="Resume" className="bg-white text-info container-fluid text-center">
                    <div className="container">
                        <div className="row">
                                <CollCol id="ud" title="University of Delaware" json={vals.ud} />
                                <CollCol id="work" title="Work Experience" json={vals.work} />
                        </div>
                    </div>
                </Section>
                <Section className="bg-info text-white container-fluid text-center">
                    <p className="pad">Hello World</p>
                </Section>
            </div>
        );
    }
}

export default App;