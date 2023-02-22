import './headerstyles.css';
import ImageHeader from './imageheader.png';

function Header() {
    return (
        <div className='container'>
            <div>
                <h1 className='title'>
                    Hello, I'm Wagner Sariolli<br/>
                    I'm a web developer, focusing on<br/>
                    UI/UX Design 👋 😄 
                </h1>
                <img src={ImageHeader} alt='ImageHeader' className='ImageHeader'></img>
            </div>
        </div>
    );
}

export default Header;