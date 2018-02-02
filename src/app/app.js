const React = require('react');
const ReactDOM = require('react-dom');

//Create component
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
}

//put component into html page
ReactDOM.render(<App />, document.getElementById('hearthpacks-wrapper'));