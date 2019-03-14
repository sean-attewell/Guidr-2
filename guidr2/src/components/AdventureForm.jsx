import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addAdventureAsync } from '../actions/actionCreators';
import '../css/AdventureForm.css'

export class AdventureForm extends React.Component {
    user_idRef = React.createRef();
    adventure_typeRef = React.createRef();
    titleRef = React.createRef();
    locationRef = React.createRef();
    durationRef = React.createRef();
    descriptionRef = React.createRef();
    professionalRef = React.createRef();
    dateRef = React.createRef();

    onAddAdventure = () => {
        const user_idInput = this.user_idRef.current;
        const adventure_typeInput = this.adventure_typeRef.current;
        const titleInput = this.titleRef.current;
        const locationInput = this.locationRef.current;
        const durationInput = this.durationRef.current;
        const descriptionInput = this.descriptionRef.current;
        const professionalInput = this.professionalRef.current;
        const dateInput = this.dateRef.current;


        const newAdventure = {
            user_id: user_idInput.value,
            adventure_type: adventure_typeInput.value,
            title: titleInput.value,
            location: locationInput.value,
            duration: durationInput.value,
            description: descriptionInput.value,
            professional: professionalInput.checked,
            date: dateInput.value,
        };

        this.props.addAdventureAsync(newAdventure);

        user_idInput.value = '';
        adventure_typeInput.value = '';
        titleInput.value = '';
        locationInput.value = '';
        durationInput.value = '';
        descriptionInput.value = '';
        // professionalInput.value = '';
        dateInput.value = '';
    }

    render() {
        return (
            <div className="adventureFormContainer">
                <div>
                    <h2 className="addHeader">Add new adventure!</h2>
                </div>
                <div>
                    <div>User ID: </div>
                    <input className="addInputClass" ref={this.user_idRef} type="text" />
                </div>
                <div>
                    <div>Title: </div>
                    <input className="addInputClass" ref={this.titleRef} type="text" />
                </div>
                <div>
                    <div>Adventure Type: </div>
                    <input className="addInputClass" ref={this.adventure_typeRef} type="text" />
                </div>
                <div>
                    <div>Location: </div>
                    <input className="addInputClass" ref={this.locationRef} type="text" />
                </div>
                <div>
                    <div>Duration: </div>
                    <input className="addInputClass" ref={this.durationRef} type="text" />
                </div>
                <div>
                    <div>Description: </div>
                    <textarea className="addDescriptionClass" ref={this.descriptionRef} type="text" />
                </div>
                <div>
                    <div>Professional? </div>
                    <input ref={this.professionalRef} type="checkbox" />
                </div>
                <div>
                    <div>Date: </div>
                    <input className="addInputClass" ref={this.dateRef} type="text" />
                </div>
                <div>
                    <button className="addButton" onClick={this.onAddAdventure}>Add Adventure</button>
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addAdventureAsync,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(AdventureForm);
