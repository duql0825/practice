import React from 'react'
import { post } from 'axios'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  hidden: {
    display: 'none'
  }
})

class CustomerAdd extends React.Component {
  // 선언 하듯이 넣으세요
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      userName: '',
      type: '',
      fileName: '',
      open: false
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.addCustomer().then((response) => {
      console.log(response.data)
      this.props.stateRefresh()
    })
    this.setState({
      file: null,
      userName: '',
      type: '',
      fileName: '',
      open: false
    })
  }

  handleFileChange = (e) => {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.value
    })
  }

  handleValuechange = (e) => {
    let nextState = {}
    nextState[e.target.name] = e.target.value
    this.setState(nextState)
  }

  // image name type 추가
  addCustomer = () => {
    const url = '/api/customers'
    const formData = new FormData()
    formData.append('image', this.state.file)
    formData.append('name', this.state.userName)
    formData.append('type', this.state.type)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return post(url, formData, config)
  }

  // open 값을 true로 설정
  handleClickOpen = () => {
    this.setState({
      open: true
    })
  }

  // 취소 버튼 클릭시 open 값을 false로 설정
  handleClose = () => {
    this.setState({
      file: null,
      userName: '',
      type: '',
      fileName: '',
      open: false
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          고객추가하기
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>고객 추가</DialogTitle>
          <DialogContent>
            <TextField
              className={classes.hidden}
              accept="image/*"
              id="raised-button-file"
              type="file"
              name="file"
              file={this.state.file}
              value={this.state.fileName}
              onChange={this.handleFileChange}
            />{' '}
            <label htmlFor="raised-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                name="file"
              >
                {this.state.fileName === ''
                  ? '프로필 이미지 선택'
                  : this.state.fileName}
              </Button>
            </label>
            <br />
            <TextField
              label="이름"
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleValuechange}
            />{' '}
            <br />
            <TextField
              label="타입"
              type="text"
              name="type"
              value={this.state.type}
              onChange={this.handleValuechange}
            />{' '}
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleFormSubmit}
            >
              추가
            </Button>
            <Button
              variant="contained"
              color="outline"
              onClick={this.handleClose}
            >
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(CustomerAdd)
