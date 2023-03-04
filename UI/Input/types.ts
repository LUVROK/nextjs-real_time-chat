export interface IInput {
  type: string;
  placeholder?: string;
  setValue?: (value: string) => void;
  keyPress?: any;
  value?: string;
  ref?: any;
  disabled?: Boolean;
}
