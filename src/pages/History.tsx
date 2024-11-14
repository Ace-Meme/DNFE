import React from 'react';
import { Table } from 'react-bootstrap';


export function History() {

  const logs = [
    { time: '02:00:01', action: 'Đăng nhập' },
    { time: '02:00:02', action: 'Bật động cơ DDDD1' },
    { time: '02:00:03', action: 'Tắt động cơ DDDD1' },
    { time: '02:00:04', action: 'Đăng xuất' }
  ];

  return (

    <div style={{height: '100vh', width: '100vw', border: 'solid 1px black'}}>

      <div className="w-100 d-flex justify-content-center">
        <h2 className="text-success my-3">Lịch Sử Hoạt Động</h2>
      </div>
      
      <div className='container' style={{ maxWidth: '60%'}}>

        <Table bordered responsive striped>
          <thead>
            <tr>
              <th style={{ backgroundColor: '#90ee90', color: 'white' }}>Thời gian</th>
              <th style={{ backgroundColor: '#90ee90', color: 'white' }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log.time}</td>
                <td>{log.action}</td>
              </tr>
            ))}
          </tbody>
        </Table>

      </div>
    </div>
    
  );
}
