/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, '%', 0, ','];
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState<Number | null>(null); //null convert elemek ucun method;

  useEffect(() => {
    if (result === Infinity) {
      setResult('ERROR'); //ve ya error//
    }
  }, [result]);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };
  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber('');
  };

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(null);
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return <Text>{result.toString()}</Text>;
    } else if (firstNumber) {
      return <Text>{firstNumber}</Text>;
    } else if (firstNumber === '') {
      return <Text>{'0'}</Text>;
    }
  };

  const getResult = () => {
    switch (operation) {
      case '+': {
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      }
      case '-': {
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      }
      case '*': {
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      }
      case '/': {
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      }
      default: {
        clear();
        setResult(0);
        break;
      }
    }
  };

  return (
    <SafeAreaView style={styles.backgroudColor}>
      <View style={styles.back}>
        <View style={styles.up}>
          <Text style={styles.result}>{firstNumberDisplay()}</Text>
        </View>
      </View>

      <View>
        <View style={styles.direction}>
          <View style={styles.btncontainer}>
            {/* {numbers.map((number, index) => {
              return (
                <Button num={number} onPress={() => setNumber(number)}></Button>
              );
            // })} */}
            {/* Companent kimi yaratdim sadece islemedi sildim */}

            {numbers.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => {
                    handleNumberPress(`${item}`);
                  }}>
                  <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={{width: '23%'}}>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                handleOperationPress('+');
              }}>
              <Text style={styles.optext}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                handleOperationPress('-');
              }}>
              <Text style={styles.optext}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                handleOperationPress('*');
              }}>
              <Text style={styles.optext}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                handleOperationPress('/');
              }}>
              <Text style={styles.optext}>/</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.direction}>
          <TouchableOpacity style={styles.equalbuttons} onPress={clear}>
            <Text style={styles.equaltext}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.equalbuttons}
            onPress={() => {
              getResult();
            }}>
            <Text style={styles.equaltext}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  backgroudColor: {
    backgroundColor: '#E4EEFC',
    flex: 1,
  },
  back: {
    backgroundColor: '#D5E2F3',
    height: 180,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  up: {
    backgroundColor: '#fff',
    height: 140,
    width: '80%',
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    fontSize: 45,
    color: '#031d38',
    fontWeight: '900',
  },
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    width: '75%',
  },
  bac: {
    width: 120,
  },
  direction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttons: {
    height: 90,
    width: '30%',
    borderWidth: 1,
    borderColor: '#9bb0c6',
    marginTop: 30,
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 12.81,
    elevation: 20,
    backgroundColor: '#D5E2F3',
  },
  text: {
    fontSize: 35,
    color: '#1f4d7e',
    fontWeight: '500',
  },
  opbuttons: {
    height: 90,
    width: '100%',
    borderWidth: 1,
    marginTop: 30,
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 12.81,
    elevation: 20,
    backgroundColor: '#38618d',
  },
  optext: {
    fontSize: 45,
    color: '#fff',
    fontWeight: '500',
  },
  equalbuttons: {
    height: 80,
    width: '48%',
    borderWidth: 1,
    marginTop: 15,
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 12.81,
    elevation: 20,
    backgroundColor: '#38618d',
  },
  equaltext: {
    fontSize: 45,
    color: '#fff',
    fontWeight: '500',
  },
});
