import pymongo
from urllib.parse import quote_plus
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

username = quote_plus('annabelle')
password = quote_plus('lwy9Ao3mpoDAVEeN')

uri = "mongodb+srv://" + username + ":" + password + "@hackduke.hasnibk.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

try:
    result = client["<dbName"]["<collName>"].find()
    for i in result:
        print(i)
except Exception as e:
    print(e)