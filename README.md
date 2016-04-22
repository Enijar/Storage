# How to Use

```js
import Storage from './Storage';

// Set data, with "foo" being the key, "{bar: 'baz'}" being 
// the data and "3600" being the expiration time in seconds.
Storage.set('foo', {bar: 'baz'}, 3600)

// Get data, with "foo" being the key. If no key exists then 
// null will be returned. If the item is expired then it will 
// be deleted and null will be returned.
Storage.get('foo');
```
