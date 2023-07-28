

Component({
  mixins: [],
  data: {
    position: '',
    basicVisible: false,
    animation: true,
    scrollVisible: false,
    closeVisible: false,
    valueData: "",
    months: [
      { month: 'January', number: 1 },
      { month: 'February', number: 2 },
      { month: 'March', number: 3 },
      { month: 'April', number: 4 },
      { month: 'May', number: 5 },
      { month: 'June', number: 6 },
      { month: 'July', number: 7 },
      { month: 'August', number: 8 },
      { month: 'September', number: 9 },
      { month: 'October', number: 10 },
      { month: 'November', number: 11 },
      { month: 'December', number: 12 },
    ],
    years: []
  },
  props: {
  },
  didMount() {
    this.getYearsFrom(1945)
    console.log(this.data.years)
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    handlePopupShow() {
      this.setData({
        scrollVisible: true
      })
    },

    handlePopupClose() {
      this.setData({
        basicVisible: false,
        scrollVisible: false,
        closeVisible: false,
      });
    },

    handleRef(ref) {
      this.form.addItem(ref);
    },

    onSubmit(e) {
      this.setData({
        basicVisible: false,
        scrollVisible: false,
        closeVisible: false,
      })
    },
    onReset(e) {
      console.log('onReset', e);
    },
    radioChange(e) {
      this.setData({
        valueData: e.detail.value
      })
    },

    getYearsFrom(startYear) {
      const currentYear = new Date().getFullYear();
      const years = [];
    
      for (let year = startYear; year <= currentYear; year++) {
        years.push(year);
      }
    
      this.setData({
        years: years
      })
    }
  },
});