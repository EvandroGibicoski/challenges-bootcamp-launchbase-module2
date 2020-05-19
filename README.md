<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
     :rocket: challenge from bootcamp launchbase
</h3>

<h3 align="center">
     Desafio 4-5
</h3>
 1 - Trabalahndo com o method-override dentro do projeto e subscrevendo o method post com o put:

  *Instalando a **lib** method-override no projeto:* ``npm install method-override``<br />
  *Importando a **lib** para o arquivo server:* ``const methodOverride = require('method-override')``<br />
  *Configurando a **lib** no server:* ``server.use(methodOverride('_method')) `` **OBS: deixar essa linha antes da linha da configuração das rotas**``server.use(routes)``.<br />

  2 - Subscrevendo o verbo ``PUT`` usando a **lib** method-override dentro do html:

  *Dentro da **tag**``form`` subscreve a rota* ``action="/teachers?_method=PUT"``, **OBS: ``?_method=PUT`` é uma "query string"**.<br />

  3 - Subscrevendo o verbo ``DELETE`` usando a **lib** method-override dentro do html:

*Dentro da **tag**``form`` subscreve a rota* ``action="/teachers?_method=DELETE"``, **OBS: ``?_method=DELETE`` é uma "query string"**.<br />

