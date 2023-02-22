import './footerstyles.css';
import LogoFooter from './logofooter.png';

function Footer() {
    return (
        <div className='containerfooter'>
            <div className='containerfooterbody'>
                    <img src={LogoFooter} alt='LogoFooter' className='LogoFooter' />
                    <div>
                        <h2>Contact ☎️</h2>
                        <p>wagnersariolli@gmail.com</p>
                    </div>
                    <div>
                        <h2>Social 👨‍💻</h2>
                        <p><a title='Visit Linkedin' href='https://www.linkedin.com/in/wagnersariolli/'>Linkedin</a></p>
                        <p><a title='Visit Github' href='https://github.com/WagnerSariolli'>Github</a></p>
                    </div>
                    <div>
                        <h2>Powered ⚙️</h2>
                        <p><a title='Visit the JS website' href='https://www.javascript.com/'>JavaScript</a></p>
                        <p><a title='Click to learn more about HTML' href='https://developer.mozilla.org/pt-BR/docs/Web/HTML'>HTML</a></p>
                        <p><a title='Click to learn more about CSS' href='https://developer.mozilla.org/pt-BR/docs/Web/CSS'>CSS</a></p>
                        <p><a title='This portfolio is hosted on GitHub Pages' href='https://pages.github.com/'>Github Pages</a></p>
                    </div>
                </div>
        </div>
    );
}
export default Footer