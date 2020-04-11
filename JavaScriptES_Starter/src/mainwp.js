import api from './api';

class App {
  constructor() {
    this.repositories = [];
  
    this.formEl = document.getElementById('repo-form');
    this.inputEl = document.querySelector('input[name=repository]')
    this.listEl = document.getElementById('repo-list');

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if(loading) {
      let loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('Carregando..'));
      loadingEl.setAttribute('id', 'loading');

      this.formEl.appendChild(loadingEl);
    }
    else {
      document.getElementById('loading').remove();
    }
  }

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputEl.value;

    if(repoInput.length === 0) 
      return;

    this.setLoading();

    try {

      const response = await api.get(`/repos/${repoInput}`);
      console.log(response); 
  
      const { name, description, html_url, owner: { avatar_url } } = response.data;
  
      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });
  
      this.inputEl.value = '';
  
      //console.log(this.repositories);
      this.render();
    }
    catch(err) {
      alert('O repositorio não existe');
    }

    this.setLoading(false);
  }

  render() {
    this.listEl.innerHTML = '';

    this.repositories.forEach(repo => {
      let imgEle = document.createElement('img');
      imgEle.setAttribute('src', repo.avatar_url);

      let titleEle = document.createElement('strong');
      titleEle.appendChild(document.createTextNode(repo.name));

      let descEle = document.createElement('p');
      descEle.appendChild(document.createTextNode(repo.description));
    
      let linkEle = document.createElement('a');
      linkEle.setAttribute('target', '_blank');
      linkEle.setAttribute('href', repo.html_url);
      linkEle.appendChild(document.createTextNode('Acessar'));

      let listItemEle = document.createElement('li');
      listItemEle.appendChild(imgEle);
      listItemEle.appendChild(titleEle);
      listItemEle.appendChild(descEle);
      listItemEle.appendChild(linkEle);

      this.listEl.appendChild(listItemEle);

    })
  }
}

new App();