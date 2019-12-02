window.onload = () => {
    // define the tree-item component
    // Vue.component('tree-item', {
    //     template: '#item-template',
    //     props: {
    //         item: Object
    //     },
    //     data: function () {
    //         return {
    //             isOpen: false
    //         }
    //     },
    //     computed: {
    //         isFolder: function () {
    //             return this.item.sub_itens &&
    //                 this.item.sub_itens.length
    //         }
    //     },
    //     methods: {
    //         toggle: function () {
    //             if (this.isFolder) {
    //                 this.isOpen = !this.isOpen
    //             }
    //         }
    //     }
    // })


    new Vue({
        el: '#app',
        data() {
            return {
                selected: null,
                orgaos: [

                ],
                bancas: [

                ]
            }
        }
        // data() {
        //     return {
        //         form: {
        //             orgao: null,
        //             banca: null,
        //         },
        //         bancas: [],
        //         orgaos: [],
        //         arvoreProgramaEstudo: [],
        //         show: true
        //     }
        // },
        // mounted() {
        //     axios
        //         .get('http://symfony.localhost/api/orgao/')
        //         .then(response => (this.setDadosComboDoResponse(response.data, "orgaos")));
        //
        //     axios
        //         .get('http://symfony.localhost/api/banca/')
        //         .then(response => (this.setDadosComboDoResponse(response.data, "bancas")));
        // },
        // methods: {
        //     setDadosComboDoResponse(data, nomePropriedade) {
        //         this[nomePropriedade] = this.setDadosParaCombo(data, "id", "nome");
        //     },
        //     setDadosParaCombo(dados, campoValue, campoTexto) {
        //         let listaCombo = [];
        //
        //         dados.forEach((item) => {
        //             listaCombo.push(
        //                 {
        //                     value: item[campoValue],
        //                     text: item[campoTexto]
        //                 }
        //             );
        //         });
        //
        //         return listaCombo;
        //     },
        //     onSubmit(evt) {
        //         evt.preventDefault()
        //         axios
        //             .get('http://symfony.localhost/api/programa_estudo/',
        //                 {params: this.form})
        //             .then(response => this.arvoreProgramaEstudo = response.data);
        //     }
        // }
    })
};