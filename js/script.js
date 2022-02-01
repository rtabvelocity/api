let button = document.querySelector("button");


button.addEventListener("click", function(){

    // alert("It was clicked");
    // console.log("Clicked");
    lotNums();
   
})

const username ="rtabvelocity";

let lotNums = async function(){

        
        const userRequest = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=DEMO_KEY`);
        const marsData = await userRequest.json();
        // imageMars=(marsData);
        console.log(marsData);

        const arraymarsData = [];
    // for(let elements of marsData){
    //     // elements.push(arraymarsData);
    //     // console.log(marsData;
        
    // }
        return;
       
};

let imageMars = function(marsData){
    

   };
