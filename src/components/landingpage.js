import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Typing from 'react-typing-animation';
 
const AnimatedTypingComponent = () => (
  <Typing loop={true} speed={100}>
    <span>Full Stack Developer.</span>
    <Typing.Backspace delay={3000} count={21} />
  </Typing>
);


class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Pale'
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1> { AnimatedTypingComponent() } </h1>

              <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MySQL | MongoDB</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="http://github.com/brandoncansler" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
