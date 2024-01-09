import {
  ErrorContainer,
  ErrorImage,
  ErrorHeading,
  ErrorCaption,
} from './styledComponents'

const NotFound = () => (
  <ErrorContainer>
    <ErrorImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <ErrorHeading>Page Not Found</ErrorHeading>
    <ErrorCaption>
      We are sorry, the page you requested could not be found
    </ErrorCaption>
  </ErrorContainer>
)

export default NotFound
