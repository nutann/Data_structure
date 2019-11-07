

function Node(data){

    this.data = data;
    this.next = null;
}

function LinkedList(){

    this.root = null;

    this.insert = function(data){

        var node = new Node(data);
        console.log("new node is " +node);
        if(this.root == null){

            this.root = node;
            console.log("first node " +node + "root " +this.root)
            return;
        }
        if(this.root.next == null){
            this.root.next = node;
            console.log("second node " +node + "root " +this.root)
            return;
        }
        var temp = this.root;
        while(temp.next){
            console.log("temp == " +JSON.stringify(temp));
            temp = temp.next;
        }
        console.log("temp == " +JSON.stringify(temp));
        temp.next = node;
        console.log("final == " +JSON.stringify(this.root));
    }



    this.display = function(){
        temp = this.root;
        while(temp){
            console.log("data == "+temp.data);
            temp = temp.next;
        }
    }
}

var list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.display();

