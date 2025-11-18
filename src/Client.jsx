function Client (props) {
    const data = props.data;

    return (
        <div style={{
            border: "1px solid blue",
            padding: "5px"
        }}>
            <div>Full Name: {data.name}</div>
            <div>Phone: {data.phone}</div>
            <div>Total Purchases: {data.purchase} </div>
            {
                data.purchase > 10 &&
                <div>VIP</div>
            }
        </div>
    )
}

export default Client;