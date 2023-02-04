import logo from "../assets/img/logo_footer_y.png"
import Nav from "./Nav"
const address = "777 W. Chicago Avenue, Chicago, IL"
const phone_number = "+52 5566771144"
const email = "contact@littlelemon.com"
const Footer = () => {
    return (
        <footer>
          <div className="container footer-container">
            <div className="footer-container-row1">
                <img className="logo-footer" src={logo} alt='' />

                <div className="footer-nav">
                    <h4 className="footer-section-title">Navigation</h4>
                    <Nav />
                </div>
                
                <div className="footer-contact">
                    <h4 className="footer-section-title">Contact</h4>
                    <p>{address}</p>
                    <p>{phone_number}</p>
                    <p>{email}</p>
                </div>
            </div>
            <p className="copyright">Copyright &copy; Little Lemon & Becon Daniel</p>
          </div>
        </footer>
    )
}

export default Footer