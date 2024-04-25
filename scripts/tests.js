class Activity {
    constructor(title, description, imgUrl, ID){
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.ID = ID;
    }
    addID(id){
        this.ID=id;
    }
}

class Repository{
    constructor(){
        this.activities = [];
        this.id=0;
    }
    getAllActivities(){
        return this.activities;
    }
    CreateAtivity(title,description,imgUrl){
        let Actividad = new Activity(title,description,imgUrl,this.id);
        this.activities.push(Actividad);
        this.id++;
    }
    deleteActivity(ID){
        let Eliminar = this.activities.filter((Activity) => Activity.ID !== ID);
        this.activities = Eliminar;
    }
}

const newRepo = new Repository();
newRepo.CreateAtivity("jugar","es divertido", "https:sdfsdf");
console.log(newRepo.getAllActivities());
newRepo.deleteActivity(0);
console.log(newRepo.getAllActivities());
module.exports ={
    Activity,
    Repository
};