
import TodoLogo from "../assets/images/todo-logo1.png";

const Header = () => {
  return (
    <div className='header-container'>
        <div className="head-left">
            <img src={TodoLogo} alt="todologo" className="todologo" />
            <div>
                <h2>Task <span>Flow</span> </h2>
                <small>Organize your tasks,Stay focus,Get things done!</small>
            </div>
        </div>
        <div className="head-right">
            <h3 className="user-box">JR</h3>
            <div className="info">
                <h4>Hi,James</h4>
                <small>keep going</small>
            </div>
        </div>
    </div>
  )
}

export default Header;