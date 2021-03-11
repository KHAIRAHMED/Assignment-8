import React from 'react';
import { useHistory } from 'react-router';
import Button from 'react-bootstrap/Button';
import'./Teams.css';

const Teams = (props) => {
    const {idTeam,strTeamBadge,strTeam} =props.team;
    const history = useHistory();
    const clickHandler=(id)=>{
        history.push(`/details/${id}`)
    }
    return (
            <div className="teams col-md-3">
                    {<img src={strTeamBadge} alt=""/>
                    }
                    <h1>{strTeam}</h1>
                    <p>Sports Type :Football</p>
                    <Button variant="primary" onClick={()=>clickHandler(idTeam)}>Explore</Button>{' '}
            </div>
    );
};

export default Teams;