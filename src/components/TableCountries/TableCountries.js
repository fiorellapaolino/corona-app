import React from 'react'
import './tableCountries.scss'

function TableCountries({dataCountries}) {
    return (
        <div>
            <div>
                <h1>Countries Infected Overview</h1>
            </div>
                <div className="tbl-header">
                <table className="table-countries">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Country</th>
                            <th>Infected</th>
                        </tr>
                    </thead>
                </table>
                    <div className="tbl-content">
                    <table>
                        <tbody>
                            {dataCountries && dataCountries.map(country => {
                                return (
                                    <tr key={country.id}>
                                        <td>{country.id}</td>
                                        <td>{country.name}</td>
                                        <td>{country.infected}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableCountries
