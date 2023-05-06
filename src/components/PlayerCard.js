import React from 'react';
import moment from "moment"
import NoImage from '../assets/img/no-image.jpg'

const PlayerCard = ({allPlayersList}) => {
    return (
        <>
          {
            allPlayersList && allPlayersList?.sort((a,b) => (Number(a.Value) > Number(b.Value)) ? 1 : -1).map((data, id) => {
                const {Id, PFName, SkillDesc,Value,UpComingMatchesList} = data;
                return (
                <>
                <div key={Id} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div  className="card p-0 overflow-hidden h-100 shadow">
                    <img src={`${process.env.PUBLIC_URL}/player-images/${Id}.jpg`} onError={(e) => ((
                        e.currentTarget.src = `${NoImage}`,
                        e.currentTarget.style = 'height: 170%; width: 100%'
                        ))} className="card-img-top img-fluid" />
                        <div style={{width:'100%', height:'100%'}}>
                            <h4 className="card-title">{(PFName ?? "") +", "+(SkillDesc ?? "")}</h4><h2>{"$ "+(Value ?? "-")}</h2>
                            <h5>Upcoming Matches: <b>{(UpComingMatchesList[0]?.CCode && UpComingMatchesList[0]?.VsCCode) !== "" ? (UpComingMatchesList[0]?.CCode + " vs " + UpComingMatchesList[0]?.VsCCode) : "-"}</b></h5>
                            <h5>Next Match: <b>{UpComingMatchesList[0]?.MDate !== "" ? moment(UpComingMatchesList[0]?.MDate).format("DD-MM-YYYY h:mm:ss a") : "-"}</b></h5>
                        </div>
                </div>
                </div>
                </>)
            })
          }  
        </>
    );
};

export default PlayerCard;