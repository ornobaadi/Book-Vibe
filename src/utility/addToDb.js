import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast('This book is added to your read list')
    }
}

const getStoredWishlist = () => {
    const storedWishlistStr = localStorage.getItem('wishlist');
    if (storedWishlistStr) {
        const storedWishlist = JSON.parse(storedWishlistStr);
        return storedWishlist;
    }
    else {
        return [];
    }
}

const addToStoredWishlist = (id) => {
    const storedWishlist = getStoredWishlist();
    if (storedWishlist.includes(id)) {
        console.log(id, 'already exists in wishlist');
    }
    else {
        storedWishlist.push(id);
        const storedWishlistStr = JSON.stringify(storedWishlist);
        localStorage.setItem('wishlist', storedWishlistStr);
        toast('This book is added to your wishlist')
    }
}


export {addToStoredReadList, addToStoredWishlist, getStoredReadList, getStoredWishlist }