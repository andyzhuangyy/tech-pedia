# Tools

## Markdown Mindmap

You can use install via NPM:

    $ npm install gitbook-plugin-mindmap-7dtime

And use it for your book with in the book.json:

    {
      "plugins": ["mindmap-7dtime"]
    }

```mind

 - 顶层
   - 二层
     - 下一层
     - 接下来
   - 二层1
     - next
     - then

```

## plantuml

```uml
@startuml

Actor1 -> Actor2: Do something
Actor2 -> Actor1: Response

@enduml
```

## Codeblock

Python Code
[import](../assets/script/helloworld.py)

## LaTeX

### 点到一条折线的最短距离和贴路点

说明：

* {% math %}Point: (x,y){% endmath %}
* {% math %} Polyline:(x_1,y_1),(x_2,y_2)...(x_n,y_n){% endmath %}
* {% math %} i,j,k,l,m,p \in [1, n] {% endmath %}

若{% math %}(x,y){% endmath %}满足条件如下条件

1. {% math %} x_k < x < x_l , y_m < y < y_p {% endmath %}
2. {% math %} i = MIN(k, l, m, p), j = MAX(k, l, m, p) {% endmath %}

则点{% math %}(x,y){% endmath %}到有序折线{% math %} Polyline:(x_1,y_1),(x_2,y_2)...(x_n,y_n){% endmath %}最短距离的交点(垂心)在{% math %}(x_i,y_i){% endmath %}到{% math %}(x_j,y_j){% endmath %}的折线之间。