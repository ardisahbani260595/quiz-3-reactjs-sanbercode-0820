import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <div style={{ padding: 10, border: '1px solid #ccc' }}>
        <h1 style={{ textAlign: 'center' }}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
        <ol>
          <li><strong style={{ width: 100 }}>Nama:</strong> Ardi Sahbani Sudrajat</li>
          <li><strong style={{ width: 100 }}>Email:</strong> ardi.sahbani@gmail.com</li>
          <li><strong style={{ width: 100 }}>Sistem Operasi yang digunakan:</strong> Win10</li>
          <li><strong style={{ width: 100 }}>Akun Github/Gitlab:</strong> @ardisahbani260595</li>
          <li><strong style={{ width: 100 }}>Akun Telegram:</strong> @ardiSahbani</li>
        </ol>
      </div>
      <br />
      <br />
      <NavLink to="/">Back</NavLink>
    </section>
  );
};

export default About;
