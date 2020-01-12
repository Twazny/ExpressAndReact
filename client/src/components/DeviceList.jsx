import React,{ Component } from 'react';
import Panel from './Panel.jsx';

import './DeviceList.css'


class DeviceList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }



    handleClick(e) {
        const rowId = e.target.closest('tr').dataset.id;
        this.props.onRowSelect(rowId);

    }

    render() {
        const { devices, selectedRow } = this.props;
        return (
            <div className='deviceList'>
                <Panel>
                <h3>List of devices</h3>
                <table>
                    <thead>
                        <tr><th>no</th><th>name</th><th>ip adress</th></tr>
                    </thead>
                    <tbody onClick={this.handleClick}>
                        { 
                            devices.map((device,index) => {
                                let id = device.id;
                                let className = id == selectedRow ? 'rowSelected' : '';
                                return (
                                    <tr key={id} data-id={id} className={className}>
                                        <td>{index + 1}</td>
                                        <td>{device.name}</td>
                                        <td>{device.ip_address}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                </Panel>
            </div>
        )
    }
}

export default DeviceList