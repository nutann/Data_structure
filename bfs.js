'use strict'


function Queue(){

    var q = [];
     this.enqueue = function(v){
//console.log("enqueue "+v);
         q.push(v);
     }
     this.dequeue = function(){
         var e = q.shift();
   //      console.log("dequeue "+e +"qu" +q);
         return e;
     }
     this.isEmpty = function(){
         return (q.length <= 0);
     }
}

function Graph(n) {


    this.noOfvertices = n;
    this.adjList = new Map();

    this.addvertex = function(v){
        this.adjList.set(v,[]);
    }

    this.addEdge = function(v,w){

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

    this.bfs = function(v){

        var keys = this.adjList.keys();
        var visited = [];
        var queue = new Queue();
        for(var i of keys){
           visited[i] = false;
        }
        visited[v] = true;
        queue.enqueue(v);

        while(!queue.isEmpty()){

            var ele = queue.dequeue();
            console.log("visited ele is" +ele );

            var neighb = this.adjList.get(ele)
            console.log("nei" +neighb );
            for(var i of neighb){

               if(!visited[i]){

                   visited[i] = true;
                   queue.enqueue(i);
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
g.bfs(1);