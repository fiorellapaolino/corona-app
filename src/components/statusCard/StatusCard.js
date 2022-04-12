import React from 'react'
import coronavirusRec from '../../assets/icons8-coronavirus-64.png';
import coronavirus from '../../assets/icons8-coronavirus.png';
/* import './statuscard.scss'*/
import './statusCard.scss'
function StatusCard({data, setData}) {

    return (
        <div className="InfectedPeople">
            <div className="cards">
                <div className="card-single">
                    <div className="card-flex">
                        <div className="card-info">
                            <div className="card-head">
                                <img src={coronavirus} alt="" className="coronavirus" />
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
                                <img src={coronavirus} alt="" className="coronavirus" />
                                <span>Confirmed Deaths</span>
                                <small>Number of purchases</small>
                            </div>
                            <h2>{data.filter(d => !d.live).length}</h2>
                        </div>
                    </div>
                </div>
                <div className="card-single">
                    <div className="card-flex">
                        <div className="card-info">
                            <div className="card-head">
                                <img src={coronavirusRec} alt="" className="coronavirus" />
                                <span>Recovering Cases</span>
                                <small>Number of purchases</small>
                            </div>
                            <h2>{data.filter(d => d.recovered).length}</h2>
                        </div>
                    </div>
                </div>

                <div className="card-single">
                    <div className="card-flex">
                        <div className="card-info">
                            <div className="card-head">
                                <img src={coronavirus} alt="" className="coronavirus" />
                                <span>Global Cases</span>
                                <small>Number of purchases</small>
                            </div>
                            <h2>256 M</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusCard