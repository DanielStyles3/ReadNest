import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About ReadNest</h2>
            <p className='fs-17'>Welcome to ReadNest, where every page turns into a new adventure. Immerse yourself in a world of captivating stories, literary wonders, and timeless classics. Our curated collection invites you to explore, imagine, and indulge in the magic of reading. Join us on this literary journey, where each book is a portal to new realms of discovery. Happy reading!

.</p>
            <p className='fs-17'>"Embark on a Literary Odyssey at ReadNest. Uncover the beauty of storytelling, where every book is a gateway to imagination. From classic tales to contemporary gems, our curated collection invites you to lose yourself in the magic of words. Join us as we celebrate the art of literature – because every book tells a story, and every reader becomes a part of it. Welcome to a world where pages come alive!"




</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
