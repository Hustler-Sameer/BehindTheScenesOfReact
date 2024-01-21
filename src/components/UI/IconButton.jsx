import { log } from '../../log.js';

export default function IconButton({ children, icon, ...props }) {
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
}


// we are taking children so that we can name the button or do soemthing else also we are saving props here with help of buttons

