import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {CookiesProvider} from "react-cookie";
import {withCookies} from 'react-cookie';
import {Provider} from "react-redux";

import store from "./store";
import LoginContainer from "./containers/LoginContainer";
import DashboardContainer from "./containers/DashboardContainer";

class App extends Component {
    render() {
        return (
            <div style={{padding: 0, width: 400, height: window.innerHeight}}>
                <CookiesProvider>
                    <Provider store={store}>
                        <DashboardContainer/>
                    </Provider>
                </CookiesProvider>
            </div>
        );
    }
}

export default withCookies(App);
