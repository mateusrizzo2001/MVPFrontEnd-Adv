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

function About() {
  return (
    <div style={homeStyle}>
      <h2 style={titleStyle}>Conheça nossa Instituição</h2>
      <p style={paragraphStyle}>
        Bem-vindo ao PUC Health - seu plano de saúde abrangente e confiável!
      </p>
      <p style={paragraphStyle}>
        Na PUC Health, entendemos que a saúde é uma parte fundamental da vida e que cuidar bem dela é essencial para alcançar o bem-estar geral. É por isso que desenvolvemos um plano de saúde exclusivo, dedicado a fornecer cobertura abrangente e serviços de qualidade aos membros da comunidade da PUC.
      </p>
      <p style={paragraphStyle}>
        Como um dos principais provedores de cuidados de saúde, temos o compromisso de garantir que você receba a atenção e os recursos necessários para manter uma vida saudável. Nossos serviços são projetados para atender às suas necessidades médicas, seja você um estudante, professor, funcionário ou membro da comunidade.
      </p>
      <p style={paragraphStyle}>
        Com o PUC Health, você terá acesso a uma ampla rede de médicos, especialistas e instalações médicas de alto nível. Nossa rede inclui hospitais reconhecidos, clínicas especializadas e profissionais altamente qualificados, garantindo que você receba o melhor cuidado possível.
      </p>
      <p style={paragraphStyle}>
        Além disso, oferecemos uma variedade de serviços e benefícios adicionais para tornar a sua experiência com o plano de saúde ainda mais conveniente. Isso inclui consultas médicas online, atendimento de emergência 24 horas, exames de diagnóstico avançados, cobertura para medicamentos prescritos e programas de bem-estar para promover um estilo de vida saudável.
      </p>
      <p style={paragraphStyle}>
        Nosso compromisso vai além da saúde física. Reconhecemos a importância da saúde mental e emocional e, por isso, disponibilizamos recursos para apoiar a sua saúde mental, como aconselhamento psicológico e terapias alternativas.
      </p>
      <p>
        Na PUC Health, acreditamos que todos devem ter acesso a cuidados de saúde de qualidade. Portanto, nos esforçamos para oferecer planos flexíveis e acessíveis, adaptados às suas necessidades individuais. Com opções de cobertura abrangentes e planos personalizáveis, você pode escolher o que melhor se encaixa em seu estilo de vida e orçamento.
      </p>
      <p style={paragraphStyle}>
        Nossa equipe dedicada de profissionais está sempre pronta para ajudá-lo. Seja para esclarecer dúvidas, agendar consultas ou fornecer orientações sobre sua cobertura, estamos comprometidos em oferecer um atendimento excepcional.
      </p>
      <p style={paragraphStyle}>
        Portanto, junte-se a nós no PUC Health e experimente a tranquilidade de ter um plano de saúde completo e confiável ao seu lado. Cuide do seu bem-estar com a qualidade e a excelência que você merece.
      </p>
      <p style={paragraphStyle}>
        PUC Health - Cuidando de você em todos os momentos da sua vida.
      </p>
    </div>
  );
}

export default About;

