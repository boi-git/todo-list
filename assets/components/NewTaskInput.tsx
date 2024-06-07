import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Task } from "../../App";

type NewTaskInput = {
  onAdd: (newTask: Task) => void;
};

const NewTaskInput = ({ onAdd }: NewTaskInput) => {
  const [newTask, setNewTask] = useState("");

  return (
    <View style={styles.taskContainer}>
      <MaterialCommunityIcons
        name="checkbox-blank-circle-outline"
        size={24}
        color="gray"
      />
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
        placeholder="Todo..."
        onEndEditing={() => {
          if (!newTask) {
            return;
          }
          onAdd({ title: newTask, isFinished: false });
          setNewTask("");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  taskContainer: {
    padding: 5,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  input: {
    fontFamily: "InterSemi",
    fontSize: 16,
    color: "dimgray",
    flex: 1,
  },
});

export default NewTaskInput;
