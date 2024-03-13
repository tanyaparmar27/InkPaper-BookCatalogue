
const BookMainCard=()=>{

  const handleStatusChange = () => {
    console.log("hi")
  };
  
  return (
    <div className="border border-gray-300 dark:border-gray-700 shadow-md rounded-lg p-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <img src="https://images.pexels.com/photos/4394220/pexels-photo-4394220.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="h-80 rounded-lg object-cover bg-gray-300 dark:bg-gray-700 mb-4"></img>
            <br></br>
            <div>
                <select
                  // value={selectedStatus}
                  onChange={handleStatusChange}
                  className="ml-2 bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  <option value="want-to-read">Want to read</option>
                  <option value="currently-reading">Currently reading</option>
                  <option value="already-read">Already read</option>
                </select>
              </div>
          </div>
          
          <div className="md:flex-1 px-4">
            <h2 className="text-3xl font-bold text-orange-800 dark:text-orange-500 mb-2">{bookName}</h2>
            <p className="text-1xl font-bold text-orange-800 dark:text-orange-500 mb-2">by Author</p>
            
            <br />
            <div>
              <span className="font-bold text-orange-800 dark:text-orange-500">Book Gist</span>
              <p className="text-orange-600 dark:text-orange-400 text-sm mt-2">
              Jay Shetty, social media superstar and host of the #1 podcast ‘On Purpose’, distils the timeless wisdom he learned as a practising monk into practical steps anyone can take every day to live a less anxious, more meaningful life. Over the past three years, Jay Shetty has become one of the world’s most popular influencers. One of his clips was the most watched video on Facebook last year, with over 360 million views. His social media following totals over 32 million, he has produced over 400 viral videos, which have amassed more than 5 billion views, and his podcast, ‘On Purpose’, is consistently ranked the world’s #1 health-related podcast. In this inspiring, empowering book, Shetty draws on his time as a monk in the Vedic tradition to show us how we can clear the roadblocks to our potential and power. Drawing on ancient wisdom and his own rich experiences in the ashram, “Think Like a Monk” reveals how to overcome negative thoughts and habits, and access the calm and purpose that lie within all of us. The lessons monks learn are profound but often abstract. Shetty transforms them into advice and exercises we can all apply to reduce stress, improve focus, improve relationships, identify our hidden abilities, increase self-discipline and give the gifts we find in ourselves to the world. Shetty proves that everyone can – and should – think like a monk
              </p>
              <br />
              <div className="flex items-center">
                <span className="font-bold text-orange-800 dark:text-orange-500">Published on: </span>
              </div>            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 


export default BookMainCard;
