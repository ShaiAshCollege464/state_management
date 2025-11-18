import React from "react";
import Client from "./Client.jsx";

class AllClients extends React.Component {
    state = {
        newClientName: "",
        newClientPhone: "",
        allClients: []
    }

    countPurchases = () => {
        let count = 0;
        this.state.allClients.forEach(item => {
            count += item.purchase;
        })
        return count;
    }

    render() {
        return (
            <>
                <div style={{
                    border: "1px solid grey"
                }}>
                    <input
                        value={this.state.newClientName}
                        placeholder={"Enter the client name: "}
                        onChange={(event) => {
                            const currentValue = event.target.value;
                            this.setState({
                                newClientName: currentValue
                            })
                        }}
                    />
                    <input
                        value={this.state.newClientPhone}
                        placeholder={"Enter the client's phone: "}
                        onChange={(event) => {
                            const currentValue = event.target.value;
                            this.setState({
                                newClientPhone: currentValue
                            })

                        }}

                    />

                    <button
                        disabled={
                            this.state.newClientPhone.length != 3 ||
                            this.state.newClientName.length == 0}
                        onClick={() => {
                            const newObject = {
                                name: this.state.newClientName,
                                phone: this.state.newClientPhone,
                                purchase: Math.floor(Math.random() * 20)
                            }
                            const updated = this.state.allClients;
                            updated.push(newObject);
                            this.setState({
                                allClients: updated,
                                newClientName: "",
                                newClientPhone: ""
                            })
                        }}>
                        Add
                    </button>
                </div>
                {
                    this.state.allClients.length == 0 ?
                        <>
                            No Clients Yet!
                        </> :
                        <div>
                            My Clients {this.state.allClients.length}
                            <div>
                                Total Purchases: {this.countPurchases()}
                            </div>
                            {
                                this.state.allClients.map(client => {
                                    return (
                                        <Client data={client}/>
                                    )
                                })
                            }
                        </div>

                }
                <button
                    disabled={this.state.allClients.length == 0}
                    onClick={() => {
                        this.setState({
                            allClients: []
                        })
                }}>
                    Clear
                </button>
            </>
        )
    }
}

export default AllClients;