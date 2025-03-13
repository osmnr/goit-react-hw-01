import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr>
          <th className={css.trxHeaders}>Type</th>
          <th className={css.trxHeaders}>Amount</th>
          <th className={css.trxHeaders}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.transactionRow}>
            <td className={css.transactionRow}>{type}</td>
            <td className={css.transactionRow}>{amount}</td>
            <td className={css.transactionRow}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
