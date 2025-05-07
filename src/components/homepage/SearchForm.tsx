import React, { useState } from 'react';

const SearchForm: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedCategory, setSelectedCategory] = useState('Luxury');
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const categories = ['Luxury', 'Standard', 'Budget', 'Family', 'Group'];

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
    setIsMonthDropdownOpen(false);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsCategoryDropdownOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', { selectedMonth, selectedCategory });
    // Implement search functionality here
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="bg-white flex w-full max-w-[950px] items-center gap-8 text-black tracking-[0.5px] justify-center flex-wrap mt-[352px] p-8 rounded-[101px] max-md:max-w-full max-md:mt-10 max-md:px-5"
    >
      <div className="self-stretch flex min-w-60 items-center gap-4 my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/2572cf5e93191981d7eca9cdb3851b18da0b0243?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[72px] self-stretch shrink-0 my-auto"
          alt="Trip icon"
        />
        <div className="self-stretch min-w-60 my-auto">
          <div className="text-xl font-bold">
            Find an Umrah Trip
          </div>
          <div className="text-base font-normal leading-8 mt-1">
            Discover the perfect trip suit for you!
          </div>
        </div>
      </div>
      
      <div className="self-stretch flex flex-col items-stretch whitespace-nowrap justify-center my-auto relative">
        <label className="text-base font-normal leading-8" htmlFor="month-select">
          Month
        </label>
        <div className="flex items-center gap-6 text-xl font-bold mt-1 cursor-pointer" onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}>
          <div className="self-stretch my-auto">
            {selectedMonth}
          </div>
          <div className="self-stretch flex w-6 shrink-0 h-6 my-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={isMonthDropdownOpen ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
            </svg>
          </div>
        </div>
        
        {isMonthDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 z-10 w-full">
            {months.map((month) => (
              <div 
                key={month} 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleMonthSelect(month)}
              >
                {month}
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="self-stretch flex flex-col items-stretch whitespace-nowrap justify-center my-auto relative">
        <label className="text-base font-normal leading-8" htmlFor="category-select">
          Category
        </label>
        <div className="flex items-center gap-6 text-xl font-bold mt-1 cursor-pointer" onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}>
          <div className="self-stretch my-auto">
            {selectedCategory}
          </div>
          <div className="self-stretch flex w-6 shrink-0 h-6 my-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={isCategoryDropdownOpen ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
            </svg>
          </div>
        </div>
        
        {isCategoryDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 z-10 w-full">
            {categories.map((category) => (
              <div 
                key={category} 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
      
      <button 
        type="submit"
        className="self-stretch bg-black gap-2.5 text-base text-white font-semibold whitespace-nowrap tracking-[0.3px] my-auto px-6 py-3 rounded-3xl hover:bg-gray-800 transition-colors max-md:px-5"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
