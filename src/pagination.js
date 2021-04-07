import React from 'react'
import { Badge } from 'react-bootstrap';

const Pagination = ({totalpost, postperpage ,handlepage_navigation})=> 
{
    const numberofpages = [];
    for(let i =1 ; i<=Math.ceil(totalpost/postperpage) ; i++)
    {
        numberofpages.push(i);
    }

    return (
        <nav className="mt-3">
            <ul className="pagination">
                {numberofpages.map((num)=>( 
                    <li className="page-item">
                        
                        <a href="!#" onClick={()=> {handlepage_navigation(num)}} className="page-link">
                            {num}
                        </a>


                    </li>
                ))}
            </ul>
            
        </nav>
    )
}

export default Pagination
