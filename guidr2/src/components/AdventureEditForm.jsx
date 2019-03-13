import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateAdventureAsync, clearAdventureForEdit } from '../actions/actionCreators';


export class AdventureEditForm extends React.Component {
    state={
        adventure_ID: this.props.adventureBeingEdited.id,
        adventure_type: this.props.adventureBeingEdited.adventure_type,
        title: this.props.adventureBeingEdited.title,
        location: this.props.adventureBeingEdited.location,
        duration: this.props.adventureBeingEdited.duration,
        description: this.props.adventureBeingEdited.description,
        professional: this.props.adventureBeingEdited.professional,
        date: this.props.adventureBeingEdited.date
    }

    onUpdateAdventure = () => {

        const EditedAdventure = {
            adventure_type: this.state.adventure_type,
            title: this.state.title,
            location: this.state.location,
            duration: this.state.duration,
            description: this.state.description,
            professional: this.state.professional,
            date: this.state.date,
        };

        const AdventureId = this.state.adventure_ID

        this.props.updateAdventureAsync(AdventureId, EditedAdventure);

        this.props.clearAdventureForEdit();
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    

    render() {
        return (
            <div>
                <div>
                    <h2>Edit an Existing adventure!</h2>
                </div>
                <div>
                    <em>Adventure ID: {this.state.adventure_ID} </em>
                </div>
                <div>
                    <em>Adventure Type: </em>
                    <input 
                        value={this.state.adventure_type} 
                        type="text" 
                        className="inputClass"
                        onChange={this.handleInputChange}
                        placeholder="Adventure Type"
                        name="adventure_type"
                    />
                </div>
                <div>
                    <em>Title: </em>
                    <input 
                        value={this.state.title} 
                        type="text" 
                        className="inputClass"
                        onChange={this.handleInputChange}
                        placeholder="Title"
                        name="title"
                    />
                </div>
                <div>
                    <em>Location: </em>
                    <input 
                        value={this.state.location} 
                        type="text"
                        className="inputClass"
                        onChange={this.handleInputChange}
                        placeholder="Location"
                        name="location"
                    />
                </div>
                <div>
                    <em>Duration: </em>
                    <input 
                        value={this.state.duration} 
                        type="text"
                        className="inputClass"
                        onChange={this.handleInputChange}
                        placeholder="Duration" 
                        name="duration"
                    />
                </div>
                <div>
                    <em>Description: </em>
                    <input 
                        value={this.state.description} 
                        type="text" 
                        className="inputClass"
                        onChange={this.handleInputChange}
                        placeholder="Description"
                        name="description"
                    />
                </div>
                <div>
                    <em>Professional? </em>
                    <input 
                        value={this.state.professional} 
                        type="text" 
                        className="inputClass"
                        onChange={this.handleInputChange}
                        placeholder="Professional?"
                        name="professional"
                    />
                </div>
                <div>
                    <em>Date: </em>
                    <input 
                        value={this.state.date} 
                        type="text" 
                        className="inputClass"
                        onChange={this.handleInputChange}
                        placeholder="Date"
                        name="date"
                    />
                </div>
                <div>
                    <button onClick={this.onUpdateAdventure}>Update Adventure</button>
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateAdventureAsync,
        clearAdventureForEdit,
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        // adventures: state.adventuresReducer,
        // adventureBeingEditedId: state.adventureBeingEditedReducer,
        adventureBeingEdited: state.adventuresReducer.find((adventure) => adventure.id === state.adventureBeingEditedReducer)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdventureEditForm);
