import { Avatar, Button} from '@material-ui/core';
import React from 'react';


class Upload extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  
  render() {
    return (
      <div style={{ display:"flex",flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center', }}>
                <Avatar src={this.state.file} style={{ width: 150,
    height:150,}}/>

         <input onChange={this.handleChange}
        accept="image/*"
        style={{display:"none"}}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file" style={{paddingTop:"15%"}}>
        <Button variant="contained" color="primary" component="span"  >
          Upload
        </Button>
      </label>
      
      </div>
    );
  }
}
export default Upload