import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Cards';
import BulmaCards from './Components/BulmaCards';
import foximage from './assets/Images/fox.jpg';
import hummingimage from './assets/Images/hummingbird.jpg';
import pigeonimage from './assets/Images/pigeon.jpg';
import duckimage from './assets/Images/duck.jpg';
import aifox from './assets/Images/Aifox.png';
import chickk from './assets/Images/chick.jpg';
import rabbit from './assets/Images/rabbit.jpg';
import chick from './assets/Images/Hero.png';
import tiger from './assets/Images/tiger.jpg';
import HeroSec from './Components/HeroSec';
import Bulmahead from './Components/Bulmahead';
import Cardhead from './Components/Cardhead';

const App = () => {
  return (
    <div>
     <Navbar/>
     
     <HeroSec title="Welcome to My World " subtitle="Experience the Magic of AI Animals" description="Step into a whimsical realm where artificial intelligence breathes life into adorable creatures. At My Natural AI Zoo, we blend innovation and imagination, offering unique solutions to elevate your business. " imageUrl={chick} />

     <Bulmahead/>
     <BulmaCards 
        image={foximage} title="Fox"  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit." 
      />
     <BulmaCards 
        image={hummingimage} title="Bird"  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit." 
      />
     <BulmaCards 
        image={pigeonimage} title="Pigeon"  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit." 
      />
     <BulmaCards 
        image={duckimage} title="Duck"  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit" 
      />
     <BulmaCards 
        image={aifox} title="Ai Fox"  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit." 
      />
     <BulmaCards 
        image={chickk} title="Chick"  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit." 
      />
     <BulmaCards 
        image={tiger} title="Tiger" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit." 
      />
     <BulmaCards 
        image={rabbit} title="Rabbit"  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit." 
      />
<br />
<Cardhead/>
<Card/>

    </div>
  )
}

export default App