import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks} ) => {
    
    return (
        <div className='md:w-1/3'>
            <div className='bg-slate-200 p-4 text-center rounded-lg text-blue-500 font-bold border solid border-blue-500 mb-6 round'>
                <p>Spent Time on Read: 177 mins</p>
            </div>

            <div className='bg-slate-200 p-4 rounded-lg'>
                <h2 className='font-bold mb-3 text-2xl'>Bookmarked Blogs: {bookmarks.length} </h2>

                {
                    bookmarks.map(bookmark => <Bookmark
                    key={bookmark.id}
                     bookmark={bookmark}>

                    </Bookmark>)
                }
              


            </div>
            
        </div>
    );
};

Bookmarks.PropTypes ={
    bookmarks: PropTypes.array
}


export default Bookmarks;