let btnAFPAShow = document.getElementById("btnAfficherAFPA")
let btnAFPAHide = document.getElementById("btnCacherAFPA")


btnAFPAShow.addEventListener("click", function () {
    let formationAFPA = document.getElementById("formationAFPA");
    formationAFPA.innerHTML += `
    <li>
    développer la partie front-end d’une application web ou
    web mobile sécurisée :
    <ul>
        <li>
            installer et configurer son environnement de travail en
            fonction du projet web ou web mobile
        </li>
        <li>
            maquetter des interfaces utilisateur web ou web mobile
        </li>
        <li>
            réaliser des interfaces utilisateur statiques web ou web
            mobile
        </li>
        <li>
            développer la partie dynamique des interfaces
            utilisateur web ou web mobile
        </li>
    </ul>
</li>
<hr>
<li>
    développer la partie back-end d’une application web
    ou web mobile sécurisée :
    <ul>
        <li>
            mettre en place une base de données relationnelle
        </li>
        <li>
            développer des composants d’accès aux données sql
            et nosql
        </li>
        <li>
            développer des composants métier coté serveur
        </li>
        <li>
            documenter le déploiement d’une application
            dynamique web ou web mobile
        </li>
    </ul>
</li>
</ul>
</div>

<button class="voirPlus" id="btnCacherAPFA">Cacher </button>

    `
    let btnAFPAHide = document.getElementById("btnCacherAFPA");

    btnAFPAHide.addEventListener("click", function () {
        formationAFPA.innerHTML = ''; 
    });
})
