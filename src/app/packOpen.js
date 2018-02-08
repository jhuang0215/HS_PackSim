const React = require('react');
const path = require('path');
//import cardBack from "/app/assets/img/Card_Back_Legend.png";

// Module require
const Flipper = require('./flipper.js');

class PackOpen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            packResult: [],
            flipped: []
        }
    }

    componentWillMount() {
        this.getRandomCards();
    }

    // Custom function 
    flip(index) {
        let isFlipped = this.state.flipped;
        isFlipped[index] = true;
        this.setState({flipped: isFlipped});
    }

    getRandomCards(){
        let randomPack = [], isFlipped = [];
        let randomNumber = 0;
        for(let i = 0; i < 5; i++){
            randomNumber = Math.floor(Math.random() * this.props.cardList.length);
            randomPack.push(this.props.cardList[randomNumber]);
            isFlipped.push(false);
        }
        this.setState({
            packResult: randomPack,
            flipped: isFlipped
        });
    }

    render(){
        return(
            <div className="container">
                <div className="packsim-container">
                    <div className="packsim-wrapper">
                        <div className="pack-topper">
                            <button type="button" className="btn btn-danger " onClick={() => this.getRandomCards()}>New Pack</button>
                        </div>
                        <div className="pack-wrapper">
                            <ul className="pack-results">
                                {this.state.packResult.map((card, index) => {
                                    return(
                                        <li key={index} className="card-slot" onClick={() => this.flip(index)}>
                                            <Flipper flipped={this.state.flipped[index]} front="/app/assets/img/Card_Back_Legend.png" back={card.img}/>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

module.exports = PackOpen;