import React, {Component} from 'react'
import {
    Button,
} from 'antd';

import TestModal from '../modals/TestModal'

class UserPage extends Component {
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.props.showModal}>
                    Open Modal
                </Button>

                <TestModal
                    visible={this.props.visible}
                    toggleClose={this.props.toggleClose}
                    submitForm={this.props.submitForm}
                />
            </div>
        )
    }
}

export default UserPage