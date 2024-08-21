import React from "react";
import '../styles/project-article.css';
import HomePage from "../photos/MT_Home_Page.png";
import LoginPage from "../photos/MT-Login.png";
import FeedPage from "../photos/MT_Feed_Page.png";
import ProfilePage from "../photos/MT_Profile_Page.png";
import EditProfilePage from "../photos/MT_Edit_Profile.png";
import CreatePostPage from "../photos/MT_Create_Post.png";
import DatabaseTables from "../photos/Database_Tables.png";
import Typography  from "@mui/material/Typography";

export default function MockTwitter(){
    const img_height = 487.5;
    const img_width = 960;
    return(
        <div>
            <div className="title">
                <h1>Mock Twitter</h1>
                <p>
                    For a final project in my CSSG Education Team final project I was tasked with creating a mock Twitter webiste. 
                    Utilizing NextJS and Supabase I was able to create a minimal mock Twitter where people were able to interact with the website in a way that the popular platform X formally known as Twitter is used.
                </p>
            </div>
            <div className="article-div">
                <Typography variant='h6' sx={{color: 'white'}}>
                    Intro
                    <br />
                    <Typography variant='body1'>
                        I created Textagram as a project for the CSSG (Computer Science + Social Good) Education Team, where we were tasked with building a mock Twitter-like platform in just two weeks. 
                        Given the tight deadline, the focus was on delivering a functional prototype that captures the essential features of a social media app. 
                        While it's still a rough version, Textagram serves as a solid foundation for further development, demonstrating the core ideas and functionality envisioned for the platform.
                    </Typography>
                </Typography>
                <img src={HomePage} alt="Picture of Home Page" width={img_width} height={img_height} />
                <Typography variant='h6' sx={{color: 'white'}}>
                    Home Page
                    <br />
                    <Typography variant='body1'>
                        The Home Page of Textagram serves as the welcoming gateway for users. 
                        It provides a simple and intuitive interface where users are guided to either log in or sign up. 
                        This page sets the tone for the app, ensuring users can easily navigate to their next steps with clear options, making the onboarding process smooth and user-friendly.
                    </Typography>
                </Typography>
                <img src={LoginPage} alt="Picture of Login Page" width={img_width} height={img_height} />
                <Typography variant='h6' sx={{color: 'white'}}>
                    Login Page
                    <br />
                    <Typography variant='body1'>
                        On the Login Page, users can either log in to their existing accounts or sign up for a new one. 
                        The authentication process requires a real email and password, ensuring that all users are verified. 
                        This page is designed to be secure, encouraging users to trust the platform with their information while providing a seamless experience for accessing their Textagram accounts.
                    </Typography>
                </Typography>
                <img src={FeedPage} alt="Picture of Feed Page" width={img_width} height={img_height} />
                <Typography variant='h6' sx={{color: 'white'}}>
                    Feed Page
                    <br />
                    <Typography variant='body1'>
                        The Feed Page is where users can explore the latest posts made by others on Textagram. 
                        This page is unique in that it excludes the user's own posts, offering a fresh perspective by showcasing the content created by the broader community. 
                        It is designed to keep users engaged with diverse content and discover new ideas and perspectives.
                    </Typography>
                </Typography>
                <img src={ProfilePage} alt="Picture of Profile Page" width={img_width} height={img_height} />
                <Typography variant='h6' sx={{color: 'white'}}>
                    Profile Page
                    <br />
                    <Typography variant='body1'>
                        The Profile Page is a personalized space for each user. Here, users can view all the posts they've made, along with their username, website, and other personal details. 
                        This page also features an Edit Profile button, making it easy for users to update their information. 
                        The Profile Page is a hub for users to manage their presence on Textagram.
                    </Typography>
                </Typography>
                <img src={EditProfilePage} alt="Picture of Edit Profile Page" width={img_width} height={img_height} />
                <Typography variant='h6' sx={{color: 'white'}}>
                    Edit Profile Page
                    <br />
                    <Typography variant='body1'>
                        The Edit Profile Page allows users to customize their Textagram profiles by editing their username, name, and website. 
                        This page also provides the option to sign out from the platform. 
                        With its straightforward design, the Edit Profile Page ensures users can easily manage their profile details and keep their information up to date.
                    </Typography>
                </Typography>
                <img src={CreatePostPage} alt="Picture of Create Post Page" width={img_width} height={img_height} />
                <Typography variant='h6' sx={{color: 'white'}}>
                    Create Post Page
                    <br />
                    <Typography variant='body1'>
                        The Create Post Page is where users can express themselves by creating new posts. 
                        A simple text box invites users to share their thoughts with the Textagram community. 
                        This page emphasizes ease of use, encouraging users to contribute content regularly and engage with others on the platform.
                    </Typography>
                </Typography>
                <img src={DatabaseTables} alt="Picture of Database Tables" width={1500} />
                <Typography variant='h6' sx={{color: 'white'}}>
                    Database Tables
                    <br />
                    <Typography variant='body1'>
                        Textagram's backend is structured with four major database tables: Posts (top left), Profiles (middle right), Likes (middle left), and Followers (bottom right). 
                        The Posts table stores all user-generated content, while the Profiles table holds user information. 
                        The Likes table manages a many-to-many relationship between profiles and posts, tracking user interactions with content. 
                        Similarly, the Followers table handles another many-to-many relationship, this time between user profiles, allowing the platform to manage connections between followers and followees efficiently.
                    </Typography>
                </Typography>
            </div>
        </div>
    );
}