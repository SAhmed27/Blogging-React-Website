import './header.css';

export default function Header() {
  return (
    <div className='Header'>
      <div className='headerTitles'>
        <span className='headerTitlesSm'>React & Node</span>
        <span className='headerTitlesLg'> Blog </span>
      </div>
      <img className="headerImg" src="https://i.pinimg.com/originals/e9/f1/a2/e9f1a20397819a9344c2e1d877645879.jpg" alt="" />
    </div>
  )
}
