import { Pressable, StyleSheet, Text, View, Animated } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Task } from "../../App";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const AnimatedView = Animated.createAnimatedComponent(View);

const RightActions = ({ onDelete }: { onDelete: () => void }) => {
  return (
    <AnimatedView
      style={[
        {
          backgroundColor: "crimson",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 10,
          borderRadius: 10,
        },
      ]}
    >
      <MaterialCommunityIcons
        onPress={onDelete}
        name="delete"
        size={20}
        color="white"
      />
    </AnimatedView>
  );
};

type TaskListItem = {
  task: Task;
  onItemPressed: () => void;
  onDelete: () => void;
};

const TaskListItem = ({ task, onItemPressed, onDelete }: TaskListItem) => {
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={() => <RightActions onDelete={onDelete} />}
      >
        <Pressable onPress={onItemPressed} style={styles.taskContainer}>
          <MaterialCommunityIcons
            name={
              task.isFinished
                ? "checkbox-marked-circle-outline"
                : "checkbox-blank-circle-outline"
            }
            size={24}
            color={task.isFinished ? "green" : "dimgray"}
          />
          <Text
            style={[
              styles.taskTitle,
              {
                textDecorationLine: task.isFinished ? "line-through" : "none",
                color: task.isFinished ? "black" : "dimgray",
              },
            ]}
          >
            {task.title}
          </Text>
        </Pressable>
      </Swipeable>
    </GestureHandlerRootView>
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
  taskTitle: {
    fontFamily: "Poppins",
    fontSize: 16,
    color: "gray",
  },
});

export default TaskListItem;
