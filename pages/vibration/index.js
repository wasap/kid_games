/**
 * Created by q on 07.01.17.
 */
import React from 'react';
import Item from './item';
class Vibration extends React.Component{
    static  melodies = [{color:'green', time:[100,250,400,180,400,200,200,190]},
        {color:'blue', time:[500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]},
        {color:'orange', time:[200,100,200,275,425,100,200,100,200,275,425,100,75,25,75,125,75,25,75,125,100,100]},
        {color:'yellow', time:[125,75,125,275,200,275,125,75,125,275,200,600,200,600]}];
    render(){
        return <div>
            {this.constructor.melodies.map((x,key)=>(
                <Item color={x.color} time={x.time} key={key}/>
            ))}
        </div>
    }
}

export default Vibration;