import '../styles/outro.css'
import 'font-awesome/css/font-awesome.min.css';

function Outro() {
    return (
        <div className="out">
            <div className="outro">
                <h1>YOGI <span>VALECHA</span></h1>
                <hr />
                <h3>yogivalecha249@gmail.com</h3>
                <p>you can reach me there, or</p>
                <div className="icons">
                    <i style={{color: "blue"}} className="fa fa-linkedin" onClick={() => {
                        window.open("https://www.linkedin.com/in/yogi-valecha-b298341a9/", "_blank")
                    }}></i>
                    <i className="fa fa-github" onClick={() => {
                        window.open("https://github.com/yogivalecha9898", "_blank")
                    }}></i>
                </div>
            </div>
        </div>
    )
}

export default Outro