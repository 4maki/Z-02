import React from "react";
import { UserChildren, UserClass, UserFunction } from "./user";
import UserInput from "./user/UserInput";

class App extends React.Component {
    state = {
        users: [
            { name: "Ivan", years: 30 },
            { name: "Marko", years: 35 },
            { name: "Ana", years: 25 },
        ],
        children: "A hobi mi je plivanje.",
    };

    handleButtonPress = () => {
        const { users } = this.state;

        const newUsers = users.map((user) => {
            return { ...user, years: user.years + 1 };
        });

        this.setState({ users: newUsers });
    };

    handleNameChange = (event, i) => {
        const { users } = this.state;
        const newUsers = [...users];
        newUsers[i] = { ...newUsers[i], name: event.target.value };
        this.setState({ users: newUsers });
    };

    render() {
        const { users, children } = this.state;
        return (
            <div>
                <h1>React aplikacija</h1>
                <p>Ovo zbilja radi</p>
                <button onClick={this.handleButtonPress}>
                    Promjena godina
                </button>
                {users.map((user, i) => (
                    <div>
                        <input
                            type="text"
                            value={user.name}
                            onChange={(event) =>
                                this.handleNameChange(event, i)
                            }
                        />
                        <UserFunction name={user.name} years={user.years} />
                    </div>
                ))}
            </div>
        );
    }
}

export default App;
