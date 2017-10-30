define({ "api": [
  {
    "type": "get",
    "url": "/api/admin/config",
    "title": "Listar configuração",
    "permission": [
      {
        "name": "admin",
        "title": "APENAS ADMINISTRADORES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo ADMIN, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Admin",
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n    \"config\": {\n        \"percentualRede\": 35,\n        \"percentualCarteiraCliente\": 30,\n        \"percentualTaxaAdminstracao\": 15,\n        \"percentualParceiro\": 5,\n        \"percentualSocio\": 15,\n        \"quantidadeFilhos\": 2,\n        \"quantidadeNiveisContemplados\": 5,\n        \"consumoMinimo\": 10,\n        \"multiplicacaoSaldoDisponivel\": 50\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/config.js",
    "groupTitle": "Admin",
    "name": "GetApiAdminConfig"
  },
  {
    "type": "get",
    "url": "/api/admin/empresa/:idEmpresa",
    "title": "Lista empresa por ID",
    "permission": [
      {
        "name": "admin",
        "title": "APENAS ADMINISTRADORES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo ADMIN, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idEmpresa",
            "description": "<p>Id da empresa.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n     \"codigo\": \"000\",\n     \"mensagem\": \"Sucesso\",\n     \"empresa\":{\n         \"percentualVendaDisponivel\": 10,\n         \"valorAcertar\": 10,\n         \"faturamento\": 100,\n         \"nome\": \"Império Açaí\",\n         \"login\": \"imperioacai\",\n         \"cpfCnpj\": \"68.568.832/0001-42\",\n         \"dataUltimoAcesso\": \"2017-09-24T15:14:39.327Z\",\n         \"dataCadastro\": \"2017-09-23T15:54:57.090Z\",\n         \"extrato\":[\n             {\n                 \"de\":{\"nome\": \"Império Açaí\", \"login\": \"imperioacai\"},\n                 \"para\":{\"login\": \"marceloazevedo\", \"nome\": \"Marcelo Santos de Azevedo\"},\n                 \"valor\": 3,\n                 \"local\": \"PATOS PB\",\n                 \"operacao\": \"DEBITO\",\n                 \"tipoSaldo\": \"VIP\",\n                 \"tipoTransacao\": \"CONSUMO\",\n                 \"status\": \"APROVADA\",\n                 \"dataTransacao\": \"2017-09-24T15:16:20.083Z\"\n             }\n         ]\n     }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/admin.js",
    "groupTitle": "Admin",
    "name": "GetApiAdminEmpresaIdempresa"
  },
  {
    "type": "get",
    "url": "/api/admin/listarEmpresas",
    "title": "Lista empresas cadastradas",
    "permission": [
      {
        "name": "admin",
        "title": "APENAS ADMINISTRADORES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo ADMIN, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Admin",
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n    \"empresas\":[\n        {\n            \"_id\": \"599deb619af3ee16fc7159f1\",\n            \"valorAcertar\": 218.76000000000005,\n            \"faturamento\": 2187.6000000000004,\n            \"nome\": \"Imperio Açaí\",\n            \"login\": \"imperioacai\",\n            \"foto\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAggUlEQVR42uyd...\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/admin.js",
    "groupTitle": "Admin",
    "name": "GetApiAdminListarempresas"
  },
  {
    "type": "get",
    "url": "/api/admin/saldos",
    "title": "Listagem de saldos admin",
    "permission": [
      {
        "name": "admin",
        "title": "APENAS ADMINISTRADORES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo ADMIN, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Admin",
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n    \"saldoTaxaAdmin\": 250.0,\n    \"valorAReceber\": 1500.0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/admin.js",
    "groupTitle": "Admin",
    "name": "GetApiAdminSaldos"
  },
  {
    "type": "post",
    "url": "/api/admin/alterarSenhaCliente",
    "title": "Alterar senha cliente",
    "permission": [
      {
        "name": "admin",
        "title": "APENAS ADMINISTRADORES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo ADMIN, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Admin",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"cpfCnpj\": \"096.583.734-37\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n    \"novaSenha\": \"s09658373437o\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/admin.js",
    "groupTitle": "Admin",
    "name": "PostApiAdminAlterarsenhacliente"
  },
  {
    "type": "post",
    "url": "/api/admin/cadastrarRaiz",
    "title": "Cadastrar a RAIZ da rede",
    "permission": [
      {
        "name": "admin",
        "title": "APENAS ADMINISTRADORES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo ADMIN, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Admin",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{     \n    \"login\": \"asbcdef\",\n    \"nome\": \"Fulano de Tal\",\n    \"senha\": \"99999999\",\n    \"cpfCnpj\": \"999.999.999-99\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/admin.js",
    "groupTitle": "Admin",
    "name": "PostApiAdminCadastrarraiz"
  },
  {
    "type": "post",
    "url": "/api/admin/config",
    "title": "Salvar configuração",
    "permission": [
      {
        "name": "admin",
        "title": "APENAS ADMINISTRADORES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo ADMIN, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Admin",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"percentualRede\": 35,\n    \"percentualCarteiraCliente\": 30,\n    \"percentualTaxaAdminstracao\": 15,\n    \"percentualParceiro\": 5,\n    \"percentualSocio\": 15,\n    \"quantidadeFilhos\": 10,\n    \"quantidadeNiveisContemplados\": 5,\n    \"multiplicacaoSaldoDisponivel\": 200,\n    \"consumoMinimo\": 10.0,\n    \"intervaloConsumo\": 30\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/config.js",
    "groupTitle": "Admin",
    "name": "PostApiAdminConfig"
  },
  {
    "type": "post",
    "url": "/api/admin/empresa",
    "title": "Salvar empresa",
    "permission": [
      {
        "name": "admin",
        "title": "APENAS ADMINISTRADORES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo ADMIN, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Admin",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"telefone\": \"(99) 99999-9999\",\n    \"percentualVendaDisponivel\": 20,\n    \"limiteCreditacao\": 1000.00,\n    \"nome\": \"Bolos da Selma\",\n    \"login\": \"bolosselma\",\n    \"senha\": \"12345678\",\n    \"cpfCnpj\": \"01.924.372/0001-77\",\n    \"email\": \"empresa@email.com.br\"\n    \"endereco\": {\n        \"rua\": \"José Aldemir de Morais\",\n        \"numero\": \"38\",\n        \"bairro\": \"TESTE\",\n        \"cep\": \"59350-000\",\n        \"uf\": \"RN\",\n        \"cidade\": \"Santana do Seridó\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/empresa.js",
    "groupTitle": "Admin",
    "name": "PostApiAdminEmpresa"
  },
  {
    "type": "put",
    "url": "/api/admin/config",
    "title": "Editar configuração",
    "permission": [
      {
        "name": "admin",
        "title": "APENAS ADMINISTRADORES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo ADMIN, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Admin",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"percentualRede\": 35,\n    \"percentualCarteiraCliente\": 30,\n    \"percentualTaxaAdminstracao\": 15,\n    \"percentualParceiro\": 5,\n    \"percentualSocio\": 15,\n    \"quantidadeNiveisContemplados\": 5,\n    \"multiplicacaoSaldoDisponivel\": 200,\n    \"consumoMinimo\": 10.0,\n    \"intervaloConsumo\": 30\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/config.js",
    "groupTitle": "Admin",
    "name": "PutApiAdminConfig"
  },
  {
    "type": "get",
    "url": "/api/cliente/buscarCliente/:cpfCnpj",
    "title": "Buscar cliente para listar o nome",
    "permission": [
      {
        "name": "cliente",
        "title": "APENAS CLIENTES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo CLIENTE, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Cliente",
    "description": "<p>Deve ser passado na url o cpfCnpj sem pontos ou números.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cpfCnpj",
            "description": "<p>CPF/CNPJ do cliente para efetuar a busca.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n    \"cliente\": {\n        \"nome\": \"Fulado de tal\",\n        \"login\": \"nickname\",\n        \"cpfCnpj\": \"999.999.999-99\",\n        \"foto\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAggUlEQVR42uyd...\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/cliente.js",
    "groupTitle": "Cliente",
    "name": "GetApiClienteBuscarclienteCpfcnpj"
  },
  {
    "type": "get",
    "url": "/api/cliente/convidado",
    "title": "Lista de convidados",
    "permission": [
      {
        "name": "cliente",
        "title": "APENAS CLIENTES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo CLIENTE, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Cliente",
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n    \"convidados\": [\n        {\n            \"login\": \"ryanaraujo\",\n            \"nome\": \"Ryan Rodrigo Matheus Araújo\",\n            \"dataCadastro\": \"2017-07-28T17:50:13.178Z\"\n        },\n        {\n            \"login\": \"sandersonsoares\",\n            \"nome\": \"Sanderson Soares Marinho da Costa\",\n            \"dataCadastro\": \"2017-08-11T18:36:01.601Z\"\n        },\n        {\n            \"login\": \"enzoribeiro\",\n            \"nome\": \"Enzo Thales Matheus Ribeiro\",\n            \"dataCadastro\": \"2017-08-12T12:44:15.756Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/cliente.js",
    "groupTitle": "Cliente",
    "name": "GetApiClienteConvidado"
  },
  {
    "type": "get",
    "url": "/api/cliente/info/consumo",
    "title": "Informações de consumo do cliente",
    "permission": [
      {
        "name": "cliente",
        "title": "APENAS CLIENTES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo CLIENTE, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Cliente",
    "description": "<p>Nessa listagem de informação será retornado a data do último consumo, do tempo restante que ele tem para consumo e prazo total do sistema disponível para consumo.</p>",
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n    \"dataUltimoConsumo\": \"2017-10-23T16:31:20.057Z\",\n    \"diasRestantes\": 30,\n    \"prazo\": 30\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/cliente.js",
    "groupTitle": "Cliente",
    "name": "GetApiClienteInfoConsumo"
  },
  {
    "type": "get",
    "url": "/api/cliente/rede/:loginfilho",
    "title": "Listar rede cliente",
    "permission": [
      {
        "name": "cliente",
        "title": "APENAS CLIENTES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo CLIENTE, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Cliente",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginfilho",
            "description": "<p>Login do filho que você quer listar a rede, no caso que querer listar a rede da raiz, deve ser passado em branco e sem o '/'.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": " HTTP/1.1 200 OK\n\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n    \"nivel\": 0,\n    \"rede\": [\n        {\n            \"perfil\": {\n                \"login\": \"marcelo\",\n                \"nome\": \"marcelo\",\n                \"foto\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA\"\n            },\n            \"filhos\": [\n                {\n                    \"perfil\": {\n                        \"login\": \"marcelo2\",\n                        \"nome\": \"marcelo2\"\n                    },\n                    \"pai\": {\n                        \"login\": \"marcelo\",\n                        \"nome\": \"marcelo\",\n                        \"foto\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAggUlEQVR42uyd+28UVRTHx/iO/qLGxMQf\"\n                    },\n                    \"nivel\": 2\n                },\n                {\n                    \"perfil\": {\n                        \"login\": \"marcelo3\",\n                        \"nome\": \"marcelo3\"\n                    },\n                    \"pai\": {\n                        \"login\": \"marcelo\",\n                        \"nome\": \"marcelo\",\n                        \"foto\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAggUlEQVR42uyd+28UVRTHx/iO/qLGxMQf\"\n                    },\n                    \"nivel\": 2\n                }\n            ],\n            \"pai\": {\n                \"login\": \"i9comprando\",\n                \"foto\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAggUlEQVR42uyd+28UVRTHx/iO/qLGxMQf+InEv8BX/MmZFunMFujcAVooLa8iYAMVKG\"\n            },\n            \"nivel\": 1\n        },\n        {\n            \"perfil\": {\n                \"login\": \"marcelo1\",\n                \"nome\": \"marcelo1\",\n                \"foto\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAggUlEQVR42uyd+28UVRTHx/iO/qLGxMQf+InEv8BX/MmZFunMFujcAVooLa8iYAMVKG\"\n            },\n            \"filhos\": [\n                {\n                    \"perfil\": {\n                        \"login\": \"marcelo4\",\n                        \"nome\": \"marcelo4\"\n                    },\n                    \"pai\": {\n                        \"login\": \"marcelo1\",\n                        \"nome\": \"marcelo1\",\n                        \"foto\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAggUlEQVR42uyd+28UVRTHx/iO/qLGxMQf\"\n                    },\n                    \"nivel\": 2\n                },\n                {\n                    \"perfil\": {\n                        \"login\": \"marcelo5\",\n                        \"nome\": \"marcelo5\"\n                    },\n                    \"pai\": {\n                        \"login\": \"marcelo1\",\n                        \"nome\": \"marcelo1\",\n                        \"foto\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAggUlEQVR42uyd+28UVRTHx/iO/qLGxMQf\"\n                    },\n                    \"nivel\": 2\n                }\n            ],\n            \"pai\": {\n                \"login\": \"i9comprando\",\n                \"foto\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAggUlEQVR42uyd+28UVRTHx/iO/qLGxMQf+InEv8BX/MmZFunMFujcAVooLa8iYAMVKG\"\n            },\n            \"nivel\": 1\n        }\n    ],\n    \"perfil\": {\n       \"login\": \"i9comprando\",\n       \"foto\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAggUlEQVR42uyd+28UVRTHx/iO/qLGxMQf+InEv8BX/MmZFunMFujcAVooLa8iYAMVKG\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/cliente.js",
    "groupTitle": "Cliente",
    "name": "GetApiClienteRedeLoginfilho"
  },
  {
    "type": "get",
    "url": "/api/cliente/saldo",
    "title": "Saldos",
    "permission": [
      {
        "name": "cliente",
        "title": "APENAS CLIENTES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo CLIENTE, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Cliente",
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n    \"saldoVip\": 0,\n    \"saldoRede\": 0,\n    \"saldoDisponivel\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/cliente.js",
    "groupTitle": "Cliente",
    "name": "GetApiClienteSaldo"
  },
  {
    "type": "post",
    "url": "/api/cliente",
    "title": "Cadastro de cliente",
    "permission": [
      {
        "name": "none",
        "title": "Livre de token",
        "description": "<p>Utiliza apenas o token padrão para acessar a API.</p>"
      }
    ],
    "group": "Cliente",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"pai\": \"asbcdef\",\n    \"login\": \"asbcdef\",\n    \"nome\": \"Fulano de Tal\",\n    \"senha\": \"99999999\",\n    \"cpfCnpj\": \"999.999.999-99\",\n    \"email\": \"seuemail@gmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/cliente.js",
    "groupTitle": "Cliente",
    "name": "PostApiCliente"
  },
  {
    "type": "post",
    "url": "/api/cliente/alterarPagamento",
    "title": "Cancelar/Aprovar pagamento",
    "permission": [
      {
        "name": "cliente",
        "title": "APENAS CLIENTES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo CLIENTE, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Cliente",
    "description": "<p>Com o ID do pagamento selecionado, o usuário poderar aprovar ou cancelar, passando no atributo <code>acao</code> o valor de <code>APROVAR</code> ou <code>CANCELAR</code> o pagamento.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"pagamento\": \"59e022264adb8c0c0a675cd7\",\n    \"acao\": \"APROVAR\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/cliente.js",
    "groupTitle": "Cliente",
    "name": "PostApiClienteAlterarpagamento"
  },
  {
    "type": "post",
    "url": "/api/cliente/transferirSaldo",
    "title": "Transferência entre contas cliente",
    "permission": [
      {
        "name": "cliente",
        "title": "APENAS CLIENTES",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo CLIENTE, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Cliente",
    "description": "<p>Os tipos de saldo podem ser &quot;REDE&quot; ou &quot;VIP&quot;.</p> <p>É necessário que o cliente tenha saldo disponível no caso da transferência do saldo de rede.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"tipoSaldo\": \"REDE\",\n    \"cpfCnpj\": \"999.999.999-99\",\n    \"valor\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/cliente.js",
    "groupTitle": "Cliente",
    "name": "PostApiClienteTransferirsaldo"
  },
  {
    "type": "get",
    "url": "/api/commmon/notificacao",
    "title": "Listar todas as notificações",
    "permission": [
      {
        "name": "token",
        "title": "Qualquer usuário logado",
        "description": "<p>Qualquer perfil com um token de login válido pode ter acesso ao serviço descrito.</p>"
      }
    ],
    "group": "Common",
    "description": "<p>O serviço pode ser utilizado por qualquer um dos usuário, seja ADMIN, CLIENTE, ou EMPRESA. Basta que ele tenha um token válido.</p>",
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n        \"notificacoes\":[\n            {\n                \"_id\": \"59a17be31c8a5d23f8f9c139\",\n                \"mensagem\": \"Você recebeu 10,00 R$ por consumir em Imperio Açaí em 26/7/2017 10:47:15.\",\n                \"tipoNotificacao\": \"PADRAO\"\n            },\n            {\n                \"_id\": \"59a17ca62cddf60a2c3061db\",\n                \"mensagem\": \"Você recebeu 10,00 R$ por consumir em Imperio Açaí em 26/07/2017 10:50:30.\",\n                \"tipoNotificacao\": \"PADRAO\"\n            },\n            {\n                \"_id\": \"59a17cc92f664a27a0ebdd33\",\n                \"mensagem\": \"Você recebeu 10,00 R$ por consumir em Imperio Açaí em 26/07/2017 10:51.\",\n                \"tipoNotificacao\": \"PADRAO\"\n            },\n            {\n                \"_id\": \"59a17d3d6eaf7e22904effb3\",\n                \"mensagem\": \"Você recebeu 10,00 R$ por consumir em Imperio Açaí em 26/07/2017 as 10:53.\",\n                \"tipoNotificacao\": \"PADRAO\"\n            }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/notificacao.js",
    "groupTitle": "Common",
    "name": "GetApiCommmonNotificacao"
  },
  {
    "type": "get",
    "url": "/api/common/extrato",
    "title": "Lista de extratos",
    "permission": [
      {
        "name": "token",
        "title": "Qualquer usuário logado",
        "description": "<p>Qualquer perfil com um token de login válido pode ter acesso ao serviço descrito.</p>"
      }
    ],
    "group": "Common",
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\":\"000\",\n    \"mensagem\":\"Sucesso\",\n    \"dataInicial\": \"21/07/2017\",\n    \"dataFinal\": \"20/08/2017\",\n    \"transacaos\":[  \n        {  \n            \"de\":{  \n                \"nome\":\"Imperio Açaí\",\n                \"login\":\"imperioacai\"\n            },\n            \"para\":{  \n                \"login\":\"i9comprando\",\n                \"nome\":\"I9 Comprando Empresa\"\n            },\n            \"valor\":3,\n            \"local\":\"PATOS PB\",\n            \"operacao\":\"CREDITO\",\n            \"tipoSaldo\":\"VIP\",\n            \"tipoTransacao\":\"CONSUMO\",\n            \"__v\":0,\n            \"status\":\"APROVADA\",\n            \"dataTransacao\":\"2017-08-24T01:31:44.726Z\"\n        },\n        {  \n            \"de\":{  \n                \"login\":\"danielribeiro\",\n                \"nome\":\"Daniel Luan Ricardo Ribeiro\"\n            },\n            \"para\":{  \n                \"login\":\"i9comprando\",\n                \"nome\":\"I9 Comprando Empresa\"\n            },\n            \"valor\":0.23333333333333334,\n            \"local\":\"PATOS PB\",\n            \"operacao\":\"CREDITO\",\n            \"tipoSaldo\":\"REDE\",\n            \"tipoTransacao\":\"DERRAMAMENTO REDE\",\n            \"status\":\"APROVADA\",\n            \"dataTransacao\":\"2017-08-24T01:35:01.480Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/common.js",
    "groupTitle": "Common",
    "name": "GetApiCommonExtrato"
  },
  {
    "type": "get",
    "url": "/api/common/listarPagamentos",
    "title": "Listar pagamentos",
    "permission": [
      {
        "name": "common"
      }
    ],
    "group": "Common",
    "description": "<p>Lista de pagamentos com os seus IDs, assim, o cliente poderá selecionar o ID correspondente ao qual ele quer cancelar ou aceitar o pagamento.</p>",
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n    \"pagamentos\": [\n        {\n            \"_id\": \"59e0188114804f01c0fcf9bb\",\n            \"de\":{\n                \"nome\": \"Marcelo Santos de Azevedo\"\n            },\n            \"para\":{\n                \"nome\": \"Império Açaí\"\n            },\n            \"descricao\": \"uma breve descricao\",\n            \"valor\": 10,\n            \"dataFinalizacao\": \"2017-10-13T01:47:30.443Z\",\n            \"status\": \"APROVADO\",\n            \"dataCriacao\": \"2017-10-13T01:36:01.888Z\"\n        },\n        {\n            \"_id\": \"59e01bdf1fd0d2045be3cf6c\",\n            \"de\":{\n                \"nome\": \"Marcelo Santos de Azevedo\"\n            },\n            \"para\":{\n                \"nome\": \"Império Açaí\"\n            },\n            \"descricao\": \"uma breve descricao\",\n            \"valor\": 10,\n            \"dataFinalizacao\": \"2017-10-13T01:51:01.799Z\",\n            \"status\": \"APROVADO\",\n            \"dataCriacao\": \"2017-10-13T01:50:23.628Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/common.js",
    "groupTitle": "Common",
    "name": "GetApiCommonListarpagamentos"
  },
  {
    "type": "get",
    "url": "/api/common/notificacaoNaoVsualizada",
    "title": "Listar notificações não visualizadas",
    "permission": [
      {
        "name": "token",
        "title": "Qualquer usuário logado",
        "description": "<p>Qualquer perfil com um token de login válido pode ter acesso ao serviço descrito.</p>"
      }
    ],
    "group": "Common",
    "description": "<p>O serviço pode ser utilizado por qualquer um dos usuário, seja ADMIN, CLIENTE, ou EMPRESA. Basta que ele tenha um token válido.</p>",
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n        \"notificacoes\":[\n            {\n                \"_id\": \"59a17be31c8a5d23f8f9c139\",\n                \"mensagem\": \"Você recebeu 10,00 R$ por consumir em Imperio Açaí em 26/7/2017 10:47:15.\",\n                \"tipoNotificacao\": \"PADRAO\"\n            },\n            {\n                \"_id\": \"59a17ca62cddf60a2c3061db\",\n                \"mensagem\": \"Você recebeu 10,00 R$ por consumir em Imperio Açaí em 26/07/2017 10:50:30.\",\n                \"tipoNotificacao\": \"PADRAO\"\n            }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/notificacao.js",
    "groupTitle": "Common",
    "name": "GetApiCommonNotificacaonaovsualizada"
  },
  {
    "type": "get",
    "url": "/api/common/perfil",
    "title": "Lista informações do perfil",
    "permission": [
      {
        "name": "token",
        "title": "Qualquer usuário logado",
        "description": "<p>Qualquer perfil com um token de login válido pode ter acesso ao serviço descrito.</p>"
      }
    ],
    "group": "Common",
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n    \"perfil\": {\n        \"endereco\": {\n            \"rua\": \"Rua dos bobos\",\n            \"numero\": \"99X\",\n            \"bairro\": \"Centro\",\n            \"cep\": \"99999-999\",\n            \"uf\": \"RN\",\n            \"cidade\": \"Santana do Seridó\",\n            \"complemento\": \"...\",\n            \"logradouro\": \"...\"\n        },\n        \"login\": \"nickname\",\n        \"nome\": \"Nome Completo\",\n        \"cpfCnpj\": \"999.999.999-99\",\n        \"telefone\": \"(99) 99999-9999\",\n        \"email\": \"fulanodetal@email.com\",\n        \"dataCadastro\": \"2017-08-24T01:34:46.607Z\",\n        \"foto\": \"data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTA...\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/common.js",
    "groupTitle": "Common",
    "name": "GetApiCommonPerfil"
  },
  {
    "type": "post",
    "url": "/api/common/alterarSenha",
    "title": "Atualizar senha perfil",
    "permission": [
      {
        "name": "common"
      }
    ],
    "group": "Common",
    "description": "<p>A nova senha deve conter pelo menos um número e uma letra e ter no mínimo 8 caracteres.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n     \"senha\": \"123123123\",\n     \"novaSenha\": \"testando123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n     \"codigo\": \"000\",\n     \"mensagem\": \"Sucesso\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/common.js",
    "groupTitle": "Common",
    "name": "PostApiCommonAlterarsenha"
  },
  {
    "type": "post",
    "url": "/api/common/extrato",
    "title": "Lista de extratos por intervalo de datas",
    "permission": [
      {
        "name": "token",
        "title": "Qualquer usuário logado",
        "description": "<p>Qualquer perfil com um token de login válido pode ter acesso ao serviço descrito.</p>"
      }
    ],
    "group": "Common",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"dataInicial\": \"16/09/2017\",\n    \"dataFinal\": \"17/09/2017\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{  \n    \"codigo\":\"000\",\n    \"mensagem\":\"Sucesso\",\n    \"dataInicial\": \"21/07/2017\",\n    \"dataFinal\": \"20/08/2017\",\n    \"transacaos\":[  \n        {  \n            \"de\":{  \n                \"nome\":\"Imperio Açaí\",\n                \"login\":\"imperioacai\"\n            },\n            \"para\":{  \n                \"login\":\"i9comprando\",\n                \"nome\":\"I9 Comprando Empresa\"\n            },\n            \"valor\":3,\n            \"valorNominal\": 30,\n            \"local\":\"PATOS PB\",\n            \"operacao\":\"CREDITO\",\n            \"tipoSaldo\":\"VIP\",\n            \"tipoTransacao\":\"CONSUMO\",\n            \"status\":\"APROVADA\",\n            \"dataTransacao\":\"2017-08-24T01:31:44.726Z\"\n        },\n        {  \n            \"de\":{  \n                \"login\":\"danielribeiro\",\n                \"nome\":\"Daniel Luan Ricardo Ribeiro\"\n            },\n            \"para\":{  \n                \"login\":\"i9comprando\",\n                \"nome\":\"I9 Comprando Empresa\"\n            },\n            \"valor\":0.23333333333333334,\n            \"valorNominal\": 30,\n            \"local\":\"PATOS PB\",\n            \"operacao\":\"CREDITO\",\n            \"tipoSaldo\":\"REDE\",\n            \"tipoTransacao\":\"DERRAMAMENTO REDE\",\n            \"status\":\"APROVADA\",\n            \"dataTransacao\":\"2017-08-24T01:35:01.480Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/common.js",
    "groupTitle": "Common",
    "name": "PostApiCommonExtrato"
  },
  {
    "type": "post",
    "url": "/api/common/fotoPerfil",
    "title": "Enviar imagem para o perfil do cliente",
    "permission": [
      {
        "name": "common"
      }
    ],
    "group": "Common",
    "description": "<p>Deve ser pego o valor do base 64 da requisição do angular e insere nesse JSON para envialo, geralmente esse valor está no atributo result da requisição que está sendo enviada.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"foto\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2...\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n    \"foto\": \"data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTA...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/common.js",
    "groupTitle": "Common",
    "name": "PostApiCommonFotoperfil"
  },
  {
    "type": "put",
    "url": "/api/common/editarPerfil",
    "title": "Editar perfil do usuário",
    "permission": [
      {
        "name": "common"
      }
    ],
    "group": "Common",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"nome\": \"Fulano de Tal\",\n    \"senha\": \"12345678\",\n    \"email\": \"fulanodetal@gmail.com\",\n    \"telefone\": \"(99) 99999-9999\",\n    \"endereco\": {\n        \"rua\": \"Rua dos bobos\",\n        \"numero\": \"99X\",\n        \"bairro\": \"Centro\",\n        \"cep\": \"99999-999\",\n        \"uf\": \"RN\",\n        \"cidade\": \"Santana do Seridó\",\n        \"complemento\": \"...\",\n        \"logradouro\": \"...\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/common.js",
    "groupTitle": "Common",
    "name": "PutApiCommonEditarperfil"
  },
  {
    "type": "put",
    "url": "/api/common/notificacao/:id",
    "title": "Marcar notificação como visualizada",
    "permission": [
      {
        "name": "token",
        "title": "Qualquer usuário logado",
        "description": "<p>Qualquer perfil com um token de login válido pode ter acesso ao serviço descrito.</p>"
      }
    ],
    "group": "Common",
    "description": "<p>O serviço pode ser utilizado por qualquer um dos usuário, seja ADMIN, CLIENTE, ou EMPRESA. Basta que ele tenha um token válido.</p>",
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/notificacao.js",
    "groupTitle": "Common",
    "name": "PutApiCommonNotificacaoId"
  },
  {
    "type": "get",
    "url": "/api/empresa/buscarCliente/:cpfCnpj",
    "title": "Buscar cliente para listar o nome",
    "permission": [
      {
        "name": "empresa",
        "title": "APENAS EMPRESAS",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo EMPRESA, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Empresa",
    "description": "<p>Deve ser passado na url o cpfCnpj sem pontos ou números.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cpfCnpj",
            "description": "<p>CPF/CNPJ do cliente para efetuar a busca.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n    \"cliente\": {\n        \"nome\": \"Fulado de tal\",\n        \"login\": \"nickname\",\n        \"cpfCnpj\": \"999.999.999-99\"\n        \"foto\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAggUlEQVR42uyd...\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/cliente.js",
    "groupTitle": "Empresa",
    "name": "GetApiEmpresaBuscarclienteCpfcnpj"
  },
  {
    "type": "get",
    "url": "/api/empresa/listarSaldos",
    "title": "Listar saldos empresa",
    "permission": [
      {
        "name": "empresa",
        "title": "APENAS EMPRESAS",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo EMPRESA, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Empresa",
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n    \"saldo\": 2187.6000000000004,\n    \"debito\": 218.76000000000005\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/empresa.js",
    "groupTitle": "Empresa",
    "name": "GetApiEmpresaListarsaldos"
  },
  {
    "type": "post",
    "url": "/api/empresa/creditar",
    "title": "Creditar cliente",
    "permission": [
      {
        "name": "empresa",
        "title": "APENAS EMPRESAS",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo EMPRESA, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Empresa",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"valor\": 99.9,\n    \"cpfCliente\": \"999.999.999-99\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/empresa.js",
    "groupTitle": "Empresa",
    "name": "PostApiEmpresaCreditar"
  },
  {
    "type": "post",
    "url": "/api/empresa/pagarComSaldo",
    "title": "Pagar compra com saldo disponível",
    "permission": [
      {
        "name": "empresa",
        "title": "APENAS EMPRESAS",
        "description": "<p>O Perfil que tem acesso a esse serviço deve ser to tipo EMPRESA, desta forma, o <code>token</code> de login deverá ser enviado na requisição.</p>"
      }
    ],
    "group": "Empresa",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"cpfCnpj\": \"888888888\",\n    \"descricao\": \"Uma breve descrição sobre essa compra\",\n    \"valor\": 10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/empresa.js",
    "groupTitle": "Empresa",
    "name": "PostApiEmpresaPagarcomsaldo"
  },
  {
    "type": "options",
    "url": "/informacoes",
    "title": "Informações do sistema",
    "group": "INFOS",
    "description": "<p>Códigos de resposta retornados pela api</p> <table>             <tr><th>Código</th>  <th>Mensagem</th></tr>             <tr><td>000</td>   <td>Sucesso</td></tr>             <tr><td>001</td>   <td>Cadastrado com sucesso</td></tr>             <tr><td>002</td>   <td>Senha inválida</td></tr>             <tr><td>003</td>   <td>Erro interno de processamento</td></tr>             <tr><td>004</td>   <td>CPF inválido</td></tr>             <tr><td>005</td>   <td>CNPJ inválido</td></tr>             <tr><td>006</td>   <td>Já existe uma configuração cadastrada, e não é possível cadastrar duas configuração e nem mudar a atual</td></tr>             <tr><td>007</td>   <td>Insira o login do seu patrocinador para cadastro</td></tr>             <tr><td>008</td>   <td>Não foi possível encontrar patrocinador com o nickname fornecido</td></tr>             <tr><td>009</td>   <td>Não foi possível encontrar um perfil com o cpf/cnpj fornecido</td></tr>             <tr><td>010</td>   <td>Perfil não encontrado</td></tr>             <tr><td>011</td>   <td>Não foi possível encontrar um perfil de empresa com o login fornecido</td></tr>             <tr><td>012</td>   <td>Insira um login válido</td></tr>             <tr><td>013</td>   <td>Insira um nome válido</td></tr>             <tr><td>014</td>   <td>Insira uma senha válida</td></tr>             <tr><td>015</td>   <td>Insira um CPF/CNPJ válido</td></tr>             <tr><td>016</td>   <td>O login fornecido está em uso</td></tr>             <tr><td>017</td>   <td>O CPF/CNPJ está em uso</td></tr>             <tr><td>018</td>   <td>Não existe configuração cadastrada, entre em contato com o administrador</td></tr>             <tr><td>019</td>   <td>Token expirado</td></tr>             <tr><td>020</td>   <td>Um código de recuperação foi enviado para o seu e-mail</td></tr>             <tr><td>021</td>   <td>É necessário haver um e-mail cadastrado no seu perfil, caso não tenha, entre em contato com alguma rede credenciada</td></tr>             <tr><td>022</td>   <td>Código de recuperação de senha expirado</td></tr>             <tr><td>023</td>   <td>Código de recuperação de senha incorreto</td></tr>             <tr><td>024</td>   <td>Verifique se há algum campo em branco</td></tr>             <tr><td>025</td>   <td>Não existe configuração para edição</td></tr>             <tr><td>026</td>   <td>Insira um tipo de saldo válido</td></tr>             <tr><td>027</td>   <td>Perfil sem autorização para este serviço</td></tr>             <tr><td>028</td>   <td>Token inválido</td></tr>             <tr><td>029</td>   <td>Intervalo de datas inválido</td></tr>             <tr><td>030</td>   <td>Nenhuma empresa cadastrada</td></tr>             <tr><td>031</td>   <td>Empresa não encontrada</td></tr>             <tr><td>032</td>   <td>Raiz da rede já cadastrada</td></tr>             <tr><td>033</td>   <td>É necessário que o ADMIN cadastre a RAIZ da rede para inicializar o sistema</td></tr>             <tr><td>034</td>   <td>Não atingiu o valor mínimo de consumo</td></tr>             <tr><td>035</td>   <td>Valor inválido para transferência</td></tr>             <tr><td>036</td>   <td>Ação inválida para pagamento</td></tr>             <tr><td>037</td>   <td>Pagamento não encontrado</td></tr>             <tr><td>038</td>   <td>Não há saldo suficiente para transferência</td></tr>             <tr><td>039</td>   <td>Perfil incompatível com ação</td></tr>             <tr><td>040</td>   <td>Insira um e-mail válido</td></tr>             <tr><td>041</td>   <td>Data limite para pagamento atingido, pagamento cancelado</td></tr>             <tr><td>042</td>   <td>Pagamento já processado</td></tr>             <tr><td>043</td>   <td>O login deve ser iniciado com letras, conter pelo menos 4 caracteres, no máximo 15 e conter apenas letras minúsculas</td></tr>             <tr><td>044</td>   <td>Data inválida</td></tr>             <tr><td>045</td>   <td>Recaptcha inválido</td></tr>             <tr><td>046</td>   <td>Valor limite para creditação atingido, consulte o administrador para mais solicitar limite</td></tr>             <tr><td>047</td>   <td>O login deve conter apenas letras minúsculas</td></tr>             <tr><td>048</td>   <td>O seu patrocinador ainda não ativou o cadastro</td></tr>             <tr><td>049</td>   <td>Você não tem permissão para ver a rede de fulano</td></tr>             <tr><td>050</td>   <td>Nova senha inválida</td></tr>             <tr><td>051</td>   <td>A senha deve conter pelo menos um número, uma letra e pelo menos 8 caracteres</td></tr>        </table>        <div>         <p>Todo método do tipo public deve utilizar o token padrão: <code>he397yg78po0123</code></p>        </div>",
    "version": "0.0.0",
    "filename": "app/api/public.js",
    "groupTitle": "INFOS",
    "name": "OptionsInformacoes"
  },
  {
    "type": "post",
    "url": "/api/alterarSenha",
    "title": "Alterar Senha",
    "permission": [
      {
        "name": "none",
        "title": "Livre de token",
        "description": "<p>Utiliza apenas o token padrão para acessar a API.</p>"
      }
    ],
    "group": "Public",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"cpfCnpj\": \"999.999.999-99\",\n    \"novaSenha\": \"99999999\",\n    \"codigo\": \"CODIGOEMAIL\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/public.js",
    "groupTitle": "Public",
    "name": "PostApiAlterarsenha"
  },
  {
    "type": "post",
    "url": "/api/autenticar",
    "title": "Autenticar",
    "permission": [
      {
        "name": "none",
        "title": "Livre de token",
        "description": "<p>Utiliza apenas o token padrão para acessar a API.</p>"
      }
    ],
    "group": "Public",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"login\": \"admin\",\n    \"senha\": \"12345678\"\n    \"recaptcha\": \"asjdajsçdjaçsjdçajsd\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\",\n    \"nome\": \"ADMINISTRADOR\",\n    \"tipoUsuario\": \"ADMIN\",\n    \"token\": \"aloidsahdhsaodhashsdahsd\",\n    \"foto\": \"data:image/jpg, asjdnsandnasdsadajdajdadsãdsajdnasjaasd\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/auth.js",
    "groupTitle": "Public",
    "name": "PostApiAutenticar"
  },
  {
    "type": "post",
    "url": "/api/buscarCliente",
    "title": "Buscar cliente",
    "permission": [
      {
        "name": "none",
        "title": "Livre de token",
        "description": "<p>Utiliza apenas o token padrão para acessar a API.</p>"
      }
    ],
    "group": "Public",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"login\": \"fulanodetal\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n     \"codigo\": \"000\",\n     \"mensagem\": \"Sucesso\",\n     \"nome\": \"Marcelo Santos de Azevedo\",\n     \"foto\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAggUlEQVR42uyd+...\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/public.js",
    "groupTitle": "Public",
    "name": "PostApiBuscarcliente"
  },
  {
    "type": "post",
    "url": "/api/esqueciSenha",
    "title": "Esqueci Senha",
    "permission": [
      {
        "name": "none",
        "title": "Livre de token",
        "description": "<p>Utiliza apenas o token padrão para acessar a API.</p>"
      }
    ],
    "group": "Public",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo de requisição:",
          "content": "HTTP/1.1 200 OK\n{\n    \"cpfCnpj\": \"999.999.999-99\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo de resposta com sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": \"000\",\n    \"mensagem\": \"Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/public.js",
    "groupTitle": "Public",
    "name": "PostApiEsquecisenha"
  }
] });
