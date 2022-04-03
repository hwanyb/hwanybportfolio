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
import { mapActions } from 'vuex'

export default {
    computed:{
        title: {
            get() {
                return this.$store.state.movie.title
            },
            set (title) {
                this.$store.commit('movie/updateState', {
                    title
                })
            }
        },
        loading () {
            return this.$store.state.movie.loading
        }
    },
    methods: {
        ...mapActions('movie', [
            'searchMovies'
        ])
    }
}
</script>