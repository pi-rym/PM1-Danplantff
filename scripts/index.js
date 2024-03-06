class Activity {
    constructor(title, description, imgUrl){
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.ID=0;
    }
    addID(id){
        this.ID=id;
    }
}

class repository{
    constructor(){
        this.actividades = [];
    }
    agregarActividad(title,description,imgUrl){
        let i = this.actividades.length;
        let Actividad = new Activity(title,description,imgUrl);
        this.actividades.push(Actividad);
        let id=this.actividades.length;
        Actividad.addID(id);
    }
}
const repositorio= new repository();
repositorio.agregarActividad("correr","es buen","https://correr.com");
repositorio.agregarActividad("bailar","es malo","https://bailar.com");
console.log(repositorio);