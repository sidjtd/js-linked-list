/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
 var head = null;
 var tail = null;

function linkedListGenerator(){

  function getHead(){
    return head;
  }

  function getTail(){
    return tail;
  }

  function add(valuex){
   var node = {
    value : valuex,
    next : null
    };

    if(head===null&&tail===null){
      tail = node;
      head = node;
      }
    else if(head!==null){
      tail = node;
    }
    else{

    }
    return node;
  }

  function get(num){
  }
  function remove(num){
  }
  function insert(value,num){
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  };

}//Dont mess with this brace
var movies = linkedListGenerator();
