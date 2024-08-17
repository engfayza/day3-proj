import './LanguageItem.css'
import LanguageWrpper from '../WrapperComponent/LanguageWrapper';
function LanguageItem(Props) {
   return(
    <button> 
    <img src={Props.LanguageIcon}/>
    <span>{Props.LanguageName}</span>
    </button>
   )
   
}
export default LanguageItem;