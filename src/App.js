import React, { useState } from 'react';
import { Resizable } from 're-resizable';

function App() {
  const [users] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [userId, setUserId] = useState(null);

  function selectUser(id) {
    let item = users[id - 1];
    setName(item.name);
    setEmail(item.email);
    setMobile(item.mobile);
    setUserId(item.id);
  }
  function updateUser() {
    let item = { name, mobile, email };
    console.warn('item', item);
    fetch(`http://localhost:4000/todo/${userId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    });
  }

  return (
    <div className="container">
      <Resizable className="wrapper">
        <div className="App">
          <h1>Add/Update</h1>
          <table border="1" style={{ float: 'left' }}>
            <tbody>
              {users.map((item, i) => (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>
                    <button>Add</button>
                  </td>
                  <td>
                    <button onClick={() => selectUser(item.id)}>Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />{' '}
            <br />
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />{' '}
            <br />
            <br />
            <input
              type="text"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />{' '}
            <br />
            <br />
            <button>Add</button>
            <button onClick={updateUser}>Update User</button>
          </div>
        </div>
      </Resizable>
      <Resizable className="wrapper">
        <div className="App">
          <h1>Add/Update User Data With API </h1>
          <table border="1" style={{ float: 'left' }}>
            <tbody>
              {users.map((item, i) => (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>
                    <button>Add</button>
                  </td>
                  <td>
                    <button onClick={() => selectUser(item.id)}>Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />{' '}
            <br />
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />{' '}
            <br />
            <br />
            <input
              type="text"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />{' '}
            <br />
            <br />
            <button>Add</button>
            <button onClick={updateUser}>Update User</button>
          </div>
        </div>
      </Resizable>
      <Resizable className="wrapper">
        <div className="App">
          <h1>Add/Update User Data With API </h1>
          <table border="1" style={{ float: 'left' }}>
            <tbody>
              {users.map((item, i) => (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>
                    <button>Add</button>
                  </td>
                  <td>
                    <button onClick={() => selectUser(item.id)}>Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />{' '}
            <br />
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />{' '}
            <br />
            <br />
            <input
              type="text"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />{' '}
            <br />
            <br />
            <button>Add</button>
            <button onClick={updateUser}>Update User</button>
          </div>
        </div>
      </Resizable>
    </div>
  );
}
export default App;
