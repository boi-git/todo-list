import {
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import NewTaskInput from "./assets/components/NewTaskInput";
import TaskListItem from "./assets/components/TaskListItem";

export type Task = {
  title: string;
  isFinished: boolean;
};
const dumyTasks: Task[] = [];

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(dumyTasks);

  const onItemPressed = (index: number) => {
    setTasks((currentTasks) => {
      const updatedTasks = [...currentTasks];
      currentTasks[index].isFinished = !currentTasks[index].isFinished;
      return updatedTasks;
    });
  };
  const deleteTask = (index: number) => {
    setTasks((currentTasks) => {
      const updatedTasks = [...currentTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };
  return (
    <KeyboardAvoidingView
      style={styles.page}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={20}
    >
      <SafeAreaView>
        <FlatList
          data={tasks}
          contentContainerStyle={{ gap: 5, padding: 10 }}
          renderItem={({ item, index }) => (
            <TaskListItem
              task={item}
              onItemPressed={() => onItemPressed(index)}
              onDelete={() => deleteTask(index)}
            />
          )}
          ListFooterComponent={() => (
            <NewTaskInput
              onAdd={(newTodo: Task) =>
                setTasks((currentTasks) => [...currentTasks, newTodo])
              }
            />
          )}
        ></FlatList>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
    color: "dimgray",
  },
});
