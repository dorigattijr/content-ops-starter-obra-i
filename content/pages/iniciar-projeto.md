---
title: "Iniciar Projeto"
layout: "default"
---

<div class="container">
  <h1>Criar Projeto</h1>
  <form id="projectForm">
    <label for="projectName">Nome do Projeto:</label>
    <input type="text" id="projectName" placeholder="Ex: Reforma da cozinha" required>

    <label for="projectDescription">Descrição do Projeto:</label>
    <textarea id="projectDescription" rows="4" placeholder="Detalhe o objetivo do projeto" required></textarea>

    <label for="materials">Lista de Materiais:</label>
    <textarea id="materials" rows="4" placeholder="Ex: 10 sacos de cimento, 5 latas de tinta branca"></textarea>

    <label for="fileUpload">Upload de Arquivos:</label>
    <input type="file" id="fileUpload" multiple>

    <button type="submit">Salvar Projeto</button>
  </form>
</div>

<script>
  document.getElementById('projectForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const projectName = document.getElementById('projectName').value;
      const projectDescription = document.getElementById('projectDescription').value;
      alert(`Projeto "${projectName}" salvo com sucesso!`);
  });
</script>
