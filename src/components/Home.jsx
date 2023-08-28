import React from 'react'
import {motion} from 'framer-motion'
import  Typewriter  from 'typewriter-effect';
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'

const Home = () => {

    const animations = {
        h1: {
          initial: {
            x: "-100%",
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
        },
        button: {
          initial: {
            y: "-100%",
            opacity: 0,
          },
          whileInView: {
            y: 0,
            opacity: 1,
          },
        },
      };
  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 {...animations.h1}>
                    Hi, I am <br /> Shivam Kumar
                </motion.h1>

                <Typewriter options={{
                    strings:['A Developer','A Designer'],
                    autoStart: true,
                    loop:true,
                    cursor:'',
                    wrapperClassName:'typewritterpara'
                }}/>

                <div>
                    <a href='mailto:kshivam49@gmail.com'>
                        Hire Me
                    </a>
                    <a href='#work'>Projects <BsArrowUpRight /></a>
                </div>

                <article data-special>
                    <p>Contact</p>
                    <span>kshivam49@gmail.com</span>
                </article>
            </div>
        </section>
        <BsChevronDown />
    </div>
  )
}

export default Home