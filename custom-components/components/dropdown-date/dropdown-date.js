Component({
  mixins: [],
  data: {
    calendar: {
      day: "",
      month: "",
      year: ""
    },
    monthNames: [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ],
    dayOptions: [],
    monthOptions: [],
    yearOptions: [],
    selectedDate: {
      day: null,
      month: null,
      year: null,
    },
  },
  props: {},
  didMount() {
    this.handleDate()
    this.generateOptions()
    console.log(this.data.dayOptions)
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleDate() {
      const currentDate = new Date();
      this.setData({
        calendar: {
          day: currentDate.getDate(),
          month: this.data.monthNames[currentDate.getMonth()],
          year: currentDate.getFullYear(),
        }
      })
    },
    handleDateChange(e) {
      const {
        name,
        value
      } = e.detail;
      this.setData({
        selectedDate: {
          ...this.data.selectedDate,
          [name]: value,
        },
      });
    },
    generateOptions() {
      const dayOptions = [];
      for (let day = 1; day <= 31; day++) {
        dayOptions.push(day.toString());
      }
      this.setData({
        dayOptions,
      });

      const monthOptions = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December",
      ];
      this.setData({
        monthOptions,
      });

      const yearOptions = [];
      const startYear = 1900; // Set the starting year
      for (let year = startYear; year <= this.data.currentYear; year++) {
        yearOptions.push(year.toString());
      }
      this.setData({
        yearOptions,
      });
    },
  },
});