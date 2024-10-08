import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const OListO = ({ expenses }) => (
    <div>
      <ListGroup>
        {expenses.map(item => (
          <ListGroupItem key={item.id}>
            {item.name} - $ {item.amount}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  )
  

export default OListO