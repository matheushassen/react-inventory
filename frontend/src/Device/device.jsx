import React, { Component } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import DeviceList from "../components/DeviceList.jsx/DeviceList";
import DeviceForm from "../components/DeviceForm.jsx/DeviceForm";

const url = "http://127.0.0.1:8008/api/devices"



export default class Device extends Component {
    constructor(props) {
        super(props)
        this.state ={hostname: '', serial: '', bp: '', room: '', list: []}
        this.handleChange = this.handleChange.bind(this)
        this.addDevice = this.addDevice.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.getDevices()
    }

    
    getDevices(hostname, serial, bp, room) {
        axios.get(url)
        .then(resp => this.setState({...this.state, hostname, serial, bp, room, list: resp.data}))

    }

    addDevice() {
        const hostname = this.state.hostname
        const serial = this.state.serial
        const bp = this.state.bp
        const room = this.state.room
        axios.post(url, {hostname, serial, bp, room})
        .then(resp=>this.getDevices())
        .catch(resp => console.log(resp.message))
    }

    handleChange(e) {
        const value = e.target.value
        this.setState({...this.state, 
            [e.target.name]: value
        })
    }

    handleDelete(device) {
        axios.delete(`${url}/${device._id}`)
        .then(resp=>this.getDevices())
    }

    handleSearch() {
        const search = description ? `&description__regex=/${description}/` : ''
    }
    render() {
        return (
            <div>
                <Header></Header>
                <DeviceForm 
                    addDevice={this.addDevice}
                    handleChange={this.handleChange}>
                </DeviceForm>

                <DeviceList 
                    list={this.state.list}
                    handleDelete={this.handleDelete}>
                </DeviceList>
            </div>
        )
    }
}