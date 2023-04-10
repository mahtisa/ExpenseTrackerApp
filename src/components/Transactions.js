
const Transactions = ({filter}) => {
    let num =0;
    

    return ( 
        <div>
            <h2>Transactions:</h2>
            <div className="transaction">
                            <span className="num">Row</span>
                            <span className="transItem">Amount</span>
                            <span className="transItem">Description</span>
                            <span className="transItem">Type</span>
            </div>
            {
                filter.map((t)=>{
                    num = num + 1;
                    return (
                        <div className="transaction" key={t.id}>
                            <span className="num">{num}</span>
                            <span className="transItem">{t.amount} $</span>
                            <span className="transItem">{t.desc}</span>
                            <span className="transItem">{t.type}</span>
                        </div>
                    )
                })
            }
            
        </div>
     );
}
 
export default Transactions;