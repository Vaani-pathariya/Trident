import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
df= pd.read_csv("post natal data.csv")
one_hot_encoded_data = pd.get_dummies(df,columns=['Feeling sad or Tearful','Irritable towards baby & partner','Trouble sleeping at night','Problems concentrating or making decision','Overeating or loss of appetite','Feeling of guilt','Problems of bonding with baby','Suicide attempt'])
var_columns=[c for c in one_hot_encoded_data.columns if c not in ['Timestamp','Feeling anxious','Age']]
x=one_hot_encoded_data.loc[:,var_columns]
y=one_hot_encoded_data.loc[:,'Feeling anxious']
print(var_columns)