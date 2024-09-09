import HomePagePhoto from "../photos/Bennett_Mangums_Portfolio.png"
import Button from "@mui/material/Button";
import Resume from "../photos/Bennett_Mangum_Resume_2024.pdf"
import "../styles/home.css"
export default function Home() {
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = 'Resume.pdf';
        link.href = Resume;
        link.click();
      };

    return (
        <div className="title-container">
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
                    <div className="hp-button-container">
                        <Button 
                            onClick={onDownload} 
                            sx={{
                                backgroundColor: '#E88D67', 
                                color: 'white',
                                width: 150,
                            }}
                            >
                            Resume
                        </Button>
                        <Button
                            href='https://www.linkedin.com/in/bennett-mangum-14824628a/'
                            target="_blank"
                            rel="noopener noreferrer" 
                            sx={{
                                backgroundColor: '#E88D67', 
                                color: 'white',
                                width: 150,
                            }}
                        >
                                LinkedIn
                        </Button>
                        <Button
                            href='https://github.com/BennettM7'
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: '#E88D67', 
                                color: 'white',
                                width: 150,
                            }}
                        >
                            GitHub
                        </Button>
                    </div>
                </div>
                <img src={HomePagePhoto} alt="Home Page Photo" height={768} width={576} />
            </div>
        </div>
    )
}