const React = require('react');

class PackOpen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            packResult: [
                {
                    img: "http://media.services.zam.com/v1/media/byName/hs/cards/enus/CS2_231.png",
                }, 
                {
                    img: "http://media.services.zam.com/v1/media/byName/hs/cards/enus/CS2_231.png",
                }, 
                {
                    img: "http://media.services.zam.com/v1/media/byName/hs/cards/enus/CS2_231.png",
                }, 
                {
                    img: "http://media.services.zam.com/v1/media/byName/hs/cards/enus/CS2_231.png",
                }, 
                {
                    img: "http://media.services.zam.com/v1/media/byName/hs/cards/enus/CS2_231.png",
            }]
        }
    }

    // Custom function 
    getRandomCards(){
        let randomPack = [];
        for(let i = 0; i < 5; i++){
            randomPack.push(this.props.cardList[Math.floor(Math.random() * this.props.cardList.length)]);
        }
        this.setState({packResult: randomPack});
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
                                        <li key={index} className="card-slot">
                                            <div className="card-back">
                                                <img src="http://wow.zamimg.com/images/hearthstone/backs/original/Card_Back_Legend.png"/>
                                                {/* <img src="./app/assets/img/body-content-bg.jpg"/> */}
                                            </div>
                                            <div className="card-front" >
                                                <img src={card.img} />
                                            </div>
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