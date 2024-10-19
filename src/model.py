import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error,mean_absolute_error,r2_score
import joblib
import pandas as pd

df = pd.read_csv('./cbc-data.csv')
df = df.dropna()
model = LinearRegression()
X = pd.DataFrame(pd.concat([df['  RBC    '],df['PCV'],df['MCV  '],df['MCH'],df[' MCHC  '],df[' RDW    '],df['TLC'],df[' PLT /mm3']],axis=1)).iloc[1:]
y = df[' HGB '].iloc[1:]

X_train, X_test, y_train, Y_test = train_test_split(X,y,test_size=0.3,random_state=42)

model.fit(X_train,y_train)

y_pred = model.predict(X_test)

mse = mean_squared_error(Y_test,y_pred)
r2_score = r2_score(Y_test,y_pred)
print('Your model is ',round(r2_score*100,2),"% accurate")

joblib.dump(model,'hemoglobin-predictor-model.pkl')