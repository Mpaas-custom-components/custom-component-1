Component({
  mixins: [],
  data: {
    array: ['Option 1', 'Option 2', 'Option 3'],
    selectedValue: 'Select an option',
  },
  props: {},
  didMount() {
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    onPickerChange(e) {
      const index = e.detail.value;
      const selectedValue = this.data.array[index];
      console.log(selectedValue)
      this.setData({
        selectedValue: selectedValue,
      });
    },
  },
});