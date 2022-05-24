import { Link, routes } from '@redwoodjs/router'
import { useCallback, useMemo } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import BurgerSVG from 'src/layouts/PublicLayout/assets/Burger.svg?url'
import MartiniSVG from 'src/layouts/PublicLayout/assets/Martini.svg?url'
import TacoSVG from 'src/layouts/PublicLayout/assets/Taco.svg?url'
import WineSVG from 'src/layouts/PublicLayout/assets/Wine.svg?url'

const PublicLayout = ({ children }) => {
  const particlesInit = useCallback((main) => {
    loadSlim(main)
  }, [])

  const options = useMemo(() => {
    return {
      fullScreen: { zIndex: -1 },
      pauseOnBlur: true,
      autoPlay: true,
      background: {
        color: {
          value: '#C9B7C8',
        },
      },
      fpsLimit: 120,
      particles: {
        collisions: {
          enable: false,
        },
        move: {
          direction: 'bottom',
          enable: true,
          outMode: 'out',
          random: true,
          speed: { min: 1, max: 2 },
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 10,
        },
        opacity: {
          value: 1,
          random: false,
        },
        rotate: {
          animation: {
            enable: true,
            speed: 3,
            sync: false,
          },
          direction: 'random',
          random: true,
          value: 1,
        },
        shape: {
          type: 'image',
          image: [
            {
              src: BurgerSVG,
            },
            {
              src: TacoSVG,
            },
            {
              src: MartiniSVG,
            },
            {
              src: WineSVG,
            },
          ],
        },
        size: {
          value: 80,
        },
        shadow: {
          enable: true,
          color: 'rgba(0,0,0)',
          offset: {
            y: 2,
          },
        },
      },
      detectRetina: true,
    }
  }, [])

  return (
    <>
      <Particles options={options} init={particlesInit} />

      <header className="header">
        <h1 className="title"> Indy Food </h1>
        <nav>
          <Link to={routes.about()}>About</Link>
          <Link to={routes.posts()}>Posts</Link>
          <Link to={routes.suggestion()}>Suggestion</Link>
        </nav>
      </header>
      <div className="container">{children}</div>
      <footer>
        <p>
          Designed by{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/casey-mockbee/"
          >
            Casey Mockbee
          </a>
        </p>
      </footer>
    </>
  )
}

export default PublicLayout
