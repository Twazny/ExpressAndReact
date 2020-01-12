import React,{ Component } from 'react';
import Button from './Button';
import Panel from './Panel';
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
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
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

    handleEdit(e) {
        this.setState({editable: true});
    }

    handleCancel(e) {
        this.setState({editable: false});
    }

    render() {
        return (
            <div className='deviceDetails'>
                <Panel>            
                <h3>Device details</h3>
                <form id='detailsForm' onSubmit={this.handleSubmit} action=''>          
                    <label htmlFor='name'>Nazwa</label><br/>
                    {
                        this.state.editable ?
                        <input name='name' value={this.state.name} type='text' onChange={this.handleValueChange}/> : 
                        <input style={{border:'2px solid rgba(0,0,0,0)'}} name='name' value={this.state.name} type='text' onChange={this.handleValueChange} readOnly/>
                    }
                    <br/>
                    <label>Adress IP</label><br/>
                    {
                        this.state.editable ?
                        <input name='ip_address' value={this.state.ip_address} type='text' onChange={this.handleValueChange}/> : 
                        <input style={{border:'2px solid rgba(0,0,0,0)'}} name='ip_address' value={this.state.ip_address} type='text' onChange={this.handleValueChange} readOnly/>
                    }
                    <br/>
                    { 
                        this.state.editable ?
                        <div className="horizontalFlex">
                            <Button text='Cancel' handleClick={this.handleCancel}></Button>
                            <Button text='Save' handleClick={this.handleSubmit}></Button>
                        </div> :
                        <Button text='Edit' handleClick={this.handleEdit}></Button>
                    }
                </form>
                </Panel>
            </div>
        )
    }

}


export default DeviceDetails