import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SQLite from "expo-sqlite";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";

const Laws = () => {
  const initializeDatabase = async (db: any) => {
    try {
      await db.execAsync(`
          PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS laws (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              title TEXT,
              description TEXT,
              category TEXT
          );
      `);
      console.log("Database initialised");
    } catch (error) {
      console.log("Error while initializing database : ", error);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        dark: "",
        light: "",
      }}
    >
      <SQLiteProvider databaseName="laws.db" onInit={initializeDatabase}>
        <View style={styles.container}>
          <Content />
          <Text style={styles.title}>List of laws</Text>
        </View>
      </SQLiteProvider>
    </ParallaxScrollView>
  );
};

export default Laws;
const Content = () => {
  const db = useSQLiteContext();
  const [laws, setLaws] = useState();
  console.log('this is from laws: ', laws?.laws)
  useEffect(() => {
    const fetchLaws = async () => {
      try {
        const allrows = await db.getFirstAsync('SELECT * FROM laws');
        console.log("this is from all rows: ", allrows)
        setLaws(allrows?.laws);
      } catch (error) {
        console.error("Error fetching laws:", error);
      }
    };

    fetchLaws();
  }, []); // Re-fetch laws whenever the database context changes

  return (
    <View>
      <Text>This is from laws</Text>
      {/* {laws.map((law, index) => (
        <Text key={index} style={styles.lawText}>{law.title}</Text>
      ))} */}
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
  container: { padding: 16 },
  lawText: { color: "black", marginVertical: 5 },
});
