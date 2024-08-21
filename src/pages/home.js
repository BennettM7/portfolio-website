import HomePagePhoto from "../photos/Bennett_Mangums_Portfolio.png"
import "../styles/home.css"
export default function Home() {
    return (
        <div className="container">
            <div className="welcome-container">
                <div className="title-description-container">
                    <h1 className="welcome-text">
                        Welcome to Bennett's Portfolio!
                    </h1>
                    <div className="text">
                        <p>
                            This website is used to document details about the current projects that I am working on and the courses
                            that I have taken at the University of North Carolina at Chapel Hill. Click on any of the tabs about to find more information! Below you can click
                            to my socials and get in contact with me through email as well!
                        </p>
                    </div>
                </div>
                <img src={HomePagePhoto} alt="Home Page Photo" height={768} width={576} />
            </div>
        </div>
    )
}