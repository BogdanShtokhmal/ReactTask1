import React, {Component} from 'react';
import './User.css';
class Userscomp extends Component {
    render() {
        let {item, cls}=this.props;
        return (

            <div>
                <div className={cls}> {item.name}-{item.age}-{item.status.toString()}--{item.address.city}-{item.address.street}-{item.address.number}</div>
            </div>
        );
    }
}

export default Userscomp;