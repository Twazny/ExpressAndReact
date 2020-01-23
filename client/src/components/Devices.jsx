import React,{ Component } from 'react';
import DeviceDetails from './DeviceDetails.jsx'
import DeviceList from './DeviceList.jsx'
import Panel from './Panel.jsx'

import './Devices.css'

class Devices extends Component {
    constructor (props) {
        super(props);
        this.state = {
            devices: [],
            selectedRow: null,
        }
        this.handleRowSelect = this.handleRowSelect.bind(this);
        this.handleDeviceSave = this.handleDeviceSave.bind(this);
    }

    componentDidMount() {
        fetch('/api/devices').then((res) => {
            return res.json()
        }).then((res) => {
            this.setState({devices: res});
        });
    }

    handleRowSelect(row) {
        this.setState({selectedRow: row});
    }

    handleDeviceSave(data) {
        
        let selectedRow = this.state.selectedRow;
        if (selectedRow !== null) {
            patch(`/api/devices/${selectedRow}`,data).then(res => {
                let devices = this.state.devices;
                let idx = devices.findIndex((element) => {
                    return element.id == selectedRow;
                });
                devices[idx] = res;
                this.setState({devices: devices});
            }).catch(error => {
                throw Error(error.message);
            })
        } else {
            post('/api/devices',data).then((res) => {
                let devices = this.state.devices;
                devices = [...devices, res];
                this.setState({devices: devices});
            }).catch(error => {
                throw Error(error.message);
            });
        }
    }

    render() {
        const devices = this.state.devices;
        const selectedRow = this.state.selectedRow;

        let ip_address = '';
        let name = '';
        if (selectedRow != null) {
            const selectedRowData = devices.find((device) => {
                if (device.id == selectedRow) {
                    return device;
                }
            });
            name = selectedRowData.name;
            ip_address = selectedRowData.ip_address;
        }

        return (
            <div className='devices'>
                <DeviceList devices = {devices} selectedRow = {selectedRow} onRowSelect = {this.handleRowSelect}/>
                <DeviceDetails key = {selectedRow} onSave = {this.handleDeviceSave} id = {selectedRow} name = {name} ip_address = {ip_address}/>                
            </div>
        )
    }
}

function post(url, data) {
    return xhr('POST', url, data);
}

function patch(url, data) {
    return xhr('PATCH', url, data);
}


function xhr(method, url, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.response);
                resolve(res);
            }
        };
    
        xhr.open(method, url, true);
        xhr.setRequestHeader('content-type','application/json');
        xhr.send(JSON.stringify(data));
    });
}



export default Devices;