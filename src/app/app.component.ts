import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  dateTime: Date | undefined;
  picked: string = "";
  studentNameSet : string[] = ['刘崇凌',
  '廖树强',
  '陈柏霖',
  '周瑞',
  '潘玉龙',
  '徐智霖',
  '王思语',
  '张棵鑫',
  '米梓月',
  '熊嘉怡',
  '廖雅竹',
  '查顺泷',
  '李沂桐',
  '李泽政',
  '杨懿人',
  '谭紫韵',
  '但晓语',
  '贺明皓',
  '杨倩一',
  '冯钰婷',
  '蒲诗涵',
  '谢东廷',
  '李明轩',
  '覃文杰',
  '曹瀚文',
  '陈艺心',
  '陈吕昱桐',
  '陈凯瑞',
  '文浩轩',
  '黄家敏',
  '王鑫睿',
  '漆晏君',
  '朱欣悦',
  '谭博文',
  '唐雨泽',
  '石国辰',
  '秦朗',
  '王语',
  '漆玉',
  '郭鑫',
  '姜晨',
  '廖秦',
  '陈诚',
  '向前',
  '唐雪',
  '蒋倩',
  '刘微',
  '钱卿']
  randomIdx : number = 0
  title = 'name-picker';
  myMap = new Map<string, number>();
  nameFreqArray: { key: string, value: number; }[] = []

  ngOnInit(): void {
    this.dateTime = new Date();
    for (var name of this.studentNameSet) {
      let  nameLocalKey : string = name + '+pr';
      if (!localStorage.getItem(nameLocalKey)) {
        localStorage.setItem(nameLocalKey, '0')
      }
    }
  }

  picking(): void {
    this.randomIdx = Math.floor(Math.random() * (this.studentNameSet.length))
    this.picked = this.studentNameSet[this.randomIdx]
    var nameLocalKey = this.picked + '+pr'
    var oldCount = localStorage.getItem(nameLocalKey)
    var newCount = Number.parseInt(oldCount ? oldCount : '0') + 1
    localStorage.setItem(nameLocalKey, newCount.toString())

    this.readLocalStorage()


  }

  readLocalStorage() : void {
    this.nameFreqArray = []
    for (var name of this.studentNameSet) {
      var nameKeyInLocal = name + '+pr'
      var count = localStorage.getItem(nameKeyInLocal)
      // if (count) {
      //   console.log(name)
      //   console.log(count)
      // }
      var countNumber = Number.parseInt(count ? count : '0')
      this.nameFreqArray.push({key: name , value: countNumber})
    }

    this.nameFreqArray = this.nameFreqArray.sort((a, b) => b.value - a.value)
    
    // for (var ele of this.nameFreqArray) {
    //   console.log(ele.key)
    //   console.log(ele.value)
    // }
  }


}
