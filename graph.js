// 1) DFS in graph
// Tc - O(N+E) SC-O(N + E) + O(N) + O(N)

class Solution {
  // The dfs helper
  dfsHelper(node, vis, adj, storeDFS) {
    // Add the node to final DFS
    storeDFS.push(node);
    // Mark the node visited in visited array
    vis[node] = 1;
    // Traverse all adjacent
    for (let i = 0; i < adj[node].length; i++) {
      if (vis[adj[node][i]] === 0) {
        this.dfsHelper(adj[node][i], vis, adj, storeDFS);
      }
    }
  }

  // Function to return a list containing the DFS traversal of the graph.
  dfsOfGraph(V, adj) {
    // define the identifiers required.
    // It will store the nodes sequence in which visited.
    let storeDFS = [];
    // It will store wether vertex visited or not
    let vis = new Array(V).fill(0);
    // Run a for loop for all vertices
    for (let i = 0; i < V; i++) {
      // check if visited or not
      if (vis[i] === 0) {
        // we will call the dfs traversal helper function
        this.dfsHelper(i, vis, adj, storeDFS);
      }
    }
    // Return the final array
    return storeDFS;
  }
}

// 2) BFS of graph
// TC and SC same as above.

function bfsOfGraph(V, adj) {
  // define the identifiers required
  // it will mark the visited node
  let vis = new Array(V).fill(0);
  // it will store the nodes visited
  let bfs = [];

  // Loop for all vertices
  for (let i = 0; i < V; i++) {
    // Check if already visited or not
    if (vis[i] === 0) {
      // define a queue for traversal
      let queue = [];
      // push current vertex onto queue
      queue.push(i);
      // mark it's visited true
      vis[i] = 1;
      // Loop for all adjacent until queue empty
      while (queue.length !== 0) {
        // Take the node from queue and delete it
        let node = queue.shift();
        // Push it into traversed bfs
        bfs.push(node);
        // Loop for all adjacent
        for (let j = 0; j < adj[node].length; j++) {
          // If the adjacent node is not visited push it onto queue
          // Mark it as visited in vis array
          if (vis[adj[node][j]] === 0) {
            queue.push(adj[node][j]);
            vis[adj[node][j]] = 1;
          }
        }
      }
    }
    // The break here ensure we only do it for the first component
    break;
  }
  return bfs;
}

// 3) Cycle in undirected graph using BFS.
// Time Complexity: O(N+E),  N is the time taken and E is for traveling through adjacent nodes overall.
// Space Complexity: O(N+E) +  O(N) + O(N) , space for adjacent list , array and queue.

class Solution {
  // helper function to find cycle
  hasCycle(node, V, vis, adj) {
    // Mark the node as visited
    vis[node] = 1;
    // define the identifiers required
    // we need queue for level order or BFS
    let queue = [];
    // Push the node onto queue along with parent.
    queue.push([node, -1]);
    // Loop until the queue is empty
    while (queue.length !== 0) {
      // get the node and it's parent
      let [curr, parent] = queue.shift();
      // Now loop for all nodes adjacent
      for (let j = 0; j < adj[curr].length; j++) {
        // If the node is not visited. Put it onto queue and loop
        if (vis[adj[curr][j]] === 0) {
          // mark it as visited
          vis[adj[curr][j]] = 1;
          // Push the current node onto queue with parent
          queue.push([adj[curr][j], curr]);
        } else if (parent !== adj[curr][j]) {
          return true;
        }
      }
    }
    return false;
  }

  // Function to detect cycle in an undirected graph.
  isCycle(V, adj) {
    // define the identifiers here
    // The vis array keep track of all visited vertices or nodes
    let vis = new Array(V).fill(0);

    // define the loop for bfs
    for (let i = 0; i < V; i++) {
      // Check if current node is visited or not
      if (vis[i] === 0) {
        // As it was not visited check if it has cycle
        if (this.hasCycle(i, V, vis, adj)) return true;
      }
    }
    return false;
  }
}

// 4) Cycle in undirected graph using DFS.
// Time Complexity: O(N+E),  N is the time taken and E is for traveling through adjacent nodes overall.
// Space Complexity: O(N+E) +  O(N) + O(N) , space for adjacent list , array and queue.

class Solution {
  // helper function to find cycle
  hasCycle(node, par, vis, adj) {
    // Mark the node as visited
    vis[node] = 1;
    // loop for all adjacent nodes
    for (let i = 0; i < adj[node].length; i++) {
      // check if adjacent visited
      if (vis[adj[node][i]] === 0) {
        // Recursively move to it's adjacent
        if (this.hasCycle(adj[node][i], node, vis, adj)) return true;
      } else if (adj[node][i] !== par) {
        return true;
      }
    }
    return false;
  }

  // Function to detect cycle in an undirected graph.
  isCycle(V, adj) {
    // define the identifiers here
    // The vis array keep track of all visited vertices or nodes
    let vis = new Array(V).fill(0);
    // define the loop for bfs
    for (let i = 0; i < V; i++) {
      // Check if current node is visited or not
      if (!vis[i] && this.hasCycle(i, -1, vis, adj)) {
        // As it was not visited check if it has cycle
        return true;
      }
    }
    return false;
  }
}

// 5) Cycle in directed Graph using DFS
// TC - O(N+E)
// SC - O(2N) + auxiliary space

class Solution {
  // Function to check if cycle exist for particular vertex
  isCycle(node, vis, dfsVis, V, adj) {
    // Mark the current node to be visited in both vis and dfsvis.
    vis[node] = true;
    dfsVis[node] = true;
    // Loop for the current node and it's adjacents
    for (let j = 0; j < adj[node].length; j++) {
      // If the current adjacent to the node is not visited.
      if (!vis[adj[node][j]]) {
        // Then recursively check cycle in it
        if (this.isCycle(adj[node][j], vis, dfsVis, V, adj)) return true;
        // if the current node is visited in vis check in dfs vis.
      } else if (dfsVis[adj[node][j]]) {
        return true;
      }
    }
    // If nothing returned backtrack by marking current node back to unvisited in dfsVis
    dfsVis[node] = false;
    return false;
  }

  // Function to detect cycle in a directed graph.
  isCyclic(V, adj) {
    // define the identifiers required
    // Create a vis array to keep track of all nodes visited overall.
    let visited = new Array(V).fill(false);
    // Create a dfs visited array to check if the curr node was visited in the same cycle or not
    let dfsVisited = new Array(V).fill(false);

    // Loop for all components/vertices of graphs
    for (let i = 0; i < V; i++) {
      // Check if the curr node is visited or not visited.
      // If not visited.. then call cycle check.
      if (visited[i] === false) {
        if (this.isCycle(i, visited, dfsVisited, V, adj)) return true;
      }
    }
    // In case true isn't returned thus no cycle found.
    return false;
  }
}

// 6) Cycle in Directed Graph in BFS (Khans algorithm)
// Khan's algorithm only works in directed acyclic graph (DAG)
// This algo is used to find topological sort. Thus if we are not able to find
// topological sort that means it is cyclic in nature.
// TC - O(N+E) and SC - O(N + N)

class Solution {
  //Function to return list containing vertices in Topological order.
  isCyclic(V, adj) {
    // define the identifiers required
    // the indegree list/array will store the indegree of each vertex
    let inDegree = new Array(V).fill(0);
    // the queue DS will keep track of all vertex which will have indegree 0
    let queue = [];

    // Count the indegree
    // Our first loop is for each vertex
    for (let i = 0; i < V; i++) {
      // Our second loop is for adjacent node of each vertex
      for (let j = 0; j < adj[i].length; j++) {
        // Here i is the vertex index and then j is the current adjacent of i.. that index is incremented
        inDegree[adj[i][j]]++;
      }
    }

    // Add all the vertex with indegree 0 to queue
    for (let i = 0; i < V; i++) {
      if (inDegree[i] === 0) {
        queue.push(i);
      }
    }

    // Define a counter to check number of times while loop ran... it should run V times which is number of vertices
    let counter = 0;

    // Now run the bfs algo
    while (queue.length !== 0) {
      // Select the current vertex with indegree 0 from queue
      let node = queue.shift();
      // Increment counter
      counter++;
      // Loop for all adjacent node of current vertex and reduce their indegree (dependency)
      for (let k = 0; k < adj[node].length; k++) {
        inDegree[adj[node][k]]--;
        // Check if the degree is 0 for adjacent of node
        if (inDegree[adj[node][k]] === 0) {
          queue.push(adj[node][k]);
        }
      }
    }
    // Check if counter is equal to V or not
    if (counter === V) return 0;
    return 1;
  }
}

// 7) Topological Sort using BFS (Kahn's Algo)

class Solution {
  //Function to return list containing vertices in Topological order.
  topoSort(V, adj) {
    // define the identifiers required
    // the topo list/array will store the final topo sort
    let topo = new Array(V).fill(0);
    // the indegree list/array will store the indegree of each vertex
    let inDegree = new Array(V).fill(0);
    // the queue DS will keep track of all vertex which will have indegree 0
    let queue = [];
    // Index for topo array
    let idx = 0;

    // Count the indegree
    // Our first loop is for each vertex
    for (let i = 0; i < V; i++) {
      // Our second loop is for adjacent node of each vertex
      for (let j = 0; j < adj[i].length; j++) {
        // Here i is the vertex index and then j is the current adjacent of i.. that index is incremented
        inDegree[adj[i][j]]++;
      }
    }

    // Add all the vertex with indegree 0 to queue
    for (let i = 0; i < V; i++) {
      if (inDegree[i] === 0) {
        queue.push(i);
      }
    }

    // Now run the bfs algo
    while (queue.length !== 0) {
      // Select the current vertex with indegree 0 from queue
      let node = queue.shift();
      // push the current node in topo as it has 0 dependency
      topo[idx++] = node;

      // Loop for all adjacent node of current vertex and reduce their indegree (dependency)
      for (let k = 0; k < adj[node].length; k++) {
        inDegree[adj[node][k]]--;
        // Check if the degree is 0 for adjacent of node
        if (inDegree[adj[node][k]] === 0) {
          queue.push(adj[node][k]);
        }
      }
    }
    return topo;
  }
}

// 8) Topological Sort using DFS
// TC - O(N+E)
// SC - O(N+N) + auxilary Space

class Solution {
  // Function to find the topo sort using DFS
  findTopoSort(node, vis, stack, V, adj) {
    // mark the node as visited
    vis[node] = true;
    // Loop for all adjacent vertex or nodes
    for (let j = 0; j < adj[node].length; j++) {
      // Check if the node is visited
      if (!vis[adj[node][j]]) {
        this.findTopoSort(adj[node][j], vis, stack, V, adj);
      }
    }
    stack.push(node);
  }

  // Function to return list containing vertices in Topological order.
  topoSort(V, adj) {
    // define the identifiers required
    // we define a stack to hold nodes once traversed for topological sort
    let stack = [];
    // vis array to keep track of nodes visited
    let visited = new Array(V).fill(false);

    // Now loop for all vertices
    for (let i = 0; i < V; i++) {
      // Check if the current vertex is visited or not
      if (!visited[i]) {
        this.findTopoSort(i, visited, stack, V, adj);
      }
    }
    return stack.reverse();
  }
}

// 9) Bipartite Graph using BFS
// A graph that can be coloured using 2 colors such that no two adjacent nodes have same colour.
// If the cycle length in a graph is odd then it's not bipartite. If even then bipartite
// TC - O(N+E) and SC-O(N+E) + O(N) + O(N)

const bfsCheck = (s, colors, graph) => {
  // define the identifiers required
  let queue = [];
  // push the root onto queue
  queue.push(s);
  // Mark it as coloured
  colors[s] = 1;

  // Loop for the first component
  while (queue.length !== 0) {
    // get the current node element and remove it from queue
    let node = queue.shift();

    // Loop for all adjacent vertices to current node
    for (let i = 0; i < graph[node].length; i++) {
      // if current node is coloured or not
      if (colors[graph[node][i]] === -1) {
        // fill it with color
        colors[graph[node][i]] = 1 - colors[node];
        // push it onto queue
        queue.push(graph[node][i]);
      } else if (colors[graph[node][i]] === colors[node]) {
        return false;
      }
    }
  }
  return true;
};

const isBipartite = (graph) => {
  // define the identifiers required
  let colors = new Array(graph.length).fill(-1);
  // define the color
  let color = true;

  // Loop for all vertices of graph
  for (let i = 0; i < graph.length; i++) {
    // check if current vertex is not colored
    if (colors[i] === -1) {
      if (!bfsCheck(i, colors, graph)) return false;
    }
  }
  return true;
};

// 10) Bipartite Graph using DFS
// A graph that can be coloured using 2 colors such that no two adjacent nodes have same colour.
// If the cycle length in a graph is odd then it's not bipartite. If even then bipartite
// TC - O(N+E) and SC-O(N+E) + O(N) + O(N)

const dfsCheck = (node, colors, graph) => {
  // Mark the current node as colored
  if (colors[node] === -1) colors[node] = 1;
  // Loop for the adjacent nodes
  for (let i = 0; i < graph[node].length; i++) {
    // If uncoloured color it
    if (colors[graph[node][i]] === -1) {
      // Change the colors
      colors[graph[node][i]] = 1 - colors[node];
      // Recursively call it to be colored
      if (!dfsCheck(graph[node][i], colors, graph)) return false;
    } else if (colors[graph[node][i]] === colors[node]) {
      // if color of current adjacent node and parent node is same, Return false
      return false;
    }
  }
  return true;
};

const isBipartiteDfs = (graph) => {
  // define the identifiers required
  let colors = new Array(graph.length).fill(-1);

  // Loop for all vertices of graph
  for (let i = 0; i < graph.length; i++) {
    // check if current vertex is not colored
    if (colors[i] === -1) {
      if (!dfsCheck(i, colors, graph)) return false;
    }
  }
  return true;
};
