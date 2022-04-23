import clientPromise from '$lib/db';

export const get = async ({ locals }) => {
  const dbConnection = await clientPromise;
  const db = dbConnection.db("orbit_energy");
  const collection = db.collection('users');
  const users = await collection.find({}).toArray();
  return {
    body: {
      users
    }
  };
};