import React from 'react';
import s from './item.css';
class Item extends React.Component{
    static propTypes = {
        time: React.PropTypes.array,
        color: React.PropTypes.string
    }
    vibrate = () => {
        console.log(this.props.time);
        navigator.vibrate(this.props.time)
    }
    render(){
        return (
            <div className={s.root} onClick={this.vibrate} style={{background:this.props.color}}>
            </div>
        );
    }
}

export default Item;