import React from 'react';

import {
  Col,
  Grid,
  Row
} from 'react-bootstrap'

class List extends React.Component {

  render() {

    const { random_students } = this.props.randomList;

    const pickedStudents = random_students.filter((s) => { return s.picked === true; })
    const unpickedStudents = random_students.filter((s) => { return s.picked === false; })

    const pickedNames = pickedStudents
      .sort(function(a,b){
        var c = new Date(a.picked_at);
        var d = new Date(b.picked_at);
        return c-d;
      })
      .map((s) => {
        return (
          <p key={s.id}>{s.name}</p>
        )
      })

    const unpickedNames = unpickedStudents
      .sort(function(a,b){
        var c = new Date(a.created_at);
        var d = new Date(b.created_at);
        return c-d;
      })
      .map((s) => {
        return (
          <p key={s.id}>{s.name}</p>
        )
      })

    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} sm={6} md={6}>
            { unpickedNames }
          </Col>
          <Col xs={6} sm={6} md={6} >
            { pickedNames }
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default List;