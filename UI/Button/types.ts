export interface IButton {
  title: string;
  callback?: (event?: any) => void;
  disabled?: Boolean;
}
