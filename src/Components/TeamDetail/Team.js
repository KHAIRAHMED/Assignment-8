import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import male from "../image/male.png"
import female from "../image/female.png"
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faFlag,faSearchLocation,faFutbol} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



const Team = () => {
    const{id} = useParams();
    const[team,setTeam]=useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
        .then(res=>res.json())
        .then(data=>setTeam(data.teams[0]))
    },[id])
    const{strGender,strTeamBanner,strCountry,strLeague,intFormedYear,strFacebook,strInstagram,strYoutube}=team;

    return (
        <div  className="">
           <div className="teamBanner">
           {
                <img src={strTeamBanner} alt=""/>
            }
           </div>
            <div className="teamInfo row">
                <div className ="col-md-6 detailInfo">
                   <h3>{strLeague}</h3>
                   <h6><FontAwesomeIcon icon={faSearchLocation} />Founded Year : {intFormedYear}</h6>
                   <h6><FontAwesomeIcon icon={faFlag} />Country :{strCountry}</h6> 
                   <h6><FontAwesomeIcon icon={faFutbol} />Sport Type : Football</h6>
                   <h6><FontAwesomeIcon icon={faCoffee} />Gender : {strGender}</h6>
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
            <div className="text-center socialLink">
                <Link to={strFacebook}><FontAwesomeIcon icon={faFacebookF} /></Link>
                <Link to={strYoutube}><FontAwesomeIcon icon={faYoutubeSquare} /></Link>
                <Link to={strInstagram}><FontAwesomeIcon icon={faInstagramSquare} /></Link>
            </div>
        </div>
    );
};

export default Team;