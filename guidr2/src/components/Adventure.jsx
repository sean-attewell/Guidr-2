import React from 'react';

export default class Adventure extends React.Component {
    render() {
        const {
            adventure,
        } = this.props;

        return (
            <div>
                <div>{adventure.id}</div>
                <div>{adventure.user_id}</div>
                <div>{adventure.adventure_type}</div>
                <div>{adventure.title}</div>
                <div>{adventure.location}</div>
                <div>{adventure.duration}</div>
                <div>{adventure.description}</div>
                <div>{adventure.professional}</div>
                <div>{adventure.date}</div>
                <button onClick={() => this.props.deleteAdventureAsync(adventure.id)}>Delete</button>
                <button onClick={() => this.props.setAdventureForEdit(adventure.id)}>Edit</button>
            </div>
            
        );
    }
}
