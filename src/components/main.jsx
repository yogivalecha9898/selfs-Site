import Intro from './intro'
import '../styles/main.css'
import Project from './project'
import Outro from './outro'

function Main() {
    return (
        <div className="mainDiv">
            <Intro />
            <hr className="mainHr" />
            <Project />
            <hr className="outerhr" />
            <Outro />
        </div>
    )
}

export default Main