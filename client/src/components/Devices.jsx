import React,{ Component } from 'react';
import DeviceDetails from './DeviceDetails.jsx'
import DeviceList from './DeviceList.jsx'

class Devices extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DeviceList />
                <DeviceDetails />
            </div>
        )
    }
}

export default Devices;