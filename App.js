import React, { useState } from "react";
import DropdownComponent from "./dropdown";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView, // Import ScrollView
} from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profession, setProfession] = useState("");
  const [goal, setGoal] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Profession:", profession);
    console.log("Goal:", goal);
    console.log("City:", city);
  };

  const base =
    "C:\\Users\\arvin\\OneDrive\\Desktop\\reactnative\\first-project\\assets";

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require(`${base}/header.png`)} style={styles.logo} />
          <Image
            source={require(`${base}/professtional.png`)}
            style={styles.logo}
          />
          {/* <Text style={styles.headerText}>Professional Online Makeup Course</Text> */}
        </View>
        <View>
          <Text style={styles.textsm} className="textsm">
            FILL THE FORM BELOW TO ENQIRE
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Text>*Enter your name</Text>
          <TextInput
            style={styles.input}
            placeholder="Eg. Aneesha Mehra"
            onChangeText={setName}
            value={name}
          />
          <View style={styles.phoneInput}>
            <Text>*Enter your WhatsApp Number</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.phoneCode}>+91</Text>
              <TextInput
                style={styles.input}
                placeholder="Eg. 0000000000"
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                keyboardType="phone-pad"
              />
            </View>
          </View>
          <Text>*Select your profession</Text>
          <DropdownComponent label="profession"></DropdownComponent>
          <Text>*Select your goal</Text>
          <DropdownComponent label="goal"></DropdownComponent>
          <Text>*Select your city</Text>
          <DropdownComponent label="city"></DropdownComponent>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <View style={styles.gradientButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.whyAirblack}>
          {/* <Text style={styles.whyAirblackTitle}></Text> */}
          <View style={styles.features}>
            <View style={styles.feature}>
              <View style={styles.imageContainer}>
                <Image
                  source={require(`${base}/background.png`)}
                  style={styles.backgroundImage}
                />
                <Image
                  source={require(`${base}/why should you use airblack.png`)}
                  style={styles.overlayImage}
                />
                <Image
                  source={require(`${base}/camera.png`)}
                  style={styles.overlayImage1}
                />
              </View>
              <Text style={styles.featureText}></Text>
            </View>
            <View style={styles.feature}>
              <Image
                // source={require("${base}/background.png")}
                style={styles.featureIcon}
              />
              <Text style={styles.featureText}></Text>
            </View>
          </View>
          <View>
            <View>
              <TouchableOpacity
                style={styles.gradientButton}
                onPress={() => console.log("Apply Now button pressed")}
              >
                <Text style={styles.applyButtonText1}>Apply Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.certification}>
          <Image
            source={require(`${base}/writting.png`)}
            style={styles.certificateImage1}
          />
          <Image
            source={require(`${base}/certificate.png`)}
            style={styles.certificateImage}
          />
          <View style={styles.features1}>
            <View style={styles.feature}>
              <View style={styles.imageContainer}>
                <Image
                  source={require(`${base}/background.png`)}
                  style={styles.backgroundImage1}
                />
                <Image
                  source={require(`${base}/p.png`)}
                  style={styles.overlayImage2}
                />
              </View>
              <Text style={styles.featureText}></Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.gradientButton}
              onPress={() => console.log("Apply Now button pressed")}
            >
              <Text style={styles.applyButtonText1}>Apply Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialMedia}>
            <TouchableOpacity
              style={styles.socialMediaIcon}
              onPress={() => console.log("Instagram button pressed")}
            >
              <Image
                source={require(`${base}/Instagram.png`)}
                style={styles.socialMediaIconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialMediaIcon}
              onPress={() => console.log("Facebook button pressed")}
            >
              <Image
                source={require(`${base}/facebook.png`)}
                style={styles.socialMediaIconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialMediaIcon}
              onPress={() => console.log("LinkedIn button pressed")}
            >
              <Image
                source={require(`${base}/linedin.png`)}
                style={styles.socialMediaIconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialMediaIcon}
              onPress={() => console.log("Twitter button pressed")}
            >
              <Image
                source={require(`${base}/x.png`)}
                style={styles.socialMediaIconImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    backgroundColor: "#000",
    // padding: 20,
    alignItems: "center",
  },
  // logo: {
  //   width: 100,
  //   height: 100,
  // },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  formContainer1: {
    padding: 20,
    backgroundColor: "#000",
  },
  textsm: {
    // paddingtop: 20,
    marginTop: 20,

    fontSize: 14,
    // lineHeight: "1.25rem",
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: "#E84D84",
    padding: "0.5rem",
    // borderRadius: "20px",
  },

  formContainer: {
    padding: 20,
    backgroundColor: "#fff",
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    // align: center,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 15,
    // borderRadius: 5,
    borderColor: "#808080", // Border color set to black
    borderWidth: 2, // Border width set to 2px
    // borderRadius: 5, // Border radius set to 5px
    marginBottom: 15,
  },
  phoneInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 15,
    // borderRadius: 5,
  },
  phoneCode: {
    fontSize: 16,
    marginRight: 10,
  },
  submitButton: {
    padding: 15,
    // borderRadius: 5,
    alignItems: "center",
  },
  gradientButton: {
    padding: 15,
    // borderRadius: 5,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#E54988",
    overflow: "hidden",
  },
  gradientLayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#F56563",
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    // zIndex: 1,
  },
  whyAirblack: {
    padding: 20,
    backgroundColor: "#000",
    alignItems: "center",
  },
  backgroundImage: {
    width: 500, // Adjust size as needed
    height: 400, // Adjust size as needed
    resizeMode: "cover",
  },
  backgroundImage1: {
    width: 600, // Adjust size as needed
    height: 500, // Adjust size as needed
    resizeMode: "cover",
    right: 70,
  },
  overlayImage: {
    width: 370, // Adjust size as needed
    height: 70, // Adjust size as needed
    position: "absolute",
    top: 30, // Adjust position as needed
    left: 90, // Adjust position as needed
  },
  overlayImage1: {
    width: 360, // Adjust size as needed
    height: 80, // Adjust size as needed
    position: "absolute",
    top: 130, // Adjust position as needed
    left: 110, // Adjust position as needed
  },
  overlayImage2: {
    width: 220, // Adjust size as needed
    height: 100, // Adjust size as needed
    position: "absolute",
    // top: 100, // Adjust position as needed
    bottom: 0,
    left: 50, // Adjust position as needed
  },
  whyAirblackTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  features: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  features1: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
    height: 200,
  },
  feature: {
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    width: 300,
    height: 200,
  },
  featureIcon: {
    width: 290,
    height: 50,
    marginLeft: 150,
    alignContent: "center",
    // position: "absolute",
  },
  featureText: {
    fontSize: 16,
    color: "#fff",
  },
  applyButton: {
    backgroundColor: "#FF6347",
    padding: 15,
    // borderRadius: 5,
    alignItems: "center",
    width: "80%",
  },
  applyButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  applyButton1: {
    backgroundColor: "#FF6347",
    padding: 15,
    alignItems: "center",
    width: "80%",
    alignSelf: "center", // Center horizontally
    top: 10, // Adjust this value to move the button upwards
  },

  applyButtonText1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  certification: {
    padding: 20,
    backgroundColor: "#000",
    alignItems: "center",
  },
  certificationTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  certificateImage: {
    width: "80%",
    height: 200,
    marginBottom: 20,
  },
  certificateImage1: {
    width: "110%",
    height: 100,
    marginBottom: 20,
  },
  community: {
    alignItems: "center",
  },
  communityTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  socialMedia: {
    padding: 20,
    // backgrou.ndColor: "#000",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  socialMediaIcon: {
    width: 50,
    height: 50,
    // borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  socialMediaIconImage: {
    width: 30,
    height: 30,
  },
  phoneInput: {
    // Style for the container of the phone input
  },
  inputContainer: {
    flexDirection: "row", // Align items in a row
    alignItems: "center", // Align items vertically in the center
  },
  phoneCode: {
    // Style for the +91 text
    marginRight: 8, // Add some space between the +91 text and the input
  },
});

export default App;
