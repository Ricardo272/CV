let btnAFPAShow = document.getElementById("btnAfficherAFPA");
let btnAFPAHide = document.getElementById("btnCacherAFPA");
let formationAFPAContent = `
    <li>
        développer la partie front-end d’une application web ou web mobile sécurisée :
        <ul>
            <li>installer et configurer son environnement de travail en fonction du projet web ou web mobile</li>
            <li>maquetter des interfaces utilisateur web ou web mobile</li>
            <li>réaliser des interfaces utilisateur statiques web ou web mobile</li>
            <li>développer la partie dynamique des interfaces utilisateur web ou web mobile</li>
        </ul>
    </li>
    <hr>
    <li>
        développer la partie back-end d’une application web ou web mobile sécurisée :
        <ul>
            <li>mettre en place une base de données relationnelle</li>
            <li>développer des composants d’accès aux données sql et nosql</li>
            <li>développer des composants métier coté serveur</li>
            <li>documenter le déploiement d’une application dynamique web ou web mobile</li>
        </ul>
    </li>
`;

btnAFPAShow.addEventListener("click", function () {
    let formationAFPA = document.getElementById("formationAFPA");
    formationAFPA.innerHTML += formationAFPAContent;
    btnAFPAShow.style.display = "none";
    btnAFPAHide.style.display = "inline";
});

btnAFPAHide.addEventListener("click", function () {
    let formationAFPA = document.getElementById("formationAFPA");
    formationAFPA.innerHTML = "";
    btnAFPAShow.style.display = "inline";
    btnAFPAHide.style.display = "none";
});
