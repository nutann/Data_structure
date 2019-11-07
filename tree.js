function Node(data){
    this.data = data;
    this.left = null;
    this.right = null
}


function BST(){

    this.root = null;

    this.insert= function(v){
       var n = new Node(v);

       if(this.root == null){
           this.root = n;
           return;
       }


    }
}