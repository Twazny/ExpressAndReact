import React,{ Component } from 'react';
import Devices from './Devices';
import './DeviceDetails.css'


class DeviceDetails extends Component {
    constructor(props) {
        super(props);
        console.log(`props: ${props}`);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            ip_address: this.props.ip_address,
            editable: false
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
                    {
                        this.state.editable ?
                        <input name='name' value={this.state.name} type='text' onChange={this.handleValueChange}/> : 
                        <input style={{border:'none'}} name='name' value={this.state.name} type='text' onChange={this.handleValueChange} readOnly/>
                    }
                    <br/>
                    <label>Adress IP</label><br/>
                    {
                        this.state.editable ?
                        <input name='ip_address' value={this.state.ip_address} type='text' onChange={this.handleValueChange}/> : 
                        <input style={{border:'none'}} name='ip_address' value={this.state.ip_address} type='text' onChange={this.handleValueChange} readOnly/>
                    }
                    <br/>
                    { 
                        this.state.editable ?
                        <div className="horizontalFlex">
                            <input type='reset' value='Cancel'/>
                            <input type='submit' value='Save' />
                        </div> :
                        <button>Edit</button>
                    }
                </form>
            </div>
        )
    }

}


export default DeviceDetails