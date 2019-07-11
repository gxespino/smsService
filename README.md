# smsService

## Info

Code is set up to run on remote test server from the start.

To run locally, change the connection settings in `api/models/db.js`

## To Run

```
npm install
npm run start
```

## To Test

**1. Creating messages:**

`POST http://localhost:4000/messages`

With body:

```
{
	"to": 1234567899,
	"from": 9876543211,
	"body": "Test Message"
}
```

**2. Retrieving messages:**

`GET http://localhost:4000/messages?to=1234567899&from=9876543211&maxMessages=5`

### Thoughts

A lot of improvements are needed to make this production ready:

- Phone number validation, transformation and sanitization. API should be able to handle and standardize multiple phone number formats
- Standardized response handling
- Standardized error handling
- Revisit DB column names of `to_phone`, `from_phone`. I'd probably want to standardize to Twilio's schema
- DB is exposed to SQL injection. DROP Tables injection is possible.
- API rate handling
