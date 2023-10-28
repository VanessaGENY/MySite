import { useEffect, useState } from "react";
import { projectList } from "../shared/global";
import Project from "./Project";

const Projects = () => {

    const [currentScrollY, setCurrentScrollY] = useState(window.scrollY);
    const [scrollingDown, setScrollingDown] = useState(undefined);

    useEffect(() => {
        const handleScroll = event => {
            setScrollingDown(window.scrollY>currentScrollY)
            event.preventDefault();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    useEffect(() => {
        if (scrollingDown !==  undefined) {
            let newScroll = currentScrollY-window.innerHeight;
            if (scrollingDown) {
                newScroll = currentScrollY+window.innerHeight
            }
            window.scrollTo({
                top: newScroll,
                left: 0,
                scrollBehavior: 'smooth'
            });
            if (newScroll < document.body.offsetHeight-1 && newScroll >=0) setCurrentScrollY(newScroll);
            setScrollingDown(undefined)
        }
        
    }, [scrollingDown, currentScrollY])

    return (
        <div style={{scrollBehavior: 'smooth'}}>
            {projectList.map((item, index) => (
                <Project {...item} reversed={index % 2 === 1}></Project>
            ))}
            <div></div>
        </div>
    )
}

export default Projects;