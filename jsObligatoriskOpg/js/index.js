Vue.createApp({
    data() {
        return {
            word: null,
            upperword: null,
            lowerword: null,
            words: [],
            message: null,

            // add here
        }
    },
    methods: {
        save(word) {
            this.words.push(word)
        },
        clear() {
            this.words = []
            this.message = null
        },
        show(word) {
            if (word) {
                this.message = word + word.toUpperCase() + word.toLowerCase()
                this.words[0] = word
                this.words[1] = word.toLowerCase()
                this.words[2] = word.toUpperCase()
            }
            else {
                this.message = "empty"
             }
        }
    }
}).mount("#app")