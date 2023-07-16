import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [clinic, setClinic] = useState('');
  const [specialist, setSpecialist] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClinicChange = (e) => {
    setClinic(e.target.value);
  };

  const handleSpecialistChange = (e) => {
    setSpecialist(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://seu-servidor.com/api/agendamento', {
        name,
        email,
        message,
        clinic,
        specialist,
      });

      console.log('Resposta do servidor:', response.data);

      // Limpar os campos após o envio
      setName('');
      setEmail('');
      setMessage('');
      setClinic('');
      setSpecialist('');
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  return (
    <div>
      <h2>Agende sua consulta aqui</h2>
      <p>Entre em contato conosco!</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" style={labelStyle}>
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="message" style={labelStyle}>
            Mensagem:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={handleMessageChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="clinic" style={labelStyle}>
            Unidade de Atendimento Desejada:
          </label>
          <input
            type="text"
            id="clinic"
            name="clinic"
            value={clinic}
            onChange={handleClinicChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="specialist" style={labelStyle}>
            Especialista Desejado:
          </label>
          <input
            type="text"
            id="specialist"
            name="specialist"
            value={specialist}
            onChange={handleSpecialistChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Agendar Consulta
        </button>
      </form>
    </div>
  );
};

export default Contact;
