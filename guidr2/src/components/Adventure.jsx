import React from 'react';
import '../css/Adventure.css'

export default class Adventure extends React.Component {
    render() {
        const {
            adventure,
        } = this.props;

        return (
            <div className="adventureContainer">
                <h2>{adventure.title}</h2>
                <div className="idClass">Adventure number {adventure.id} by user {adventure.user_id}</div>
                <div className="headerClass">Type:</div>
                <div className="infoClass">{adventure.adventure_type}</div>
                <div className="headerClass">Location:</div>
                <div className="infoClass">{adventure.location}</div>
                <div className="headerClass">Duration:</div>
                <div className="infoClass">{adventure.duration}</div>
                <div className="headerClass">Professional?</div>
                <div className="infoClass">{adventure.professional ? "Yes" : "No"}</div>
                <div className="headerClass">Description:</div>
                <div className="infoClass">{adventure.description}</div>
                <div className="infoClass">{adventure.date}</div>
                <button className="adventureButtons" onClick={() => this.props.deleteAdventureAsync(adventure.id)}>Delete</button>
                <button className="adventureButtons" onClick={() => this.props.setAdventureForEdit(adventure.id)}>Edit</button>
            </div>
            
        );
    }
}
