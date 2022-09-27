import '../assets/css/css-footer/footer.css'
import Company from '../Atoms/Atoms-Footer/Company';
import Help from '../Atoms/Atoms-Footer/Help';
import Shop from '../Atoms/Atoms-Footer/Shop';
import Social from '../Atoms/Atoms-Footer/Social';

function Footer() {
    return ( 
        <>
        <footer class="footer">
  	 <div class="container2">
  	 	<div class="row">
				<Company></Company>
				<Help></Help>
				<Shop></Shop>
				<Social></Social>
  	 	</div>
  	 </div>
  </footer>
        </>
     );
}

export default Footer;