import React from "react";
import './DeviceList.css'

export default (props) => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(device => (
            <tr key={device._id}>
                <td>{device.hostname}</td>
                <td>{device.serial}</td>
                <td>{device.bp}</td>
                <td>{device.room}</td>

                <td><button onClick={() => props.handleDelete(device)}>Delete</button></td>
            </tr>
            
        ))
    }
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Hostname</th>
                    <th>Serial</th>
                    <th>BP</th>
                    <th>Room</th>
                </tr>
            </thead>

            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}