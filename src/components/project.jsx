import '../styles/project.css'
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import img4 from '../img/4.png'
import img6 from '../img/6.png'
import 'font-awesome/css/font-awesome.min.css';

function Project() {
    return (
        <div className="project">
            <section className="pros">
                <div className="proj proj1">
                    <div className="next"><i className="fa fa-arrow-right" onClick={() => {
                        window.open("https://github.com/yogivalecha9898/Bookmark_Landing", "_blank")
                    }}></i></div>
                    <div className="info">UI/UXDev</div>
                    <img src={img1} alt="imgs" />
                </div>
                <div className="proj proj2">
                    <div className="next"><i className="fa fa-arrow-right" onClick={() => {
                        window.open("https://github.com/yogivalecha9898/Manage_LandingPage", "_blank")
                    }}></i></div>
                    <div className="info">UI/UXDev</div>
                    <img src={img2} alt="imgs" />
                </div>
                <div className="proj proj3">
                    <div className="next"><i className="fa fa-arrow-right" onClick={() => {
                        window.open("https://github.com/yogivalecha9898/Exercises/tree/master/movie-app", "_blank")
                    }}></i></div>
                    <div className="info">WebDev</div>
                    <img src={img4} alt="imgs" />
                </div>
                <div className="proj proj5">
                    <div className="next"><i className="fa fa-arrow-right" onClick={() => {
                        window.open("https://github.com/yogivalecha9898/cordura", "_blank")
                    }}></i></div>
                    <div className="info">UI/UXDev</div>
                    <img style={{height: "100%"}} src={img3} alt="imgs" />
                </div>
                <div className="proj proj6">
                    <div className="next"><i className="fa fa-arrow-right" onClick={() => {
                        window.open("https://github.com/yogivalecha9898/Notes", "_blank")
                    }}></i></div>
                    <div className="info">WebDev</div>
                    <img src={img6} alt="imgs" />
                </div>
            </section>
        </div>
    )
}

export default Project