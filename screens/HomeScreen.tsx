import React, { useState } from "react";
import { ScrollView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Linking, Animated } from "react-native";
import { Switch } from "react-native-paper";

interface HomeScreenProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const skills = [
  { id: "1", title: "React Native", description: "A popular framework for building mobile applications using React." },
  { id: "2", title: "React", description: "A JavaScript library for building user interfaces, especially for single-page applications." },
  { id: "3", title: "Node.js", description: "A runtime environment that allows JavaScript to be used for backend development." },
  { id: "4", title: "JavaScript", description: "A programming language used to create interactive effects within web browsers." },
  { id: "5", title: "TypeScript", description: "A superset of JavaScript that adds static types for better code quality." },
  { id: "6", title: "Expo", description: "A framework that simplifies the development and deployment of React Native apps." },
  { id: "7", title: "C++", description: "A powerful general-purpose programming language used in system programming, game development, and more." },
  { id: "8", title: "Python", description: "A versatile programming language known for its simplicity and readability, used in data science, AI, and web development." }
];

const projects = [
  { id: "1", title: "React Portfolio", description: "Portfolio I made when I was in the 1st Semester." },
  { id: "2", title: "Todo App", description: "A responsive webapp that I made in the said Semester." },
  { id: "3", title: "Inventory Management System", description: "This is my midterm project that I made in React." },
  { id: "4", title: "Payroll System", description: "The final project I made last Semester." },
];

const HomeScreen: React.FC<HomeScreenProps> = ({ toggleTheme, isDarkMode }) => {
  const [selectedTab, setSelectedTab] = useState<"skills" | "projects" | null>(null);
  const [animation] = useState(new Animated.Value(0));

  const toggleTab = (tab: "skills" | "projects") => {
    if (selectedTab === tab) {
      // If the selected tab is already open, close it
      Animated.timing(animation, { toValue: 0, duration: 300, useNativeDriver: false }).start(() => setSelectedTab(null));
    } else {
      // Open the selected tab
      setSelectedTab(tab);
      Animated.timing(animation, { toValue: 1, duration: 300, useNativeDriver: false }).start();
    }
  };

  const animatedStyle = {
    opacity: animation,
    height: animation.interpolate({ inputRange: [0, 1], outputRange: [0, 275] }), 
  };

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: isDarkMode ? "#111" : "#f9f9f9" }]}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <View style={styles.themeToggle}>
        <Text style={{ color: isDarkMode ? "#fff" : "#000" }}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      <View style={styles.profile}>
        <Image source={require("../assets/bri1.jpg")} style={styles.profileImage} />
        <Text style={[styles.name, { color: isDarkMode ? "#fff" : "#000" }]}>Brian Ronnie J. Hernandez</Text>
        <Text style={[styles.bio, { color: isDarkMode ? "#aaa" : "#555" }]}>A 20-year-old guy that wants to be successful in life. Bio ko is mahalin jowa ko. 
          Soon to be groom this 2026!! Software Developer | Website Enjoyer
        </Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "skills" && styles.activeTab]}
          onPress={() => toggleTab("skills")}
        >
          <Text style={[styles.tabText, selectedTab === "skills" && styles.activeTabText]}>Skills</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "projects" && styles.activeTab]}
          onPress={() => toggleTab("projects")}
        >
          <Text style={[styles.tabText, selectedTab === "projects" && styles.activeTabText]}>Projects</Text>
        </TouchableOpacity>
      </View>

      {selectedTab === "skills" && (
        <Animated.View style={[animatedStyle]}>
          <FlatList
            data={skills}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={[styles.projectCard, { backgroundColor: isDarkMode ? "#222" : "#ddd" }]}> 
                <Text style={[styles.projectTitle, { color: isDarkMode ? "#fff" : "#000" }]}>{item.title}</Text>
                <Text style={[styles.projectDescription, { color: isDarkMode ? "#aaa" : "#555" }]}>{item.description}</Text>
              </View>
            )}
          />
        </Animated.View>
      )}

      {selectedTab === "projects" && (
        <Animated.View style={[animatedStyle]}>
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
        </Animated.View>
      )}

      <Text style={[styles.sectionTitle, { color: isDarkMode ? "#fff" : "#000" }]}>Contact</Text>
      <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/briiiiii19")}>
        <Text style={[styles.contact, { color: "#1E90FF" }]}>🔵 Brian Ronnie Hernandez</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL("mailto:brian_ronnie_hernandez@dlsl.edu.ph")}>
        <Text style={[styles.contact, { color: "#1E90FF" }]}>📧 brian_ronnie_hernandez@dlsl.edu.ph</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL("https://github.com/Bribribri0")}>
        <Text style={[styles.contact, { color: "#1E90FF" }]}>🔗 GitHub</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Styles (same styles, just removed unnecessary ones)
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  profile: { alignItems: "center", marginBottom: 20 },
  profileImage: { width: 130, height: 160, borderRadius: 10, marginTop: 10 },
  name: { fontSize: 22, fontWeight: "bold", marginTop: 10 },
  bio: { fontSize: 14, textAlign: "center", marginVertical: 5 },
  themeToggle: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 40 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  projectCard: { padding: 15, borderRadius: 10, marginBottom: 10 },
  projectTitle: { fontSize: 16, fontWeight: "bold" },
  projectDescription: { fontSize: 14 },

  tabContainer: { flexDirection: "row", justifyContent: "space-evenly", marginVertical: 10 },
  tabButton: { flex: 1, paddingVertical: 10, backgroundColor: "#333", alignItems: "center", borderRadius: 5, marginHorizontal: 5 },
  activeTab: { backgroundColor: "#1E90FF" },
  tabText: { color: "#aaa", fontSize: 16 },
  activeTabText: { color: "#fff", fontWeight: "bold" },
});

export default HomeScreen;
