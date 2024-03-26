import AboutMe from "./AboutMe";
import Image from "./Image";
import Experience from "./Experience";
import Name from "./Name";
import Goals from "./Goals";
import Academic from "./Academic";
import Skills from "./Skills";

function Background () {
    return(
        <div className="background">
            <div className="left">
                <Name/>
                <AboutMe/>
                <Goals/>

            </div>
            <div className="middle">
                <Academic/>
                <Experience/>
                <Skills/>

            </div>
            <div className="right">
                <Image/>
            </div>
        </div>
    );
}

export default Background