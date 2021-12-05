# Agência de Publicidade API - Clientes
Porjeto desenvolvido no final do módulo 4 da Resilia. O obejtivo era criar uma API REST com a função de cadastrar os clientes de uma Agência de Publicidade. Foi utilizado o padrão CRUD organizado nos conceitos de MVC.


---

## Link da API no Heroku
  
  https://advertising-agency-clients.herokuapp.com/clients
  
  
### Bibliotecas Externas
  * [Nodemon](https://nodemon.io/) - recarrega automaticamente o servidor durante o desenvolvimento do projeto.
  
### Banco de dados
 
 A estrutura de banco utilizada no projeto foi o [SQLite3] [Sqlite3](https://www.npmjs.com/package/sqlite3).
 
 ---
 
 ## Iniciando o projeto

* Clone o repositório em sua máquina

    `https://github.com/Gabboss13/Advertising-Agency-Api.git`

* Abra o terminal(Linux/Mac) ou o Powershell na pasta do projeto e instale os pacotes necessários para executar a API

   `npm install`

* Para iniciar os projetos use o comando abaixo

    `npm run dev`

   
   A porta padrão é a **3000**. Caso queira alterá-la, apenas altere na linha **2** `const PORT = process.env.PORT || 3000` no arquivo /server.js o número para a porta de escolha.
    
    
 **IMPORTANTE: A versão utilizada do NodeJs é LTS 16.13.0. Certifique-se de que esteja usando a mesma versão ou mais recente para obter o melhor desempenho da API.**
 
 ---
 
 ### Rotas da API
 
 A API do tipo Restful contem os seguintes verbos HTTP: 
 
 * __GET__ - *URL_BASE/clients*
 * __GET__ - *URL_BASE/clients/{id}*
 * __POST__ - *URL_BASE/clients*
 * __PATCH__ - *URL_BASE/clients/{id}*
 * __DELETE__ - *URL_BASE/clients/{id}*

As rotas podem ser encontradas no arquivo <a href=https://github.com/Gabboss13/Advertising-Agency-Api/blob/main/src/controllers/clientscontroller.js> *controller* </a>

#### Exemplo de retorno da API

Usando o método GET e escolhendo o ID. 1, o resultado esperado é

```
{
  "clients": [
    {
      "id": 1,
      "name": "Bob Dylan",
      "email": "bobdylan@gmail.com",
      "document": "15346576478",
      "phone": "(21)98859-8598",
      "address": "Rua Nobel Prize Winner, 76. New York",
      "campaign": "Nobel Prize",
      "observations": "none"
    }
  ],
  "status": "ID's 1 client/ Client avec l'Id 1"
}

```

**IMPORTANTE**:

* Os atributos *name* precisa ter, no mínimo, 3 letras.

* Os atributos *email* precisa é validado pelo método Regex

* O atributo *document* precisa ter 11 caracteres.
