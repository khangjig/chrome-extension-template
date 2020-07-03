import React, {Component} from 'react'
import {Button, Input} from 'antd';

import KModal from "../components/KModal";

class TestModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            value1: "",
            value2: "",
            value3: "",
            date: "2020-01-01",
        };
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleChange1 = (e) => {
        this.setState({value1: e.target.value});
    }

    handleChange2 = (e) => {
        this.setState({value2: e.target.value});
    }

    handleChange3 = (e) => {
        this.setState({value3: e.target.value});
    }


    submitForm = async (e) => {
        e.preventDefault();
        await this.props.submitForm({
            value: this.state.value,
            value1: this.state.value1,
            value2: this.state.value2,
            value3: this.state.value3,
        })

        this.clearForm()
        this.props.toggleClose()
    }

    clearForm = () => {
        this.setState({
            value: "",
            value1: "",
            value2: "",
            value3: "",
        })
    }

    selectDate = (e) => {
        console.log(e.target.value)
    }

    render() {
        const styles = {
            formInput: {
                marginTop: 10
            },
        }
        return (
            <KModal
                visible={this.props.visible}
                toggleClose={() => {
                    this.props.toggleClose()
                    this.clearForm()
                }}
            >
                <div>
                    <form
                        id={'myForm'}
                        onSubmit={this.submitForm}
                    >
                        <Input style={styles.formInput} placeholder={'1'} value={this.state.value}
                               onChange={this.handleChange}/>
                        <Input style={styles.formInput} placeholder={'2'} value={this.state.value1}
                               onChange={this.handleChange1}/>
                        <Input style={styles.formInput} placeholder={'3'} value={this.state.value2}
                               onChange={this.handleChange2}/>
                        <div
                            style={styles.formInput}>
                            <label htmlFor="appt">Select a time:</label>
                            <input type="date" id="appt" name="appt"
                                   value={this.state.date} onChange={this.selectDate}/>
                        </div>
                        <Button style={styles.formInput} form="myForm" key="submit" htmlType="submit">Button</Button>
                    </form>
                </div>
            </KModal>
        )
    }
}

export default TestModal