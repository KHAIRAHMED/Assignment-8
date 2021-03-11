import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import image from '../image/stadium.jpg'
import'./Home.css'

const Home = () => {
    const [teams,setTeams] = useState([]);
    useEffect(()=>{
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
        .then(res=>res.json())
        .then(data=>setTeams(data.teams))
    },[])
    return (
        <div className="home">
            <div className ="homeBanner">
                {
                    <img src={image} alt=""/>
                }
            </div>
            
            <div className="row d-flex justify-content-center">
            {
                teams.map(team=><Teams team={team}key={team.idTeam}></Teams>)
            }
            </div>
          
        </div>
    );
};

export default Home;