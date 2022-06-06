import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { useCallback, useMemo } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import BurgerSVG from 'src/layouts/PublicLayout/assets/Burger.svg?url'
import MartiniSVG from 'src/layouts/PublicLayout/assets/Martini.svg?url'
import TacoSVG from 'src/layouts/PublicLayout/assets/Taco.svg?url'
import WineSVG from 'src/layouts/PublicLayout/assets/Wine.svg?url'

const PublicLayout = ({ children }) => {
  const { isAuthenticated, logOut } = useAuth()

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

  const handleLogout = (e) => {
    if (e.code === 'Enter') logOut()
  }

  return (
    <div className="public-layout">
      <Particles options={options} init={particlesInit} />

      <header className="header">
        <h1 className="title"> Indy Food </h1>

        <nav className="public-layout">
          <Link to={routes.about()}>About</Link>
          <Link to={routes.posts()}>Posts</Link>
          <Link to={routes.suggestion()}>Suggestion</Link>
          {isAuthenticated && (
            <span
              onKeyDown={(e) => handleLogout(e)}
              tabIndex={0}
              role="button"
              onClick={() => logOut()}
            >
              Logout
            </span>
          )}
        </nav>
      </header>
      <div className="container">{children}</div>
      <footer>
        <p>
          Designed & Created by{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/casey-mockbee/"
          >
            Casey Mockbee
          </a>
        </p>
      </footer>
    </div>
  )
}

export default PublicLayout
