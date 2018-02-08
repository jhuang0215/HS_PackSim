const React = require('react');
require('./assets/css/flipper.css');

class Flipper extends React.Component {
    render() {
        return(
            <div className={"flipper-container horizontal"/* + this.props.orientation*/}>
                <div className={"flipper" + (this.props.flipped ? " flipped" : "")}>
                    <div className="front tile">
                        <img src={this.props.front}/>
                    </div>
                    <div className="back tile">
                        <img src={this.props.back} />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Flipper;