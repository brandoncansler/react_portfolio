import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Pale"
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '1em' }}>Brandon Cansler</h2>
            <h4 style={{ color: 'grey' }}>Full Stack Developer</h4>
            <hr style={{ borderTop: '3px solid #27221F', width: '50%' }} />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{ borderTop: '3px solid #27221F', width: '50%' }} />
            <h5>Email</h5>
            <p>mrcansler@gmail.com</p>
            <h5>Web</h5>
            <p>github.com/brandoncansler</p>
            <hr style={{ borderTop: '3px solid #27221F', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Vanderbilt University"
              schoolDescription="Vanderbilt University Coding Bootcamp."
            />
            <hr style={{ borderTop: '3px solid #866D4B' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: '3px solid #866D4B' }} />

            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={75}
            />
            <Skills
              skill="HTML/CSS"
              progress={85}
            />
            <Skills
              skill="NodeJS"
              progress={75}
            />
            <Skills
              skill="React"
              progress={75}
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
