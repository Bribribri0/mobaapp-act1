import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { Switch } from "react-native-paper";

interface HomeScreenProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

// Skills List
const skills = ["React Native", "React", "Node.js", "JavaScript", "TypeScript", "Expo", "C++", "Python"];

// Projects List 
const projects = [
  { id: "1", title: "React Portfolio", description: "Portfolio I made when I was in the 1st Semester." },
  { id: "2", title: "Todo App", description: "A responsive webapp that I made in the said Semester." },
  { id: "3", title: "Inventory Management System", description: "This is my midterm project that I made in React." },
  { id: "4", title: "Payroll System", description: "The final project I made last Semester." },

];

const HomeScreen: React.FC<HomeScreenProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#111" : "#f9f9f9" }]}>

      {/* Profile Section */}
      <View style={styles.profile}>
        <Image source={require("../assets/bri1.jpg")} style={styles.profileImage} />
        <Text style={[styles.name, { color: isDarkMode ? "#fff" : "#000" }]}>Brian Ronnie J. Hernandez</Text>
        <Text style={[styles.bio, { color: isDarkMode ? "#aaa" : "#555" }]}>A 20 year old guy that wants to be successful in life. Bio ko is mahalin jowa ko. Soon to be groom this 2025!! Software Developer | Website Enjoyer</Text>
      </View>

      {/* Theme Toggle */}
      <View style={styles.themeToggle}>
        <Text style={{ color: isDarkMode ? "#fff" : "#000" }}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      {/* Skills List */}
      <Text style={[styles.sectionTitle, { color: isDarkMode ? "#fff" : "#" }]}>Skills</Text>
      <FlatList
        data={skills}
        keyExtractor={(item) => item}
        horizontal
        renderItem={({ item }) => <Text style={[styles.skill, { backgroundColor: isDarkMode ? "#222" : "#ddd", color: isDarkMode ? "#aaa" : "#555" }]}>{item}</Text>}
      />

      {/* Projects List */}
      <Text style={[styles.sectionTitle, { color: isDarkMode ? "#fff" : "#000" }]}>Projects</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.projectCard, { backgroundColor: isDarkMode ? "#222" : "#ddd" }]}>
            <Text style={[styles.projectTitle, { color: isDarkMode ? "#fff" : "#000" }]}>{item.title}</Text>
            <Text style={[styles.projectDescription, { color: isDarkMode ? "#aaa" : "#555" }]}>{item.description}</Text>
          </View>
        )} 
      />

      {/* Contact Section */}
      <Text style={[styles.sectionTitle, { color: isDarkMode ? "#fff" : "#000" }]}>Contact</Text>
      <TouchableOpacity onPress={() => Linking.openURL("mailto:brian_ronnie_hernandez@dlsl.edu.ph")}>
        <Text style={[styles.contact, { color: "#1E90FF" }]}>📧 brian_ronnie_hernandez@dlsl.edu.ph</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL("https://github.com/Bribribri0")}>
        <Text style={[styles.contact, { color: "#1E90FF" }]}>🔗 GitHub</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  profile: { alignItems: "center", marginBottom: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 10, marginTop: 30 },
  name: { fontSize: 22, fontWeight: "bold", marginTop: 10 },
  bio: { fontSize: 14, textAlign: "center", marginVertical: 5 },
  themeToggle: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  skill: { padding: 8, marginRight: 8, borderRadius: 5, color: "#000" },
  projectCard: { padding: 15, borderRadius: 10, marginBottom: 10 },
  projectTitle: { fontSize: 16, fontWeight: "bold" },
  projectDescription: { fontSize: 14 },
  contact: { fontSize: 16, marginVertical: 5 },
});

export default HomeScreen;
