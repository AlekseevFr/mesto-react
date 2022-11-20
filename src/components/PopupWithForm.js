import Close from '../images/Close-Icon.svg';

function PopupWithForm(props) {
  
  return (
  <div className={`popupProfile popupProfile_type_${props.name}`+ (props.isOpen && ' popupProfile_opened')}>
    <div className="popupProfile__overlay">
      <div className="popupProfile__container">
        <h2 className="popupProfile__title">{props.title}</h2>
        <form name={props.name} className="popupProfile__form popupProfile__form_type_edit" noValidate>
        {props.children}
        </form>
        <button type="button" className="popupProfile__close-button popupProfile__close-button_type_card" onClick={props.onClose}><img className="popupProfile__close-image" src={Close} alt="Крестик закрытия"></img> </button>
      </div>
    </div>
  </div>
  );
}
export default PopupWithForm;