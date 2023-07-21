Component({
  mixins: [],
  data: {
    yearList: [],   
    monthList: [   
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ],
    dayList: [],     
    selectedYear: '',      
    selectedYearIndex: 0, 
    selectedMonth: '',     
    selectedMonthIndex: 0, 
    selectedDay: '',    
    selectedDayIndex: 0,  
    rawData : [] 
  },
  props: {},
  didMount() {
    this.initYearList();
    this.initDayList();
    this.initCurrentDate(); 
  },
  didUpdate() {},
  didUnmount() {},
  methods: {

    onChangeValue(e) {
      const { value } = e.detail
      console.log(value, ">>> VALUE <<<");

      this.setData({
        rawData: value,
        selectedMonth: this.data.monthList[value[0]],
        selectedMonthIndex: value[0],
        selectedYear: this.data.yearList[value[1]],
        selectedYearIndex: value[1],
        selectedDay: this.data.dayList[value[2]],
        selectedDayIndex: value[2],
      })

      console.log(this.data.rawData, this.data.selectedYear, this.data.selectedMonth, this.data.selectedDay, "LLLLLLL");
    },

    initCurrentDate() {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear().toString();
      const currentMonth = this.data.monthList[currentDate.getMonth()];
      const currentDay = currentDate.getDate().toString();
  
      const yearIndex = this.data.yearList.findIndex(year => year === currentYear);
      const monthIndex = this.data.monthList.findIndex(month => month === currentMonth);
      const dayIndex = this.data.dayList.findIndex(day => day === currentDay);

      this.setData({
        rawData: [monthIndex, yearIndex, dayIndex]
      })
  
      this.setData({
        selectedYear: currentYear,
        selectedYearIndex: yearIndex,
        selectedMonth: currentMonth,
        selectedMonthIndex: monthIndex,
        selectedDay: currentDay,
        selectedDayIndex: dayIndex,
      });
    },

    initYearList() {
      const currentYear = new Date().getFullYear();
      const yearList = [];
      for (let i = 1950; i <= currentYear; i++) {
        yearList.push(i.toString());
      }
      this.setData({
        yearList: yearList,
        selectedYear: yearList[yearList.length - 1],
        selectedYearIndex: yearList.length - 1,
      });
    },
  
    initDayList() {
      const dayList = [];
      for (let i = 1; i <= 31; i++) {
        dayList.push(i.toString());
      }
      this.setData({
        dayList,
        selectedDay: dayList[0],
        selectedDayIndex: 0,
      });
    },
  },
});





  

