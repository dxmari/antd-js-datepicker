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
- Default time: `12:00 AM`
- Dropdown includes:
  - **Hours**: `01` to `12`
  - **Minutes**: `00` to `59`
  - **Meridiem**: `AM`, `PM`

---

## Installation

This component requires no dependencies beyond the included Ant Design stylesheet for styling.

### Steps to Use:
1. **HTML**: Copy and add the provided HTML structure to your project.
2. **CSS**: Include the provided CSS styles or modify them as needed.
3. **JavaScript**: Include the script or integrate it into your JavaScript file.

---

## Usage

### 1. Add the TimePicker Component
```html
<div class="custom-timepicker" id="customTimePicker">
    <div class="time-display" id="timeDisplay">12:00 AM</div>
    <div class="dropdown" id="timeDropdown">
        <div class="scroll-container">
            <div class="scroll-section" id="hourSection"></div>
            <div class="scroll-section" id="minuteSection"></div>
            <div class="scroll-section" id="meridiemSection"></div>
        </div>
    </div>
</div>
