import './reset.css';
import './buttons.scss';
import './layout.scss';
import './navbar.scss';
import './type.scss';
import './mediaq.scss';


document.querySelector('.toggleNav').addEventListener('click', function() {
  var navBar = document.querySelector('nav');
  if (navBar.className === 'clearfix') {
    navBar.className = 'clearfix none';
    var changezIndex = setTimeout(function() {
      navBar.style.zIndex = 1;
    }, 200);
  } else {
    navBar.style.zIndex = 0;
    navBar.className = 'clearfix';
  };
});