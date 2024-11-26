AntdJSPicker = {};

AntdJSPicker.init = (inputname, configs = { placeholder: "Select time" }) => {
  console.log("Initialize the AntdJSPicker...");
  const $inputs = document.querySelectorAll(inputname);
  document.querySelectorAll(".antd-js-picker").forEach((dom) => dom.remove());

  $inputs.forEach((dom) => {
    const inputId = parseInt(Math.random() * 10000000000000, 10);
    dom.style.display = "none";
    dom.insertAdjacentHTML(
      "afterend",
      `<div class="antd-js-picker custom-timepicker-${inputId}">
        <div class="time-display" id="timeDisplay-${inputId}"><span>${configs.placeholder}</span></div>
        <div class="dropdown-antd-js-picker" id="timeDropdown-${inputId}">
            <div class="scroll-container-antd-js-picker">
                <div class="scroll-section-antd-js-picker" id="hourSection-${inputId}"></div>
                <div class="scroll-section-antd-js-picker" id="minuteSection-${inputId}"></div>
                <div class="scroll-section-antd-js-picker meridiem-antd-js-picker" id="meridiemSection-${inputId}"></div>
            </div>
        </div>
    </div>`
    );

    setTimeout(() => {
      let selectedHour = "";
      let selectedMinute = "";
      let selectedMeridiem = "";

      const timeDisplay = document.getElementById(`timeDisplay-${inputId}`);
      const timeDropdown = document.getElementById(`timeDropdown-${inputId}`);
      const hourSection = document.getElementById(`hourSection-${inputId}`);
      const minuteSection = document.getElementById(`minuteSection-${inputId}`);
      const meridiemSection = document.getElementById(
        `meridiemSection-${inputId}`
      );

      dom.onchange = function () {
        setTime(this.value);
      };

      if (!dom.value) {
        dom.value = "";
      } else {
        setTime(dom.value);
      }

      // Generate options
      const hours = Array.from({ length: 12 }, (_, i) =>
        String(i + 1).padStart(2, "0")
      );
      const minutes = Array.from({ length: 60 }, (_, i) =>
        String(i).padStart(2, "0")
      );
      const meridiems = ["AM", "PM"];

      function setActiveTimings() {
        hourSection.childNodes.forEach((item) =>
          item.classList.remove("active")
        );
        minuteSection.childNodes.forEach((item) =>
          item.classList.remove("active")
        );
        meridiemSection.childNodes.forEach((item) =>
          item.classList.remove("active")
        );
        hourSection.childNodes.forEach((item) => {
          if (
            parseInt(item.textContent.trim()) === parseInt(selectedHour.trim())
          ) {
            item.classList.add("active");
          }
        });
        minuteSection.childNodes.forEach((item) => {
          if (
            parseInt(item.textContent.trim()) ===
            parseInt(selectedMinute.trim())
          ) {
            item.classList.add("active");
          }
        });
        meridiemSection.childNodes.forEach((item) => {
          if (item.textContent.trim() === selectedMeridiem.trim()) {
            item.classList.add("active");
          }
        });
      }

      // Populate sections
      function populateSection(section, values, onSelect) {
        values.forEach((value) => {
          const div = document.createElement("div");
          div.textContent = value;
          div.addEventListener("click", () => {
            section
              .querySelectorAll("div")
              .forEach((el) => el.classList.remove("active"));
            div.classList.add("active");
            if (onSelect) onSelect(value);
            updateTimeDisplay();
          });
          section.appendChild(div);
        });
      }

      // Update time display
      function updateTimeDisplay() {
        if (!selectedHour) selectedHour = "01";
        if (!selectedMinute) selectedMinute = "00";
        if (!selectedMeridiem) selectedMeridiem = "AM";
        timeDisplay.textContent = `${selectedHour}:${selectedMinute} ${selectedMeridiem}`;
        dom.value = `${selectedHour}:${selectedMinute} ${selectedMeridiem}`;
      }

      populateSection(hourSection, hours, (value) => (selectedHour = value));

      populateSection(
        minuteSection,
        minutes,
        (value) => (selectedMinute = value)
      );

      populateSection(
        meridiemSection,
        meridiems,
        (value) => (selectedMeridiem = value)
      );

      // Add toggle functionality
      timeDisplay.addEventListener("click", () => {
        document
          .querySelectorAll(".dropdown-antd-js-picker")
          .forEach((item) => {
            if (!item.isEqualNode(timeDropdown)) {
              item.classList.remove("open");
            }
          });

        timeDropdown.classList.toggle("open");
        setTimeout(() =>{
          scrollToActive(timeDropdown.children[0].children[0]);
          scrollToActive(timeDropdown.children[0].children[1]);
        }, 100)
      });

      function scrollToActive(temp){
        temp.childNodes.forEach(item => {
          if(item.classList.contains('active')){
            temp.scrollTo(0, item.offsetTop);
          }
        })
      }

      // Close dropdown when clicking outside
      document.removeEventListener("click", () => {});
      document.addEventListener("click", (event) => {
        if (!event.target.closest(".antd-js-picker")) {
          timeDropdown.classList.remove("open");
          document
            .querySelectorAll(".dropdown-antd-js-picker")
            .forEach((item) => item.classList.remove("open"));
        }
      });

      // Initialize with default values
      hourSection.firstChild.classList.add("active");
      minuteSection.firstChild.classList.add("active");
      meridiemSection.firstChild.classList.add("active");

      function setTime(value) {
        let tmp = value.split(":");
        selectedHour = tmp[0];
        selectedMinute = tmp[1].split(" ")[0];
        selectedMeridiem = tmp[1].split(" ")[1];
        updateTimeDisplay();
        setTimeout(() => {
          setActiveTimings();
        }, 300);
      }
    }, 300);
  });

  const style = document.createElement("style");
  style.innerText = `
    .antd-js-picker {
            display: flex;
            align-items: center;
            position: relative;
            border: 1px solid #d9d9d9;
            border-radius: 4px;
            font-size: 14px;
            cursor: pointer;
            min-width: 80px;
        }
        .antd-js-picker:hover {
            border-color: #40a9ff;
        }
        .time-display {
            width: 100%;
            padding: 6px 16px;
        }
        .time-display span{
          font-size: 13px;
          color: #988c8c;
        }
        .dropdown-antd-js-picker {
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
            min-width: 160px;
            max-width: 240px;
        }
        .dropdown-antd-js-picker.open {
            display: block;
        }
        .scroll-container-antd-js-picker {
            display: flex;
            justify-content: space-between;
            overflow-x: hidden;
            height: 250px;
        }
        .scroll-section-antd-js-picker {
            flex: 1;
            overflow-y: scroll;
            text-align: center;
        }
        .scroll-section-antd-js-picker::-webkit-scrollbar {
            width: 2px;
        }
        .scroll-section-antd-js-picker.meridiem-antd-js-picker::-webkit-scrollbar {
          display: none;
        }
        .scroll-section-antd-js-picker::-webkit-scrollbar-thumb {
            background: #d9d9d9;
            border-radius: 3px;
        }
        .scroll-section-antd-js-picker div {
            padding: 8px 0;
            cursor: pointer;
        }
        .scroll-section-antd-js-picker div:hover {
            background-color: #f5f5f5;
        }
        .scroll-section-antd-js-picker div.active {
            background-color: #e6f7ff;
            font-weight: bold;
            border-radius: 2px;
    }`;
  document.querySelector("head").append(style);
};

AntdJSPicker.setTime = (inputname, time) => {
  if (time) {
    const $inputs = document.querySelectorAll(inputname);
    $inputs.forEach((dom) => {
      dom.value = time;
      if (dom.onchange) dom.onchange();
    });
  }
};
