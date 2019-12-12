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
        try {
            const { name, ip_address} = this.state;
            if (name && ip_address) {
                this.props.onDeviceAdd({name, ip_address});
            }
        } catch(error) {
            new Error(error.message);
        }
    }

    handleValueChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='deviceDetails'>            
                <h3>Device details</h3>
                <form onSubmit={this.handleSubmit} action=''>          
                    <label htmlFor='name'>Nazwa</label><br/>
                    <input name='name' value={this.state.name} type='text' onChange={this.handleValueChange} /><br/>
                    <label>Adress IP</label><br/>
                    <input name='ip_address' value={this.state.ip_address} type='text' onChange={this.handleValueChange} /><br/>
                    <div className="horizontalFlex">
                        <input type='reset' value='Cancel'/>
                        <input type='submit' value='Save' />
                    </div>
                </form>
            </div>
        )
    }

}


export default DeviceDetails