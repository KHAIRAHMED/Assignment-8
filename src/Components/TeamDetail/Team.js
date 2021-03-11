import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import team from "./Team.css"
import male from "../image/male.png"
import female from "../image/female.png"
import './Team.css'



const Team = () => {
    const{id} = useParams();
    const[team,setTeam]=useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
        .then(res=>res.json())
        .then(data=>setTeam(data.teams[0]))
    },[id])
    const{strGender,strTeamBanner,strCountry,strLeague,intFormedYear}=team;


    return (
        <div  className="">
           <div className="teamBanner">
           {
                <img src={strTeamBanner} alt=""/>
            }
           </div>
            <div className="teamInfo row">
                <div className ="col-md-6">
                   <h3>{strLeague}</h3>
                   <h6>Founded Year : {intFormedYear}</h6>
                   <h6>Country :{strCountry}</h6> 
                   <h6>Sport Type : Football</h6>
                   <h6>Gender : {strGender}</h6>
                </div>
                <div className="genderImg col-md-6">
                    {
                        (strGender==="female")?<img src={female} alt="female"/> : <img src={male} alt="male"/>
                    }
                </div>
            </div>
            <div>
                <h5>Few More Team Info</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ab voluptates culpa aliquid! Deleniti veritatis repellendus vitae vel libero? Voluptate tempore ab maiores assumenda magnam placeat tenetur avoluptatem earum aspernatur alias voluptatibus adipisci.</p>
                <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae architecto, sed, ratione animi enim quo veniam odio, harum sint accusantium repudiandae perspiciatis nisi praesentium consectetur iusto tempora veritatis dolorum nesciunt eveniet. Itaque sint cum consectet </p>
            </div>
        </div>
    );
};

export default Team;