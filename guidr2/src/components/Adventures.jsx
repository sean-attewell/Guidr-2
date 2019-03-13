import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAdventuresAsync, deleteAdventureAsync } from '../actions/actionCreators'
import Adventure from './Adventure';

export class Adventures extends React.Component {
    componentDidMount() {
        this.props.getAdventuresAsync();
    }

    render() {
        return (
            <div>
                <h3>List of all adventures:</h3>
                <div>
                    {
                        this.props.adventures.map(adventure => (
                            <div key={adventure.id}>
                                <Adventure
                                    key={adventure.id}
                                    adventure={adventure}
                                />
                                <button onClick={() => this.props.deleteAdventureAsync(adventure.id)}>Delete</button>
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
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Adventures);
