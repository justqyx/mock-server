Mock Server
---

Mock Server aims to apply fixtures for any client which exchange
data over the HTTP to minimizing dependence on the backend
with simple configuration like ajax. For example

```
$.ajax({
    url: '/users',
    method: 'GET',
    dataType: 'json'
    success: function(request, response) {
        return [
            { id: 1, name: 'John' },
            { id: 1, name: 'John' }
        ];
    },
    error: function(request, response) {
        return {
            status: 403,
            errmsg: 'You do not have permission to access.'
        };
    }
});
```
