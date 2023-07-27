const histo = [
  {
    name: 'London',
    month: 'Jan.',
    value: 18.9,
  },
  {
    name: 'London',
    month: 'Feb.',
    value: 28.8,
  },
  {
    name: 'London',
    month: 'Mar.',
    value: 39.3,
  },
  {
    name: 'London',
    month: 'Apr.',
    value: 31.4,
  },

  {
    name: 'London',
    month: 'May.',
    value: 47,
  },
  {
    name: 'London',
    month: 'Jun.',
    value: 20.3,
  },
  {
    name: 'London',
    month: 'Jul.',
    value: 24,
  },
  {
    name: 'London',
    month: 'Aug.',
    value: 35.6,
  },

  {
    name: 'Berlin',
    month: 'Jan.',
    value: 12.4,
  },
  {
    name: 'Berlin',
    month: 'Feb.',
    value: 23.2,
  },
  {
    name: 'Berlin',
    month: 'Mar.',
    value: 34.5,
  },
  {
    name: 'Berlin',
    month: 'Apr.',
    value: 59.7,
  },

  {
    name: 'Berlin',
    month: 'May.',
    value: 52.6,
  },
  {
    name: 'Berlin',
    month: 'Jun.',
    value: 35.5,
  },
  {
    name: 'Berlin',
    month: 'Jul.',
    value: 37.4,
  },
  {
    name: 'Berlin',
    month: 'Aug.',
    value: 42.4,
  },
  // {
  //   name: 'Berlin',
  //   month: 'Sep.',
  //   value: 42.4,
  // },
  // {
  //   name: 'Berlin',
  //   month: 'Okt',
  //   value: 42.4,
  // },
  // {
  //   name: 'Berlin',
  //   month: 'Nov.',
  //   value: 42.4,
  // },
  // {
  //   name: 'Paris',
  //   month: 'Jan.',
  //   value: 32.4,
  // },
  // {
  //   name: 'Paris',
  //   month: 'Feb.',
  //   value: 34.2,
  // },
  // {
  //   name: 'Paris',
  //   month: 'Mar.',
  //   value: 23.5,
  // },
  // {
  //   name: 'Paris',
  //   month: 'Apr.',
  //   value: 45.7,
  // },
  // {
  //   name: 'Paris',
  //   month: 'May.',
  //   value: 26.6,
  // },
  // {
  //   name: 'Paris',
  //   month: 'Jun.',
  //   value: 35.5,
  // },
  // {
  //   name: 'Paris',
  //   month: 'Jul.',
  //   value: 37.4,
  // },
  // {
  //   name: 'Paris',
  //   month: 'Aug.',
  //   value: 42.4,
  // },
]

Page({
  data: {
    infoDodge:{},
    list:["day","week","month","year"],
    active:'',
    histo: histo,
    dodgeStack:{
      style:{ 
        radius:[7,7,7,7],
        lineWidth:3,
        stroke:'black'
      },
      adjust:'stack',
      color:['#6979F8','#9BA6FA'],
      size:15,
      legend:{
        position:'bottom'
      }
  
    },
    dodge:{
      color:['#03AC00','#C40000'],
      style:{
          radius:[3,3,0,0],
      },
      size: 8,
      legend:{
        position:'bottom'
      },
    },
    
  },
  onLoad() {
    this.calTotalPerCity(this.data.histo)
    this.setData({active:this.data.list[0]})

  },
  calTotalPerCity(data){
    let result = []
    const cityNames = data.map((el) => el.name);
    const listName = [...new Set(cityNames)];
    for(let i=0;i<listName.length;i++){
      result[i]={
        name:listName[i],
        color:this.data.dodgeStack.color[i]
      }
    }
    this.setData({infoDodge:result})
  },
  changeList(e){
    let {newList} = e.target.dataset
    this.setData({active:newList})
    // console.log(">>>>>>>>>>", newList)
  }
});
