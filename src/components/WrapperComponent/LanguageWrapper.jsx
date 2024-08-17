
import JsLogo from "../../assets/images/icon-js.svg"
import HTMLLogo from "../../assets/images/icon-html.svg"
import CSSLogo from "../../assets/images/icon-css.svg"
import LanguageItem from '../LanguageItem/LanguageItem'
import './LanguageWrapper.css'
function LanguageWrpper() {
    return(
        <div id="LanguageWrpper">
       < LanguageItem LanguageName="HTML" LanguageIcon={HTMLLogo}></ LanguageItem>
       < LanguageItem LanguageName="CSS" LanguageIcon={CSSLogo}></ LanguageItem>
       < LanguageItem LanguageName="Javascript" LanguageIcon={JsLogo}></ LanguageItem> 
       < LanguageItem LanguageName="Accessibility" LanguageIcon={HTMLLogo}></ LanguageItem>
       </div>
          );

}
export default LanguageWrpper;