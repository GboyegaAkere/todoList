import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
          <Task/>
          <Task/>
        </View>
      </View>
      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder='WRITE OUT YOUR TASK'/>

          <TouchableOpacity>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}> +</Text>
            </View>
          </TouchableOpacity>

        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#915F6D',
    
  },
  taskWrapper:{
    paddingTop:60,
    paddingHorizontal:20

  },
  sectionTitle:{
    fontSize:20,
    fontWeight:'bold'
  },
  items:{
    marginTop:30
  },
  writeTaskWrapper:{
    // position:"absolute",
    top:320,
    flexDirection:'row',
    justifyContent:"space-around",
    alignItems:"center"
  },

  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    backgroundColor:"white",
    borderRadius:60,
    width:250,
    textAlign:"center",
    borderColor:"#770737",
    borderWidth:1
    
  },

  addWrapper:{
    height:60,
    width:60,
    backgroundColor:"white",
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#770737",
    borderWidth:1
    
  },

  addText:{

  }


});
