import React from "react";
import Course from "../components/course";
import "../styles/courses.css"
import "../App.css"

export default function Courses() {
    
    const class_name = [
        "COMP 110 - Intro to Programming", 
        "COMP 210 - Analysis of Data Structures", 
        "COMP 211 - System Programming Fundamentals",
        "COMP 283 - Discrete Structures",
        "COMP 301 - Structure/Organize Own Code",
        "COMP 311 - Compuiter Organization",
        "COMP 421 - Files and Databases",
        "COMP 435 - Security Concepts",
        "COMP 475 - 2D Computer Graphics",
        "COMP 581 - Intro to Robotics",
        "COMP 590/423 - Foundations of Software Engineering",
    ];

    const class_descriptions = [
        `Introduces students to programming and data science from a computational perspective. With an emphasis on modern applications in society, 
        students gain experience with problem decomposition, algorithms for data analysis, abstraction design, and ethics in computing. 
        No prior programming experience expected. Foundational concepts include data types, sequences, boolean logic, control flow, functions/methods, recursion, 
        classes/objects, input/output, data organization, transformations, and visualizations.`,
        
        `This course will teach you how to organize the data used in computer programs so that manipulation of that data can be done efficiently on large problems and 
        large data instances. Rather than learning to use the data structures found in the libraries of programming languages, you will be learning how those libraries are 
        constructed, and why the items that are included in them are there (and why some are excluded).`,
        
        `This is the first course in the introductory systems sequence. Students enter the course having taken an introductory programming course in a high-level programming 
        language (COMP 110) and a course in discrete structures.`,
        
        `Introduces discrete structures (sets, tuples, relations, functions, graphs, trees) and the formal mathematics (logic, proof, induction) used to establish their 
        properties and those of algorithms that work with them. Develops problem-solving skills through puzzles and applications central to computer science.`,
        
        `Students will learn how to reason about how their code is structured, identify whether a given structure is effective in a given context, and look at ways of 
        organizing units of code that support larger programs. In a nutshell, the primary goal of the course is to equip students with tools and techniques that will help 
        them not only in later courses in the major but also in their careers afterwards.`,
        
        `Introduction to computer organization and design. Students will be introduced to the conceptual design of a basic microprocessor, along with assembly programming. 
        The course includes fundamental concepts such as binary numbers, binary arithmetic, and representing information as well as instructions. 
        Students learn to program in assembly (i.e., machine) language. The course covers the fundamentals of computer hardware design, transistors and logic gates, progressing 
        through basic combinational and sequential components, culminating in the conceptual design CPU.`,
        
        `Placement of data on secondary storage. File organization. Database history, practice, major models, system structure and design.`,
        
        `Introduction to topics in computer security including confidentiality, integrity, availability, authentication policies, 
        basic cryptography and cryptographic protocols, ethics, and privacy.`,
        
        `Fundamentals of modern software 2D graphics; geometric primitives, scan conversion, clipping, transformations, compositing, texture sampling. 
        Advanced topics may include gradients, antialiasing, filtering, parametric curves, and geometric stroking.`,
        
        `Hands-on introduction to robotics with a focus on the computational aspects. Students will build and program mobile robots. 
        Topics include kinematics, actuation, sensing, configuration spaces, control, and motion planning. 
        Applications include industrial, mobile, personal, and medical robots`,
        
        `This course introduces students to the fundamentals of Software Engineering. 
        Students gain experience with technical communication, team collaboration, design process, project management methodologies, development and 
        production environment concerns, automation, code review, and so on, with an emphasis on today’s best practices and tools.`,
    ];

    const notable_projects = [
        'Utilized Pandas to display data.',
        'Creating a BST with Java.',
        'Creating a shell with C.',
        'Created a proof potfolio where me and a group of students used different methods to mathimatically prove some algorithim works.',
        'Created an Akari game with Java.',
        'Created a Heapify function with MIPS.',
        'Utilized SQL injections to create different views for databases.',
        'Emmulated a cross-site scripting attack on a fake social media website.',
        'Created a 2D graphics generator allowing me to create 2D graphics at an efficent rate.',
        'Utilized software to task a robot with getting from point A to point B while avoiding objects in its way.',
        'Created a Organization Member Management system for the CSXL website (more to see on projects page).',
    ];

    return(
        <div>
            <div className="title">
                <h1>Courses</h1>
                <p>Explore the courses I've completed and the notable projects I've undertaken. 
                    This page showcases my academic journey, detailing each course with brief descriptions and key takeaways. 
                    You'll also find highlights of significant projects, demonstrating the skills and knowledge I've applied throughout my studies. 
                    Whether you're interested in my educational background or curious about my hands-on experience, 
                    this section provides a comprehensive look at my achievements and learning milestones.</p>
            </div>
            <div className="course-container">
                {class_name.map((item, index) => (
                    <Course key={index} name={item} description={class_descriptions[index]} project={notable_projects[index]}/>
                ))}
            </div>
        </div>
    )
}