function BookMainCard() {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4"></div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">dropdown</button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-brown-700 dark:text-brown-500 mb-2">Book</h2>
              <p className="text-1xl font-bold text-brown-700 dark:text-brown-500 mb-2">by </p>
              <br />
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Book Sum</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                  lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                  ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                  sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                </p>
              </div>
              <br />
              <div>
                <span className="font-bold text-brown-700 dark:text-brown-500">Published on : </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default BookMainCard
  