import '../Estilos/about.css'




export const TecnologiesComp = () => {
  return (
          <div className="d-flex justify-content-center flex-wrap gap-4 mb-5">
            <div className="devtecs fendtecs">
                <h5>Front-end</h5>
                <div>
                    <img src="img/devtecs/html-icon.png" alt="" title='HTML 5'/>
                    <img src="img/devtecs/css-icon.png" alt="" title='CSS 3'/>
                    <img src="img/devtecs/javascript-icon.png" alt="" title='JavaScript'/>
                    <img src="img/devtecs/react-icon.png" alt="" title='React JS'/>
                </div>
            </div>
            <div className="devtecs bendtecs">
                <h5>Back-end</h5>
                <div>
                    <img src="img/devtecs/typescript-icon.png" alt="" title='TypeScript'/>
                    <img src="img/devtecs/node-icon.png" alt="" title='Node JS'/>
                    <img src="img/devtecs/postgresql-icon.png" alt="" title='PostgreSQL'/>
                </div>
            </div>
            <div className="devtecs moretecs">
                <h5>Mas...</h5>
                <div>
                    <img src="img/devtecs/git-icon.png" alt="" title='Git'/>
                    <img src="img/devtecs/postman-icon.png" alt="" title='Postman'/>
                    <img src="img/devtecs/table-icon.png" alt="" title='Postman'/>   
                </div>
            </div>
            
        </div>
  )
}