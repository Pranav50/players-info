import React, { useEffect, useMemo, useState } from 'react';
import axios from "axios"
//import useDebounce from '../customHooks/useDebounce';
import PlayerCard from './PlayerCard';
import Navbar from './Navbar';
import Spinner from './Spinner';
import useDebounce from '../customHooks/useDebounce';

const Players = () => {
    
    const [playerData, setPlayerData] = useState([])
    const [searchValue, setSearchValue] = useState()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState()

    let newSearch = useDebounce(searchValue, 1000)

    const getPlayerData = async () => {
        try {
            setError("")
            setLoading(true)
            const {data} = await axios.get('https://api.npoint.io/20c1afef1661881ddc9c');
            setPlayerData(data.playerList);
            setLoading(false)
        }
        catch(e) {
            setError(e.message)
        }
        
        //setTeamData(data.teamsList)
    }

    useEffect(() => {
            getPlayerData()
    }, [])

    const allPlayersList = useMemo(() => {
        if(!newSearch) return playerData;

        return playerData && playerData?.filter(
            (data) => 
            (data.PFName.toLowerCase() && data.PFName.toLowerCase()).search(newSearch.toLowerCase()) !== -1 ||
            data.TName.toLowerCase() && data.TName.toLowerCase().search(newSearch.toLowerCase()) !== -1
            )
    }, [newSearch, playerData])

    const handleSearchInput = (event) => {
        let value = event;
        setSearchValue(value)
    }
    
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Navbar handleSearchInput={handleSearchInput} />
                        <div style={{marginTop:'5rem'}}>
                            {
                                error ? <h2 style={{color: 'red'}}>{error}</h2> : 
                                loading ? <Spinner/> : <div className="row justify-content-center"><PlayerCard allPlayersList={allPlayersList} /></div>
                            }
                        </div>
                    </div>
            </div>
        </div>
        </>
    );
};

export default Players;