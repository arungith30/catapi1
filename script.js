function ima(){fetch('https://thatcopy.pw/catapi/rest/')
.then((response)=>{
    return response.json();
})
.then((result)=>{
    display(result);
})
.catch((err)=>{
    console.log(err);
});
}

function display(data){
console.log(data);

const container = document.querySelector(".container1");
const catImage = document.createElement("img");
catImage.setAttribute('class','img-fluid');
catImage.setAttribute('id','image');

     catImage.src = data.url;
     container.append(catImage);
} 
ima();

function refreshUsers() {
    document.querySelector(".container1").innerHTML = "";
    ima();
  }
  