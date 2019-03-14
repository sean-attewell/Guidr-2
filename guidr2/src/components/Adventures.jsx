import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAdventuresAsync, deleteAdventureAsync, setAdventureForEdit } from '../actions/actionCreators'
import Adventure from './Adventure';
import '../css/Adventures.css'

export class Adventures extends React.Component {
    componentDidMount() {
        this.props.getAdventuresAsync();
    }

    render() {
        return (
            <div>
                <img className="guidr-logo" src={require('../images/guidr-no-back.png')} alt="guidr-logo"></img>
                <h1>Local adventure listings...</h1>
                <div className="adventuresContainer">
                    {
                        this.props.adventures.map(adventure => (
                            <div key={adventure.id}>
                                <Adventure
                                    key={adventure.id}
                                    adventure={adventure}
                                    deleteAdventureAsync={this.props.deleteAdventureAsync}
                                    setAdventureForEdit={this.props.setAdventureForEdit}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        adventures: state.adventuresReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAdventuresAsync,
        deleteAdventureAsync,
        setAdventureForEdit,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Adventures);
