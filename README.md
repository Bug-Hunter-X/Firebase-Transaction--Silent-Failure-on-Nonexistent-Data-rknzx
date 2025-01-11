# Firebase Transaction: Silent Failure on Nonexistent Data

This repository demonstrates a subtle bug in Firebase transactions where a silent failure occurs if the target data doesn't exist initially.

The `incrementCounter` function attempts to increment a counter in the Firebase database using a transaction. However, if the counter doesn't exist, the transaction fails silently, without throwing an error or updating the database.

The solution provided addresses this issue by initializing the counter to 0 if it's missing before performing the transaction.