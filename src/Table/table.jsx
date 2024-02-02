import css from "./tablelast.module.css"
export const Table = ({ spisok }) => {
    return (
      <table className={css.borders}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {spisok.map((section, index) => (
            <tr key={section.id} style={{ backgroundColor: index % 2 === 0 ? 'gray' : 'white' }}>
              <td>{section.type}</td>
              <td>{section.amount}</td>
              <td>{section.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  