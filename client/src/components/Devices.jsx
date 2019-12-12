import React,{ Component } from 'react';
import DeviceDetails from './DeviceDetails.jsx'
import DeviceList from './DeviceList.jsx'

import './Devices.css'

class Devices extends Component {
    constructor (props) {
        super(props);
        this.state = {
            devices: [],
            selectedRow: null,
        }
        this.handleRowSelect = this.handleRowSelect.bind(this);
        this.handleDeviceAdd = this.handleDeviceAdd.bind(this);
    }

    componentDidMount() {
        fetch('/api/devices').then((res) => {
            return res.json()
        }).then((res) => {
            this.setState({devices: res});
        });
    }

    handleRowSelect(row) {
        console.log(row);
        this.setState({selectedRow: row});
    }

    handleDeviceAdd(data) {
        try {
            post('/api/devices',data).then((res) => {
                let devices = this.state.devices;
                devices = [...devices, res];
                this.setState({devices: devices});
            });
        } catch(error) {
            throw Error(error.message);
        }
    }

    render() {
        const devices = this.state.devices;
        const selectedRow = this.state.selectedRow;
        return (
            <div className='devices'>
                <DeviceList devices = {devices} selectedRow = {selectedRow} onRowSelect = {this.handleRowSelect}/>
                <DeviceDetails onDeviceAdd = {this.handleDeviceAdd}/>
            </div>
        )
    }
}

function post(url, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.response);
                
                const posted = JSON.parse(this.response);
                console.log(posted);
                resolve(posted);
            }
        };
    
        xhr.open('POST',url, true);
        xhr.setRequestHeader('content-type','application/json');
        xhr.send(JSON.stringify(data));
    });
}


export default Devices;