import { useEffect, useState } from "react";


export const StarBackground=()=>{
const [stars,setStars]=useState([]);
const [meteors,setMeteors]=useState([]);
const [numOfStars,setNumOfStars]=useState(Math.floor((window.innerWidth*window.innerHeight)/10000));

useEffect(()=>{
    generateStars();
    generateMeteors();
},[]);

    const generateStars=()=>{
     const starsX=[];

        for(let i=0; i<numOfStars; ++i){
            starsX.push({
                id:i,
                size:Math.random()*3+1,
                x:Math.random()*100,
                y:Math.random()*100,
                opacity:Math.random()*0.5 +0.5,
                animationDuration:Math.random()*4+2
            })
        }
    
        setStars(starsX);
    }

    const generateMeteors=()=>{
        const numOfMeteors=10;
        const meteorX=[];

        for(let i=0; i<numOfMeteors; ++i){
            meteorX.push({
                id:i,
                size:Math.random()*2+1,
                x:Math.random()*100,
                y:Math.random()*20,
                delay:Math.random()*15,
                animationDuration:Math.random()*3+3
            })
        }
    
        setMeteors(meteorX);
    }

    window.addEventListener('resize',()=>{
        setNumOfStars(Math.floor((window.innerWidth*window.innerHeight)/10000));
        console.log('Star count has been changed to:',numOfStars);     
    });

    return <div className="  fixed inset-0 overflow-hidden pointer-events-none z-0">
        {
            stars.map((star)=>(
                <div key={star.id} className="star animate-pulse-subtle" 
                style={{
                    width:star.size+"px",
                    height:star.size+"px",
                    left:star.x+"%",
                    top:star.y+"%",
                    opacity:star.opacity,
                    animationDuration:star.animationDuration+"s"
                }}

                />
            ))
}

{
            meteors.map(meteor=>(
                <div key={meteor.id} className="meteor animate-meteor" 
                style={{
                    width:meteor.size*50+"px",
                    height:meteor.size+"px",
                    left:meteor.x+"%",
                    top:meteor.y+"%",
                    animationDelay:meteor.delay,
                    animationDuration:meteor.animationDuration+"s"
                }}

                />
            ))
}


    </div>
}