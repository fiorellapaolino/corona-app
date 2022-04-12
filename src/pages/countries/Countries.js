import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './countries.scss';
import PieChart from '../../components/PieChart';
/* import TableCountries from '../components/TableCountries/TableCountries';
 */
import Sidebar from '../../components/sidebar/Sidebar';
import BuiltMap from '../../components/BuiltMap';
function Countries() {

  const [dataCountries, setDataCountries] = useState([]);

  useEffect(() => {
    const COUNTRIES_API = 'https://my.api.mockaroo.com/countries.json?key=0de8da00'
    axios.get(COUNTRIES_API)
    .then(res => {
      setDataCountries(res.data);
    })

    .catch(err => console.log(err));
  }, [])

  return (
    <div className="countries">
      <Sidebar />
      <div className="countriesContainer">
        <PieChart dataCountries={dataCountries} setDataCountries={setDataCountries} />
        <BuiltMap dataCountries={dataCountries}/>
        {/* <TableCountries dataCountries={dataCountries}/> */}
      </div>
    </div>
  )
}

export default Countries
