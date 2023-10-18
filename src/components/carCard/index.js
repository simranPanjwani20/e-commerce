import React, {useState, useEffect}from 'react';
import Slider from '../slidercar'
import './style.css';

const CarCard = (props) => {
  console.log(props.carInfo)
  const carInfo = props.carInfo;

  const [isWishlisted, setWishlist] = useState(false);

  //manage wishlist btn
  const handleWishlist = () => {
    if(isWishlisted){
      setWishlist(false)
    }
    else
    setWishlist(true);
  };

  const images = [carInfo.image,carInfo.imageUrl, "https://tse4.mm.bing.net/th?id=OIP.RpYNIdxgYdJJx6zdhukvAAHaEK&pid=Api&P=0&h=180"]; 

  return (
    <div className="car-card">
        <div className="imges">
     <Slider images={images}/>
     </div>
      <div className="car-details">
        <div className="car-name-year">
          <h2>{carInfo.carVariantId}</h2>
          <div className="year-badge">{carInfo.year}</div>
        </div>
        <div className="car-features">
          <div className="feature">
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18C3 15.3945 4.66081 13.1768 6.98156 12.348C7.61232 12.1227 8.29183 12 9 12C9.70817 12 10.3877 12.1227 11.0184 12.348C11.3611 12.4703 11.6893 12.623 12 12.8027C12.3107 12.623 12.6389 12.4703 12.9816 12.348C13.6123 12.1227 14.2918 12 15 12C15.7082 12 16.3877 12.1227 17.0184 12.348C19.3392 13.1768 21 15.3945 21 18V21H15.75V19.5H19.5V18C19.5 15.5147 17.4853 13.5 15 13.5C14.4029 13.5 13.833 13.6163 13.3116 13.8275C14.3568 14.9073 15 16.3785 15 18V21H3V18ZM9 11.25C8.31104 11.25 7.66548 11.0642 7.11068 10.74C5.9977 10.0896 5.25 8.88211 5.25 7.5C5.25 5.42893 6.92893 3.75 9 3.75C10.2267 3.75 11.3158 4.33901 12 5.24963C12.6842 4.33901 13.7733 3.75 15 3.75C17.0711 3.75 18.75 5.42893 18.75 7.5C18.75 8.88211 18.0023 10.0896 16.8893 10.74C16.3345 11.0642 15.689 11.25 15 11.25C14.311 11.25 13.6655 11.0642 13.1107 10.74C12.6776 10.4869 12.2999 10.1495 12 9.75036C11.7001 10.1496 11.3224 10.4869 10.8893 10.74C10.3345 11.0642 9.68896 11.25 9 11.25ZM13.5 18V19.5H4.5V18C4.5 15.5147 6.51472 13.5 9 13.5C11.4853 13.5 13.5 15.5147 13.5 18ZM11.25 7.5C11.25 8.74264 10.2426 9.75 9 9.75C7.75736 9.75 6.75 8.74264 6.75 7.5C6.75 6.25736 7.75736 5.25 9 5.25C10.2426 5.25 11.25 6.25736 11.25 7.5ZM15 5.25C13.7574 5.25 12.75 6.25736 12.75 7.5C12.75 8.74264 13.7574 9.75 15 9.75C16.2426 9.75 17.25 8.74264 17.25 7.5C17.25 6.25736 16.2426 5.25 15 5.25Z" fill="#080341"></path> </g></svg>
            <p className='featureofIcon'>4 People</p>
          </div>
          <div className="feature">
            <svg width="30px" height="30px" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M522.267 910.508c16.962 0 30.72-13.758 30.72-30.72v-736.43c0-16.962-13.758-30.72-30.72-30.72H143.356c-16.962 0-30.72 13.758-30.72 30.72v736.43c0 16.962 13.758 30.72 30.72 30.72h378.911zm0 40.96H143.356c-39.583 0-71.68-32.097-71.68-71.68v-736.43c0-39.583 32.097-71.68 71.68-71.68h378.911c39.583 0 71.68 32.097 71.68 71.68v736.43c0 39.583-32.097 71.68-71.68 71.68zm388.62-678.049v500.265c0 49.412-40.054 89.467-89.467 89.467-49.443 0-89.498-40.054-89.498-89.467 0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48c0 72.034 58.393 130.427 130.427 130.427 72.065 0 130.458-58.393 130.458-130.427V273.419c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"></path><path d="M731.92 779.436V368.648c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v410.788c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"></path><path d="M731.943 365.513v-34.499c0-49.414-40.053-89.467-89.467-89.467-49.415 0-89.477 40.054-89.477 89.467v34.499c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-34.499c0-26.789 21.722-48.507 48.517-48.507 26.792 0 48.507 21.715 48.507 48.507v34.499c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48zM942.5 254.981L767.785 80.266c-7.998-7.998-20.965-7.998-28.963 0s-7.998 20.965 0 28.963l174.715 174.715c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963zM438.84 281.52c5.657 0 10.24-4.583 10.24-10.24V225.2c0-5.657-4.583-10.24-10.24-10.24H225.541a10.238 10.238 0 00-10.24 10.24v46.08c0 5.657 4.583 10.24 10.24 10.24H438.84zm0 40.96H225.541c-28.278 0-51.2-22.922-51.2-51.2V225.2c0-28.278 22.922-51.2 51.2-51.2H438.84c28.278 0 51.2 22.922 51.2 51.2v46.08c0 28.278-22.922 51.2-51.2 51.2z"></path><path d="M928.972 358.832h-48.978c-11.309 0-20.48-9.171-20.48-20.48V191.091c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v147.261c0 33.931 27.509 61.44 61.44 61.44h48.978c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48z"></path></g></svg>
            <p className='featureofIcon'>{carInfo.fuelType}</p>
          </div>
          <div className="feature">
          <svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-speedometer2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"></path> <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"></path> </g></svg>
            <p className='featureofIcon'>{carInfo.kilometer}</p>
          </div>
          <div className="feature">
          <svg width="40px" height="40px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M256 25C128.3 25 25 128.3 25 256s103.3 231 231 231 231-103.3 231-231S383.7 25 256 25zm0 30c110.9 0 201 90.1 201 201s-90.1 201-201 201S55 366.9 55 256 145.1 55 256 55zM80.52 203.9c-4.71 19.2-7.52 37-7.52 54 144.7 30.3 121.5 62.4 148 177.8 11.4 2.1 23 3.3 35 3.3s23.6-1.2 35-3.3c26.5-115.4 3.3-147.5 148-177.8-.6-18.9-3-38.4-7.5-54C346.7 182.7 301.1 172 256 172c-45.1 0-90.7 10.7-175.48 31.9zM256 183c40.2 0 73 32.8 73 73s-32.8 73-73 73-73-32.8-73-73 32.8-73 73-73zm0 18c-30.5 0-55 24.5-55 55s24.5 55 55 55 55-24.5 55-55-24.5-55-55-55z"></path></g></svg>
            <p className='featureofIcon'>Automatic</p>
          </div>
        </div>
        <hr className="separator" />
        <div className="car-price-actions">
          <div className="car-price"><span className="amtCar">${carInfo.exShowRoomPrice}</span>/month</div>
          <div className="car-actions">
            {
                isWishlisted?<svg onClick={handleWishlist} width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#1C274C"></path> </g></svg>:<svg onClick={handleWishlist} width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            }
            <button className="rent-now-button">Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
