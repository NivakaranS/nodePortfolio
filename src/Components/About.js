import React from "react";
import './About.css';

const About = () => {
    return(
        <div className="mainAboutContainer"> 
            <div className="innerMainAboutContainer">
                <div className="aboutContainerTitle">
                        About Me
                </div>
                <div className="innerQuoteContainer">
                    
                            <div className="quote">
                                <i>"Stay hungry, stay foolish"</i>
                            </div>
                            <div className="steve">
                                <p>-Steve Jobs</p>
                            </div>
                        </div>

                <div className="aboutMe">

                        <div className="aboutLeftContainer">
                            AboutRight
                        </div>
                        
                        <div className="aboutRightContainer">
                            <div className="innerRightContainer">
                                <p>Hello! I am Nivakaran, currently pursuing a B.Sc. in Information Technology with a specialization in Data Science at the Sri Lanka Institute of Information Technology (SLIIT). My academic journey driven by a passion for exploring the dynamic intersection of data science and software engineering.</p>
                                <br/>
                                <p>In the words of Steve Jobs, "Stay hungry, stay foolish", I embrace a philosophy that encourages perpetual curiosity, a relentless pursuit of new knowledge, and a fearless approach to exploring uncharted territories. This mindset fuels both my personal growth and professional ambitions.</p>
                                <br/>
                                
                                <p>Join me on this exhilarating quest as we navigate the complexities of data science and software engineering together. Let's embrace curiosity, defy conventions, and forge ahead into a future where possibilities are limitless.</p>
                                <div className="numberContainer">
                                    <div className="innerNumberContainer">
                                        <div>Projects</div>
                                        <div>15</div>
                                    </div>
                                    <div className="innerNumberContainer">

                                        <div>Programing langugages</div>
                                        <div>20</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                
                
            </div>
                
                
                

            </div>
            
        
    )
}

export default About;