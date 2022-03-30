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
export default {
    data() {
        return {
            title: '',
            loading: false
        }
    },
    methods: {
        searchMovies() {
            console.log('Searched!')
        }
    }
}
</script>