import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { NavBar } from './navbar';
import ListSelector from './listSelector';

class Home extends React.Component{


    render(){
        if(!this.props.user){
            return (   
                <Redirect to='/'/>
            )
        }
        return (
            <div>
                <NavBar 
                    user={this.props.user}
                />
                <ListSelector/>
            </div>
        )
    }
};

const mapStateToProps = ({login}) => {

    return {
        user: login.loggedInUser,
    }
};

export default connect(mapStateToProps)(Home);
