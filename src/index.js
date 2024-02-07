// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
    const dataKey = await central(id);
    
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  let publicData = await dbs[dataKey](id);
  let personalData = await vault(id);
  const userData = {
    ...publicData,
    ...personalData
  };
  return userData;
}

console.log(getUserData(3));