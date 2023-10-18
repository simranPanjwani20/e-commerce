import React, {useState, useEffect}from 'react';
import './style.css';
import carData from '../../data.json'
import { useParams, useHistory } from 'react-router-dom';
import CarCard from '../../components/carCard';
import Pagination from '../../components/pagination';
import Navbar from '../../components/navbarcar';

const ITEMS_PER_PAGE = 6;

const AllCars = () => {
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(parseInt(page) || 1);
  const [filteredData, setfilteredData] = useState(carData.items);

    //managing data change for filter and sort
    useEffect(() => {
    }, [filteredData])

  const totalCars = carData.items.length;
  const totalPages = Math.ceil(totalCars / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedCars = filteredData?.slice(startIndex, endIndex);


  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className='main'>
        <Navbar setfilteredData={setfilteredData}/>
        <div className='allCars'>
      {displayedCars.map((car, index) => (
        <CarCard key={index} carInfo={car} />
      ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default AllCars;