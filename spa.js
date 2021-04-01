
const home = {
    template: '<div class="content">Curriculum vitae</div>'
};
const quemSou = {
    template: `
    <div>
        <section class="jumbotron text-center" >
            <div classe="container">
                <h1 class="jumbotron-heading">Quem sou eu ?</h1>
                <p class="lead"> Chamo-me Roque Luís Pina, tenho 52 anos, sou licenciado em engenharia Eletrotécnica pelo Instituto Superior de Engenharia de Lisboa (ISEL), 
                pós-graduado em Sistemas Eletrónicos Marítimos, pós-graduado em Segurança da Informação e Direito no Ciberespaço. </p>
       
            </div>
        </section>
    
    </div>`
};
const queFaco = {
    template: `
    <div>
        <section class="jumbotron text-center" >
	        <div classe="container">
		        <h1 class="jumbotron-heading">O que faço ?</h1>
		        <p class="lead">Sou militarizado da Marinha de Guerra Portuguesa - Faroleiro, desempenho a função de chefe do
                farol, no farol de Vila Real de Santo António – Algarve - Portugal. Apesar da minha área profissional não ser
                informática, há mais de 30 (Trinta) anos que percorro na área da informática, passando pelas redes estruturadas;
                programação; gestão de base de dados; helpdesk, entre outras coisas. </p>
			
	        </div>
        </section>
    </div>`

};

const hobbies = {
    template: `
    <div>
        <section class="jumbotron text-center" >
            <div classe="container">
                <h1 class="jumbotron-heading">Os meus hobbies</h1>
                <p class="lead">Tenho como hobbies fazer desporto (atletismo; natação; ciclismo), electrónica, robótica. </p>
            </div>
        </section>

    </div>`
};
const contactos = {
    template: `
    <div>
        <section class="jumbotron text-center" >
           
            <p>Farol de Vila Real de Santo António - Vila Real de Santo António - Algarve - Portugal <br>
            <i class="fa fa-phone-square"></i> Telefone : +351 000 000 000 <br>
            <i class="fa fa-envelope"></i> E-mail : <a class="mail-link" href="mailto:1801256@estudante.uab.pt">1801256@estudante.uab.pt</a><br>
            </p>
   
    
        </section>

    </div>`
};
const routes = [
    { path: '/', component: home },
    { path: '/templats/quemSou', component: quemSou },
    { path: '/templats/queFaco', component: queFaco },
    { path: '/templats/hobbies', component: hobbies },
    { path: '/templats/contactos', component: contactos }
];
const router = new VueRouter({
    routes

});

new Vue({
    el: '#app',
    template: `
        <div>
            <h2>{{title}}</h2>

            <nav class="navbar navbar-default">
            <div class="container">
              <div class="navbar-header">
                <a class="navbar-brand" href="/">Curriculum vitae</a>
              </div>
        
              <ul class="nav navbar-nav navbar-right">
                <li><router-link to="/"><i class="fa fa-home"></i> </router-link></li>
                <li><router-link to="/templats/quemSou"><i class="fa fa-male"></i> Quem sou eu ?</router-link</li>
                <li><router-link to="/templats/queFaco"><i class="fa fa-comments"></i> O que faço?</router-link></li>
                <li><router-link to="/templats/hobbies"><i class="fa fa-gamepad"></i> Hobbies</router-link></li>
                <li><router-link to="/templats/contactos"><i class="fa fa-envelope"></i> contactos</router-link></li>
              </ul>
            </div>
          </nav>
        
        
          <div class="jumbotron text-center" id="main">
            <img class="foto-perfil" src="img/Roque.jpg" alt="foto de perfil">
            <h2 class="jumbotron-heading">Roque Luís Simões Ramos de Pina</h2>
           
  
           
            <main>
               <router-view></router-view>
            </main>
            <footer class="rodape-prin">

    <span>&copy; Roque Luís Pina 2021</span>
  
  
    <ul class="icones-sociais">
  
      <li><a href="https://www.facebook.com" target="_blank">
          <img src="https://elearning.uab.pt/theme/uab_v4/pix/social_ico/icone_fb.png">
  
        </a></li>
      <li><a href="https://twitter.com" target="_blank">
          <img src="https://elearning.uab.pt/theme/uab_v4/pix/social_ico/icone_twitter.png">
  
        </a></li>
      <li><a href="https://www.linkedin.com" target="_blank">
          <img src="https://elearning.uab.pt/theme/uab_v4/pix/social_ico/icone_linkedin.png">
  
        </a></li>
      <li><a href="https://www.youtube.com" target="_blank">
          <img src="https://elearning.uab.pt/theme/uab_v4/pix/social_ico/icone_youtube.png">
  
        </a></li>
  
      <li><a href="https://github.com" target="_blank">
          <img
            src="https://www.benefitexpress.info/hubfs/benx-site-images/common-images/footer-icon-google.png?t=1505927196292"
            alt="Icone do GitHub">
        </a></li>
  
      </a></li>
    </ul>
    </div>
  
  </footer>

        </div>


    `,
    data: function () {
        return {

            title: ''
        }
    },
    router

});