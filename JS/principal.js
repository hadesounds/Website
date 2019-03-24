function textOne(){
    if (window.location.href.indexOf('&index.html')) {
        document.getElementById("text").innerHTML = "teste texto 1"
        document.getElementById("title").innerText = "Project 1"
        console.log("Aqui" + window.location.href.indexOf('&index.html'));
        
    }
    else{
        document.getElementById("text").innerText = "teste texto estatística 1"
        document.getElementById("title").innerText = "Topic 1"
        console.log("aqui 1" + window.location.href.indexOf('statistics.html'));
        
    }
}

function textTwo(){
    document.getElementById("text").innerText = "teste texto 2"
    document.getElementById("title").innerText = "Project 2"
}

function textThree(){
    document.getElementById("text").innerText = "teste texto 3"
    document.getElementById("title").innerText = "Project 3"
}
function textBio(){
    document.getElementById("text").innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis impedit repellat    harum id iure voluptate, obcaecati dolorum quidem sunt saepe recusandae reiciendis optio    cumque quisquam modi, voluptas rem hic. Eum! Lorem ipsum dolor sit amet consectetur    adipisicing elit. Nisi voluptate exercitationem soluta quod dignissimos consecteturexcepturi sequi aspernatur consequuntur. Inventore, numquam magnam. Ut atque eligendi    provident ratione, incidunt est harum. Lorem ipsum dolor sit amet consectetur adipisicing    elit. Tenetur voluptates non ratione sunt, quasi unde deserunt soluta ex ea impedit    doloribus facilis. Beatae soluta molestiae provident tenetur delectus est dolore! Loremipsum dolor sit amet consectetur adipisicing elit. Itaque illo ut dele"
    document.getElementById("title").innerText = "Bio"
}