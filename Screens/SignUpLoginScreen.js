import * as React from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  StyleSheet,
  Modal,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SignUpLoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      EmailId: '',
      Password: '',
    };
  }
  login = async (Id, Password) => {
    if (Id && Password) {
      try {
        var response = await firebase
          .auth()
          .signInWithEmailAndPassword(Id, Password);
        if (response) {
          alert("Signed In!")
        }
      } catch (error) {
        alert(error.code);
      }
    } else {
      alert("Enter a Email ID and the Password.")
    }
  }
  userSignUp = (Id,Password) => {
      firebase.auth().createUserWithEmailAndPassword(Id,Password)
      .then((item) => {
        alert("User was added succesfully")
      })
      .catch(function(error) {
        alert(error.message)
      })
  }
  render() {
      return (
        <View style={styles.center}>
          <Text style={styles.login}>Login with your username and password</Text>
          <TextInput
            placeholder={'Email ID'}
            style={styles.textInput}
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                EmailId: text,
              });
            }}></TextInput>
          <TextInput
            placeholder={'Password'}
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                Password: text,
              });
            }}></TextInput>
          <TouchableOpacity
            style={styles.LogInButton}
            onPress={() => {
              this.login(this.state.EmailId, this.state.Password);
            }}>
            <Text style={styles.scanButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.SignUpButton}
            onPress={this.userSignUp(this.state.EmailId,this.state.Password)}
            >
            <Text style={styles.scanButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    width: '30%',
    height: 50,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 30,
  },
  center: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alighnText: 'center',
  },
  scanButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  LogInButton: {
    marginTop: 10,
    backgroundColor: '#e89e99',
    width: 100,
    height: 50,
    alignText: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: -100
  },
  SignUpButton: {
    marginTop: -50,
    backgroundColor: '#e89e99',
    width: 100,
    height: 50,
    alignText: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 110
  },
  login: {
    fontSize: 16,
    marginTop: 20,
    fontFamily: 'Courier New',
    fontWeight: 'bold'
  },
});
