import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div>

            <h3 className='p-4 bg-white rounded-lg mb-2 font-bold text-slate-600'>{bookmark.title}</h3>
            
        </div>
    );
};

Bookmark.PropTypes ={
    bookmark: PropTypes.object
}

export default Bookmark;