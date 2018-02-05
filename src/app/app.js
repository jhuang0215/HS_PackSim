const React = require('react');
const ReactDOM = require('react-dom');
const unirest = require('unirest');

require('./assets/css/main.css');

// Module require
const Form = require('./form.js');

//Create component
class HearthPacks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formInput: {
                sets: {},
                classes: {},
                races: {},
                qualities:{},
                types: {}
            },
            cardList: []
        };
    }

    callAPI(){
        let cardRequest = [];
        let formData = this.state.formInput;
        let formDataKeys = Object.keys(formData);
        let setList = Object.keys(formData.sets),
            classList = Object.keys(formData.classes),
            raceList = Object.keys(formData.races),
            qualityList = Object.keys(formData.qualities),
            typeList = Object.keys(formData.types);

        if(qualityList.length > 0){            
            unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/qualities/" + qualityList[0] + "?collectible=1")
            .header("X-Mashape-Key", "e14Zy82oAUmsh5BuvIgPgmmuMnvTp16KghljsnbXiOJgMeJ7Iz")            
            .end(function (result) {
            console.log(result.status, result.headers, result.body);            
            });
        }
    }

    formInputHandler(inputData) {
        this.setState({
            formInput: inputData
        }, function(){
            this.callAPI();
        });        
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
                <div className="container">
                    <Form clickHandler={this.formInputHandler.bind(this)}/>
                </div>                
            </div>
        );
    }
}

//put component into html page
ReactDOM.render(<HearthPacks />, document.getElementById('hearthpacks-wrapper'));