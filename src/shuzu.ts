let a: number[] =[1,2]
let b: Array<number> = [1,2,3]
// const为数组不变，里面内容不检测
const c: number[] = []

console.log(a, b)
console.log(a.length, b.length)
// 识别不到undefined，没有-1
console.log(a[1],a[-1], b.length)

// 判断为空，注意若数组为[], 则依然为true
if (a.length !== 0) {
    console.log("aa")
}

// 尾部添加元素
a.push(1)
a.pop()
// 首部添加,小程序日志添加unshift
a.unshift(1)
a.shift()

const d =[1,2,3,4,5,6,7,8,9]
// 切片
console.log(d.slice(2,4), d.slice(3))
// 从3位置开始删除2个元素, 插入33,35元素
const deleted = d.splice(3,2, 33,35)
// 查找第一个出现的位置,从第2个位置开始找
console.log(d.indexOf(33, 2))
// 从右查找
console.log(d.lastIndexOf(33))
// 排序按字母顺序排，只能排字母单词
d.sort()

// 元祖 tuple
const e = [1, 2, 3, 4]
const [a1, a2, a3] = e
console.log("ee",a1)

// split/join
console.log("a,b,c,1,3".split(","))
console.log([1,2,3].join(" "))
