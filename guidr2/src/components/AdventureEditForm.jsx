import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateAdventureAsync } from '../actions/actionCreators';


export class AdventureEditForm extends React.Component {
    adventure_idRef = React.createRef();
    adventure_typeRef = React.createRef();
    titleRef = React.createRef();
    locationRef = React.createRef();
    durationRef = React.createRef();
    descriptionRef = React.createRef();
    professionalRef = React.createRef();
    dateRef = React.createRef();

    onAddAdventure = () => {
        const adventure_idInput = this.adventure_idRef.current;
        const adventure_typeInput = this.adventure_typeRef.current;
        const titleInput = this.titleRef.current;
        const locationInput = this.locationRef.current;
        const durationInput = this.durationRef.current;
        const descriptionInput = this.descriptionRef.current;
        const professionalInput = this.professionalRef.current;
        const dateInput = this.dateRef.current;


        const EditedAdventure = {
            adventure_type: adventure_typeInput.value,
            title: titleInput.value,
            location: locationInput.value,
            duration: durationInput.value,
            description: descriptionInput.value,
            professional: professionalInput.value,
            date: dateInput.value,
        };

        const AdventureId = adventure_idInput.value

        this.props.updateAdventureAsync(AdventureId, EditedAdventure);

        adventure_idInput.value = '';
        adventure_typeInput.value = '';
        titleInput.value = '';
        locationInput.value = '';
        durationInput.value = '';
        descriptionInput.value = '';
        professionalInput.value = '';
        dateInput.value = '';
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Edit an Existing adventure!</h2>
                </div>
                <div>
                    <em>Adventure ID: </em>
                    <input ref={this.adventure_idRef} type="text" />
                </div>
                <div>
                    <em>Adventure Type: </em>
                    <input ref={this.adventure_typeRef} type="text" />
                </div>
                <div>
                    <em>Title: </em>
                    <input ref={this.titleRef} type="text" />
                </div>
                <div>
                    <em>Location: </em>
                    <input ref={this.locationRef} type="text" />
                </div>
                <div>
                    <em>Duration: </em>
                    <input ref={this.durationRef} type="text" />
                </div>
                <div>
                    <em>Description: </em>
                    <input ref={this.descriptionRef} type="text" />
                </div>
                <div>
                    <em>Professional? </em>
                    <input ref={this.professionalRef} type="text" />
                </div>
                <div>
                    <em>Date: </em>
                    <input ref={this.dateRef} type="text" />
                </div>
                <div>
                    <button onClick={this.onAddAdventure}>Add Adventure</button>
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateAdventureAsync,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(AdventureEditForm);
