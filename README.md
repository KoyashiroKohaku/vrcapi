# vrcapi

## Usage

```typescript
import { login } from "https://raw.githubusercontent.com/KoyashiroKohaku/vrcapi/master/mod.ts";

const username = "foo";
const password = "bar";

const client = await login(username, password);

const friends = await client.user.getFriends();
console.log(friends);
```

## Example

### Login

```sh
$ deno run --allow-net main.ts --username <username> --password <password> [ --code <code> ]
```

```
auth token: authcookie_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### Get API (with auth token)

```sh
$ deno run --allow-net main.ts --auth-token <authtoken>
```
