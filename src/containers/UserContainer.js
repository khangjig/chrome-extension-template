import React, {Component} from 'react'
import UserPage from "../pages/UserPage";
import {connect} from "react-redux";

class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }

    toggleClose = () => {
        this.setState({
            visible: false
        })
    }

    submitForm = (e) => {
        console.log("submit", e)
    }

    render() {
        return (
            <UserPage
                {...this.state}
                {...this.props}
                toggleClose={() => this.toggleClose()}
                showModal={() => this.showModal()}
                submitForm={(e) => this.submitForm(e)}
            />
        )
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)