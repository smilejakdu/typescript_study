# π κ°μ΄ μμΌλ©΄ Insert, κ°μ΄ μμΌλ©΄ Update - on duplicate key update
μ°Έκ³ μλ£ : https://bamdule.tistory.com/112


## νμ΄λΈ λ§λ€κΈ°
```sql
CREATE TABLE user (
	id INT AUTO_INCREMENT primary KEY,
	user_name VARCHAR(50) UNIQUE KEY,
	price INT NOT NULL DEFAULT 0,
	cnt INT NOT NULL DEFAULT 0
);
```

## λ°μ΄ν° μ½μ

```sql
INSERT INTO user (user_name, price, cnt) VALUES ('ash', 1000, 0) 
ON DUPLICATE KEY UPDATE 
  price = price * 2, 
  cnt = cnt + 1;
```

λ°μ΄ν°λ₯Ό νμΈν΄ λ³΄λ©΄

```
mysql> select * from user;
+----+-----------+-------+-----+
| id | user_name | price | cnt |
+----+-----------+-------+-----+
|  1 | ash       |  1000 |   0 |
+----+-----------+-------+-----+
```
νλ² λ λ°μ΄ν°λ₯Ό μ½μ ν  κ²½μ°
```
mysql> select * from user;
+----+-----------+-------+-----+
| id | user_name | price | cnt |
+----+-----------+-------+-----+
|  1 | ash       |  2000 |   1 |
+----+-----------+-------+-----+
1 row in set (0.00 sec)
```

insert κ° λμ§μκ³  price , cnt κ° λ³κ²½μ΄ λ¬λ€.
λ°μ΄ν° μ½μμ , μ€λ³΅ν€ μ μ½μ‘°κ±΄μ μλ°°λλ©΄ `ON DUPLICATE KEY UPDATE` μλμ μ§μ ν νλκ° μμ λλ€. 

# π replace

μ€λ³΅ν€ μ μ½μ‘°κ±΄μ μλ°°λλ©΄ ν΄λΉ λ μ½λλ₯Ό μ­μ νκ³  λ€μ μ½μνλ€.

```sql
REPLACE INTO user (user_name , price , cnt) VALUES ('ash',500,0)
```

```
mysql> select * from user;
+----+-----------+-------+-----+
| id | user_name | price | cnt |
+----+-----------+-------+-----+
|  3 | ash       |   500 |   0 |
+----+-----------+-------+-----+
1 row in set (0.01 sec)
```

μλ‘­κ² λ€μ μ½μμ΄ λκ²μ λ³Όμκ° μλ€.
νμ§λ§ `id` κ°μ 2λΌκ³  μμνμ§λ§ 3μΌλ‘ λμ΄μλ€.

μμ μ°λ¦¬κ° `duplicate` λ₯Ό μ¬μ©νλλ° , `update` νμμ , `auto_increment` λΆλΆμ λ΄λΆμ μΌλ‘ μμ΄λκ² κ°λ€.


# π ignore

μ€λ³΅ν€ μ μ½μ‘°κ±΄μ μλ°°λλ©΄ `insert` λ₯Ό λ¬΄μνλ€.
```sql
INSERT IGNORE INTO user (user_name, price, cnt) VALUES ('ash', 1000, 0);
```

```
mysql> INSERT IGNORE INTO user (user_name, price, cnt) VALUES ('ash', 1000, 0);
Query OK, 0 rows affected, 1 warning (0.08 sec)

mysql> select * from user;
+----+-----------+-------+-----+
| id | user_name | price | cnt |
+----+-----------+-------+-----+
|  7 | ash       |   500 |   0 |
+----+-----------+-------+-----+
1 row in set (0.00 sec)
```
