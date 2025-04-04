import css from './TransactionHistory.module.css';
import clsx from 'clsx';

export const TransactionHistory = ({items}) => {
    let i = 0
    return <table className={css.table}>
    <thead>
      <tr className={css.head}>
        <th className={css.twidth}>Type</th>
        <th className={css.twidth}>Amount</th>
        <th className={css.twidth}>Currency</th>
      </tr>
    </thead>
  
    <tbody>
      {items.map(item => {
        i = i + 1
        return  <tr key={item.id} className={clsx(i%2 == 0 ? css.lineOP : css.casual)}>
        <td className={css.tdwidth}>{item.type[0].toUpperCase() + item.type.slice(1)}</td>
        <td className={css.tdwidth}>{item.amount}</td>
        <td className={css.tdwidth}>{item.currency}</td>
      </tr>
      })}
    </tbody>
  </table>
  
}

