'use strict'

function Graph(numVer){
    this.vertices = numVer;
    this.adjList = new Map();

    this.addvertex = function(v){

        this.adjList.set(v,[]);

    }
    this.addEdge= function(v,w){
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);

    }
     this.printg=function(){
        var keys = this.adjList.keys();
        console.log("keys " +keys);
        for(var i of keys){
           var values = this.adjList.get(i);
           var c = "";
           for(var j of values){
               c+=" " +j;
           }
           console.log("Graph : " +i +"is connected to " +c);
        }
    }
    this.dfs = function(v){

         var keys = this.adjList.keys();
         var visited = [];
         for(var i of keys){
             visited[i] = false;
         }
         var stack = [];
         visited[v] = true;
         stack.push(v);

         while(stack.length>0){
              var ele = stack.pop();
              console.log("ele visited is "+ele);
              var get_neighb = this.adjList.get(ele);
              console.log("get_neighb  "+get_neighb)
               for(i of get_neighb){
            if(visited[i] == false){
                visited[i] = true;
               stack.push(i);
               console.log("push to stack "+stack);
            }
        }
         }



    }

}

var g = new Graph(5);
g.addvertex(1);
g.addvertex(2);
g.addvertex(3);
g.addvertex(4);
g.addvertex(5);
g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(1,5);
g.addEdge(2,5);
g.addEdge(2,4);
g.addEdge(3,5);

g.printg();
g.dfs(1);