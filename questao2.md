# Consultas SQL


````sql
a) Escreva a consulta SQL para listar o nome de todos os alunos matriculados na disciplina de Cálculo do professor João

SELECT a.nome
FROM aluno a
JOIN cursa c ON a.coda = c.coda
JOIN disciplina d ON c.codd = d.codd
JOIN leciona l ON d.codd = l.codd
JOIN professor p ON l.codp = p.codp
WHERE d.nome = 'Cálculo' AND p.nome = 'João';

b) Escreva a consulta SQL para exibir a quantidade de alunos por disciplinas

SELECT d.nome, COUNT(*) AS total
FROM cursa c
JOIN disciplina d ON c.codd = d.codd
GROUP BY d.nome;

c) Escreva a consulta SQL para listar as disciplinas que todos os professores lecionam

SELECT d.nome
FROM disciplina d
JOIN leciona l ON d.codd = l.codd
GROUP BY d.codd, d.nome
HAVING COUNT(DISTINCT l.codp) = (SELECT COUNT(*) FROM professor);

d) Escreva a consulta SQL que exibe o total de professores

SELECT COUNT(*) AS total FROM professor;

e) Escreva a consulta SQL para listar todos os alunos que cursaram alguma disciplina do ano 2000 até 2020

SELECT DISTINCT a.nome
FROM aluno a
JOIN cursa c ON a.coda = c.coda
WHERE c.ano BETWEEN 2000 AND 2020;
