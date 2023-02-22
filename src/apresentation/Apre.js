import './Apre.css';
import ImageApre from './imagensaboutme.png';

function Apre() {
    return (
        <div className='aprecontent'>
            <div><img src={ImageApre} alt='ImageApre' className='ImageApre' /></div>
            <div>
                <h1>Hello 🙂 👍 </h1>

                I'm a young Brazilian software developer, I work completely remotely with web application development and design, I use modern and scalable tools in my development process, I work in an organized and transparent way with a focus on agile methodologies.
                <br/>
                <br/>
                I have knowledge of servers and databases, being responsible not only for the front-end development but also the back-and, in a documented way and following the clean code standards proposed by the software development community. A developer not only creates but also takes care of and maintains software, almost like a code mechanic, so if a code is well written and documented it becomes a standard code, easy to maintain and scalable for improvements.
            </div>
        </div>
    );
}

export default Apre