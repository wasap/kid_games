import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
export default class Accelerometer extends React.Component{
    static sounds = [
        'bear_growl_y.wav',
        'bird_caw1.wav',
        'bird_caw2.wav',
        'bird_chirping2.wav',
        'bird_chirp.wav',
        'bird.wav',
        'bison.wav',
        'cat_big_x.wav',
        'cat_fight.wav',
        'cat_growl.wav',
        'cat_kitten.wav',
        'cat_meow2.wav',
        'cat_meow_x.wav',
        'cat_purr.wav',
        'cat_scream.wav',
        'cat_screech2.wav',
        'cat_screech.wav',
        'cat_y.wav',
        'chicken6.wav',
        'chicken_bock_x.wav',
        'chicken_rooster2.wav',
        'chicken_rooster_crow.wav',
        'chicken.wav',
        'cow1.wav',
        'cow22.wav',
        'cow2.wav',
        'cow3.wav',
        'cow4.wav',
        'coyote_howl.wav',
        'crickets.wav',
        'dog_bark2.wav',
        'dog_bark3.wav',
        'dog_bark4.wav',
        'dog_bark5.wav',
        'dog_bark6.wav',
        'dog_bark_x.wav',
        'dog_growl3.wav',
        'dog_puppy.wav',
        'dog_ruff.wav',
        'dog_whine2.wav',
        'dog_whine_duke.wav',
        'dog_whine.wav',
        'dog_x.wav',
        'dolphin.wav',
        'donkey_x.wav',
        'duck_quack.wav',
        'elephant.wav',
        'fly.wav',
        'frogs.wav',
        'frog.wav',
        'geese.wav',
        'goat2.wav',
        'goat.wav',
        'hawk.wav',
        'horse2.wav',
        'horse_gallop.wav',
        'horse_trot2.wav',
        'horse_trot.wav',
        'horse.wav',
        'horse_whinny.wav',
        'hyena.wav',
        'jaguar.wav',
        'lion214.wav',
        'lion_growl.wav',
        'lion_roar.wav',
        'monkey1.wav',
        'monkey2.wav',
        'monkey3.wav',
        'monkey4.wav',
        'owl.wav',
        'panther.wav',
        'peacock.wav',
        'pig3',
        '(1).wav',
        'pig3.wav',
        'pig4.wav',
        'pig_squeal2.wav',
        'pig_squeal.wav',
        'pig.wav',
        'rooster.wav',
        'seagull141.wav',
        'seagull2.wav',
        'seal2.wav',
        'seal3.wav',
        'seal.wav',
        'sheep521.wav',
        'sheep.wav',
        'snake_hiss.wav',
        'whale.wav',
        'wolf2.wav',
        'wolf_attack.wav',
        'wolf_howl.wav',
        'wolf_x.wav',
    ];

    state = {
        playing:false,
        beta:0,
        gamma:0
        // song: 'fx4.wav'
    }
    componentDidMount(){
        window.addEventListener("deviceorientation", this.handleOrientation);
    }
    componentWillUnmount(){
        window.removeEventListener("deviceorientation", this.handleOrientation);
    }
    handleOrientation = (e) => {
        if(this.state.playing)
            return;
        if( Math.abs(this.state.beta - e.beta) < 40 && Math.abs(this.state.gamma - e.gamma) < 40)
            return;
        this.setState({
            beta: e.beta,
            gamma: e.gamma,
            playing: true,
            song: this.constructor.sounds[Math.round(Math.random()*this.constructor.sounds.length)]
        });

    }
    onSoundEnd = () =>{
        this.setState({
            playing: false,
        })
    }
    render(){
        return (<div>Wave phone to hear sound
            <br/>
            <div>{JSON.stringify(this.state)}</div>
            <ReactAudioPlayer src={`/kid_games/sounds/${this.state.song}`} autoPlay onEnded={this.onSoundEnd}/>
        </div>)
    }
}
