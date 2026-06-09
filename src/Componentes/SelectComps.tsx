type SelectSettings = {
    explicacion: string,
    setPage: (val: number)=> void
}
export const ProjectSelect =({setPage, explicacion} :SelectSettings)=>{

    return (
        <>
        <div className="selectp">
                <select className="form-select form-select-lg mb-3" 
                        aria-label="Large select example"
                        onChange={(e)=>{setPage(Number(e.target.value))}}
                        >
                        <option  selected value="0">Profesionales</option>
                        <option value="3">Prácticas</option>
                        <option value="6">Hobbies</option>
                </select>
                <p className="explicacion">{explicacion}</p>
              </div>
        </>
    )
}