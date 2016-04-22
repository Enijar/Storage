export default {
    get(key) {
        let item = JSON.parse(localStorage.getItem(key));

        if (item === null) {
            return null;
        }

        if (item.expires !== false && item.expires <= Date.now()) {
            this.delete(key);
            return null;
        }

        return item.data;
    },

    set(key, data = {}, expires = false) {
        expires = expires === false ? false : Math.floor(Date.now() + (expires * 1000));
        data = {data, expires};

        localStorage.setItem(key, JSON.stringify(data));

        return this.get(key);
    },

    delete(key) {
        localStorage.removeItem(key);
    }
}

