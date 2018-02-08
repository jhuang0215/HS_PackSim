const React = require('react');

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

    // Custom function 
    flip(index) {
        console.log(index);
        let isFlipped = this.state.flipped;
        isFlipped[index] = true;
        this.setState({flipped: isFlipped});
    }

    getRandomCards(){
        let randomPack = [], isFlipped = [];
        let randomNumber = 0;
        for(let i = 0; i < 5; i++){
            randomNumber = Math.floor(Math.random() * this.props.cardList.length);
            console.log(this.props.cardList.length);
            console.log(randomNumber);
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
                            <button type="button" onClick={() => this.getRandomCards()}>Click Me</button>
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