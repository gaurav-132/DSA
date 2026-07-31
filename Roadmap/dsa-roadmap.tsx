import { useState } from "react";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Foundation",
    duration: "4–5 weeks",
    color: "#6C63FF",
    bg: "#6C63FF18",
    border: "#6C63FF40",
    topics: [
      {
        id: 1,
        title: "Arrays & Strings",
        icon: "▦",
        theory: [
          "Memory layout — contiguous allocation",
          "Indexing, slicing, iteration",
          "Mutability vs immutability",
          "2D arrays, jagged arrays",
        ],
        patterns: [
          {
            name: "Two Pointers",
            desc: "Left & right pointers converging. Used when array is sorted or you need pair-based comparisons.",
            signal: "Sorted array + pair / triplet / subarray sum target",
          },
          {
            name: "Sliding Window",
            desc: "Expand/shrink a window of elements. Used for contiguous subarray/substring problems.",
            signal: "'Maximum/minimum subarray of size k' or 'longest substring with condition'",
          },
          {
            name: "Prefix Sum",
            desc: "Precompute cumulative sums for O(1) range queries.",
            signal: "Range sum queries, subarray sum equals k",
          },
          {
            name: "Kadane's Algorithm",
            desc: "Track running max subarray sum.",
            signal: "Maximum subarray sum",
          },
        ],
        problems: [
          { name: "Two Sum", link: "https://leetcode.com/problems/two-sum/", tag: "Easy", pattern: "Hashing" },
          { name: "Best Time to Buy & Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", tag: "Easy", pattern: "Kadane's" },
          { name: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/", tag: "Easy", pattern: "Hashing" },
          { name: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", tag: "Medium", pattern: "Kadane's" },
          { name: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", tag: "Medium", pattern: "Prefix Sum" },
          { name: "3Sum", link: "https://leetcode.com/problems/3sum/", tag: "Medium", pattern: "Two Pointers" },
          { name: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/", tag: "Medium", pattern: "Two Pointers" },
          { name: "Longest Substring Without Repeating Chars", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", tag: "Medium", pattern: "Sliding Window" },
          { name: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/", tag: "Medium", pattern: "Prefix Sum + Hash" },
          { name: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", tag: "Hard", pattern: "Two Pointers / Prefix" },
        ],
      },
      {
        id: 2,
        title: "Hashing",
        icon: "#",
        theory: [
          "Hash functions, collision resolution",
          "HashMap vs HashSet",
          "Load factor, rehashing",
          "Frequency counting",
        ],
        patterns: [
          {
            name: "Frequency Map",
            desc: "Count occurrences to find duplicates, majorities, or anagrams.",
            signal: "'Find duplicate', 'anagram check', 'majority element'",
          },
          {
            name: "Complement Lookup",
            desc: "Store seen values; for each new value check if its complement exists.",
            signal: "Two-sum style — find pair with target",
          },
          {
            name: "Running State Hash",
            desc: "Hash prefix states (sums, XORs) to detect subarrays with a property.",
            signal: "'Subarray with sum 0', 'equal 0s and 1s'",
          },
        ],
        problems: [
          { name: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", tag: "Easy", pattern: "Frequency Map" },
          { name: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", tag: "Medium", pattern: "Frequency Map" },
          { name: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", tag: "Medium", pattern: "Freq Map + Bucket Sort" },
          { name: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", tag: "Medium", pattern: "HashSet" },
          { name: "Subarray with Sum 0", link: "https://www.geeksforgeeks.org/find-if-there-is-a-subarray-with-0-sum/", tag: "Medium", pattern: "Prefix Sum + Hash" },
        ],
      },
      {
        id: 3,
        title: "Recursion & Backtracking",
        icon: "↩",
        theory: [
          "Call stack intuition",
          "Base case design",
          "Tree of recursive calls",
          "Memoization intro",
        ],
        patterns: [
          {
            name: "Choose / Explore / Unchoose",
            desc: "Classic backtracking template — make a choice, recurse, undo choice.",
            signal: "Generate all subsets, permutations, combinations",
          },
          {
            name: "Pruning",
            desc: "Skip branches that can't lead to valid solutions early.",
            signal: "Sudoku solver, N-Queens, word search",
          },
        ],
        problems: [
          { name: "Subsets", link: "https://leetcode.com/problems/subsets/", tag: "Medium", pattern: "Backtracking" },
          { name: "Permutations", link: "https://leetcode.com/problems/permutations/", tag: "Medium", pattern: "Backtracking" },
          { name: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/", tag: "Medium", pattern: "Backtracking + Pruning" },
          { name: "Word Search", link: "https://leetcode.com/problems/word-search/", tag: "Medium", pattern: "DFS + Backtracking" },
          { name: "N-Queens", link: "https://leetcode.com/problems/n-queens/", tag: "Hard", pattern: "Backtracking + Pruning" },
          { name: "Palindrome Partitioning", link: "https://leetcode.com/problems/palindrome-partitioning/", tag: "Medium", pattern: "Backtracking" },
        ],
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Linear Structures",
    duration: "3–4 weeks",
    color: "#00B894",
    bg: "#00B89418",
    border: "#00B89440",
    topics: [
      {
        id: 4,
        title: "Linked Lists",
        icon: "⬡",
        theory: [
          "Singly vs Doubly vs Circular",
          "Pointer manipulation",
          "Dummy node trick",
          "In-place reversal",
        ],
        patterns: [
          {
            name: "Fast & Slow Pointers",
            desc: "Two pointers at different speeds to find cycles, midpoints.",
            signal: "Cycle detection, find middle, Nth from end",
          },
          {
            name: "In-Place Reversal",
            desc: "Reverse links iteratively using prev/curr/next.",
            signal: "Reverse list, reverse sublist, palindrome check",
          },
          {
            name: "Merge / Two-List",
            desc: "Use two pointers to merge sorted lists.",
            signal: "Merge two sorted lists, merge K lists",
          },
        ],
        problems: [
          { name: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", tag: "Easy", pattern: "In-Place Reversal" },
          { name: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", tag: "Easy", pattern: "Fast & Slow" },
          { name: "Middle of Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/", tag: "Easy", pattern: "Fast & Slow" },
          { name: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", tag: "Easy", pattern: "Two Pointers" },
          { name: "Remove Nth Node From End", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", tag: "Medium", pattern: "Fast & Slow" },
          { name: "Reorder List", link: "https://leetcode.com/problems/reorder-list/", tag: "Medium", pattern: "Fast & Slow + Reversal" },
          { name: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", tag: "Medium", pattern: "HashMap + DLL" },
          { name: "Merge K Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", tag: "Hard", pattern: "Heap / Divide & Conquer" },
        ],
      },
      {
        id: 5,
        title: "Stacks & Queues",
        icon: "⬚",
        theory: [
          "LIFO vs FIFO",
          "Monotonic stacks",
          "Stack using arrays vs LL",
          "Deque & its uses",
        ],
        patterns: [
          {
            name: "Monotonic Stack",
            desc: "Maintain increasing or decreasing stack to find next greater/smaller element.",
            signal: "Next Greater Element, Largest Rectangle, Daily Temperatures",
          },
          {
            name: "Balanced Parentheses",
            desc: "Push open brackets; on close, pop and match.",
            signal: "Validate brackets, min add to make valid",
          },
          {
            name: "BFS with Queue",
            desc: "Level-order traversal of trees/graphs.",
            signal: "Level-order, shortest path in unweighted graph",
          },
        ],
        problems: [
          { name: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", tag: "Easy", pattern: "Stack" },
          { name: "Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/", tag: "Medium", pattern: "Monotonic Stack" },
          { name: "Next Greater Element I", link: "https://leetcode.com/problems/next-greater-element-i/", tag: "Easy", pattern: "Monotonic Stack" },
          { name: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", tag: "Hard", pattern: "Monotonic Stack" },
          { name: "Min Stack", link: "https://leetcode.com/problems/min-stack/", tag: "Medium", pattern: "Stack Design" },
          { name: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", tag: "Hard", pattern: "Monotonic Deque" },
        ],
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Trees & Graphs",
    duration: "5–6 weeks",
    color: "#FDCB6E",
    bg: "#FDCB6E18",
    border: "#FDCB6E50",
    topics: [
      {
        id: 6,
        title: "Binary Trees",
        icon: "🌲",
        theory: [
          "Tree terminology: root, leaf, height, depth",
          "DFS: preorder, inorder, postorder",
          "BFS: level-order",
          "Recursive tree thinking",
        ],
        patterns: [
          {
            name: "DFS on Tree",
            desc: "Recursively process left subtree, node, right subtree.",
            signal: "Path sum, height, diameter, mirror check",
          },
          {
            name: "BFS / Level-Order",
            desc: "Queue-based traversal level by level.",
            signal: "Level averages, right side view, zigzag traversal",
          },
          {
            name: "Return Value Propagation",
            desc: "Each node computes a local answer and returns it up.",
            signal: "Diameter, max path sum, balanced check",
          },
        ],
        problems: [
          { name: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", tag: "Easy", pattern: "DFS" },
          { name: "Invert Binary Tree", link: "https://leetcode.com/problems/invert-binary-tree/", tag: "Easy", pattern: "DFS" },
          { name: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/", tag: "Easy", pattern: "DFS" },
          { name: "Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", tag: "Medium", pattern: "BFS" },
          { name: "Binary Tree Right Side View", link: "https://leetcode.com/problems/binary-tree-right-side-view/", tag: "Medium", pattern: "BFS" },
          { name: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/", tag: "Easy", pattern: "DFS + Return Value" },
          { name: "Path Sum II", link: "https://leetcode.com/problems/path-sum-ii/", tag: "Medium", pattern: "DFS + Backtracking" },
          { name: "Binary Tree Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", tag: "Hard", pattern: "DFS + Return Value" },
        ],
      },
      {
        id: 7,
        title: "BST",
        icon: "⬡",
        theory: [
          "BST invariant",
          "Search, insert, delete in O(log n)",
          "In-order = sorted sequence",
          "Balanced vs unbalanced",
        ],
        patterns: [
          {
            name: "BST Property Exploit",
            desc: "Use left < root < right to navigate without visiting all nodes.",
            signal: "Validate BST, find Kth smallest, closest value",
          },
          {
            name: "In-order Traversal",
            desc: "In-order of BST yields sorted output.",
            signal: "Convert sorted array to BST, in-order successor",
          },
        ],
        problems: [
          { name: "Validate Binary Search Tree", link: "https://leetcode.com/problems/validate-binary-search-tree/", tag: "Medium", pattern: "DFS + Bounds" },
          { name: "Kth Smallest Element in BST", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", tag: "Medium", pattern: "In-order" },
          { name: "Lowest Common Ancestor of BST", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", tag: "Medium", pattern: "BST Property" },
          { name: "Convert Sorted Array to BST", link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", tag: "Easy", pattern: "Divide & Conquer" },
        ],
      },
      {
        id: 8,
        title: "Graphs",
        icon: "⬡",
        theory: [
          "Adjacency list vs matrix",
          "Directed vs undirected",
          "Connected components",
          "Topological sort concept",
        ],
        patterns: [
          {
            name: "DFS on Graph",
            desc: "Mark visited; recursively explore neighbors.",
            signal: "Island count, connected components, path existence",
          },
          {
            name: "BFS Shortest Path",
            desc: "BFS guarantees shortest path in unweighted graph.",
            signal: "Shortest path, word ladder, rotten oranges",
          },
          {
            name: "Union-Find",
            desc: "Track connected components with path compression.",
            signal: "Redundant connection, number of provinces",
          },
          {
            name: "Topological Sort (Kahn's / DFS)",
            desc: "Order nodes with dependencies.",
            signal: "Course schedule, task ordering",
          },
        ],
        problems: [
          { name: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", tag: "Medium", pattern: "DFS/BFS" },
          { name: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/", tag: "Medium", pattern: "DFS + HashMap" },
          { name: "Rotting Oranges", link: "https://leetcode.com/problems/rotting-oranges/", tag: "Medium", pattern: "BFS" },
          { name: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/", tag: "Medium", pattern: "Topological Sort" },
          { name: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/", tag: "Hard", pattern: "BFS" },
          { name: "Pacific Atlantic Water Flow", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/", tag: "Medium", pattern: "DFS from borders" },
          { name: "Number of Connected Components", link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", tag: "Medium", pattern: "Union-Find / DFS" },
          { name: "Alien Dictionary", link: "https://leetcode.com/problems/alien-dictionary/", tag: "Hard", pattern: "Topological Sort" },
        ],
      },
    ],
  },
  {
    phase: "Phase 4",
    title: "Dynamic Programming",
    duration: "5–6 weeks",
    color: "#E17055",
    bg: "#E1705518",
    border: "#E1705540",
    topics: [
      {
        id: 9,
        title: "1D DP",
        icon: "▤",
        theory: [
          "Overlapping subproblems",
          "Optimal substructure",
          "Memoization (top-down) vs Tabulation (bottom-up)",
          "State definition is everything",
        ],
        patterns: [
          {
            name: "Linear DP",
            desc: "dp[i] depends on dp[i-1] or dp[i-2].",
            signal: "Climbing stairs, house robber, Fibonacci variants",
          },
          {
            name: "Decision DP",
            desc: "At each index choose to include or skip.",
            signal: "Coin change, jump game, word break",
          },
        ],
        problems: [
          { name: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", tag: "Easy", pattern: "Linear DP" },
          { name: "House Robber", link: "https://leetcode.com/problems/house-robber/", tag: "Medium", pattern: "Decision DP" },
          { name: "House Robber II", link: "https://leetcode.com/problems/house-robber-ii/", tag: "Medium", pattern: "Decision DP" },
          { name: "Coin Change", link: "https://leetcode.com/problems/coin-change/", tag: "Medium", pattern: "Decision DP" },
          { name: "Word Break", link: "https://leetcode.com/problems/word-break/", tag: "Medium", pattern: "Decision DP" },
          { name: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", tag: "Medium", pattern: "DP + Binary Search" },
          { name: "Jump Game II", link: "https://leetcode.com/problems/jump-game-ii/", tag: "Medium", pattern: "Greedy / DP" },
        ],
      },
      {
        id: 10,
        title: "2D DP",
        icon: "▦",
        theory: [
          "State as (i, j) grid or (i, j) string indices",
          "Unique paths intuition",
          "String DP: LCS, Edit Distance",
          "Knapsack variants",
        ],
        patterns: [
          {
            name: "Grid DP",
            desc: "dp[i][j] = best result to reach cell (i,j).",
            signal: "Unique paths, min path sum, maximal square",
          },
          {
            name: "String DP",
            desc: "dp[i][j] comparing prefix of s1 of length i with s2 of length j.",
            signal: "LCS, edit distance, interleaving strings",
          },
          {
            name: "0/1 Knapsack",
            desc: "For each item, include or exclude. dp[i][w].",
            signal: "Partition equal subset, target sum",
          },
        ],
        problems: [
          { name: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/", tag: "Medium", pattern: "Grid DP" },
          { name: "Minimum Path Sum", link: "https://leetcode.com/problems/minimum-path-sum/", tag: "Medium", pattern: "Grid DP" },
          { name: "Longest Common Subsequence", link: "https://leetcode.com/problems/longest-common-subsequence/", tag: "Medium", pattern: "String DP" },
          { name: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", tag: "Hard", pattern: "String DP" },
          { name: "Partition Equal Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/", tag: "Medium", pattern: "0/1 Knapsack" },
          { name: "Maximal Square", link: "https://leetcode.com/problems/maximal-square/", tag: "Medium", pattern: "Grid DP" },
          { name: "Burst Balloons", link: "https://leetcode.com/problems/burst-balloons/", tag: "Hard", pattern: "Interval DP" },
        ],
      },
    ],
  },
  {
    phase: "Phase 5",
    title: "Advanced Topics",
    duration: "3–4 weeks",
    color: "#A29BFE",
    bg: "#A29BFE18",
    border: "#A29BFE40",
    topics: [
      {
        id: 11,
        title: "Heap / Priority Queue",
        icon: "△",
        theory: [
          "Min-heap vs Max-heap",
          "heapify, push, pop in O(log n)",
          "Top-K pattern",
          "Heap for streaming data",
        ],
        patterns: [
          {
            name: "Top-K",
            desc: "Maintain a heap of size K to find Kth largest/smallest.",
            signal: "Kth largest, K closest points, top K frequent",
          },
          {
            name: "Two Heaps",
            desc: "Max-heap for lower half + min-heap for upper half.",
            signal: "Median of data stream",
          },
          {
            name: "Merge K Sorted",
            desc: "Push heads of K lists into heap, extract min each time.",
            signal: "Merge K sorted lists/arrays, smallest range",
          },
        ],
        problems: [
          { name: "Kth Largest Element in Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", tag: "Medium", pattern: "Min-Heap" },
          { name: "K Closest Points to Origin", link: "https://leetcode.com/problems/k-closest-points-to-origin/", tag: "Medium", pattern: "Max-Heap" },
          { name: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/", tag: "Hard", pattern: "Two Heaps" },
          { name: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/", tag: "Medium", pattern: "Greedy + Heap" },
          { name: "Merge K Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", tag: "Hard", pattern: "Heap" },
        ],
      },
      {
        id: 12,
        title: "Binary Search",
        icon: "⌖",
        theory: [
          "Left/right boundary templates",
          "Search space reduction",
          "Binary search on answer",
          "Rotated arrays",
        ],
        patterns: [
          {
            name: "Classic Binary Search",
            desc: "Find exact target in sorted array.",
            signal: "Find position, first/last occurrence",
          },
          {
            name: "Binary Search on Answer",
            desc: "Binary search over the answer space, validate with helper function.",
            signal: "Minimize maximum, capacity to ship, split array",
          },
          {
            name: "Search in Rotated / 2D",
            desc: "Determine which half is sorted, search accordingly.",
            signal: "Rotated sorted array, search in 2D matrix",
          },
        ],
        problems: [
          { name: "Binary Search", link: "https://leetcode.com/problems/binary-search/", tag: "Easy", pattern: "Classic" },
          { name: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", tag: "Medium", pattern: "Rotated BS" },
          { name: "Find Minimum in Rotated Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", tag: "Medium", pattern: "Rotated BS" },
          { name: "Koko Eating Bananas", link: "https://leetcode.com/problems/koko-eating-bananas/", tag: "Medium", pattern: "BS on Answer" },
          { name: "Capacity to Ship Packages", link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", tag: "Medium", pattern: "BS on Answer" },
          { name: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", tag: "Hard", pattern: "Binary Search" },
        ],
      },
      {
        id: 13,
        title: "Tries & Advanced Strings",
        icon: "⊞",
        theory: [
          "Trie node structure",
          "Insert, search, startsWith",
          "Space-time tradeoffs vs HashMap",
        ],
        patterns: [
          {
            name: "Prefix Tree",
            desc: "Build trie for O(L) prefix lookups.",
            signal: "Autocomplete, word search II, longest word",
          },
        ],
        problems: [
          { name: "Implement Trie", link: "https://leetcode.com/problems/implement-trie-prefix-tree/", tag: "Medium", pattern: "Trie" },
          { name: "Word Search II", link: "https://leetcode.com/problems/word-search-ii/", tag: "Hard", pattern: "Trie + Backtracking" },
          { name: "Design Add & Search Words", link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", tag: "Medium", pattern: "Trie + DFS" },
        ],
      },
    ],
  },
];

const tagColors = {
  Easy: { bg: "#00B89420", color: "#00B894", border: "#00B89440" },
  Medium: { bg: "#FDCB6E20", color: "#c8a03c", border: "#FDCB6E50" },
  Hard: { bg: "#E1705520", color: "#E17055", border: "#E1705540" },
};

export default function DSARoadmap() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeTab, setActiveTab] = useState("patterns");

  const phase = roadmap[activePhase];
  const topic = phase.topics[activeTopic];

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#0D0F14", minHeight: "100vh", color: "#E8EAF0" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #13151C 0%, #1A1D27 100%)", borderBottom: "1px solid #2A2D3A", padding: "24px 28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
          <div style={{ width: "8px", height: "8px", background: "#6C63FF", borderRadius: "50%", boxShadow: "0 0 12px #6C63FF" }} />
          <span style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#6C63FF", fontWeight: 600 }}>DSA Master Roadmap</span>
        </div>
        <h1 style={{ margin: 0, fontSize: "24px", fontWeight: 700, color: "#F0F2FF" }}>From Zero to Problem Solver</h1>
        <p style={{ margin: "6px 0 0", color: "#7A7F9A", fontSize: "13px" }}>20 years of industry wisdom · Patterns-first approach · Curated problem sets</p>
      </div>

      {/* Phase selector */}
      <div style={{ display: "flex", gap: "8px", padding: "16px 28px", overflowX: "auto", background: "#13151C", borderBottom: "1px solid #1E2030" }}>
        {roadmap.map((p, i) => (
          <button
            key={i}
            onClick={() => { setActivePhase(i); setActiveTopic(0); }}
            style={{
              padding: "8px 16px", borderRadius: "8px", border: `1px solid ${i === activePhase ? p.color : "#2A2D3A"}`,
              background: i === activePhase ? p.bg : "transparent", color: i === activePhase ? p.color : "#7A7F9A",
              cursor: "pointer", whiteSpace: "nowrap", fontSize: "12px", fontWeight: 600,
              transition: "all 0.2s", letterSpacing: "0.3px"
            }}
          >
            {p.phase}: {p.title}
            <span style={{ marginLeft: "8px", fontSize: "11px", opacity: 0.7 }}>· {p.duration}</span>
          </button>
        ))}
      </div>

      <div style={{ display: "flex", minHeight: "calc(100vh - 160px)" }}>
        {/* Topic sidebar */}
        <div style={{ width: "220px", flexShrink: 0, background: "#13151C", borderRight: "1px solid #1E2030", padding: "16px 12px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#4A4F6A", textTransform: "uppercase", marginBottom: "12px", paddingLeft: "8px" }}>Topics</div>
          {phase.topics.map((t, i) => (
            <button
              key={t.id}
              onClick={() => { setActiveTopic(i); setActiveTab("patterns"); }}
              style={{
                width: "100%", textAlign: "left", padding: "10px 12px", borderRadius: "8px",
                border: `1px solid ${i === activeTopic ? phase.color + "60" : "transparent"}`,
                background: i === activeTopic ? phase.bg : "transparent",
                color: i === activeTopic ? phase.color : "#7A7F9A",
                cursor: "pointer", marginBottom: "4px", fontSize: "13px", fontWeight: i === activeTopic ? 600 : 400,
                display: "flex", alignItems: "center", gap: "8px", transition: "all 0.15s"
              }}
            >
              <span style={{ fontSize: "16px" }}>{t.icon}</span>
              {t.title}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: "24px 28px", overflowY: "auto" }}>
          {/* Topic header */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: phase.bg, border: `1px solid ${phase.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>
              {topic.icon}
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 700, color: "#F0F2FF" }}>{topic.title}</h2>
              <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                <span style={{ fontSize: "11px", color: phase.color, background: phase.bg, border: `1px solid ${phase.border}`, padding: "2px 8px", borderRadius: "4px", fontWeight: 600 }}>{phase.phase}</span>
                <span style={{ fontSize: "11px", color: "#7A7F9A" }}>{topic.problems.length} problems</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: "4px", marginBottom: "20px", background: "#13151C", padding: "4px", borderRadius: "10px", width: "fit-content" }}>
            {["patterns", "theory", "problems"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "7px 18px", borderRadius: "7px", border: "none",
                  background: activeTab === tab ? "#1E2130" : "transparent",
                  color: activeTab === tab ? "#F0F2FF" : "#7A7F9A",
                  cursor: "pointer", fontSize: "13px", fontWeight: activeTab === tab ? 600 : 400,
                  textTransform: "capitalize", transition: "all 0.15s"
                }}
              >
                {tab === "patterns" ? "🎯 Patterns" : tab === "theory" ? "📖 Theory" : "🧩 Problems"}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "patterns" && (
            <div>
              <div style={{ marginBottom: "16px", padding: "12px 16px", background: "#13151C", borderRadius: "8px", border: "1px solid #1E2030", fontSize: "13px", color: "#7A7F9A", lineHeight: "1.6" }}>
                💡 <strong style={{ color: "#A0A5C0" }}>Instructor's note:</strong> Don't memorize code. Learn to <em>recognize the signal</em> — the problem clue that tells you which pattern to reach for.
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {topic.patterns.map((p, i) => (
                  <div key={i} style={{ background: "#13151C", border: `1px solid ${phase.border}`, borderLeft: `3px solid ${phase.color}`, borderRadius: "10px", padding: "18px 20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                      <span style={{ background: phase.bg, color: phase.color, fontSize: "11px", fontWeight: 700, padding: "2px 10px", borderRadius: "20px", border: `1px solid ${phase.border}` }}>Pattern {i + 1}</span>
                      <span style={{ fontSize: "15px", fontWeight: 700, color: "#F0F2FF" }}>{p.name}</span>
                    </div>
                    <p style={{ margin: "0 0 10px", color: "#B0B5CC", fontSize: "13px", lineHeight: "1.6" }}>{p.desc}</p>
                    <div style={{ background: "#0D0F14", borderRadius: "6px", padding: "10px 14px", display: "flex", gap: "8px", alignItems: "flex-start" }}>
                      <span style={{ color: "#FDCB6E", fontSize: "12px", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>🔍 SIGNAL:</span>
                      <span style={{ color: "#FDCB6E", fontSize: "12px", fontStyle: "italic" }}>{p.signal}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "theory" && (
            <div style={{ background: "#13151C", borderRadius: "10px", border: "1px solid #1E2030", padding: "20px 24px" }}>
              <div style={{ fontSize: "13px", color: "#7A7F9A", marginBottom: "16px" }}>Master these concepts before touching problems:</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {topic.theory.map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "12px 14px", background: "#0D0F14", borderRadius: "8px", border: "1px solid #1E2030" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: phase.bg, border: `1px solid ${phase.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "11px", fontWeight: 700, color: phase.color }}>
                      {i + 1}
                    </div>
                    <span style={{ color: "#C0C5DC", fontSize: "13px", lineHeight: "1.6", paddingTop: "2px" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "problems" && (
            <div>
              <div style={{ marginBottom: "14px", fontSize: "13px", color: "#7A7F9A" }}>
                Solve in order — each problem reinforces a pattern. Don't skip Easy problems.
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {topic.problems.map((p, i) => (
                  <a
                    key={i}
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: "12px", padding: "13px 16px",
                      background: "#13151C", border: "1px solid #1E2030", borderRadius: "9px",
                      textDecoration: "none", transition: "border-color 0.15s, background 0.15s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = phase.color + "60"; e.currentTarget.style.background = phase.bg; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E2030"; e.currentTarget.style.background = "#13151C"; }}
                  >
                    <span style={{ width: "22px", height: "22px", borderRadius: "6px", background: "#0D0F14", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: "#4A4F6A", fontWeight: 700, flexShrink: 0 }}>
                      {i + 1}
                    </span>
                    <span style={{ flex: 1, color: "#D0D5EC", fontSize: "13px", fontWeight: 500 }}>{p.name}</span>
                    <span style={{ fontSize: "11px", color: "#6C63FF", background: "#6C63FF18", border: "1px solid #6C63FF30", padding: "2px 8px", borderRadius: "4px", flexShrink: 0 }}>{p.pattern}</span>
                    <span style={{
                      fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "4px", flexShrink: 0,
                      color: tagColors[p.tag].color, background: tagColors[p.tag].bg, border: `1px solid ${tagColors[p.tag].border}`
                    }}>{p.tag}</span>
                    <span style={{ color: "#4A4F6A", fontSize: "12px" }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#13151C", borderTop: "1px solid #1E2030", padding: "14px 28px", display: "flex", gap: "24px", alignItems: "center" }}>
        <div style={{ fontSize: "12px", color: "#4A4F6A" }}>Total phases: <strong style={{ color: "#7A7F9A" }}>5</strong></div>
        <div style={{ fontSize: "12px", color: "#4A4F6A" }}>Total topics: <strong style={{ color: "#7A7F9A" }}>13</strong></div>
        <div style={{ fontSize: "12px", color: "#4A4F6A" }}>Total problems: <strong style={{ color: "#7A7F9A" }}>{roadmap.flatMap(p => p.topics).reduce((a, t) => a + t.problems.length, 0)}</strong></div>
        <div style={{ fontSize: "12px", color: "#4A4F6A" }}>Estimated time: <strong style={{ color: "#7A7F9A" }}>20–25 weeks</strong></div>
      </div>
    </div>
  );
}
