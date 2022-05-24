import { MetaTags } from '@redwoodjs/web'
import squirrelIMG from './Assets/squirrel.jpg'
import squirrelIMGsquare from './Assets/squirrel-square.jpg'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <div className="about-container">
        <div className="about-text-container">
          <h2>About</h2>

          <img src={squirrelIMG} alt="Squirrel at door" />

          <p>
            Labore proident duis cupidatat ipsum Lorem exercitation. Magna qui
            amet sit elit id proident. Nisi ea non exercitation sit magna culpa
            ad deserunt culpa mollit fugiat nostrud nulla. Ut est ex ut culpa
            aliqua nisi ea id anim aliquip. Exercitation duis eiusmod nulla
            veniam. Eiusmod cupidatat dolore et Lorem ut.
          </p>

          <img src={squirrelIMGsquare} alt="Squirrel at door" />

          <p>
            Labore proident duis cupidatat ipsum Lorem exercitation. Magna qui
            amet sit elit id proident. Nisi ea non exercitation sit magna culpa
            ad deserunt culpa mollit fugiat nostrud nulla. Ut est ex ut culpa
            aliqua nisi ea id anim aliquip. Exercitation duis eiusmod nulla
            veniam. Eiusmod cupidatat dolore et Lorem ut.
          </p>
          <p>
            Labore proident duis cupidatat ipsum Lorem exercitation. Magna qui
            amet sit elit id proident. Nisi ea non exercitation sit magna culpa
            ad deserunt culpa mollit fugiat nostrud nulla. Ut est ex ut culpa
            aliqua nisi ea id anim aliquip. Exercitation duis eiusmod nulla
            veniam. Eiusmod cupidatat dolore et Lorem ut.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutPage
