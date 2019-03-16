import React, { Component } from 'react';
const axios = require("axios");

class App extends Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
    }
    onChange=(e)=> {
        this.setState({file:e.target.files[0]});
    }
    onFormSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/upload",formData,config)
            .then((res) => {
                alert("The file is successfully uploaded");
            }).catch((err) => {
        });
    }
    

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default App
