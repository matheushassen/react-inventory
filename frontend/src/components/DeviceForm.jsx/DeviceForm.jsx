import React from "react";
import './DeviceForm.css'

export default (props) => {

    return(
        <form className="form">
            <div>
                <label htmlFor="hostname">Hostname: </label>
                <input type="text" name="hostname" id="hostname" onChange={props.handleChange} value={props.hostname}/>

                <label htmlFor="serial">Serial: </label>
                <input type="text" name="serial" id="serial" onChange={props.handleChange} value={props.serial}/>

                <label htmlFor="bp">BP: </label>
                <input type="text" name="bp" id="bp" onChange={props.handleChange} value={props.bp}/>
                
                <label htmlFor="room">Room: </label>
                <input type="text" name="room" id="room" onChange={props.handleChange} value={props.room}/>

                <button onClick={props.addDevice}>Add</button> 
            </div>
            <div>
                <label htmlFor="search">Search: </label>
                <input type="text" name="search" id="search" onChange={props.handleChange} value={props.search}/>
                <button onClick={props.handleSearch}>Search</button>
            </div>
        </form>
    )
}