Page({
  data: {
    allData: {
      data1: {
        value1: "From: 101649210",
        value2: "Today, 12.45",
        value3: "+90.000 VND",
        theme: "green",
        icon: "../../images/arrow-up.png"
      },
      data2: {
        value1: "From: 101649211",
        value2: "Today, 12.18",
        value3: "+120.000 VND",
        theme: "green",
        icon: "../../images/arrow-up.png"
      },
      data3: {
        value1: "From: 101649212",
        value2: "Today, 11.15",
        value3: "-100.000 VND",
        theme: "red",
        icon: "../../images/arrow-down.png"
      },
      data4: {
        value1: "From: 101649213",
        value2: "Today, 11.02",
        value3: "+40.000 VND",
        theme: "green",
        icon: "../../images/arrow-up.png"
      },
      data5: {
        value1: "From: 101649214",
        value2: "Today, 08.09",
        value3: "-310.000 VND",
        theme: "red",
        icon: "../../images/arrow-down.png"
      },
      data6: {
        value1: "From: 101649215",
        value2: "Today, 08.04",
        value3: "-110.000 VND",
        theme: "red",
        icon: "../../images/arrow-down.png"
      },
      data7: {
        value1: "From: 101649216",
        value2: "Yesterday, 21.09",
        value3: "+417.000 VND",
        theme: "green",
        icon: "../../images/arrow-up.png"
      },
      data8: {
        value1: "From: 101649217",
        value2: "Yesterday, 19.02",
        value3: "-10.000 VND",
        theme: "red",
        icon: "../../images/arrow-down.png"
      },
      data9: {
        value1: "From: 101649217",
        value2: "Yesterday, 19.02",
        value3: "-10.000 VND",
        theme: "red",
        icon: "../../images/arrow-down.png"
      }
    },
    dataItems1: Array.from({ length: 31 }, (_, index) => index + 1),
    dataItems2: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    dataItems3: Array.from({ length: 34 }, (_, index) => 1990 + index)
  },
  onLoad() {
    my.setNavigationBar({
      backgroundColor: "#ff8c00",
      title: "Income"
    })
  },
});
