import React,{ Component } from 'react';
import Devices from './Devices';
import './DeviceDetails.css'


class DeviceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: '',
            ip_address: '',
            editable: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    handleValueChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div>            
                <h3>Device details</h3>
                <form onSubmit={this.handleSubmit} action=''>
                    <label for='name'>Nazwa</label><br/>
                    <input name='name' value={this.state.name} type='text' onChange={this.handleValueChange} /><br/>
                    <label>Adress IP</label><br/>
                    <input name='ip_address' value={this.state.ip_address} type='text' onChange={this.handleValueChange} /><br/>
                    <input type='reset' value='Cancel'/>
                    <input type='submit' value='Save' />
                </form>
            </div>
        )
    }

}

export default DeviceDetails