
import './homepage.scss';
import SlickSlider from '../../helper/SlickSlider'
import HomepageImage from './Homepage-Image';
import SlickSliderCopy from '../../helper/SlickSliderCopy';
function Homepage() {
  const images1 = [
    { imageSrc: '/slider-foodimage.svg', title: 'World famous 1', alt: 'World famous' ,rating:3,variaty:["North America","Pure Vage"],isAvailable:true},
    { imageSrc: '/slider-image.svg', title: 'World famous 2', alt: 'World famous' ,rating:4,variaty:["South America","Pure Vage"],isAvailable:false},
    { imageSrc: '/slider-foodimage.svg', title: 'World famous 3', alt: 'World famous' ,rating:1.5,variaty:["North India","Pure Vage"],isAvailable:true},
    { imageSrc: '/slider-image.svg', title: 'World famous 4', alt: 'World famous' ,rating:2.5,variaty:["North South","Pure Vage"],isAvailable:false},
    { imageSrc: '/slider-foodimage.svg', title: 'World famous 5', alt: 'World famous' ,rating:2,variaty:["South America","Pure Vage"],isAvailable:false},
    { imageSrc: '/slider-image.svg', title: 'World famous 6', alt: 'World famous' ,rating:4.5,variaty:["North America","Pure Vage"],isAvailable:true},
    { imageSrc: '/slider-foodimage.svg', title: 'World famous 1.1', alt: 'World famous' ,rating:3,variaty:["North America","Pure Vage"],isAvailable:true},
    { imageSrc: '/slider-image.svg', title: 'World famous 1.2', alt: 'World famous' ,rating:3.8,variaty:["South America","Pure Vage"],isAvailable:false},
    { imageSrc: '/slider-foodimage.svg', title: 'World famous 1.3', alt: 'World famous' ,rating:5,variaty:["North India","Pure Vage"],isAvailable:true},
    { imageSrc: '/slider-image.svg', title: 'World famous 1.4', alt: 'World famous' ,rating:2.5,variaty:["North South","Pure Vage"],isAvailable:false},
    { imageSrc: '/slider-foodimage.svg', title: 'World famous 1.5', alt: 'World famous' ,rating:2,variaty:["South America","Pure Vage"],isAvailable:false},
    { imageSrc: '/slider-image.svg', title: 'World famous 1.6', alt: 'World famous' ,rating:4.5,variaty:["North America","Pure Vage"],isAvailable:true},
    { imageSrc: '/slider-foodimage.svg', title: 'World famous 2.1', alt: 'World famous' ,rating:3,variaty:["North America","Pure Vage"],isAvailable:true},
    { imageSrc: '/slider-image.svg', title: 'World famous 2.2', alt: 'World famous' ,rating:4.8,variaty:["South America","Pure Vage"],isAvailable:false},
    { imageSrc: '/slider-foodimage.svg', title: 'World famous 2.3', alt: 'World famous' ,rating:5,variaty:["North India","Pure Vage"],isAvailable:true},
    { imageSrc: '/slider-image.svg', title: 'World famous 2.4', alt: 'World famous' ,rating:2.5,variaty:["North South","Pure Vage"],isAvailable:false},
    { imageSrc: '/slider-foodimage.svg', title: 'World famous 2.5', alt: 'World famous' ,rating:2,variaty:["South America","Pure Vage"],isAvailable:false},
    { imageSrc: '/slider-image.svg', title: 'World famous 2.6', alt: 'World famous' ,rating:4.7,variaty:["North America","Pure Vage"],isAvailable:true}
]

  return (
    <div className='homepage'>
      {/* <div className="image-text max-w-[1350px]">
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
          <SlickSliderCopy images={images1} />
        </div>
        <div className='popular-kitchens'>
          <div className='slider-title'>
            <div className='slider-title'>
              <h2 className='main-heading'>Popular Foods</h2>
              <p className='sub-heading'>Top kitchens delivering home made food at your doorstep</p>
            </div>
          </div>
          <SlickSliderCopy images={images1} />
        </div>
      </div>
    </div>
  )
}

export default Homepage;