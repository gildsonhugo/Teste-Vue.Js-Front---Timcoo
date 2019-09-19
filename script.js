var app = new Vue({
    el: '#app',
    data: {

        /*VARIAVEL COM O VALOR DO SENTIMENTO DE 0 a 100*/

        valueFeel: 50
    },
    methods: {

        /*METODO QUE RETORNA TODAS AS VARIAVEIS NECESSARIAS COM SEUS VALORES DE ACORDO COM O VALOR DO SENTIMENTO*/

        getFeelStatus: function() {
            const statusData = {
                className: `yellow`,
                imgUrl: `imgs/normal.png`,
                nameStatus: `Normal`
            }
            
            if(this.valueFeel >= 80){
                statusData.className = `light-green`;
                statusData.imgUrl = `imgs/mt-feliz.png`;
                statusData.nameStatus = `Muito Feliz`
            }

            if(this.valueFeel < 80 && this.valueFeel >= 60){
                statusData.className = `blue`;
                statusData.imgUrl = `imgs/feliz.png`;
                statusData.nameStatus = `Feliz`;
            }

            if(this.valueFeel < 60 && this.valueFeel >= 40){
                statusData.className = `yellow`;
                statusData.imgUrl = `imgs/normal.png`;
                statusData.nameStatus = `Normal`;
            }

            if(this.valueFeel < 40 && this.valueFeel >= 20){
                statusData.className = `orange`;
                statusData.imgUrl = `imgs/triste.png`;
                statusData.nameStatus = `Triste`;
            }

            if(this.valueFeel < 20){
                statusData.className = `deep-orange`;
                statusData.imgUrl = `imgs/mt-triste.png`;
                statusData.nameStatus = `Muito Triste`;
            }

            return statusData;
        },

        /*METODO QUE ENVIA O VALOR PARA UM ARQUIVO .PHP QUE REGISTRA O DADO NO .TXT*/

        sub: function(event){
            event.preventDefault();
            const formData = new FormData(event.target);
            fetch(`form.php`, {
               method: 'POST',
               body: formData
            }).then(r => r.text()).then(r => console.log(M.toast({html: `${r}`})));
        }

    }
})
