import Section from '../common/section/Section';
import "./style.css";
import { profile } from '../../configs';

const Education = () => {
    return (
        <Section id="education" title="Education" subTitle="Where it started">
            <div className='education'>
                <div>
                    <h3>{profile.education}</h3>
                    <p>{profile.college}</p>
                </div>
                <time>{profile.educationYear}</time>
            </div>
        </Section>
    );
}

export default Education;