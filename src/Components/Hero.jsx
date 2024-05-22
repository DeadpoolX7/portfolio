import React, { useEffect, useState } from 'react';
import { Social } from '../data/Social';

const texts = ["I'm Sanju Shaw", "Full stack dev", "Tech enthusiast", 'MERN Stack Developer'];
const typingSpeed = 70;
const deletingSpeed = 50;
const delayBetweenTexts = 1000;

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (deleting) {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        if (text.length < texts[index].length) {
          setText(text + texts[index].charAt(text.length));
        } else {
          setTimeout(() => setDeleting(true), delayBetweenTexts);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, deleting ? deletingSpeed : typingSpeed);
    return () => clearInterval(typingInterval);
  }, [text, deleting, index]);

  return (
    <>
    <div id='Home' className="hero bg-black h-screen flex flex-col items-center justify-center">
      <div className="profile-image ring-4 ring-blue-700 bg-gray-300 rounded-full w-40 h-40 mb-6"></div>
      <div className=" w-full text-center h-10">
        <p className="text-white text-2xl selection:bg-green-500 font-serif">{text}</p>
      </div>
      <section>
      <div className="  p-4 rounded-lg ">
        <h1 className='text-white text-center text-3xl underline mb-3'>About</h1>
        <p className="text-white text-lg text-center">
          Greetings! I'm <span className=''>Sanju Shaw</span> a passionate Web Developer from Kolkata, India.<br/> 
          With a strong foundation in both frontend and backend technologies,
          <br/> I love to build projects that make a difference.<br/> 
           Let's collaborate and bring amazing ideas to life!
        </p>
      </div>
    <div className="flex  m-5   justify-evenly">
      {Social.map((icon, index) => (
        <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
          <img src={icon.image} alt={icon.icon_name} className="w-10 h-10 hover:border-2 hover:rounded-lg hover:transition-all hover:scale-150" />
        </a>
      ))}
    </div>
      </section>
    </div>
    
      </>
  );
};

export default Hero;
