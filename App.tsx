import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Keyboard } from 'react-native';


function App() {

  const [text, setText] = useState('')
  const [taskLists, setTaskLists] = useState<string[]>([])

  const TextHandler = (e: any) => {
    setText(e)
  }

  const AddTaskHandler = () => {
    if (text === '') {
      return;
    } else {
      setTaskLists([...taskLists, text])
      setText('')
      Keyboard.dismiss()
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.InputContainer}>
          <Text style={styles.inputTitle}>Todo List (Add Items)</Text>
          <View style={styles.AddInput}>
            <TextInput placeholder='Add Task' value={ text } onChangeText={ TextHandler } style={styles.mainInput} />
            <Button onPress={ AddTaskHandler } title='Add' />
          </View>
        </View>

        {
          taskLists.map(function (items, index) {
            return  <View key={index} style={styles.TodoContainer}>
                      <Text style={styles.TodoTask}>{ items }</Text> 
                    </View>
          })
        }
      </View>
    </>
  )
}



export default App;


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  },

  inputTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
    marginBottom: 20
  },

  InputContainer: {
    padding: 50,
    width: '80%',
    backgroundColor: 'white',
    display: 'flex',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },

  mainInput: {
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    width: '80%',
    
  },

  AddInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 20
  },

  TodoContainer: {
    width: '80%',
    backgroundColor: 'white',
    marginTop: 30,
    padding: 30,
    borderRadius: 20
  },

  TodoTask: {
    fontSize: 20,
    fontWeight: '700'
  }
})
