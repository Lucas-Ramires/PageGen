let sobre = document.querySelector("#sobre")

async function getApiGithub(){

    //estrutura usada para capturar extension
    try{
        const dadosPerfil = await fetch("https://api.github.com/users/Lucas-Ramires");
        const perfil = await dadosPerfil.json();
        let conteudo = `
<img src="${perfil.avatar_url}" alt="Foto do Perfil do Github - ${perfil.name}">

            <article class="sobre_texto">
                <h1>Sobre mim</h1>
                <p>Olá, meu nome é Lucas Ramires, tenho 23 anos e sou do Rio de Janeiro. Minha jornada com a tecnologia
                    começou cedo, com os jogos, e logo se tornou uma paixão que carrego até hoje. Resumindo minha vida
                    profissional, trabalhei apenas na área comercial e, devido a isso, pude aprimorar minhas habilidades
                    de
                    comunicação, proatividade, organização e trabalho em equipe. Além disso, atualmente estou cursando
                    Engenharia de Software e tenho cursos de webdesign, informática, inglês e um bootcamp fullstack,
                    onde
                    utilizei tecnologias como JavaScript, TypeScript, NestJS, React, SQL, Testes com Jest e Segurança.
                    Para
                    saber mais detalhes, entre em contato comigo.</p>
                <div id="sobre_github" class="sobre_github">
                    <a class="explore" target="_blank" href="${perfil.html_url}">Github</a>
                    <p>${perfil.followers} Seguidores</p>
                    <p>${perfil.public_repos} Repositórios</p>
                </div>
            </article>`;

      sobre.innerHTML += conteudo;      
    }catch (error){
        console.log(error)
    }
}

getApiGithub();
