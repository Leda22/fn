import React from 'react';
import { Popconfirm, message } from 'antd';
import { Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


function confirm(e) {
  console.log(e);
}

function cancel(e) {
  console.log(e);
}
class Confirm extends React.Component 
{
    render(){
    return(
  <Popconfirm
    title="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
    placement="bottom"
  >
    <IconButton><DeleteIcon color="Error" /></IconButton>
  </Popconfirm>
);
}
}
export default Confirm;