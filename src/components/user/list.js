import React, {useState} from "react"
import { Table } from 'react-bootstrap';

function List(props) {
  const [users, setUsers] = useState([]);
  const handleChange = (event) => {
    //console.log(event.target, event.target.checked);
    //console.log(JSON.stringify(users))
    let userid = event.target.getAttribute("data-id");
    if(event.target.checked){
      setUsers([...users, userid])
    } else {
      let usersClone = [...users];
      for(let i = 0; i < usersClone.length; i++){
        if(usersClone[i] === userid){
          usersClone.splice(i,1);
          break;
        }
      }
      setUsers(usersClone);
    }
  }

  const handleApprovedClick = () => {
    props.handleApprovel && props.handleApprovel(users);
  }

  return (
    <div className="managmentArea">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="checkBox">
              <input type="checkbox" name="check"/>
            </th>
            <th>User Id</th>
            <th>Facebook Id</th>
          </tr>
        </thead>
        <tbody>
        {props.users.map(({userid,fid }) => (
              <tr key={userid}>
                <td className="checkBox">
                  <input data-id={userid} type="checkbox" 
                    name="check" onChange={handleChange}
                  />
                </td>
                <td>{userid}</td> 
                <td>{fid}</td>                  
            </tr>

          ))}
              
        </tbody>
        <tfoot>
            <tr>
              <td colSpan="3">
                {
                  (
                    props.addApproveButton && 
                    <button type="button" 
                      className="btn btn-primary"
                      onClick={handleApprovedClick}>
                      Approved
                    </button>
                  )
                }
                {
                  (
                    props.addDenyButton &&
                    <button type="button" className="btn btn-danger">
                      Deny
                    </button>
                  )
                }
              
                
              </td>
            </tr>
          </tfoot>
      </Table>
    </div>
  );
}

export default List;