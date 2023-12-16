<template>
    <div id="item-description">
        <a :href="URL" target="_blank" :style="{ color: textColor }" @mouseover="changeColor" @mouseout="resetColor">{{
            Title }}</a>
        <p>{{ Description }}</p>
    </div>
</template>

<script>
export default {
    props: ['Title', 'Description', 'URL'],
    data() {
        return {
            textColor: 'black',
        };
    },
    methods: {
        changeColor() {
            this.textColor = '#2F558D';
        },
        resetColor() {
            this.textColor = 'black';
        },
    }
}
</script>

<style>

#item-description {
    text-align: left;
    width: 30rem;
}
</style>
