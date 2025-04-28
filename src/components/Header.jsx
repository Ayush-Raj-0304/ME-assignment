import Logo from './Logo';
import Button from './Button';

const Header = () => {
  const navItems = ['Home', 'About Us', 'Plans', 'Testimonials', 'Privacy Policy', 'More'];
  
  return (
    <header className="flex justify-between items-center p-4 px-10 text-white">
      <Logo />
      <nav className="hidden md:block pr-6">
        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="#" className="hover:text-blue-200">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Button text="Get Started" isPrimary={false}/>
    </header>
  );
};

export default Header;