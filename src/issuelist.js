import React from 'react'

const Issuelist = ({slicedarray , d})=> {

    const find_difference = (st)=>
    {
        const end = new Date();
        const start = new Date(st);
        const days = 1000*60*60*24;
        let diff = end - start;
        let res = Math.floor(diff / days);
        return res;

    }


    return (
        <div>
            <ul className="list-group">
            {slicedarray.map((ele , index) =>{
            return(
                <>
                <li  key={index} className="list-group-item fa fa-exclamation-circle " > <b>!</b> <a href={ele.user.html_url}>{ele.title}</a> 
                
                 <p>#{ele.user.id} Opned <b>{find_difference(ele.updated_at.slice(0,10))}</b> day's ago by {ele.user.login} 
                </p>
               
                </li>
                
               
               
                </>
                )})}
     </ul>
            
        </div>
    )
}

export default Issuelist
