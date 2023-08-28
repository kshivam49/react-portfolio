import React from 'react'
import {AiFillGithub,AiOutlineArrowUp} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>Shivam Kumar</h2>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://github.com/kshivam49" target={"blank"}>
                    <AiFillGithub />
                </a>
            </article>
        </aside>
        <a href='#home'><AiOutlineArrowUp /></a>
    </footer>
  )
}

export default Footer