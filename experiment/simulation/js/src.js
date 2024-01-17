const src = {
  // pick imgs from the dom

  allImgs: [],
  allImgsDom: document.querySelectorAll(".main-window-imgs"),
  allVideosDom: document.querySelectorAll(".main-window-videos"),
  set() {
    this.allItems = {
      arrowRound: this.allImgsDom[0],
      blinkArrow: this.allImgsDom[1],
      laerrow: this.allImgsDom[2],
      laerrow2: this.allImgsDom[3],
      logo: this.allImgsDom[4],
      man: this.allImgsDom[5],
      measurearrow: this.allImgsDom[6],
      measurearrow2: this.allImgsDom[7],
      redsize: this.allImgsDom[8],                                         
      speech_off_btn: this.allImgsDom[9],
      speech_on_btn: this.allImgsDom[10],
      talk_cloud: this.allImgsDom[11],
      iit_delhi_logo: this.allImgsDom[12],

      // ! Images start here
      column_back_full:this.allImgsDom[13],
column_corner:this.allImgsDom[14],
column_corner_2:this.allImgsDom[15],
column_corner_back_1:this.allImgsDom[16],
column_corner_back_2:this.allImgsDom[17],
column_corner_front_1:this.allImgsDom[18],
column_corner_front_2:this.allImgsDom[19],
column_corner_left:this.allImgsDom[20],
column_corner_left_1:this.allImgsDom[21],
column_corner_left_2:this.allImgsDom[22],
column_corner_right:this.allImgsDom[23],
column_corner_right_1:this.allImgsDom[24],
column_corner_right_2:this.allImgsDom[25],
column_front_kicker_brace:this.allImgsDom[26],
column_front_panel:this.allImgsDom[27],
column_front_push_prop_1:this.allImgsDom[28],
column_front_push_prop_2:this.allImgsDom[29],
column_front_push_prop_pin_1:this.allImgsDom[30],
column_front_push_prop_pin_2:this.allImgsDom[31],
column_left_full:this.allImgsDom[32],
column_right_full:this.allImgsDom[33],
column_wedge_pin_front_1:this.allImgsDom[34],
column_wedge_pin_front_10:this.allImgsDom[35],
column_wedge_pin_front_11:this.allImgsDom[36],
column_wedge_pin_front_12:this.allImgsDom[37],
column_wedge_pin_front_2:this.allImgsDom[38],
column_wedge_pin_front_3:this.allImgsDom[39],
column_wedge_pin_front_4:this.allImgsDom[40],
column_wedge_pin_front_5:this.allImgsDom[41],
column_wedge_pin_front_6:this.allImgsDom[42],
column_wedge_pin_front_7:this.allImgsDom[43],
column_wedge_pin_front_8:this.allImgsDom[44],
column_wedge_pin_front_9:this.allImgsDom[45],
column_wedge_pin_left_1:this.allImgsDom[46],
column_wedge_pin_left_2:this.allImgsDom[47],
column_wedge_pin_left_3:this.allImgsDom[48],
column_wedge_pin_left_4:this.allImgsDom[49],
column_wedge_pin_left_5:this.allImgsDom[50],
column_wedge_pin_left_6:this.allImgsDom[51],
column_wedge_pin_right_1:this.allImgsDom[52],
column_wedge_pin_right_2:this.allImgsDom[53],
column_wedge_pin_right_3:this.allImgsDom[54],
column_wedge_pin_right_4:this.allImgsDom[55],
column_wedge_pin_right_5:this.allImgsDom[56],
column_wedge_pin_right_6:this.allImgsDom[57],
      
      // * Videos
      // yoke_front_to_back: this.allVideosDom[0],
      // yoke_front_to_side: this.allVideosDom[1],
      // panel1: this.allVideosDom[2],
      // panel2: this.allVideosDom[3],

      bfs_video: this.allVideosDom[0],
    };
  },
  allImgsInitialAxis: [],
  get(itemName) {
    return this.allItems[itemName];
  },
};
// setting src
src.set();
