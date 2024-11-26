# Custom TimePicker with Combined Dropdown

A custom TimePicker replicating Ant Design's style and functionality. It features a single dropdown containing scrollable sections for hours, minutes, and meridiem (AM/PM), built with HTML, CSS, and Vanilla JavaScript for cross-browser compatibility.

---

## Features

- **Combined Dropdown**: A single dropdown includes scrollable sections for hours, minutes, and meridiem.
- **Interactive Scrolling**: Each section is independently scrollable for intuitive selection.
- **Dynamic Updates**: The selected time updates the display immediately.
- **Active State Highlighting**: The selected values are visually highlighted.
- **Cross-Browser Compatibility**: Works across all browsers without relying on `<input type="time">`.

---

## Preview

### TimePicker Default Behavior:
- Dropdown includes:
  - **Hours**: `01` to `12`
  - **Minutes**: `00` to `59`
  - **Meridiem**: `AM`, `PM`

---

## Installation

This component requires no dependencies from Ant Design.

## Installation

You can view the demo here https://dxmari.github.io/antd-js-datepicker/

## Notes
Currently, this plugin only supports the Timepicker feature. However, Datepicker functionality will be added in the future.

### Steps to Use:
1. **HTML**: Add the text input to your project.
2. **CSS**: No need to add any styles.
3. **JavaScript**: Just Include the script https://cdn.jsdelivr.net/gh/dxmari/antd-js-datepicker@main/picker.js.

---

## Usage

### 1. Add the TimePicker Component
```html
<div class="container">
    <h1>AntD-like Time Picker</h1>
    <div class="input-block">
      <label>Time</label>
      <input class="picker" />
  </div>
</div>
```

### 2. Initiate TimePicker

```javascript
AntdJSPicker.init(<element>);
AntdJSPicker.init('.picker');
```

### 3. Set the time in the TimePicker

```javascript
AntdJSPicker.setTime(<element>, <time>);
AntdJSPicker.setTime('.picker', '05:00 AM');
```

## How It Works

1. **Dynamic Dropdown Generation**:
   - The dropdown dynamically populates hours, minutes, and meridiem into separate scrollable sections.
2. **Event Handling**:
   - Clicking on the time display toggles the dropdown visibility.
   - Clicking outside closes the dropdown.
   - Selecting an option updates the time display and highlights the chosen value.
3. **Styling**:
   - The component uses CSS for a clean, Ant Design-like appearance.

---

## Customization

### Modify Time Options
- Adjust the `hours`, `minutes`, or `meridiems` arrays in the JavaScript to configure the available time options.

### Update Styles
- Customize the `.antd-js-picker`, `.dropdown-antd-js-picker`, and `.scroll-section-antd-js-picker` classes to align with your project's design language.

---

## Browser Compatibility

| Browser         | Support |
|------------------|---------|
| Chrome          | ✅      |
| Firefox         | ✅      |
| Safari          | ✅      |
| Edge            | ✅      |
| IE (not tested) | ❌      |

---

## License

This project is available under the MIT License. You are free to use, modify, and distribute it as per the terms of the license.

---

## Contributions

Contributions, issues, and feature requests are welcome! Please feel free to suggest improvements or report bugs to help make this project even better. Happy coding! 🎉
