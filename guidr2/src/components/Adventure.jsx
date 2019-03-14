import React from 'react';

export default class Adventure extends React.Component {
    render() {
        const {
            adventure,
        } = this.props;

        return (
            <div>
                <div>{adventure.title}</div>
                <div>Adventure number {adventure.id} by user {adventure.user_id}</div>
                <div>Type: {adventure.adventure_type}</div>
                <div>Lcoation: {adventure.location}</div>
                <div>Duration: {adventure.duration}</div>
                <div>Professional? {adventure.professional ? "Yes" : "No"}</div>
                <div>{adventure.description}</div>
                <div>{adventure.date}</div>
                <button onClick={() => this.props.deleteAdventureAsync(adventure.id)}>Delete</button>
                <button onClick={() => this.props.setAdventureForEdit(adventure.id)}>Edit</button>
            </div>
            
        );
    }
}
