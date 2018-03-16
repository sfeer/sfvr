/**
 * 第三方缺陷数据服务接口
 **/
import Vue from 'vue';

const URL = 'http://47.93.119.201:8080/eps/',
  LOGIN = 'VR',
  PWD = 'E5196BF0F3BC6724708B6D485DF92B2B';
let tenant_id, token;
const OFFLINE = true;

// 机柜信息
const OFFLINE_CABINETS = [
  {
    'address': '',
    'createduserid': '',
    'customno': '1',
    'devicename': 'GP-1',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': '6233f7dc1d8b4174b98a6c60594de6e7',
    'fdidfrom': '',
    'fdidto': '6233f7dc1d8b4174b98a6c60594de6e7',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 1,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '2',
    'devicename': 'GP-2',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': '9910e477b49346058615eec3de355608',
    'fdidfrom': '',
    'fdidto': '9910e477b49346058615eec3de355608',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 2,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '3',
    'devicename': 'GP-3',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': '7b1964a2d69a4fb7a573dc8dbdd40a0f',
    'fdidfrom': '',
    'fdidto': '7b1964a2d69a4fb7a573dc8dbdd40a0f',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 3,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '4',
    'devicename': 'GP-4',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': 'c32221f6fc1c4fbea27d5983945f4a95',
    'fdidfrom': '',
    'fdidto': 'c32221f6fc1c4fbea27d5983945f4a95',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 4,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '5',
    'devicename': 'GP-5',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': '66dd5f9947c144bf99ab1867ef25c6c0',
    'fdidfrom': '',
    'fdidto': '66dd5f9947c144bf99ab1867ef25c6c0',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 5,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '6',
    'devicename': 'GP-6',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': 'd5fba9b2fc7547a19b4c50c5dabd1a98',
    'fdidfrom': '',
    'fdidto': 'd5fba9b2fc7547a19b4c50c5dabd1a98',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 6,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '7',
    'devicename': 'GP-7',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': '9d8229ecf6354f58893774c5b543b81a',
    'fdidfrom': '',
    'fdidto': '9d8229ecf6354f58893774c5b543b81a',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 7,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '8',
    'devicename': 'GP-8',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': 'c504763b600d4f59803b9d91e2a2cbbb',
    'fdidfrom': '',
    'fdidto': 'c504763b600d4f59803b9d91e2a2cbbb',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 8,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '9',
    'devicename': 'GP-9',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': '931bed72e1c342ec9f306949860bb213',
    'fdidfrom': '',
    'fdidto': '931bed72e1c342ec9f306949860bb213',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 9,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '10',
    'devicename': 'GP-10',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': 'f26cfcbc9ee94988b63abe444c12f63b',
    'fdidfrom': '',
    'fdidto': 'f26cfcbc9ee94988b63abe444c12f63b',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 10,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '11',
    'devicename': 'GP-11',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': '2e038b1fb4a44af1a4846f1c5128117b',
    'fdidfrom': '',
    'fdidto': '2e038b1fb4a44af1a4846f1c5128117b',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 11,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '12',
    'devicename': 'GP-12',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': '446be62621904d1a982d73b6f26c8a92',
    'fdidfrom': '',
    'fdidto': '446be62621904d1a982d73b6f26c8a92',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 12,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '13',
    'devicename': 'GP-13',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': 'a94e9faf23a447dba59f48d43903206c',
    'fdidfrom': '',
    'fdidto': 'a94e9faf23a447dba59f48d43903206c',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 13,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '14',
    'devicename': 'GP-14',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': '88a030424f104bf5837c6ef3bc5615e7',
    'fdidfrom': '',
    'fdidto': '88a030424f104bf5837c6ef3bc5615e7',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 14,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '15',
    'devicename': 'GP-15',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': 'c2962a420565460ea2bc73371d051d64',
    'fdidfrom': '',
    'fdidto': 'c2962a420565460ea2bc73371d051d64',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 15,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '16',
    'devicename': 'GP-16',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': '782bb2f070d9404c8fa81f522d88bed2',
    'fdidfrom': '',
    'fdidto': '782bb2f070d9404c8fa81f522d88bed2',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 16,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '17',
    'devicename': 'GP-17',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': '9fef3c8c13de4f9db62ed8f7cd7391d1',
    'fdidfrom': '',
    'fdidto': '9fef3c8c13de4f9db62ed8f7cd7391d1',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 17,
    'tenantid': ''
  },
  {
    'address': '',
    'createduserid': '',
    'customno': '18',
    'devicename': 'GP-18',
    'devicetype': '71',
    'electriclevel': '10kv',
    'equipmenttypeid': '003',
    'equipmenttypename': '开关柜',
    'fdid': '5c3be6bf378541078a79321aac7455aa',
    'fdidfrom': '',
    'fdidto': '5c3be6bf378541078a79321aac7455aa',
    'latitude': '',
    'level': '一级',
    'longitude': '',
    'reqs': [],
    'signin': '',
    'sort': 18,
    'tenantid': ''
  }
];
// 缺陷信息
const OFFLINE_BUGS = [
  {
    'attachmentid': '',
    'bugid': '663957f96cb54564a8da9179aa7e0706',
    'bugsrctype': '0',
    'bugtypeid': '1013',
    'categoryid': '',
    'categoryname': '门、窗损坏严重，外人可随意进出',
    'createdstamp': '2017-05-23 11:16:31',
    'createduserid': '66e62b3ceef741cc8509c092e9aa11b4',
    'deleted': 'A',
    'description': '',
    'devicename': 'GP-1',
    'devicetype': '',
    'enclosureid': '',
    'enclosuretype': '',
    'fdidfrom': '',
    'fileList': '',
    'fileurl': '',
    'findname': '',
    'findtime': '2017-05-18',
    'lastupdatedstamp': '2017-05-23 11:18:18',
    'lastupdateduserid': '',
    'latitude': '',
    'line': '',
    'longitude': '',
    'memo': '',
    'parentid': '',
    'pictures': [
      'http://img.jdzj.com/UserDocument/2014d/zykj2015/Picture/20141231141711.jpg',
      'http://c.img.youboy.com/201012/11/10/g0/g0_8902039.jpg',
      'http://b.img.youboy.com/20107/9/g3_4064501.jpg'
    ],
    'planid': '',
    'refequipmentid': '6233f7dc1d8b4174b98a6c60594de6e7',
    'reflineid': '',
    'sightid': '3bb843126ac75316b65b786b0269d747',
    'solvebugid': '',
    'stationfdid': '',
    'stationlatitude': '',
    'stationlongitude': '',
    'stationname': '',
    'status': '5',
    'tempenclosureid': '',
    'tenantid': '1e0be4df-9af1-436b-a2b3-476e9c03fc96',
    'userid': '613831cccbe24a73840df09c85af55f0',
    'username': '汪铭洪',
    'voicelist': [
      'http://5.1015600.com/2014/ring/000/100/b4294fe5c9b5a4037304aea0530c2bde.mp3'
    ],
    'workplanname': ''
  },
  {
    'attachmentid': '',
    'bugid': '663957f96cb54564a8da9179aa7e0707',
    'bugsrctype': '0',
    'bugtypeid': '1013',
    'categoryid': '',
    'categoryname': '开关柜线路老化',
    'createdstamp': '2017-05-23 11:16:31',
    'createduserid': '66e62b3ceef741cc8509c092e9aa11b4',
    'deleted': 'A',
    'description': '',
    'devicename': 'GP-1',
    'devicetype': '',
    'enclosureid': '',
    'enclosuretype': '',
    'fdidfrom': '',
    'fileList': '',
    'fileurl': '',
    'findname': '',
    'findtime': '2017-05-18',
    'lastupdatedstamp': '2017-05-23 11:18:18',
    'lastupdateduserid': '',
    'latitude': '',
    'line': '',
    'longitude': '',
    'memo': '缺陷11',
    'parentid': '',
    'pictures': [],
    'planid': '',
    'refequipmentid': '6233f7dc1d8b4174b98a6c60594de6e7',
    'reflineid': '',
    'sightid': '3bb843126ac75316b65b786b0269d747',
    'solvebugid': '',
    'stationfdid': '',
    'stationlatitude': '',
    'stationlongitude': '',
    'stationname': '',
    'status': '3',
    'tempenclosureid': '',
    'tenantid': '1e0be4df-9af1-436b-a2b3-476e9c03fc96',
    'userid': '613831cccbe24a73840df09c85af55f0',
    'username': '汪铭洪',
    'voicelist': [
      'http://5.1015600.com/2014/ring/000/100/b4294fe5c9b5a4037304aea0530c2bde.mp3'
    ],
    'workplanname': ''
  },
  {
    'attachmentid': '',
    'bugid': '663957f96cb54564a8da9179aa7e0708',
    'bugsrctype': '0',
    'bugtypeid': '1013',
    'categoryid': '',
    'categoryname': '开关柜体门无法关闭',
    'createdstamp': '2017-05-23 11:16:31',
    'createduserid': '66e62b3ceef741cc8509c092e9aa11b4',
    'deleted': 'A',
    'description': '',
    'devicename': 'GP-1',
    'devicetype': '',
    'enclosureid': '',
    'enclosuretype': '',
    'fdidfrom': '',
    'fileList': '',
    'fileurl': '',
    'findname': '',
    'findtime': '2017-05-18',
    'lastupdatedstamp': '2017-05-23 11:18:18',
    'lastupdateduserid': '',
    'latitude': '',
    'line': '',
    'longitude': '',
    'memo': '缺陷22',
    'parentid': '',
    'pictures': [
      'http://c.img.youboy.com/201012/11/10/g0/g0_8902039.jpg'
    ],
    'planid': '',
    'refequipmentid': '6233f7dc1d8b4174b98a6c60594de6e7',
    'reflineid': '',
    'sightid': '3bb843126ac75316b65b786b0269d747',
    'solvebugid': '',
    'stationfdid': '',
    'stationlatitude': '',
    'stationlongitude': '',
    'stationname': '',
    'status': '3',
    'tempenclosureid': '',
    'tenantid': '1e0be4df-9af1-436b-a2b3-476e9c03fc96',
    'userid': '613831cccbe24a73840df09c85af55f0',
    'username': '汪铭洪',
    'voicelist': [],
    'workplanname': ''
  },
  {
    'attachmentid': '',
    'bugid': '663957f96cb54564a8da9179aa7e0709',
    'bugsrctype': '0',
    'bugtypeid': '1013',
    'categoryid': '',
    'categoryname': '门、窗损坏严重，外人可随意进出',
    'createdstamp': '2017-05-23 11:16:31',
    'createduserid': '66e62b3ceef741cc8509c092e9aa11b4',
    'deleted': 'A',
    'description': '',
    'devicename': 'GP-1',
    'devicetype': '',
    'enclosureid': '',
    'enclosuretype': '',
    'fdidfrom': '',
    'fileList': '',
    'fileurl': '',
    'findname': '',
    'findtime': '2017-05-18',
    'lastupdatedstamp': '2017-05-23 11:18:18',
    'lastupdateduserid': '',
    'latitude': '',
    'line': '',
    'longitude': '',
    'memo': '缺陷',
    'parentid': '',
    'pictures': [],
    'planid': '',
    'refequipmentid': 'c2962a420565460ea2bc73371d051d64',
    'reflineid': '',
    'sightid': '3bb843126ac75316b65b786b0269d747',
    'solvebugid': '',
    'stationfdid': '',
    'stationlatitude': '',
    'stationlongitude': '',
    'stationname': '',
    'status': '5',
    'tempenclosureid': '',
    'tenantid': '1e0be4df-9af1-436b-a2b3-476e9c03fc96',
    'userid': '613831cccbe24a73840df09c85af55f0',
    'username': '汪铭洪',
    'voicelist': [],
    'workplanname': ''
  },
  {
    'attachmentid': '',
    'bugid': '663957f96cb54564a8da9179aa7e0710',
    'bugsrctype': '0',
    'bugtypeid': '1013',
    'categoryid': '',
    'categoryname': '门、窗损坏严重，外人可随意进出',
    'createdstamp': '2017-05-23 11:16:31',
    'createduserid': '66e62b3ceef741cc8509c092e9aa11b4',
    'deleted': 'A',
    'description': '',
    'devicename': 'GP-1',
    'devicetype': '',
    'enclosureid': '',
    'enclosuretype': '',
    'fdidfrom': '',
    'fileList': '',
    'fileurl': '',
    'findname': '',
    'findtime': '2017-05-18',
    'lastupdatedstamp': '2017-05-23 11:18:18',
    'lastupdateduserid': '',
    'latitude': '',
    'line': '',
    'longitude': '',
    'memo': '缺陷',
    'parentid': '',
    'pictures': [],
    'planid': '',
    'refequipmentid': 'c2962a420565460ea2bc73371d051d64',
    'reflineid': '',
    'sightid': '3bb843126ac75316b65b786b0269d747',
    'solvebugid': '',
    'stationfdid': '',
    'stationlatitude': '',
    'stationlongitude': '',
    'stationname': '',
    'status': '5',
    'tempenclosureid': '',
    'tenantid': '1e0be4df-9af1-436b-a2b3-476e9c03fc96',
    'userid': '613831cccbe24a73840df09c85af55f0',
    'username': '汪铭洪',
    'voicelist': [],
    'workplanname': ''
  },
  {
    'attachmentid': '',
    'bugid': '084e70035f5d4d6a8439da28354afeb5',
    'bugsrctype': '0',
    'bugtypeid': '1002',
    'categoryid': '',
    'categoryname': '避雷针、所用变、电缆头和接地装置的连接脱落',
    'createdstamp': '2017-05-23 11:16:15',
    'createduserid': '66e62b3ceef741cc8509c092e9aa11b4',
    'deleted': 'A',
    'description': '',
    'devicename': 'GP-2',
    'devicetype': '',
    'enclosureid': '',
    'enclosuretype': '',
    'fdidfrom': '',
    'fileList': '',
    'fileurl': '',
    'findname': '',
    'findtime': '2017-05-02',
    'lastupdatedstamp': '2017-05-23 11:18:02',
    'lastupdateduserid': '',
    'latitude': '',
    'line': '',
    'longitude': '',
    'memo': '缺陷',
    'parentid': '',
    'pictures': [],
    'planid': '',
    'refequipmentid': '9910e477b49346058615eec3de355608',
    'reflineid': '',
    'sightid': '3bb843126ac75316b65b786b0269d747',
    'solvebugid': '',
    'stationfdid': '',
    'stationlatitude': '',
    'stationlongitude': '',
    'stationname': '',
    'status': '4',
    'tempenclosureid': '',
    'tenantid': '1e0be4df-9af1-436b-a2b3-476e9c03fc96',
    'userid': '613831cccbe24a73840df09c85af55f0',
    'username': '汪铭洪',
    'voicelist': [],
    'workplanname': ''
  }
];

export default {
  // 登录认证
  login(callback) {
    Vue.http.post(
      URL + 'user/logginForVR?v=1.0',
      JSON.stringify({login_name: LOGIN, current_pwd: PWD}),
      {headers: {'Content-Type': 'application/json'}}
    ).then(res => {
      if (res.body.code === '0000') {
        tenant_id = res.body.data[0].tenantid;
        token = res.body.data[0].token;
      }
      callback && callback();
    });
  },

  // 查询缺陷信息
  queryBugInfo(fd_id, callback) {
    if (OFFLINE) {
      callback(OFFLINE_BUGS);
    } else {
      Vue.http.post(
        URL + 'buginfo/findList?v=1.0',
        JSON.stringify({tenantid: tenant_id, fdidfrom: fd_id, pagesize: -1}),
        {headers: {token: token, 'Content-Type': 'application/json'}}
      ).then(res => {
        if (res.body.code === '0000') {
          callback && callback(res.body.data);
        } else {
          this.login(() => {
            this.queryBugInfo(fd_id, callback);
          });
        }
      });
    }
  },

  // 查询机柜信息
  queryCabinetInfo(fd_id, callback) {
    if (OFFLINE) {
      callback(OFFLINE_CABINETS);
    } else {
      Vue.http.post(
        URL + 'equipment/findRelation?v=1.0',
        JSON.stringify({fd_id_from: fd_id, pagesize: -1}),
        {headers: {token: this.token, 'Content-Type': 'application/json'}}
      ).then(res => {
        if (res.body.code === '0000') {
          callback && callback(res.body.data[0]['dataList']);
        } else {
          this.login(() => {
            this.queryCabinetInfo(fd_id, callback);
          });
        }
      });
    }
  }
}
