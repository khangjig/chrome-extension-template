import React, {Component} from 'react'
import {Card, Form, Input, Button} from 'antd';

class LoginPage extends Component {
    onFinish = values => {
        this.props.handleSubmitLoginForm(values)
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <Card
                style={{width: '100%', height: '100%'}}
                cover={
                    <img
                        alt="logo"
                        src="https://cafef.mediacdn.vn/k:2015/2-google-chinh-thuc-thay-doi-logo-1441165278594/google-chinh-thuc-thay-doi-logo.gif"
                        style={{padding: '15% 10% 5% 10%'}}
                    />
                }
            >
                <div>
                    <div>{process.env.REACT_APP_DOMAIN_API}</div>
                    <Form
                        initialValues={{remember: true}}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            name="email"
                            rules={[{required: true, message: 'Please input your email!'}]}
                        >
                            <Input placeholder="Email"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password placeholder="Password"/>
                        </Form.Item>

                        <div style={{textAlign: 'center'}}>
                            <Form.Item>
                                <Button type="primary" htmlType="login">
                                    Login
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </Card>
        )
    }
}

export default LoginPage
