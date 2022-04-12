import React, {useState, useEffect} from 'react';
import axios from 'axios'
import StatusCard from '../../components/statusCard/StatusCard';
import Linechart from '../../components/LineChart';
import './home.scss';
import TableInfected from '../../components/TableInfected/TableInfected';
import Sidebar from '../../components/sidebar/Sidebar';

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
      const INFECTED_API = 'https://my.api.mockaroo.com/infected.json?key=0de8da00'
      axios.get(INFECTED_API)
      .then(res => {
        setData(res.data);
      })
  
      .catch(err => console.log(err));
    }, [])


  return (
    <div className="home">
      <Sidebar />
    <div className="homeContainer">
      <StatusCard data={data} />
      <div className="charts">
        <Linechart data={data} />
        <TableInfected data={data} setData={setData}/>
      </div>
    </div>
    </div>
  )
}
export default Home
