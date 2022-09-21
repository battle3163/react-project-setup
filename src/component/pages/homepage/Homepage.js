
import './homepage.scss';
import SlickSlider from '../../helper/SlickSlider'
import HomepageImage from './Homepage-Image';
function Homepage() {
  const images1 = [
    { 'imageSrc': '/slider-image.svg', 'title': 'TEst', alt: 'TEst1' },
    { 'imageSrc': '/slider-image.svg', 'title': 'TEst', alt: 'TEst1' },
    { 'imageSrc': '/slider-image.svg', 'title': 'TEst', alt: 'TEst1' },
    { 'imageSrc': '/slider-image.svg', 'title': 'TEst', alt: 'TEst1' },
    { 'imageSrc': '/slider-foodimage.svg', 'title': 'TEst', alt: 'TEst1' },
  ]
  const images2 = [
    { 'imageSrc': '/slider-foodimage.svg', 'title': 'TEst', alt: 'TEst1' },
    { 'imageSrc': '/slider-foodimage.svg', 'title': 'TEst', alt: 'TEst1' },
    { 'imageSrc': '/slider-foodimage.svg', 'title': 'TEst', alt: 'TEst1' },
    { 'imageSrc': '/slider-foodimage.svg', 'title': 'TEst', alt: 'TEst1' },
    { 'imageSrc': '/slider-foodimage.svg', 'title': 'TEst', alt: 'TEst1' },
  ]
  return (
    <div className='homepage'>
      {/* <div className="image-text">
        <img src="/homepage-mainmage.png" className="h-[337px] w-[100%]" alt='home' />
        <div className="hompage-image-text">
          <h2 className='main-heading'>Best Home Made Food</h2>
          <p className='sub-heading'>At your doorstep!!</p>
        </div>
      </div> */}
      <HomepageImage/>
      <div className='homepage-slider'>
        <div className='popular-kitchens'>
          <div className='slider-title'>
            <h2 className='main-heading'>Popular Kitchens</h2>
            <p className='sub-heading'>Top kitchens delivering home made food at your doorstep</p>
          </div>
          <SlickSlider images={images1} />
        </div>
        <div className='popular-kitchens'>
          <div className='slider-title'>
            <div className='slider-title'>
              <h2 className='main-heading'>Popular Foods</h2>
              <p className='sub-heading'>Top kitchens delivering home made food at your doorstep</p>
            </div>
          </div>
          <SlickSlider images={images2} />
        </div>
      </div>
    </div>
  )
}

export default Homepage;