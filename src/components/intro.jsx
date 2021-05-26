import '../styles/intro.css'
import img7 from '../img/7.jpg'

function Intro() {
    return (
        <div className="intro">
            <nav className="nav">
                <ul>
                    <li>YOGI <span>VALECHA</span></li>
                    <li onClick={() => window.open("https://docs.google.com/document/d/1PshosvZ_P1tBKahzLWMoC8NvK6iCPBHgqDsFdNarHf4/edit", "_blank")}>RESUME</li>
                </ul>
            </nav>
            <section className="mainIntro">
                <div className="before">
                    <div className="img">
                        <img src={img7} alt="It's me" />
                    </div>
                </div>
                <div className="div1">
                    <h1>Hi, I'm Yogi</h1>
                    <h3>STUDENT + DEVELOPER<span style={{fontSize: "0.6em", marginLeft: "5px"}}>(in progress 😜)</span></h3>
                    <hr className="mainhr"
                        style={{
                            borderTop: "1px solid lightgray",
                            borderBottom: "none",
                            borderRight: "none",
                            borderLeft: "none", 
                            marginBottom: "25px", 
                            width: "50px"
                        }}
                    />
                    <p>I love developing front-end or UI pertaining things, have created projects and I have keen interest in problem solving and anime.</p>
                </div>
                <div className="div2">
                    <div className="img">
                        <img src={img7} alt="It's me" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Intro