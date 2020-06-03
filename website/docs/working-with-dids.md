---
id: working-with-dids
title: Working with DIDs
---
### Generate a proof of ownership for a public key

**Example:**
```typescript
const didProver = "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP";
const didVerifier = "did:defined:1ATaPiJdX2u4NHeYVux1iYcdDCTrXpdoxC";

  const poo = new ProofOfOwnership(didProver, didVerifier, key.publicKey);
  const errors = ProofOfOwnershipService.proveOwnership(poo, key.privateKey64);
```

### Verify a proof of ownership for a public key

Verify a proof of ownership for a public key.

**Example:**
```typescript
const didProver = "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP";
const didVerifier = "did:defined:1ATaPiJdX2u4NHeYVux1iYcdDCTrXpdoxC";
const signature = "YFipwAdFVonV4/9zQjPdzPLArX181RAaK3UvXixQ7Rg0lX/sz8FLEK4sJU+2zJhAPHIFlNyD87+9wsBWTRf1Aw==";
const publicKeyBytes = Buffer.from("ccc98085b11e5b96c614036294be077d0b66a272b6476d3ba7eb440a3c2df00d", "hex");
const timestampDate: Date = new Date(1548947150636);


const poo: ProofOfOwnership = new ProofOfOwnership(didProver, didVerifier, publicKeyBytes, timestampDate, signature);
const errors = ProofOfOwnershipService.verify(poo);
```

### Generate DID

Generate DID.

**Example:**
```typescript
const method = "defined";
const nemPublicKey = "D98C8B7478E0255127E24B7C0752B78B5D4A90F1454FA9D8CD262ABF665B2B1B";

const did: Did = new Did(method, nemPublicKey);
```

### Generate DID Document
DID document generation.

**Example:**
```typescript
const services : IService[] = [
  {  "did" : did.format(),
     "serviceName": "openid",
     "type": "OpenIdConnectVersion1.0Service",
     "serviceEndpoint": "https://openid.example.com/"
  }, 
  { "did" : did.format(),
     "serviceName": "vcr",
     "type": "CredentialRepositoryService",
     "serviceEndpoint": "https://repository.example.com/service/8377464"
  },
  {   "did" : did.format(),
     "serviceName": "xdi",
     "type": "XdiService",
     "serviceEndpoint": "https://xdi.example.com/8377464"
  }
 ];

const publicKey : IPublicKey =
{
  "id": did.format() + "#authentication-key-1",
  "owner": did.format(),
  "type": "Ed25519VerificationKey2018",
  "publicKeyHex": key.publicKey.toString('hex').toUpperCase(),

}

const didDocument: IDidDocument = {
            context: ['https://w3id.org/did/v1', 'https://w3id.org/security/v1'],
            id: did.format(),
            salt: did.salt,
            publicKey: [publicKey],
            service: services,
            created: (new Date()).toISOString()
        };

```

### Generate Verifiable Claim

Verifiable claim document generation.

**Example:**
```typescript
const context =  ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/v2'];
const type = ['VerifiableCredential'];
const issuer = "Defined.id";
const claim = {
  "id": "http://defined.id/vc/1",
  "firstName": "Defined",
  "lastName": "Id"
};
const issuanceDate = "2018-10-10";
const expirationDate = "2020-10-10";

 const document: IVerifiableClaimDocument = {
            context: context,
            id: did.format(),
            type: type,
            issuer: issuer,
            claim: claim,
            issuanceDate: issuanceDate,
            expirationDate: expirationDate
        };
```
