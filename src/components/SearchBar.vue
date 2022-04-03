<template>
    <div>
        <v-text-field
            v-model="title"
            label="Movie Title" prepend-inner-icon="mdi-magnify"
            @keypress.enter="searchMovies">
            <template v-slot:append>
                <v-progress-circular
                    size="20"
                    color="primary"
                    indeterminate
                    v-if="loading" />
            </template>
        </v-text-field>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            title: '',
            loading: false
        }
    },
    methods: {
        async searchMovies() {
            this.loading = true
            const res = await axios.get(`http://www.omdbapi.com/?apikey=cbed7158&s=${this.title}`)
            console.log(res.data.Search)
            this.loading = false
        }
    }
}
</script>