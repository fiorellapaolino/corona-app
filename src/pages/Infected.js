/* import React, {useState, useEffect} from 'react';
import './Infected.scss'
import Form from '../components/Form/Form'
import LineChart from '../components/LineChart'
import TableInfected from '../components/TableInfected/TableInfected'
import axios from 'axios'

function Infected() {

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
   <div className="InfectedPeople">
      <div className="cards">
        <div className="card-single">
          <div className="card-flex">
            <div className="card-info">
              <div className="card-head">
                <span>Confirmed Cases</span>
                <small>Number of purchases</small>
              </div>
              <h2>{data.length}</h2>
            </div>
          </div>
        </div>

        <div className="card-single">
          <div className="card-flex">
            <div className="card-info">
              <div className="card-head">
                <span>Confirmed Deaths</span>
                <small>Number of purchases</small>
              </div>
              <h2>{data.filter(d => !d.live).length}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card-single">
          <div className="card-flex">
            <div className="card-info">
              <div className="card-head">
                <span>Confirmed Cases</span>
                <small>Number of purchases</small>
              </div>
              <h2>{data.length}</h2>
            </div>
          </div>
        </div>

        <div className="card-single">
          <div className="card-flex">
            <div className="card-info">
              <div className="card-head">
                <span>Confirmed Deaths</span>
                <small>Number of purchases</small>
              </div>
              <h2>{data.filter(d => !d.live).length}</h2>
            </div>
          </div>
        </div>
      </div> 
      
       <div className="linechart">
        <Form setData={setData}/>
        <LineChart data={data}/>
      </div> 
       <TableInfected data={data} setData={setData}/> 
  </div>
  );
}


export default Infected
 */