### 三次法则
如果相同的代码片段重复出现三次以上的时候，将其提取出来做成一个子程式就势在必行，因此使用methods来进行封装。
### computed
* 模板中函数调用的时候没有括号;
* computed 会将计算后的结果暂存起来，并且只会在它所观察的属性发生变化时才会产生调用， 但是methods中的function只要调用就会进行触发
*   computed属性中的function无法使用参数， 但是methods可以
### computed 和 methods使用场景



