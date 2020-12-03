import React, {Component} from 'react';
import {usersWithAddress} from "./database/UsersWithAddress";
import Userscomp from "./component/Userscomp";

class App extends Component {
    render() {

        return (
            <div>
                {
                    usersWithAddress.map((user,index)=>{
                        let clsx= index%2 ?'odd' :'aven';
                        return( <Userscomp
                            item={user}
                            cls={clsx}
                            key={index}/>)


                    })

                }

            </div>
        );
    }
}

export default App;