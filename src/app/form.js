const React = require('react');



class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            formInput: {
                sets: [],
                classes: [],
                races: [],
                qualities:[],
                types: []
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
    render(){
        return(
            <div className="hearthpack-form">
                <div>
                    Sets
                    <div>
                        {this.setList.map((item, index) => {
                            return(
                                <div key={item.name}>                                
                                    {item.name}
                                    <input type="checkbox" value={item.name} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    Classes
                    <div>
                        {this.classList.map((item, index) => {
                            return(
                                <div key={item.name}>                                
                                    {item.name}
                                    <input type="checkbox" value={item.name} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    Races
                    <div>
                        {this.raceList.map((item, index) => {
                            return(
                                <div key={item.name}>                                
                                    {item.name}
                                    <input type="checkbox" value={item.name} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    Qualities
                    <div>
                        {this.qualityList.map((item, index) => {
                            return(
                                <div key={item.name}>                                
                                    {item.name}
                                    <input type="checkbox" value={item.name} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    Types
                    <div>
                        {this.typeList.map((item, index) => {
                            return(
                                <div key={item.name}>                                
                                    {item.name}
                                    <input type="checkbox" value={item.name} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Form;