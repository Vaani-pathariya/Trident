import pickle
with open('model_pickle','rb') as f:
    mp=pickle.load(f)
result= mp.predict([[0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1]])
print (result[0])
