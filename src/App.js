import React, { Component } from 'react';
import './App.css';
import { Table, Flex } from 'rendition';

const columns = [
  {
    "field": "name",
    "label": "Name",
    sortable: true,
    render: value => <span>{value}</span>
  },
  {
    "field": "good",
    "label": "Is it good?",
    render: value => <span>{value ? 'yes' : 'no'}</span>
  }
];

const dummyData = [
  {name: 'One punch man', good: true},
  {name: 'Death note', good: true},
  {name: 'Pokemon', good: true},
  {name: 'Bleach', good: true},
  {name: 'DBZ', good: true},
  {name: 'FMA', good: true}
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicks: [],
    };
  }
  rowClicked(row, e) {
    this.setState(prevState => ({
      clicks: [...prevState.clicks, row]
    }))
  }
  render() {
    return (
      <Flex>
        <div className="table">
          <Table
            columns={columns}
            data={dummyData}
            onRowClick={this.rowClicked.bind(this)} />
        </div>
        <div className="events">
          <ul>
            {this.state.clicks.map(item => (
              <li key={item}>
                {JSON.stringify(item)}
              </li>
            ))}
          </ul>
        </div>
      </Flex>
    );
  }
}

export default App;
