import React from 'react';
import headshot from '../photos/headshot.jpg';
import '../App.css';
import '../styles/about-me.css';

export default function AboutMe() {
    return (
        <div className='container'>
            <div className='about-container'>
                <div>
                    <h1>About Me</h1>
                    <p>
                        Hello World! I'm Bennett Mangum, a senior at the University of North Carolina at Chapel Hill, where I'm double majoring in Computer Science and Philosophy. Ever since I was a kid, I've been fascinated by computers, and I feel incredibly lucky to study what I love at such a great university.
                    </p>
                    
                    <p>
                        I'm aiming for a career in Software Engineering and have built a solid foundation in this field. I enjoy working in teams, where I can often be found taking on leadership roles to help guide our projects. At the same time, I understand the importance of listening and letting others take charge when needed. Inclusivity is key for me, and I always strive to ensure everyone feels heard and on the same page.
                    </p>
                    
                    <p>
                        My background in Philosophy has sharpened my problem-solving and critical thinking skills. I'm adept at analyzing different solutions and finding the best one that benefits everyone involved. This skill set helps me tackle challenges effectively and efficiently.
                    </p>
                    
                    <p>
                        If you're curious about what I'm working on or the classes I'm taking, check out the other tabs on my website. You'll also find links to my GitHub, LinkedIn, and resume below, where you can see more about my projects and experiences.
                    </p>
                    
                    <p>
                        I'd love to connect and share more about my journey!
                    </p>
                </div>
            </div>
            <div className='headshot'>
                <img src={headshot} alt="Headshot" height={750} width={500} className="headshot-image" />
            </div>
        </div>
    );
}
