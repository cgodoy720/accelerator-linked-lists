class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

// Manually creating nodes and a list
// const node1 = new Node(4)
// // console.log(node1.data)

// const node2 = new Node(5)
// // console.log(node2)

// node1.next = node2
// console.log(node1)


class LinkedList {
    constructor(head=null){
        this.head = head
    }

    insert(data){
        // Create a new instance of the Node class using the data from the param
        const node = new Node(data)
        // Initialize a currentNode as this.head
        let currentNode = this.head
        // If there is no head, then assign this.head to be the newly created Node
        if(currentNode === null){
            this.head = node
        } else {
            // Otherwise check if there is a next node after the current node
            while(currentNode.next){
                // If there is, reassign currentNode to be the next node
                currentNode = currentNode.next
            }
            // When we exit the while loop it means that we are at the last node in the list. Assign the newly created node to be currentNode's next property
            currentNode.next = node
        }
    }

    search(data){
        let currentNode = this.head
        while(currentNode){
            if(currentNode.data === data){
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }

    getLast(){
        let currentNode = this.head
        // The "?" is for "optional chaining". Meaning if there IS a currentNode, then check its "next" property
        while(currentNode?.next){
            currentNode = currentNode.next
        }
        return currentNode
    }

    delete(target){
        let currentNode = this.head
        if(currentNode.data === target){
            this.head = currentNode.next
        } else {
            // Initialize prevNode so we can keep track of the previous node
            let prevNode = currentNode
            // Reassign currentNode to be the next node
            currentNode = currentNode.next
            // While there is a currentNode, check if that node's data matches the target
            while(currentNode){
                // If it matches, then reassign prevNode.next to point to 
                // currentNode.next (takes out currentNode bc prevNode.next points to the node after currentNode)
                if(currentNode.data === target){
                    prevNode.next = currentNode.next
                }
                // If the currentNode doesn't match the target, reassign currentNode and prevNode (go to the next node)
                prevNode = currentNode
                currentNode = currentNode.next
            }
        }
    }
    
    size(){
        let counter = 0
        let currentNode = this.head
        while(currentNode){
            counter += 1
            currentNode = currentNode.next
        }
        return counter
    }

    clear(){
        this.head = null
    }
}


const list = new LinkedList()
list.insert(5)
list.insert(6)
list.insert(10)
list.insert(14)
list.insert(60)
list.insert(10000)
list.delete(6)

console.log(list.size())
