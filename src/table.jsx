import React from 'react';

const Table = () => {
  const data = [
    { url: 'http://example.com', username: 'user1', password: 'pass1' },
    { url: 'http://example2.com', username: 'user2', password: 'pass2' },
    { url: 'http://example3.com', username: 'user3', password: 'pass3' },
  ];

  return (
    <table border="1" style={{ width: '100%', textAlign: 'left' }}>
      <thead>
        <tr>
          <th>URL</th>
          <th>Username</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.url}</td>
            <td>{item.username}</td>
            <td>{item.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
