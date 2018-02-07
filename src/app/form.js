const React = require('react');
import {Collapse} from 'react-collapse';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state={
            formInput: {                
                types: {},
                qualities: {},
                classes: {},
                races: {},
                sets: {}
            }            
        };

        this.setList = [
            {name: "Basic"},
            {name: "Classic"},
            {name: "Hall of Fame"},
            {name: "Naxxramas"},
            {name: "Goblins vs Gnomes"},
            {name: "Blackrock Mountain"},
            {name: "The Grand Tournament"},
            {name: "League of Explorers"},
            {name: "Whispers of the Old Gods"},
            {name: "One Night in Karazhan"},
            {name: "Mean Streets of Gadgetzan"},
            {name: "Journey to Un'Goro"},
            {name: "Knights of the Frozen Throne"},
            {name: "Kobolds & Catacombs"}
        ];
        this.classList = [
            {name: "Druid"},
            {name: "Hunter"},
            {name: "Mage"},
            {name: "Paladin"},
            {name: "Priest"},
            {name: "Rogue"},
            {name: "Shaman"},
            {name: "Warlock"},
            {name: "Warrior"}
        ];
        this.raceList = [
            {name: "Beast"},
            {name: "Demon"},
            {name: "Dragon"},
            {name: "Elemental"},
            {name: "Mech"},
            {name: "Murloc"},
            {name: "Pirate"},
            {name: "Totem"},
            {name: "General"}
        ];
        this.qualityList = [
            {name: "Legendary"},
            {name: "Epic"},
            {name: "Rare"},
            {name: "Common"},
            {name: "Free"}
        ];
        this.typeList = [
            {name: "Spell"},
            {name: "Weapon"},            
            {name: "Minion"}            
        ];
    }

    handleToggle(item, type) {
        console.log(item);
        console.log(type);
        let boxInput = this.state.formInput;
        switch(type){
            case 'sets':
                boxInput.sets[item.name] ? delete boxInput.sets[item.name] : boxInput.sets[item.name] = true;
                break;
            case 'classes':
                boxInput.classes[item.name] ? delete boxInput.classes[item.name] : boxInput.classes[item.name] = true;
                break;
            case 'races':
                boxInput.races[item.name] ? delete boxInput.races[item.name] : boxInput.races[item.name] = true;
                break;
            case 'qualities':
                boxInput.qualities[item.name] ? delete boxInput.qualities[item.name] : boxInput.qualities[item.name] = true;
                break;
            case 'types':
                boxInput.types[item.name] ? delete boxInput.types[item.name] : boxInput.types[item.name] = true;
                break;
            default:
                console.log('Error toggling form box');
        }
        console.log(boxInput);
        this.setState({
            formInput: boxInput
        });
    }

    render(){
        return(
            <div className="hearthpack-form">
                <div className="dropdown select-box">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sets
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {this.setList.map((item, index) => {
                            return(
                                <a key={item.name} className="dropdown-item" href="#" onClick={() => this.handleToggle(item, 'sets')}>                            
                                    {/* {item.name} */}
                                    {/* {this.state.formInput.sets[item.name] ? <img className="select-background" src="./app/assets/img/check-mark.png"/> : null} */}
                                    {this.state.formInput.sets[item.name] ? <div className="opaque-label">{item.name}</div> : item.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className="dropdown select-box">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Classes
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {this.classList.map((item, index) => {
                            return(
                                <a key={item.name} className="dropdown-item" href="#" onClick={() => this.handleToggle(item, 'classes')}>                            
                                    {item.name}
                                    <input type="checkbox" value={item.name} />
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className="dropdown select-box">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Races
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {this.raceList.map((item, index) => {
                            return(
                                <a key={item.name} className="dropdown-item" href="#" onClick={() => this.handleToggle(item, 'races')}>                            
                                    {item.name}
                                    <input type="checkbox" value={item.name} />
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className="dropdown select-box">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Qualities
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {this.qualityList.map((item, index) => {
                            return(
                                <a key={item.name} className="dropdown-item" href="#" onClick={() => this.handleToggle(item, 'qualities')}>                            
                                    {item.name}
                                    <input type="checkbox" value={item.name} />
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className="dropdown select-box">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Types
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {this.typeList.map((item, index) => {
                            return(
                                <a key={item.name} className="dropdown-item" href="#" onClick={() => this.handleToggle(item, 'types')}>                            
                                    {item.name}
                                    <input type="checkbox" value={item.name} />
                                </a>
                            );
                        })}
                    </div>
                </div>
                
                <div className="submit-button">
                    <button type="button" className="btn btn-success" onClick={() => this.props.clickHandler(this.state.formInput)}>Submit</button>
                </div>
            </div>
        );
    }
}

module.exports = Form;