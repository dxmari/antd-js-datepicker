AntdJSPicker = {};

AntdJSPicker.init = (inputname, configs = {}) => {
  console.log("Initialize the AntdJSPicker...");
  const $inputs = document.querySelectorAll(inputname);
  if (document.querySelectorAll(".custom-timepicker-smttwffnta").length > 0) {
    document
      .querySelectorAll(".custom-timepicker-smttwffnta")
      .forEach((dom) => dom.remove());
  }

  $inputs.forEach((dom) => {
    
    dom.after(`<div class="antd-js-picker custom-timepicker-${Date.now()}">
        <div class="time-display" id="timeDisplay">12:00 AM</div>
        <div class="dropdown" id="timeDropdown-${Date.now()}">
            <div class="scroll-container">
                <div class="scroll-section" id="hourSection-${Date.now()}"></div>
                <div class="scroll-section" id="minuteSection-${Date.now()}"></div>
                <div class="scroll-section" id="meridiemSection-${Date.now()}"></div>
            </div>
        </div>
    </div>`);
  });

  const style = document.createElement("style");
  style.innerText = `.antd-js-picker {
            display: flex;
            align-items: center;
            position: relative;
            border: 1px solid #d9d9d9;
            border-radius: 6px;
            padding: 4px 11px;
            font-size: 14px;
            cursor: pointer;
            width: 200px;
        }
        .antd-js-picker:hover {
            border-color: #40a9ff;
        }
        .time-display {
            width: 100%;
            text-align: center;
        }
        .dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            border: 1px solid #d9d9d9;
            border-radius: 6px;
            background-color: white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            display: none;
        }
        .dropdown.open {
            display: block;
        }
        .scroll-container {
            display: flex;
            justify-content: space-between;
            overflow-x: hidden;
            height: 150px;
        }
        .scroll-section {
            flex: 1;
            overflow-y: scroll;
            text-align: center;
        }
        .scroll-section::-webkit-scrollbar {
            width: 6px;
        }
        .scroll-section::-webkit-scrollbar-thumb {
            background: #d9d9d9;
            border-radius: 3px;
        }
        .scroll-section div {
            padding: 8px 0;
            cursor: pointer;
        }
        .scroll-section div:hover {
            background-color: #f5f5f5;
        }
        .scroll-section div.active {
            background-color: #e6f7ff;
            font-weight: bold;
        }`;
  document.querySelector("head").append(style);
};
