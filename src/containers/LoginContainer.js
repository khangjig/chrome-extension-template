import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withCookies} from 'react-cookie'

import {loginRequest} from "../actions/LoginAction"
import LoginPage from "../pages/LoginPage"
import DashboardContainer from "./DashboardContainer";
import {Keys} from "../const/Const";

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                loading: true
            })
        }, 1000);
    }

    handleSubmitLoginForm = (e) => {
        this.props.loginRequest(e, this.props)
    }

    render() {
        if (this.props.cookies.cookies["ACCESS_COOKIE_NAME"]) {
            return <DashboardContainer/>
        }
        return (
            !this.state.loading ?
                <div style={{textAlign: 'center', paddingTop: '50%'}}>
                    <div className="loader"></div>
                </div>
                :
                <LoginPage
                    {...this.props}
                    {...this.state}

                    handleSubmitLoginForm={(e) => this.handleSubmitLoginForm(e)}
                />
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.loginReducer
    }
}

const mapDispatchToProps = dispatch => ({
    loginRequest: (data, props) => dispatch(loginRequest(data, props))
})

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))