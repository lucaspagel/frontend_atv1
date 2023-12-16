<template>
    <div id="item-content">
        <h1 id="page-title">Últimas do blog</h1>
        
        <div v-for="index in 3" :key="index">
            <NewsItem :Title="'5 dicas para sua carreira profissional'"
                :Description="'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end'"
                :URL="'https://www.pucrs.br/blog/dicas-para-alavancar-a-carreira/'" />
                <br>
        </div>

        <div id="more">
            <a href="/">Ver tudo</a>
        </div>
    </div>
</template>

<script>
import NewsItem from '@/components/NewsItem.vue';

export default {
    components: { NewsItem }
}
</script>

<style>
#page-title {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: left;
}

#item-content {
    display: flex;
    justify-content: center;
    align-items: center;

    display: inline-block;
}

#item-content a {
    text-decoration: none;
    font-size: larger;
    font-weight: bold;
}

#more {
    text-align: left;
}

#more a {
    color: #2F558D;
}
</style>
