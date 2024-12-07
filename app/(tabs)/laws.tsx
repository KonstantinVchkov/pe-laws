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
  const db = useSQLiteContext();
  const [laws, setLaws] = useState({});
  console.log("this is from laws: ", laws);
  useEffect(() => {
    const getLaws = async () => {
      try {
        const allRows = await db.getAllAsync("SELECT * FROM laws");
        setLaws(allRows);
      } catch (error) {
        console.log("Error while loading laws : ", error);
      }
    };
    getLaws();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        dark: "",
        light: "",
      }}
    >
      <SQLiteProvider databaseName="laws.db" onInit={initializeDatabase}>
        <View style={styles.container}>
          <Text style={styles.title}>List of laws</Text>
          {/* <Content />
          <StatusBar style="auto" /> */}
        </View>
      </SQLiteProvider>
    </ParallaxScrollView>
  );
};

export default Laws;

const styles = StyleSheet.create({
  title: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
  container: { padding: 16 },
  lawText: { color: "black", marginVertical: 5 },
});
