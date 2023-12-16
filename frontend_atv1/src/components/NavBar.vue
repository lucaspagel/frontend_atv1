<template>
    <div id="nav">
        <div id="top-buttons">
            <router-link to="/">Blog</router-link>
            <router-link to="/about">Sobre</router-link>
            <router-link to="/description">Descrição</router-link>
        </div>
        <div id="description">
            <h1>Lucas Pagel de Faria</h1>

            <p>Formado em Engenharia de Computação e técnico em Mecatrônica, atualmente cursando Pós-Graduação na PUC em
                Arquitetura de Sistemas Distribuídos. Atualmente empregado como Analista de Desenvolvimento de Software com
                experiência em Desenvolvimento Frontend (Angular, Vue), Desenvolvimento Backend (Go, Entity Framework),
                Desenvolvimento Desktop (WPF), Bancos de Dados (SQL Server, Oracle) e pequenas aplicações em Python.
            </p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#nav {
    background-color: #2F558D;
    color: white;
}

#nav a {
    color: white;
    text-decoration: none;
    padding: 1rem;
}

#top-buttons {
    padding-top: 1rem;
    padding-bottom: 10rem;
}

#description {
    width: 60rem;

    text-align: left;

    margin-left: auto;
	margin-right: auto;

    padding-bottom: 5rem;
}

#description p {
    line-height: 1.7rem;
}

</style>
