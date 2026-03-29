**User**

{
"\_id": ObjectId,
"email": String,
"passwordHash": String,
"role": String, // user, admin
"created_at": Date
}

**Contacts**

{
"\_id": ObjectId,
"name": String,
"email": String,
"phone": String,
"source": String,
"status": String, // cold, warm, hot
"score": Number,
"last_contacted": Date,
"created_at": Date
}

**Conversations**

{
"\_id": ObjectId,
"contact_id": ObjectId,
"messages": [
{
"sender": String, // user, ai
"text": String,
"ai_generated": Boolean,
"created_at": Date
}
],
"summary": String,
"created_at": Date
}
