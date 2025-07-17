import prof from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div >
            <div className='mx-auto w-4/5'>
                <div className='flex justify-between items-center  p-2 '>
                    <h3 className='font-bold text-2xl text-slate-500'>READ CAFE</h3>
                    <img src={prof} alt="" />
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Header;