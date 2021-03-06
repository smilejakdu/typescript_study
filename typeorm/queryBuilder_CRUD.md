# π Quilery Builder CRUD

## β Create ( insert )

https://orkhan.gitbook.io/typeorm/docs/insert-query-builder#raw-sql-support

https://stackoverflow.com/questions/54998520/multiple-join-with-typeorm

```ts
import { getConnection } from "typeorm";

await getConnection()
  .createQueryBuilder()
  .insert()
  .into(User)
  .values([
    { firstName: "Timber", lastName: "Saw" },
    { firstName: "Phantom", lastName: "Lancer" },
  ])
  .execute();
```

μμ λ°©λ²μ μ¬μ©νκ²λλ©΄ , λλμΌλ‘ `insert` ν μλ μμ΅λλ€.

## β Update

```ts
import { getConnection } from "typeorm";

await getConnection()
  .createQueryBuilder()
  .update(User)
  .set({ firstName: "Timber", lastName: "Saw" })
  .where("id = :id", { id: 1 })
  .execute();
```

## β Select

https://orkhan.gitbook.io/typeorm/docs/select-query-builder

μ’λ₯κ° λλ¬΄λλ λ§λ€ . μ°μ  κ°λ¨νκ² κ°μ Έμ€λκ²λΆν° νμΈν΄λ³΄μ.

```ts
const firstUser = await connection
  .getRepository(User)
  .createQueryBuilder("user")
  .where("user.id = :id", { id: 1 })
  .getOne();
```

νλλ₯Ό κ°μ Έμ¬λ `getOne()` μ μ¬μ©νλ©΄ λλ€.

μ’λ μμΈν λ³΄κ³ μΆλ€λ©΄

[querybuilder select](https://github.com/smilejakdu/typescript_study/blob/main/typeorm/queryBuilder_select.md)

μ°Έκ³ νλ©΄ λλ€.

## select list

`select` ν΄μ λλ¬΄ λΆνμν λ°μ΄ν°λ₯Ό κ°μ Έμ¨λ€ μΆμΌλ©΄

```ts
const firstUser = await connection
  .getRepository(User)
  .createQueryBuilder("user")
  .select(["user.id", "user.firstName"])
  .where("user.id = :id", { id: 1 })
  .getOne();
```

μνλ μ λ³΄λ§ κ°μ Έμ¬ μ μλ€.

## where list

```ts
const firstUser = await connection
  .getRepository(User)
  .createQueryBuilder("user")
  .select(["user.id", "user.firstName"])
  .where("user.id IN (:...id)", { id: [1, 2, 4, 5] })
  .getOne();
```

```ts
const firstUser = await connection
  .getRepository(User)
  .createQueryBuilder("user")
  .select(["user.id", "user.firstName"])
  .where("user.firstName IN (:...firstName)", {
    firstName: ["Ahn", "Kim", "Lina"],
  })
  .getOne();
```

## β Delete

```ts
import { getConnection } from "typeorm";

await getConnection()
  .createQueryBuilder()
  .delete()
  .from(User)
  .where("id = :id", { id: 1 })
  .execute();
```
