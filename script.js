const data=[
    {
        image:'./image/1.jpeg'
    },
    {
        image:'./image/2.jpeg'
    },
    {
        image:'./image/3.jpeg'
    },
    {
        image:'./image/4.jpeg'
    },
    {
        image:'./image/5.jpeg'
    },
    {
        image:'./image/6.jpeg'
    },
]

let dataimage= document.getElementById('data')
let start=0
function  ImageSlide(){
    data.map((val,i)=>{
        if(i==start){
         dataimage.innerHTML=`<div>
         <img src=${val.image} style='height:400px;width:400px;' />
         
         </div>`
        }
     })
}

ImageSlide(start)

function Next(){
if(start===data.length-1){
    start=0
}else{
    start+=1
}

ImageSlide(start)
}

function Prev(){
    if(start===0){
        start=data.length-1
    }else{
        start-=1
    }
    
    ImageSlide(start)
    }



// setInterval(() => {
//     Next()
// }, 1000);