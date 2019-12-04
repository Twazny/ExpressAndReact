import React,{ Component } from 'react';

import './DeviceList.css'


class DeviceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: []
        }
    }

    componentDidMount() {
        fetch('/api/devices').then((res) => {
            return res.json()
        }).then((res) => {
            this.setState({devices: res});
        });
    }

    render() {
        const devices = this.state.devices;
        return (
            <div>
                <h3>List of devices</h3>
                <table>
                    <tbody>
                        <tr><th>no</th><th>name</th><th>ip adress</th></tr>
                        { 
                            devices.map((device,index) => 
                                <tr key={device.id}><td>{index + 1}</td><td>{device.name}</td><td>{device.ip_address}</td></tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DeviceList