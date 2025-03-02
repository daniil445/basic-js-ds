const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Knot {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.knot = null;
    }
    root() {
        return this.knot;
    }

    add(data) {
        this.knot = fractalAdd(this.knot, data);
        function fractalAdd(knot, data) {
            if (!knot) return new Knot(data);
            if (knot.data === data) return knot;
            if (data < knot.data) knot.left = fractalAdd(knot.left, data);
            else knot.right = fractalAdd(knot.right, data);
            return knot;
        }
    }

    has(data) {
        return fractalHas(this.knot, data);
        function fractalHas(knot, data) {
            if (!knot) return false;
            if (knot.data === data) return true;
            return fractalHas((data < knot.data) ? knot.left : knot.right, data);
        }
    }

    find(data) {
        return fractalFind(this.knot, data);
        function fractalFind(knot, data) {
            if (!knot) return null;
            if (knot.data === data) return knot;
            return fractalFind((data < knot.data) ? knot.left : knot.right, data);
        }
    }

    remove(data) {
        this.knot = fractalRemove(this.knot, data);
        function fractalRemove(knot, data) {
            if (knot === null) return knot;
            if (data < knot.data) { knot.left = fractalRemove(knot.left, data); return knot; }
            else if (data > knot.data) { knot.right = fractalRemove(knot.right, data); return knot; }
            else {
                if (!knot.left && !knot.right) return null;
                if (!knot.left) { knot = knot.right; return knot; }
                if (!knot.right) { knot = knot.left; return knot; }
            }
            let minR = knot.right;
            while (minR.left) {
                minR = minR.left;
            }
            knot.data = minR.data;
            knot.right = fractalRemove(knot.right, minR.data);
            return knot;
        }
    }

    min() {
        if (!this.knot) return null;
        let knot = this.knot;
        while (knot.left) {
            knot = knot.left;
        }
        return knot.data;
    }

    max() {
        if (!this.knot) return null;
        let knot = this.knot;
        while (knot.right) {
            knot = knot.right;
        }
        return knot.data;
    }
}

module.exports = {
    BinarySearchTree
};