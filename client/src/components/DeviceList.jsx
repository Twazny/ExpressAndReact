import React,{ Component } from 'react';

import './DeviceList.css'


class DeviceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: [],
            selectedRow: null,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch('/api/devices').then((res) => {
            return res.json()
        }).then((res) => {
            this.setState({devices: res});
        });
    }

    handleClick(e) {
        const row = e.target.closest('tr');
        const selectedRow = this.state.selectedRow;
        if (selectedRow !== null) {
            selectedRow.classList.remove('rowSelected');
        }
        
        this.setState({selectedRow: row});
        row.classList.add('rowSelected');
    }

    render() {
        const devices = this.state.devices;
        return (
            <div className='deviceList'>
                <h3>List of devices</h3>
                <table>
                    <thead>
                        <tr><th>no</th><th>name</th><th>ip adress</th></tr>
                    </thead>
                    <tbody onClick={this.handleClick}>
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