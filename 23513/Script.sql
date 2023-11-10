-- Tabela de Especialidades Médicas
CREATE TABLE EspecialidadeMedica (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
);

-- Tabela de Médicos
CREATE TABLE Medico (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  crm VARCHAR(20) NOT NULL,
  -- Outros campos do médico
);

-- Tabela de Pacientes
CREATE TABLE Paciente (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cpf VARCHAR(14) NOT NULL,

);


CREATE TABLE TipoConsulta (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
);


CREATE TABLE StatusConsulta (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
);


CREATE TABLE ConsultaMedica (
  id INT AUTO_INCREMENT PRIMARY KEY,
  dataConsulta DATE NOT NULL,
  horaConsulta TIME NOT NULL,
  medicoId INT,
  pacienteId INT,
  tipoConsultaId INT,
  statusConsultaId INT,

  FOREIGN KEY (medicoId) REFERENCES Medico(id),
  FOREIGN KEY (pacienteId) REFERENCES Paciente(id),
  FOREIGN KEY (tipoConsultaId) REFERENCES TipoConsulta(id),
  FOREIGN KEY (statusConsultaId) REFERENCES StatusConsulta(id)
);

-- Tabela de Acessos
CREATE TABLE Acesso (
  id INT AUTO_INCREMENT PRIMARY KEY,
  medicoId INT,
  pacienteId INT,

  FOREIGN KEY (medicoId) REFERENCES Medico(id),
  FOREIGN KEY (pacienteId) REFERENCES Paciente(id)
);
