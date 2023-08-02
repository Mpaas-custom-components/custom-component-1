Component({
  mixins: [],
  data: {
    position: '',
    basicVisible: false,
    animation: true,
    scrollVisible: false,
    closeVisible: false,
    valueData: "",
    months: [{
        month: 'January',
        number: 1
      },
      {
        month: 'February',
        number: 2
      },
      {
        month: 'March',
        number: 3
      },
      {
        month: 'April',
        number: 4
      },
      {
        month: 'May',
        number: 5
      },
      {
        month: 'June',
        number: 6
      },
      {
        month: 'July',
        number: 7
      },
      {
        month: 'August',
        number: 8
      },
      {
        month: 'September',
        number: 9
      },
      {
        month: 'October',
        number: 10
      },
      {
        month: 'November',
        number: 11
      },
      {
        month: 'December',
        number: 12
      },
    ],
    years: [],
    tagData: [{
        name: "1",
        value: "1"
      },
      {
        name: "2",
        value: "2"
      },
      {
        name: "3",
        value: "3"
      }
    ],
    tagTemp: {
      name: "",
      value: ""
    }
  },
  props: {},
  didMount() {
    this.getYearsFrom(1945)
    if (this.props.type === "dateMonth") {
      this.getCurrentMonth()
    } else if (this.props.type === "dateYear") {
      this.setData({
        valueData: new Date().getFullYear()
      })
    } else if (!this.props.defaultValue) {
      this.setData({
        valueData: "Filter"
      })
    }

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

    tagChange(e){
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
    },

    getCurrentMonth() {
      const month = new Date().getMonth().toString()

      this.data.months.map((el) => {
        if (el.number - 1 == month) {
          this.setData({
            valueData: el.month
          })
        }
      })
    },

    onChangeInput(e) {
      this.setData({
        tagTemp: {
          name : e.detail.value,
          value: e.detail.value
        }
      })
    },

    onSaveTag() {
      let lastData = [...this.data.tagData]
      
      lastData.push(this.data.tagTemp)

      
      this.setData({
        tagData: lastData,
        basicVisible: false,
        scrollVisible: false,
        closeVisible: false,
      })

      console.log(this.data.tagData)
    }
  },


});