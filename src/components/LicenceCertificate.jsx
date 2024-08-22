import React, { useContext } from 'react'
import certimage from "../assets/crtiimage.jpg"
import "../stylesheet/licence.css"
import TableDataUtils from '../utils/TableDataUtils'
import Context from '../context/Context'

const LicenceCertificate = () => {
  const context=useContext(Context)
  const {profile}=context
  return (
    <div className="card mt-3 shadow licence-card">
      <div className="mx-3">
        <h3 className="mt-2">Licence& certifications</h3>
      <div className=' licence-list mb-3'>
      {profile?.certifications?.map((certificate,index)=>{
            return(
              <div key={index}>
              <TableDataUtils boldName={certificate["Certificate name"]} address={certificate['issued by']} date={certificate["issued date"]} img={certimage}/>
              </div>
            )
          })}
      </div>
      </div>
    </div>
  )
}

export default LicenceCertificate
