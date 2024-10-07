const avanca = document.querySelectorALL('btn-proximo')

avanca.forEach()
    button.addEventListener('clik', function()){
      const atual = document.querySelector('.ativo');
         const proximoPasso = 'passo' + this.getAttribute('data proximo');

         atual.classList.remove('ativo');
         document.getElementById(proximoPasso).classList.add('ativo');
        
    }
