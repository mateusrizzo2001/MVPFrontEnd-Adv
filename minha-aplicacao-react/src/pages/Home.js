import React from 'react';

const homeStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
};

const titleStyle = {
  fontSize: '32px',
  marginBottom: '20px',
  color: '#333',
};

const paragraphStyle = {
  fontSize: '18px',
  marginBottom: '15px',
  color: '#666',
};

const headingStyle = {
  fontSize: '24px',
  marginTop: '30px',
  marginBottom: '15px',
  color: '#333',
};

const listStyle = {
  listStyle: 'disc',
  marginLeft: '20px',
  marginBottom: '20px',
  color: '#666',
};

const listItemStyle = {
  fontSize: '16px',
  marginBottom: '5px',
};

const formStyle = {
  maxWidth: '400px',
  margin: '0 auto',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const labelStyle = {
  display: 'block',
  fontWeight: 'bold',
  marginBottom: '5px',
  color: '#333',
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

const Home = () => {
  return (
    <div style={homeStyle}>
      <h2 style={titleStyle}>Plano de Saúde PUC Health</h2>
      <p style={paragraphStyle}>
        O plano de saúde PUC Health oferece uma cobertura abrangente e uma ampla gama de benefícios para cuidar da sua saúde e bem-estar.
      </p>

      <h3 style={headingStyle}>Benefícios:</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>Cobertura médica em todo o país</li>
        <li style={listItemStyle}>Especialistas qualificados e hospitais renomados</li>
        <li style={listItemStyle}>Atendimento rápido e eficiente</li>
        <li style={listItemStyle}>Programas de prevenção e promoção da saúde</li>
        <li style={listItemStyle}>Assistência médica domiciliar</li>
      </ul>

      <h3 style={headingStyle}>Cobertura:</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>Consultas médicas e exames laboratoriais</li>
        <li style={listItemStyle}>Cirurgias e procedimentos hospitalares</li>
        <li style={listItemStyle}>Medicamentos e tratamentos</li>
        <li style={listItemStyle}>Atendimento de emergência e internação</li>
        <li style={listItemStyle}>Tratamentos especializados</li>
      </ul>

      <h3 style={headingStyle}>Entre em contato conosco:</h3>
      <p style={paragraphStyle}>
        Preencha o formulário abaixo para entrar em contato com nossa equipe e obter mais informações sobre a PUC Health.
      </p>

      <form style={formStyle}>
        <div>
          <label htmlFor="name" style={labelStyle}>Nome:</label>
          <input type="text" id="name" name="name" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>E-mail:</label>
          <input type="email" id="email" name="email" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="message" style={labelStyle}>Mensagem:</label>
          <textarea id="message" name="message" rows="4" style={inputStyle} />
        </div>
        <button type="submit" style={buttonStyle}>Enviar</button>
      </form>
    </div>
  );
};

export default Home;
