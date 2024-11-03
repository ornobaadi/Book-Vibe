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
        localStorage.setItem('read-list', storedListStr)
    }
}

const getStoredWishlist = () => {
    const storedWishlistStr = localStorage.getItem('wish-list');
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
        localStorage.setItem('wish-list', storedWishlistStr);
    }
}


export {addToStoredReadList, addToStoredWishlist, getStoredReadList, getStoredWishlist }