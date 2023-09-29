function atualizarProduto(cod) {
    const index = produtos.findIndex((produto) => produto.cod === cod);
    if (index === -1) {
      console.log('Produto não encontrado.');
      return;
    }
  
    const descricao = prompt('Digite a nova descrição do produto:');
    const valor = parseFloat(prompt('Digite o novo valor do produto:'));
    const estoque = parseInt(prompt('Digite a nova quantidade em estoque:'));
  
    produtos[index].descricao = descricao;
    produtos[index].valor = valor;
    produtos[index].estoque = estoque;
  
    console.log('Produto atualizado com sucesso!');
  }
  
  function atualizarCliente(numero) {
    const index = clientes.findIndex((cliente) => cliente.numero === numero);
    if (index === -1) {
      console.log('Cliente não encontrado.');
      return;
    }
  
    const nome = prompt('Digite o novo nome do cliente:');
    const email = prompt('Digite o novo email do cliente:');
  
    clientes[index].nome = nome;
    clientes[index].email = email;
  
    console.log('Cliente atualizado com sucesso!');
  }
  
  function excluirProduto(cod) {
    const index = produtos.findIndex((produto) => produto.cod === cod);
    if (index === -1) {
      console.log('Produto não encontrado.');
      return;
    }
  
    produtos.splice(index, 1);
    console.log('Produto excluído com sucesso!');
  }
  
  function excluirCliente(numero) {
    const index = clientes.findIndex((cliente) => cliente.numero === numero);
    if (index === -1) {
      console.log('Cliente não encontrado.');
      return;
    }
  
    clientes.splice(index, 1);
    console.log('Cliente excluído com sucesso!');
  }
  
  function menu() {
    while (true) {
      const escolha = prompt('Escolha uma opção:\n1 - Cadastrar Produto\n2 - Cadastrar Cliente\n3 - Listar Produtos\n4 - Listar Clientes\n5 - Atualizar Produto\n6 - Atualizar Cliente\n7 - Excluir Produto\n8 - Excluir Cliente\n0 - Sair');
      switch (escolha) {
        case '1':
          cadastrarProduto();
          break;
        case '2':
          cadastrarCliente();
          break;
        case '3':
          listarProdutos();
          break;
        case '4':
          listarClientes();
          break;
        case '5':
          const codProduto = prompt('Digite o código do produto a ser atualizado:');
          atualizarProduto(codProduto);
          break;
        case '6':
          const numeroCliente = prompt('Digite o número do cliente a ser atualizado:');
          atualizarCliente(numeroCliente);
          break;
        case '7':
          const codExcluirProduto = prompt('Digite o código do produto a ser excluído:');
          excluirProduto(codExcluirProduto);
          break;
        case '8':
          const numeroExcluirCliente = prompt('Digite o número do cliente a ser excluído:');
          excluirCliente(numeroExcluirCliente);
          break;
        case '0':
          return;
        default:
          console.log('Opção inválida. Tente novamente.');
      }
    }
  }
  
  menu();
  