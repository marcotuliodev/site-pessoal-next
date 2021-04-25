# Projeto Podcastr - Next Level Week 5 - Rocketseat

Este é um projeto para ouvir Podcasts online desenvolvido com React e Next.js na 5ª Next Level Week da Rocketseat.

## About 

Next.js é um framework que facilita a criação de aplicativos React 'universais' - aplicativos React que fazem renderização do lado do cliente e do servidor.

Com Next.js, as páginas do React são renderizadas automaticamente tanto no lado do cliente quanto no servidor, sem o incômodo de configurar dependências como webpack ou babel e com roteamento automático e sem as restrições de projetos como Create React App.

Este projeto faz parte de uma semana de aprendizados desenvolvido pela rocketseat e minha primeira experiência com o Next.js, mesmo já desenvolvimento com React há algum tempo. 

Você está convidado a usá-lo como referência ou a copiá-lo e usá-lo como base para seus próprios projetos. 

Contribuições para melhorar este projeto são bem-vindas.

## Configuração do Ambiente

- Node + NPM;
# Node e NPM

O primeiro passo é instalar o Node.js, que vem acompanhado do NPM.

## Linux (Ubuntu/Debian)

Para o Linux iremos utilizar o **[NodeSource](https://github.com/nodesource/distributions/blob/master/README.md)**, basta seguir esses passos:

- Verifique se você possui o **[curl](https://curl.haxx.se/)** instalado rodando no terminal o comando:

```bash
curl --version
```

Caso ele retorne a versão, pode pular para o próximo passo. Caso não, basta rodar o comando:

```bash
sudo apt install curl
```

- Com o **curl** instalado, execute o comando de instalação da versão LTS mais recente disponível:
    - Ubuntu

    ```bash
    curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

    - Debian (como root)

    ```json
    curl -sL https://deb.nodesource.com/setup_lts.x | bash -
    apt-get install -y nodejs
    ```

    Feche o terminal e abra novamente para as alterações fazerem efeito.

- Por fim, execute os seguintes comandos no terminal:

```bash
node -v
npm -v
```

Caso retorne as versões do Node e npm, sua instalação foi um sucesso.

## macOS

Para o macOS iremos utilizar o gerenciador de pacotes [**Homebrew**](https://brew.sh/index_pt-br), que é instalado usando Ruby, que já vem instalado por padrão, execute o seguinte comando no terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Para verificar se ele foi instalado com sucesso execute:

```bash
brew --version
```

Com o **Homebrew** instalado, basta executar o comando para instalar a versão 14.x (LTS) mais recente:

```bash
brew install node@14
```

Como instalamos uma versão do Node diferente da default do Homebrew (o padrão é a current, nesse caso v15), é preciso adicionar manualmente o `path` do Node na nossa variável ambiente. Adicione a seguinte linha ao final do arquivo `~/.bashrc` (ou do arquivo `~/.zshrc` caso você utilize o shell ZSH):

```bash
export PATH="/usr/local/opt/node@14/bin:$PATH"
```

Por fim, reinicie o terminal e execute os seguintes comandos:

```bash
node -v
npm -v
```

Caso retorne as versões do Node e Npm, sua instalação foi um sucesso.

## Windows

Para o Windows utilizaremos o gerenciador de pacotes **[Chocolatey](https://chocolatey.org/)**, porém antes dos passos de instalação vamos falar brevemente sobre qual shell você deve usar.

- **CMD**: também conhecido como **Command Prompt**, ele é um dos shells mais antigos da atualidade (foi construído para ser compatível com o **MS-DOS**) e, apesar da sua fama, hoje em dia tem sido cada vez menos utilizado.
- **Powershell**: novo shell apresentado pela Microsoft por volta de 2005, ele apresenta diversas melhorias em relação ao **CMD**, tornando-o popular atualmente.

Escolhido o shell, vamos começar a instalação:

- Busque no campo de busca do Windows por **Windows Powershell**, clique com o botão direito em cima do programa e escolha a opção **Executar como administrador**.
- O Powershell trabalha com um esquema de autorizações (conhecido como `Execution Policy`) para execução de scripts e, por isso, precisamos verificar se o presente no sistema está compatível com o que o Chocolatey precisa. Execute o seguinte comando:

```bash
Get-ExecutionPolicy
```

Caso ele retorne `Restricted`, execute o comando:

```bash
Set-ExecutionPolicy RemoteSigned
```

E escolha a opção `[A] Sim para Todos`

Caso o comando acima apresente erro, tente usar:

`Set-ExecutionPolicy Bypass -Scope Process`

Verifique se alteração de permissão ocorreu com sucesso executando novamente o comando:

```bash
Get-ExecutionPolicy
```

Alterada a permissão, basta instalar o **Chocolatey** com o comando:

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

Caso o comando acima apresente um erro, verifique se a sua máquina atende às requisições mínimas

`Windows 7+ / Windows Server 2003+
PowerShell v3+
.NET Framework 4.5+`

Caso o erro apresentado seja `Exceção ao definir "SecurityProtocol": "Não é possível converter o valor "3312"`, siga **[esse guia](https://blog.chocolatey.org/2020/01/remove-support-for-old-tls-versions/).**

- Após o fim da instalação, feche e abra o powershell como administrador novamente e execute:

```bash
choco -v
```

Caso ele retorne a versão do **Chocolatey**, a instalação foi um sucesso. Para finalizar, basta instalar a versão LTS mais recente do Node com o seguinte comando:

```bash
cinst nodejs-lts
```

E escolha a opção `[A]ll - yes to all`

Após o fim da instalação, feche e abra o powershell como administrador novamente e execute:

```bash
node -v
npm -v
```

Caso retorne as versões do Node e npm, sua instalação foi um sucesso.

- Yarn;
# Yarn 1

## Linux (Ubuntu/Debian)

Para instalar o Yarn 1 no Linux vamos começar configurando o repositório do **Yarn** executando:

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

Instale utilizando o seguinte comando:

```bash
sudo apt update && sudo apt install yarn
```

Adicione ao arquivo `~/.bashrc` (ou `~/.zshrc` caso você utilize o shell zsh) a seguinte linha: 

```bash
export PATH="$PATH:`yarn global bin`"
```

Feche e abra o terminal novamente, em seguida rode o comando:

```bash
 yarn --version
```

Caso retorne a versão do Yarn (acima de 1.0, abaixo de 2.0), a instalação ocorreu com sucesso.

## macOS

Para instalar o Yarn 1 no macOS siga os seguintes passos, execute o comando:

```bash
 brew install yarn
```

Adicione ao arquivo `~/.bashrc` (ou `~/.zshrc` caso você utilize o shell Zsh) a seguinte linha: 

```bash
export PATH="$PATH:`yarn global bin`"
```

Feche e abre o terminal novamente. Em seguida, rode o comando:

```bash
 yarn --version
```

Caso retorne a versão do Yarn (acima de 1.0, abaixo de 2.0), a instalação ocorreu com sucesso.

## Windows

Para instalar o Yarn 1 no Windows siga os seguintes passos, execute o comando no Powershell (como admin):

```bash
 cinst yarn
```

E escolha a opção `[A]ll - yes to all`. 

Feche e abra o terminal novamente, em seguida rode o comando:

```bash
 yarn --version
```

Caso retorne a versão do Yarn (acima de 1.0, abaixo de 2.0), a instalação ocorreu com sucesso.

### Possíveis problemas

Ao usar o Yarn no Windows para instalar as dependências nos seus projetos, atente-se para que seu nome de usuário não possua espaços, pois nesse caso, alguns erros poderão ocorrer durante esse processo, como por exemplo: com o nome "Diego Fernandes", o caminho até a pasta do projeto (supondo que estivesse na pasta *Documents*) seria algo como `C:\Users\Diego Fernandes\Documents\NLW\Projeto` e nesse caso, uma solução seria criar o projeto já na raiz do **Disco C**. Dessa forma, o caminho até a pasta não passaria pelo nome do usuário, ficando `C:\NLW\Projeto`.


- Visual Studio Code e configurações.
Para instalar o editor de texto Visual Studio Code em qualquer um dos 3 sistemas operacionais, basta [acessar o site](https://code.visualstudio.com/), baixar e rodar o executável.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9dddb31-2111-4767-9e21-2c3f5f5fc85a/vscode.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9dddb31-2111-4767-9e21-2c3f5f5fc85a/vscode.gif)

Com a instalação finalizada, abra o programa. Você deve se deparar com uma interface parecida com essa:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bf9ea041-d406-47c3-848e-18c53e9605e7/1-welcome.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bf9ea041-d406-47c3-848e-18c53e9605e7/1-welcome.png)

Feche a página **Welcome**. Para deixar a sua experiência ainda melhor, vamos passar para você algumas extensões e configurações do VS Code.

## Fonte

Essa não é uma etapa obrigatória, mas se você quer uma fonte mais personalizada e com todos aqueles símbolos especiais quando combinamos alguns caracteres, basta seguir alguns passos:

### JetBrains Mono

- A fonte utilizada nas aulas se chama JetBrains Mono e pode ser baixada gratuitamente no site da JetBrains através do seguinte link:

[JetBrains Mono: A free and open source typeface for developers](https://www.jetbrains.com/lp/mono/)

1 - Após baixar, extraia o arquivo e acesse a pasta `ttf`.

2 - Para instalar a fonte:

- **Windows**

    Selecione todos os arquivos que terminam com **.ttf**, clique com o botão direito do mouse e selecione **Instalar**.

- **Linux**

    Extraia as fontes para `~/.local/share/fonts` ou `/usr/share/fonts` para instalar as fontes no sistema e execute `fc-cache -f -v` no terminal.

- **Mac**

    Selecione todos os arquivos de fontes (aqueles que possuem a extensão **.ttf**), dê um duplo clique neles e clique no botão **Instalar Fonte**.

3 - O próximo passo é configurar a fonte para ser usada no Visual Studio Code. Após ter realizado as demais instalações, você poderá encontrar as configurações da fonte na seção **[Configurações](https://www.notion.so/Instala-o-das-ferramentas-405f3e8b014649cbb422dee6b5bd0535)**.

### Usando as Font Ligatures

Uma das características dessa fonte é que ela possui suporte às font ligatures que é uma funcionalidade que permite combinarmos símbolos para formar um novo.

Aqui você verá como são formados os símbolos mais comuns usados durante a NLW para que não fique confuso quando ver algo diferente:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a9d8c2af-1b3c-410b-b359-825ca02e1de2/fontLigatures.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a9d8c2af-1b3c-410b-b359-825ca02e1de2/fontLigatures.png)

## Extensões

Extensões são formas de adicionar ainda mais funcionalidades ao seu Visual Studio Code.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b296ac36-a8dd-4117-a1e0-b7999e1990ea/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b296ac36-a8dd-4117-a1e0-b7999e1990ea/Untitled.png)

Vamos citar 2 aqui para você:

### Omni

Nada melhor do que começar pelo tema do editor. Nós desenvolvedores trabalhamos diariamente, horas e horas, com o editor de código. Por isso, é muito importante escolher uma aparência para o Visual Studio Code que não canse demais os olhos e ao mesmo tempo realce bem o texto. É por isso que a Rocketseat decidiu criar (baseado no nosso querido Dracula) o seu próprio tema: Omni

**Como instalar? ⬇️**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76bd3f8f-1b2c-4ec4-bd6d-b92270cabd24/omni.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76bd3f8f-1b2c-4ec4-bd6d-b92270cabd24/omni.gif)

### Material Icon Theme

O **Material Icon Theme** é uma extensão que permite a customização dos ícones das pastas por extensões de arquivos, por exemplo, com ele conseguimos customizar um ícone para arquivos **Typescript**, outro para **Javascript,** outro para **HTML** e assim por diante. 

**Como instalar? ⬇️**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f235cd7c-7840-4e60-8d4e-81643dfe0895/materialicone.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f235cd7c-7840-4e60-8d4e-81643dfe0895/materialicone.gif)

## Configurações

Para finalizar, vamos adicionar algumas configurações no Visual Studio Code. Para isso, basta pressionar `Ctrl + Shift + P` e escolher a opção `Open Settings (JSON)`. Na janela que foi aberta, adicione as configurações abaixo:

É preciso tomar alguns cuidados ao realizar essas alterações. Verifique se a configuração adicionada já não existe no arquivo. Se sim, apenas atualize o valor. 

Verifique também se a todas as linhas de configuração **exceto a última** terminam com vírgula, para não gerar erro. 

Por fim, caso queira substituir completamente a sua configuração pela abaixo, envolva com chaves `{}` todo o código disponibilizado.

```json
  // Configurações da fonte JetBrains Mono
  "editor.fontFamily": "JetBrains Mono",
  "editor.fontLigatures": true,

  // Demais configurações
  "workbench.colorTheme": "Omni",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.startupEditor": "newUntitledFile",

  "explorer.compactFolders": false,
  "editor.renderLineHighlight": "gutter",
  "workbench.editor.labelFormat": "short",
  "extensions.ignoreRecommendations": true,

  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "never",

  "breadcrumbs.enabled": true,
  "editor.parameterHints.enabled": false,
	"editor.formatOnSave": true,
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,
  
  "emmet.syntaxProfiles": { "javascript": "jsx" },
  "emmet.includeLanguages": { "javascript": "javascriptreact" },

  "javascript.suggest.autoImports": true,
  "typescript.suggest.autoImports": true,
```

## Rodando o projeto local em modo desenvolvimento

To get started, just clone the repository and run `npm install && npm run dev`:

Para rodar o projeto só é preciso que: 

Você clone o projeto

`git clone https://github.com/iaincollins/nextjs-starter.git`

Instale as dependências

`yarn`

E execute o comando para rodar 

`yarn dev` 
