export interface ControllerData {
  position: {
    x: number;
    y: number;
  };
  yaw: number;
  view: number;
  throttle: number;
  buttons: {
    trigger: boolean;
    side_grip: boolean;
    controller_buttons: {
      bottom_left: boolean;
      bottom_right: boolean;
      top_left: boolean;
      top_right: boolean;
    };
    side_panel: {
      left_bottom: boolean,
      left_top: boolean,
      middle_bottom: boolean,
      middle_top: boolean,
      right_bottom: boolean,
      right_top: boolean
    }
  }
}