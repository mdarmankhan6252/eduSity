import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
   return (
      <div className='about'>
         <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={() =>{
               setPlayState(true)
            }}/>
         </div>
         <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today.</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti maxime culpa repudiandae minima, autem vel veniam sequi officia labore eveniet eligendi quae earum, commodi et animi enim adipisci possimus ipsa odit soluta. Excepturi animi nobis tempora laboriosam quidem libero iste delectus, ab molestias quae.</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti maxime culpa repudiandae minima, autem vel veniam sequi officia labore eveniet eligendi quae earum, commodi et animi enim adipisci possimus ipsa odit soluta. Excepturi animi nobis tempora laboriosam quidem libero iste delectus, ab molestias quae.</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti maxime culpa repudiandae minima, autem vel veniam sequi officia labore eveniet eligendi quae earum, commodi et animi enim adipisci possimus ipsa odit soluta. Excepturi animi nobis tempora laboriosam quidem libero iste delectus, ab molestias quae.</p>
         </div>
      </div>
   );
};

export default About;