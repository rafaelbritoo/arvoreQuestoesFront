window.onload = () => {
    Vue.component('tree-item', {
        template: '#item-template',
        props: {
            item: Object
        },
        data: function () {
            return {
                isOpen: false
            }
        },
        computed: {
            isFolder: function () {
                return this.item.filhos &&
                    this.item.filhos.length
            }
        },
        methods: {
            toggle: function () {
                if (this.isFolder) {
                    this.isOpen = !this.isOpen
                }
            }
        }
    })

    new Vue({
        el: '#app',
        data() {
            return {
                form: {
                    orgao: null,
                    banca: null,
                },
                orgaos: [],
                bancas: [],
                arvore: [],
                show:true
            }
        },
        
        mounted() {
            axios
                .get('http://localhost/api/orgao/')
                .then(response => (this.setDadosCombo(response.data, "orgaos")));
        
            axios
                .get('http://localhost/api/banca/')
                .then(response => (this.setDadosCombo(response.data, "bancas")));
        },
        methods: {
            setDadosCombo(data, propriedade) {
                this[propriedade] = this.setComboDados(data, "id", "nome");
            },
            setComboDados(dados, campoValue, campoTexto) {
                let listaCombo = [];
        
                dados.forEach((item) => {
                    listaCombo.push(
                        {
                            value: item[campoValue],
                            text: item[campoTexto]
                        }
                    );
                });
        
                return listaCombo;
            },
            onSubmit(evt) {
                evt.preventDefault()
                axios
                    .get('http://localhost/api/arvores-assuntos/orgao/'+ this.form.orgao + '/banca/' + this.form.banca)
                    .then(response => this.arvore = response.data.data);
            }
        }
    })
};