---
id: key-handling
title: Key handling
---

### Initialize Keys

Initializes derived keys based on a password.

**Example:**
```typescript
const password = "password";

const derivedKey = SecurityService.scrypt(password);
```

### Generate Seed

Generate random seed.

**Example:**
```typescript
const seed = SeedService.generateSeed();
```

### Generate Key

Generate key.

**Example:**
```typescript
const keyId = 1;
const seed = "b8e4c8c72e5ac28d01d2712729cd381548e8a4982df82b97f4778179165aa4b1eaae41dc54a6328721b05fd1025736d80cc19e9bc4abe6423a85c1114a4b6188";
const personaId = 1;
const connectionId  = 2;

const key = new Key(
                // @ts-ignore
                Purposes.find(keyId),
                seed,
                personaId,
                connectionId
            );
```