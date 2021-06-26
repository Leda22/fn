import { IconButton } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import React, { Component } from 'react';

export default class MultipleImageUploadComponent extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }

    render() {
        return (
            <form>
            
                <div className="form-group">
      <input accept="image/*" style={{display: 'none',}} id="icon-button-file" type="file"  onChange={this.uploadMultipleFiles} multiple/>
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera style={{ color: 'orange' }} />
        </IconButton>
      </label>
      </div>
                <div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        <img src={url} alt="..."  style={{width:"40%",paddingTop:"5%",paddingRight:"5%"}}/>
                    ))}
                </div>
            </form >
        )
    }
}