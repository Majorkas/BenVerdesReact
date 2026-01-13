import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import waterWeight from './assets/Water-Weight.jpeg'
import mixedSignals from './assets/Mixed-Signals.jpeg'
import myMarigolds from './assets/My-Marigolds!.PNG'
import spaceFest from './assets/Space-Fest.jpeg'
const App = () => {
useEffect(() => {
    // Fade out topnav when user scrolls past the hero
    const nav = document.getElementById('myTopnav');
    const hero = document.querySelector('.hero');
    if (!nav || !hero) return;

    function updateNavFade() {
      const threshold = hero.offsetHeight - nav.offsetHeight;
      // Don't hide nav if mobile menu is open
      if (nav.classList.contains('responsive')) {
        return;
      }
      if (window.scrollY >= threshold) {
        nav.classList.add('visible');
      } else {
        nav.classList.remove('visible');
      }
    }

    // Wait for full page load (images/fonts) before initial check so hero height is correct
    window.addEventListener('load', updateNavFade);

    // Fade in the hero title after load for a smoother entrance
    const heroTitle = document.querySelector('.hero-title');
    const handleLoad = () => {
      if (!heroTitle) return;
      // Respect reduced motion preferences
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        heroTitle.classList.add('fade-in');
        return;
      }
      // micro delay to ensure paint and then animate
      requestAnimationFrame(() => setTimeout(() => heroTitle.classList.add('fade-in'), 80));
    };
    window.addEventListener('load', handleLoad);

    // Fade out hero title as user scrolls down
    function updateHeroTitleFade() {
      if (!heroTitle || !hero) return;
      const heroHeight = hero.offsetHeight;
      const scrollProgress = window.scrollY / (heroHeight * 0.10); // fade out over 10% of hero height
      const opacity = Math.max(0, 1 - scrollProgress);
      heroTitle.style.opacity = opacity;
    }

    const handleScroll = () => {
      updateNavFade();
      updateHeroTitleFade();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateNavFade);

    // Close the responsive mobile nav when any nav link is clicked
    const navLinks = nav.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('responsive')) {
          nav.classList.remove('responsive');
          // recalculate visibility based on scroll position
          updateNavFade();
        }
      })
    });

    // Cleanup
    return () => {
      window.removeEventListener('load', updateNavFade);
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateNavFade);
    };
  }, []);
  return (
  <>
    <Nav />
    <Hero />
    <HeadingOne id="about" heading="About Me" />
    <About />
    <HeadingOne id="discograhy" heading="Discography" />
    <Studio />
    <FilmMedia />
    <HeadingOne id='contact' heading='Contact Me' />
    <ContactForm />

  </>
  )
}

const Nav = () => {
  const  navBar = () => {
  const x = document.getElementById("myTopnav");
  if (!x) return;
  // toggle responsive state without wiping other classes
  const isNowResponsive = x.classList.toggle('responsive');
  // when menu is opened on mobile, make sure it's visible regardless of scroll
  if (isNowResponsive) {
    x.classList.add('visible');
  } else {
    // when closing, prefer the normal scroll-based visibility
    const hero = document.querySelector('.hero');
    if (hero && window.scrollY < (hero.offsetHeight - x.offsetHeight)) {
      x.classList.remove('visible');
    }
  }
}
  return (
   <nav className="nav">
    <div className="topnav" id="myTopnav">
      <div className="nav-links">
        <a href="#home" className="active">Home</a>
        <a href="#discography">Discography</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
        <button className="icon" onClick={navBar} aria-label="Toggle navigation menu">
        <span className="hidden">menu button</span>
          <i className="fa fa-bars"></i>
      </button>

    </div>

</nav>
  )
}

const Hero = () => {
  return (
    <>
    <span id="home"></span>
    <section className="hero" aria-hidden="false">
    <div className="hero-title">Ben Verdes</div>
      </section>
    </>
  )
}
const About = () => {
  return (
    <div className="about">
    <p>

        Ben Verdes is a songwriter, film composer and music producer from Wicklow, Ireland. He has worked on award nominated and and award winning short-films. He is currently studying for a BA (Hons) in Creative Music Production at Dun Laoghaire, Institute of Art, Design and Technology (IADT).

    </p>

  </div>
  )
}

const HeadingOne = (props) => {
  return (
    <h1 id={props.id} className="heading">{props.heading}</h1>
  )

}
const HeadingTwo = (props) => {
  return (
    <h2 className="title">{props.heading}</h2>
  )

}

const Studio = () => {
  return (

  <div className="studio-section">
    <HeadingTwo heading="Studio" />
    <div className='studio-cards'>
    <StudioCard
      heading='My Dear...'
      songID='https://open.spotify.com/embed/track/2JUhCuCVQvEYKYm2g6z5TV?utm_source=generator&theme=0'
      desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut necessitatibus voluptates quidem maiores eaque. Iure nam itaque libero, doloribus voluptate distinctio corrupti? Sapiente aperiam ut rem iusto magni quaerat.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, veniam quisquam similique harum modi velit quidem eligendi unde dolore cupiditate optio dolores, expedita quam qui eveniet minus inventore tenetur veritatis.'
    />
      <StudioCard
      heading='Prospect'
      songID='https://open.spotify.com/embed/track/0DcWjXflMeyVYxZtqWIfj5?utm_source=generator&theme=0'
      desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut necessitatibus voluptates quidem maiores eaque. Iure nam itaque libero, doloribus voluptate distinctio corrupti? Sapiente aperiam ut rem iusto magni quaerat.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, veniam quisquam similique harum modi velit quidem eligendi unde dolore cupiditate optio dolores, expedita quam qui eveniet minus inventore tenetur veritatis.'
    />
    <StudioCard
      heading='Blarn'
      songID='https://open.spotify.com/embed/track/74SKmnEEk7KggPNKEyzC2t?utm_source=generator&theme=0'
      desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut necessitatibus voluptates quidem maiores eaque. Iure nam itaque libero, doloribus voluptate distinctio corrupti? Sapiente aperiam ut rem iusto magni quaerat.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, veniam quisquam similique harum modi velit quidem eligendi unde dolore cupiditate optio dolores, expedita quam qui eveniet minus inventore tenetur veritatis.'
    />
      </div>
  </div>
  )
}
const FilmMedia = () => {
  return (
    <>
      <FilmCard
      img={waterWeight}
      alt='Water Weight'
      heading='Water Weight'
      dir='Dir. Leah O’ Riordan'
      dirLink='https://gradx.ie/courses/film-and-broadcasting/leah-oriordan/'
      desc='Water Weight is a harrowing yet heartfelt tale written &amp; directed by Leah O’Riordan, deriving from personal experience. It explores the devastating mental and physical effects of eating disorders through the lens of Joy, a teenage girl battling with anorexia in a psychiatric facility. She struggles to navigate her recovery in a foreign environment and her desire to be home forces her to make difficult decisions. The film shows that recovery from eating disorders is a complex,  non-linear process, but that it is attainable with support and guidance.'
      legend='Score Writer, Producer and Mixer'
      />
      <FilmCard
      img={mixedSignals}
      alt='Mixed Signals'
      heading='Mixed Signals'
      dir='Dir. Meaghan Duffy'
      dirLink=''
      desc='The film follows Matt, a young man who has developed a crush on a young woman whom he has noticed at the bus stop , and the comedy of errors he goes through trying to speak to her. The film comments on prejudices and hidden disabilities, all while presenting it in a comical, touching manner.'
      legend='Score Writer, Producer and Mixer'
      />
      <FilmCard
      img={myMarigolds}
      alt='My Marigolds!'
      heading='My Marigolds'
      imgClass='portrait-img'
      dir='Dir. Holly Emerson-Byrne'
      dirLink='https://onshow.iadt.ie/onshow/2025/holly-emerson-byrne'
      desc='"My Marigolds!" is a short film about a little hedgehog going about his day, gardening and enjoying the world, when his gloves get swept away by the wind! He must explore a big and scary environment to retrieve his beloved gloves. He has to be brave, his neighbours seem much, much bigger than him. This film is hugely inspired by children’s storybooks, specifically the coziness and hand drawn feel of every page'
      legend='Score Writer, Producer and Mixer'
      />
      <FilmCard
      img={spaceFest}
      alt='Space Fest'
      heading='RTÉ Galaxy Fest Festive Special'
      dir='Dir. Aidan Fitzmaurice'
      dirLink='http://fancyvegas.com/'
      desc='Join Astrid, Eve, Harper, and Lennon, as they boldly go where no kid has gone before, encountering everything from garden galaxies to supernovas, from multiple replicas of Earth to a cluster of singing orbs that seem to be holding the very fabrics of the Universe together.'
      legend='Engineer'
      />

      </>

  )
}

const StudioCard = (props) => {
  return (
    <div className="spotify">

      <iframe title="spotify link" className="spotify-song" data-testid="embed-iframe" src={props.songID}  height="210"  allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

        <div className="song-text">
        <HeadingTwo heading={props.heading} />
        <p className="song-desc">{props.desc}</p>

      </div>
    </div>
  )

}
const FilmCard = (props) => {
return (
  <div className="spotify">

    <img src={props.img} alt={props.alt} className={props.imgClass} />

        <div className="song-text">
        <HeadingTwo heading={props.heading}/>
      <a target='_blank' href={props.dirLink} className="director">{props.dir}</a>
        <p className="song-desc">{props.desc}</p>
      <span className="card-legend">My Contributions: <br />{props.legend}</span>
      </div>
  </div>
)
}
const ContactForm = () => {
  return (

  <div className="form-div">

    <form method="post" action="https://formsubmit.co/13aa27f642a79fe69e64b5f443cff191"  id="form" className="topBefore">
      <input type="hidden" name="_next" value="https://majorkas.github.io/BenVerdes/message.html"/>
      <input type="text" name="_honey" style={{display:'none'}}/>
      <input type="hidden" name="_captcha" value="false"/>
	    <input id="name" type="text" placeholder="NAME" required/>
		  <input id="email" type="text" placeholder="E-MAIL" required/>
		  <textarea id="message" type="text" placeholder="MESSAGE" required></textarea>
      <button id="submit" type="submit">SEND !</button>
    </form>
  </div>

  )



 }



export default App
