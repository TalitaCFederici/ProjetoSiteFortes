document.addEventListener("DOMContentLoaded", () => {
  // Navbar
  const navLinks = document.querySelectorAll(".navbar ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      // Remove a classe 'active' de todos os links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Adiciona a classe 'active' ao link clicado
      event.target.classList.add("active");

      // Redireciona para a página do link clicado
      const targetPage = event.target.getAttribute("href");
      if (targetPage) {
        setTimeout(() => {
          window.location.href = targetPage; // Evita conflitos
        }, 100);
      }
    });
  });

  // Sidebar e relatórios
  const sidebarList = document.querySelector(".sidebar-list");
  const reportContent = document.getElementById("report-content");
  const newReportTextarea = document.getElementById("new-report-content");
  const addReportButton = document.getElementById("add-report-button");
  let reportCounter = 5;

  // Relatórios existentes
  const reports = {
    relatorio1: `
      <h3>1. Identificação do Projeto</h3>
      <p><strong>Nome do Projeto:</strong> Construindo Futuros</p>
      <p><strong>Proponente:</strong> Associação Comunitária Esperança</p>
      <p><strong>CNPJ:</strong> 23.456.789/0001-99</p>
      <h3>2. Orçamento</h3>
      <ul>
        <li>Total do Projeto: R$ 50.000,00</li>
        <li>Despesas:</li>
        <ul>
          <li>Equipamentos e EPIs: R$ 10.000,00</li>
          <li>Equipe técnica: R$ 20.000,00</li>
          <li>Logística e divulgação: R$ 5.000,00</li>
        </ul>
      </ul>
      <button class="button" onclick="markAsViewed(this, 'relatorio1')">Marcar como Visto</button>
    `,
    relatorio2: `
      <h3>1. Identificação do Projeto</h3>
      <p><strong>Nome do Projeto:</strong> Educação para Todos</p>
      <p><strong>Proponente:</strong> ONG Saber e Crescer</p>
      <p><strong>CNPJ:</strong> 45.123.789/0001-22</p>
      <h3>2. Orçamento</h3>
      <ul>
        <li>Total do Projeto: R$ 40.000,00</li>
        <li>Despesas:</li>
        <ul>
          <li>Material Didático: R$ 15.000,00</li>
          <li>Infraestrutura: R$ 10.000,00</li>
          <li>Divulgação: R$ 5.000,00</li>
        </ul>
      </ul>
      <button class="button" onclick="markAsViewed(this, 'relatorio2')">Marcar como Visto</button>
    `,
    relatorio3: `
      <h3>1. Identificação do Projeto</h3>
      <p><strong>Nome do Projeto:</strong> Saúde para Todos</p>
      <p><strong>Proponente:</strong> Fundação Vida Saudável</p>
      <p><strong>CNPJ:</strong> 67.891.234/0001-44</p>
      <h3>2. Orçamento</h3>
      <ul>
        <li>Total do Projeto: R$ 60.000,00</li>
        <li>Despesas:</li>
        <ul>
          <li>Equipamentos Médicos: R$ 25.000,00</li>
          <li>Capacitação de Profissionais: R$ 20.000,00</li>
          <li>Divulgação: R$ 15.000,00</li>
        </ul>
      </ul>
      <button class="button" onclick="markAsViewed(this, 'relatorio3')">Marcar como Visto</button>
    `,
    relatorio4: `
      <h3>1. Identificação do Projeto</h3>
      <p><strong>Nome do Projeto:</strong> Tecnologia Inclusiva</p>
      <p><strong>Proponente:</strong> StartUp Inovação Social</p>
      <p><strong>CNPJ:</strong> 89.123.456/0001-77</p>
      <h3>2. Orçamento</h3>
      <ul>
        <li>Total do Projeto: R$ 100.000,00</li>
        <li>Despesas:</li>
        <ul>
          <li>Desenvolvimento de Software: R$ 50.000,00</li>
          <li>Infraestrutura Tecnológica: R$ 30.000,00</li>
          <li>Treinamentos: R$ 20.000,00</li>
        </ul>
      </ul>
      <button class="button" onclick="markAsViewed(this, 'relatorio4')">Marcar como Visto</button>
    `
  };

  // Adiciona funcionalidade aos itens da sidebar
  sidebarList.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      const reportId = item.dataset.report;
      reportContent.innerHTML = reports[reportId] || "<p>Relatório não encontrado.</p>";
    });
  });

  // Adicionar novo relatório
  addReportButton.addEventListener("click", () => {
    const newReportText = newReportTextarea.value.trim();

    if (newReportText === "") {
      alert("Por favor, escreva algo antes de adicionar um relatório.");
      return;
    }

    const newReportId = `relatorio${reportCounter}`;
    reports[newReportId] = `
      <h3>Novo Relatório Criado</h3>
      <p>${newReportText}</p>
      <button class="button" onclick="markAsViewed(this, '${newReportId}')">Marcar como Visto</button>
    `;

    const newSidebarItem = document.createElement("li");
    newSidebarItem.dataset.report = newReportId;
    newSidebarItem.textContent = `Relatório ${reportCounter}: Não visto`;
    sidebarList.appendChild(newSidebarItem);

    newSidebarItem.addEventListener("click", () => {
      reportContent.innerHTML = reports[newReportId];
    });

    reportCounter++;
    newReportTextarea.value = "";
    alert("Relatório adicionado com sucesso!");
  });

  // Marcar relatório como visto
  window.markAsViewed = (button, reportId) => {
    button.disabled = true;
    button.textContent = "Já Visto";
    const listItem = sidebarList.querySelector(`[data-report="${reportId}"]`);
    if (listItem) {
      listItem.textContent = listItem.textContent.replace("Não visto", "Visto");
    }
  };
});

addReportButton.addEventListener("click", () => {
  const newReportText = newReportTextarea.value.trim();
  const selectedRecipient = document.getElementById("recipient-select").value;

  if (newReportText === "") {
      alert("Por favor, escreva algo antes de adicionar um relatório.");
      return;
  }

  if (!selectedRecipient) {
      alert("Por favor, selecione um destinatário.");
      return;
  }

  const newReportId = `relatorio${reportCounter}`;
  reports[newReportId] = `
      <h3>Novo Relatório Criado</h3>
      <p>${newReportText}</p>
      <p><strong>Destinatário:</strong> ${selectedRecipient}</p>
      <button class="button" onclick="markAsViewed(this, '${newReportId}')">Marcar como Visto</button>
  `;

  const newSidebarItem = document.createElement("li");
  newSidebarItem.dataset.report = newReportId;
  newSidebarItem.textContent = `Relatório ${reportCounter}: Não visto`;
  sidebarList.appendChild(newSidebarItem);

  newSidebarItem.addEventListener("click", () => {
      reportContent.innerHTML = reports[newReportId];
  });

  reportCounter++;
  newReportTextarea.value = "";
  alert(`Relatório adicionado com sucesso para o destinatário ${selectedRecipient}!`);
});

