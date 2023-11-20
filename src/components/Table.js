const Table = ({ sat }) => {
  let tableBody = sat.map((data,id) =>{
    const status = data.operational ? "Active" : "Inactive";
  
  return (
    <tbody>
        <tr key = {id}>
        <td>{data.name}</td>
        <td>{data.type}</td>
        <td>{data.launchDate}</td>
        <td>{status}</td>
        </tr>
    </tbody>

  );
  })
      
   let table=  
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        {tableBody}
      </table>
      return table
};


export default Table;