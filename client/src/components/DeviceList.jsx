import React,{ Component } from 'react';

import './DeviceList.css'

class DeviceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: [
                {
                    id: 5235,
                    name: 'Raspberry Pi 2B',
                    ip_address: '0.0.0.0' 
                },
                {
                    id: 2413,
                    name: 'Arduino Mega',
                    ip_address: '0.0.0.1'
                }
            ],
        }
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
                                <tr><td>{index + 1}</td><td>{device.name}</td><td>{device.ip_address}</td></tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DeviceList