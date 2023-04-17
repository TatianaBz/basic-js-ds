 const {
   Node
 } = require('../extensions/list-tree.js');

 /**
  * Implement simple binary search tree according DaddData task description
  * using Node from extensions
  */



 class BinarySearchTree {

   constructor() {
     this.node = null;
   }
   root() {
     return this.node;
   }

   add(data) {
     this.node = addData(data, this.node);

     function addData(data, node) {
       if (!node) {
         return new Node(data);
       }
       if (node.data < data) {
         node.right = addData(data, node.right);
       } else if (node.data > data) {
         node.left = addData(data, node.left);
       }
       return node;
     }
   }

   find(data) {
     return findDate(data, this.node);

     function findDate(data, node) {
       if (!node) {
         return null;
       }

       if (node.data < data) {
         return findDate(data, node.right);
       } else if (node.data > data) {
         return findDate(data, node.left);
       }

       return node;
     }
   }
   has(data) {
     if (this.find(data)) {
       return true;
     } else
       return false;
   }

   remove(data) {
     this.node = removeData(data, this.node);

     function removeData(data, node) {
       if (!node) {
         return null;
       }

       if (node.data < data) {
         node.right = removeData(data, node.right);
         return node;
       } else if (node.data > data) {
         node.left = removeData(data, node.left);
         return node;
       } else {
         if (!node.left && !node.right) {
           return null;
         }
         if (!node.left) {
           node = node.right;
           return node;
         }

         if (!node.right) {
           node = node.left;
           return node;
         }

         let maxFromLeft = node.left;
         while (maxFromLeft.right) {
           maxFromLeft = maxFromLeft.right;
         }
         node.data = maxFromLeft.data;
         node.left = removeData(maxFromLeft.data, node.left);

         return node;
       }
     }
   }

   min() {
     if (!this.node) {
       return false;
     }
     let node = this.node;
     do {
       node = node.left;
     } while (node.left);

     return node.data;
   }

   max() {
     if (!this.node) {
       return false;
     }
     let node = this.node;
     do {node = node.right;
     }
     while (node.right);
     return node.data;
   }
 }


 module.exports = {
   BinarySearchTree
 };