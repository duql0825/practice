import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CustomerDelete from './CustomerDelete'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  image: {
    maxWidth: 100
  }
})

// 고객 정보도 이렇게 객체 하나하나로 자잘하게 나누어 주는게 중요하다.
class Customer extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>
          <img className={classes.image} src={this.props.image} alt="profile" />
        </TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.type}</TableCell>
        <TableCell>
          <CustomerDelete
            stateRefresh={this.props.stateRefresh}
            id={this.props.id}
          />
        </TableCell>
      </TableRow>
    )
  }
}

export default withStyles(styles)(Customer)
