const React = require('react');
const ReactDOM = require('react-dom');

require('./assets/css/main.css');

//Create component
class HearthPacks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div>
                <nav id="top" className="navbar">
                    <div className="container">
                        <div className="navbar-header">                           
                            <a className="navbar-title">HearthPacks</a>                                                       
                        </div>
                        <div className="navbar-content navbar-right">
                            <a href="https://www.facebook.com/jack.huang.94009" target="_blank" className="btn btn-social-icon btn-facebook">
                                <i className="fa fa-facebook" />
                            </a>
                            <a href="https://www.instagram.com/jtxhuang/" target="_blank" className="btn btn-social-icon btn-instagram">
                                <i className="fa fa-instagram" />
                            </a>
                            <a href="https://www.linkedin.com/in/jhuang0215/" target="_blank" className="btn btn-social-icon btn-linkedin">
                                <i className="fa fa-linkedin" />
                            </a>
                             <a href="https://github.com/jhuang0215/" target="_blank" className="btn btn-social-icon btn-github">
                                <i className="fa fa-github" />
                            </a>
                        </div>                        
                    </div>
                </nav>
            </div>
        );
    }
}

//put component into html page
ReactDOM.render(<HearthPacks />, document.getElementById('hearthpacks-wrapper'));