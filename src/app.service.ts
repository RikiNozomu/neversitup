import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  permutations(str : string): string[] {
    // init remark
    const length = str.length
    let posChar:number[] = []
    let result:string[] = []
    for (let index = 0; index < length; index++) {
      posChar[index] = 0;
    }

    let i = 0
    let pos = 0
    let resultStr = ''
    while (true) {
      // is finish?
      if(i >= length || pos >= length){
        pos = pos - 1
        if(pos < 0){
          break;
        }
        resultStr = resultStr.slice(0,pos)
        i = posChar[pos]+1
        continue
      }

      // shifting
      if(posChar.slice(0,pos).findIndex(x => x == i) == -1){
        resultStr = resultStr + str.charAt(i)
        posChar[pos] = i
        pos = pos + 1
        i = 0
      }else {
        i++
        continue
      }

      //add result
      if(pos == length && result.findIndex(x => x == resultStr) == -1){
        result.push(resultStr)
      }
    }
    return result
  }

  findTheOdd(datas : number[]): number | null {
    let counts:{number : number, count : number}[] = []
    for (const item of datas) {
      const idx = counts.findIndex(x => x.number == item)
      if(idx == -1){
        counts.push({ number : item, count : 1})
      }else {
        counts[idx].count++
      }
    }
    return counts.find(x => x.count%2)?.number
  }

  countTheSmileyFaces(datas : string[]): number {
    datas = datas.filter(x => (x.charAt(0) == ':' || x.charAt(0) == ';') )
    return (
      (datas.filter(x => x.length == 2).filter(x => (x.charAt(1) == ')' || x.charAt(1) == 'D')).length) + 
      (datas.filter(x => x.length == 3).filter(x => (x.charAt(1) == '-' || x.charAt(1) == '~')).filter(x => (x.charAt(2) == ')' || x.charAt(2) == 'D')).length)
    )
  }
}
