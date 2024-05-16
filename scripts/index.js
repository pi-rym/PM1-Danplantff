class Activity{
    constructor(id, title,description,imgUrl){
        this.id=id;
        this.title=title;
        this.description=description;
        this.imgUrl=imgUrl;
    }
}
class Repository{
    constructor(){
        this.activities=[];
    }
    getAllActivities(){
        return this.activities;
    }
    createActivity(id, title,description,imgUrl){
        const activity= new Activity(id, title,description,imgUrl);
        this.activities.push(activity);
    }
    deleteActivity(id){
        let newActivities = this.activities.filter((activity)=>activity.id !==id);
        this.activities= newActivities;
    }
}
const repository = new Repository();

function goTargets(Object){
    let {title, description, imgUrl, id}=Object;
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let img = document.createElement('img');
    h3.innerHTML=title;
    p.innerHTML=description;
    img.src=imgUrl;
    let newDiv = document.createElement('div');
    newDiv.appendChild(h3);
    newDiv.appendChild(p);
    newDiv.appendChild(img);
    newDiv.id=id;
    newDiv.classList.add("targets");
    return newDiv;
}
function toHtml(){
    let container = document.getElementById("container");
    container.innerHTML="";
    let activities = repository.getAllActivities();
    let targets = activities.map(goTargets);
    targets.forEach(target=>{
        container.appendChild(target);
    });
}

function handler(){
    const titleLabel = document.getElementById("titleInput");
    const descriptionLabel = document.getElementById("descripInput");
    const imgUrlLabel = document.getElementById("imgInput");
    let title = titleLabel.value;
    let description = descriptionLabel.value;
    let imgUrl = imgUrlLabel.value;
    let id=0;
    if(title & description & imgUrl ==="" ){
        window.alert("Faltan datos!");
        return;}
    repository.createActivity(id,title,description,imgUrl);
    id++;
    toHtml();
    titleLabel.value="";
    descriptionLabel.value="";
    imgUrlLabel.value="";
}
const button = document.getElementById("button");
button.addEventListener("click", handler);

const container = document.getElementById("container");
container.addEventListener('click', function(event) {
    if (event.target.classList.contains('targets')) {
      event.target.remove(); }
    let targetID = event.target.id;
    repository.deleteActivity(parseInt(targetID));
  });