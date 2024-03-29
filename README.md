# optimal-path
根据超市商家提供的信息建立相应的超市货架简化几何模型。用户在小程序界面选择自己想买的商品后，小程序自动跳转到商场的俯视图模型界面并自动规划并显示出最优路径，让用户在大型超市内用最短的时间、走最短的路选购好自己所需要的商品。

# Table of contents

- [optimal-path](#optimal-path)
- [Table of contents](#table-of-contents)
- [Usage](#usage)
- [Development](#development)
- [Adding new features or fixing bugs](#adding-new-features-or-fixing-bugs)


# Usage
[(Back to top)](#table-of-contents)

用以下命令将文件下载到本地：

```git init```

```git clone https://github.com/navendu-pottekkat/nsfw-filter.git```

用微信小程序开发工具打开即可。

# Development
[(Back to top)](#table-of-contents)

本项目的两个核心点在于路径的规划和显示。

1.最优路径规划方面(\utils\ga.js)：

利用遗传算法规划路径。具体过程如下：

(1)假设商场每个区域都是规则的矩形，设计出每个区域的属性，包括左上角的坐标（x,y)，矩形区域的长度w和宽度h（还有其他的属性，但是上述这些是遗传算法中用到的）。计算出每个区域的中心点坐标：(x+w/2,y+h/2)。

(2)根据商场布局画出图，每个节点代表一个区域，节点之间的边的权重用中心点的距离表示，这个距离等于两个区域中心点的横坐标差的绝对值加上纵坐标差的绝对值。

(3)遗传算法计算出最优路径。

a.生成5倍于节点总数个的节点顺序的随机排列，作为群体。

b.计算群体中每个种群（每种排序）的路径总长度，以此计算出群体中每个种群（每种排序）的适应度（总路径越短，适应度越大）。根据适应度决定现阶段最优解。

c.归一化群体中每个种群（每种排序）的适应度。

d.根据适应度选出两个种群交配（适应度高的种群被选中的概率大），并以一定的概率产生变异，得到下一代，更新群体。

e.重复步骤bcd 15倍于节点总数次，则现阶段的最优解就是最终的最优解。

2.路径的正确显示(\path\floor1path\floor1path1.js)：

为了贴合实际，要求路径线贴合商场平面图的过道，也会有横穿某个区域的情况。路径显示算法要求对于不同的布局算法不需要太多修改。实现过程如下：

(1)对于每个区域，假设其四个入口（也是出口）分别位于矩形的中心点与每条边的中点连接的延长线上，每个入口（出口）与相应的矩形边的中心点的距离为过道宽度的一般。根据这个原则确定每个区域的入口（出口）。所有区域的入口（出口）存储在一个数组points中作为路径线辅助点使用。

(2)根据遗传算法得到的最优解，确定下一个区域。由中心点的坐标可确定起始区域和终止区域的相对方位，从而确定从起点的哪一个出口出发到达终点的入口最短，于是一条路径线的起始坐标和结束坐标确定。因为情况有多种，以下就以终点在起点右下方说明。

(3)从起始点开始向右或向下搜索points中的点。如果向右搜索，则搜索的点的横坐标要小于终点的横坐标（在终点的左方）；如果向下搜索，则搜索的点的纵坐标要小于终点的纵坐标（在终点的上方）。于是可以确定起点的下一个点，连接两点显示路径。

(4)把现在搜索到的点作为起点重复步骤c，直到与终点的距离小于规定的值，连接搜索的最后一个点和终点，一条路径完成。

确定下一个区域重复步骤BCD直到最优排序的倒数第二个点。至此，所有路径显示完成。

# Adding new features or fixing bugs
[(Back to top)](#table-of-contents)

小程序的界面美观度需要得到改善，目前小程序的界面比较简陋，不足以吸引用户。

这个模型也可以用于其他的场景。
