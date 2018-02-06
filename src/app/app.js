const React = require('react');
const ReactDOM = require('react-dom');
const unirest = require('unirest');

require('./assets/css/main.css');
const config = require('./config.js');

// Module require
const Form = require('./form.js');

//Create component
class HearthPacks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formInput: {
                types: {},
                qualities: {},
                class: {},
                races: {},
                sets: {}
            },
            cardList: []
        };
    }

    // Custom function
    apiRequestPromise(paramList, formKey){
        return new Promise(function(resolve, reject){
            unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/" + formKey + "/" + paramList + "?collectible=1")
            .header("X-Mashape-Key", config.api_key)
            .end(function (result) {
                console.log(formKey, paramList);
                console.log(result.status, result.headers, result.body);

                if(result.status === 200){
                    resolve(result.body);
                } else {
                    reject(result.body);
                }
                // apiResult = apiResult.concat(result.body);
            });
        });
    }

    callAPI(){        
        let cardRequest = [];
        let formData = this.state.formInput;
        
        // Get all the key values in an array ex ["types", "qualities", ...]
        let formKeys = Object.keys(formData); 
        
        // Take the checked parameters in each key and order them into arrays [["Spell", "Minion", "Weapon"], ["Legendary"], ...]
        let getListWithKey = function(item, index, formData){
            return Object.keys(formData[item]);
        };
        let paramLists = formKeys.map((item, index) => getListWithKey(item, index, formData));
        console.log(paramLists);

        // Check card request parameters and call the API for the highest priority paremeter to minimize API calls 
        // (ex. there are only 3 types of cards so maximum 3 calls compare to 14 expansion sets)
        // then filter the list with the rest of the parameters
        let apiResult = [];
        for(let i = 0; i < paramLists.length; i++){
            if(paramLists[i].length > 0){
                // make api request for all the cards in the key value
                // for(let j = 0; j < paramLists[i].length; j++){
                //     unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/" + formKeys[i]+ "/" + paramLists[i][j] + "?collectible=1")
                //     .header("X-Mashape-Key", config.api_key)
                //     .end(function (result) {
                //         console.log(formKeys[i], paramLists[i][j]);
                //         console.log(result.status, result.headers, result.body);
                //         apiResult = apiResult.concat(result.body);
                //     });                    
                // }
                let requests = paramLists[i].map((item) => this.apiRequestPromise(item, formKeys[i]));                
                Promise.all(requests).then((apiResults) => console.log(apiResults));
                break;
            }
        }

        // paramLists.map();
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