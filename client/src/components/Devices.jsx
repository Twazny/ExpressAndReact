import React,{ Component } from 'react';
import DeviceDetails from './DeviceDetails.jsx'
import DeviceList from './DeviceList.jsx'

import './Devices.css'

class Devices extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className='devices'>
                <DeviceList />
                <DeviceDetails />
            </div>
        )
    }
}

export default Devices;