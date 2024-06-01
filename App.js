import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image, StyleSheet, ScrollView, Button, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  const tasks = [
    { id: '1', title: 'Mobile App Development' },
    { id: '2', title: 'Web Development' },
    { id: '3', title: 'Push Ups' },
  ];

  const renderTask = ({ item }) => (
    <View style={styles.taskCard}>
      <Text style={styles.taskText}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.subtitle}>14 tasks today</Text>
        </View>
        <Image
          source={require('./assets/person.png')}
          style={styles.userImage}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
          />
        </View>
        <Icons name="sliders-h" size={24} color="#fff" style={styles.filterIcon} />
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categories}>
        <View style={styles.categoryCard}>
          <Text style={styles.categoryText}>Exercise</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
          <Image
            source={require('./assets/young woman working online.png')}
            style={styles.categoryImage}
          />
        </View>
        <View style={styles.categoryCard}>
          <Text style={styles.categoryText}>Study</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
          <Image
            source={require('./assets/young woman working at desk.png')}
            style={styles.categoryImage}
          />
        </View>
      </ScrollView>

      {/* Ongoing Tasks */}
      <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
      />

      {/* Add Task Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Add New Task"
          onPress={() => alert('Button Pressed')}
          color="#ff5733"
        />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingBottom:25,
    paddingTop: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
   
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    padding: 8,
    marginBottom: 16,
  },
  searchBox: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 8,
    height: 49,
  },
  searchIcon: {
    padding: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  filterIcon: {
    marginLeft: 20,
    backgroundColor: '#F0522F',
    padding: 8,
    borderRadius: 14,
    height: 48,
    width: 50,
    paddingTop: 12,
    paddingLeft: 13,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 16,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 26,
    paddingLeft: 16,
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 6,
    width: 186,
    height: 192,
    marginRight: 24,
  },
  categoryImage: {
    width: 145,
    height: 138,
    alignSelf: 'center',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  taskCount: {
    fontSize: 14,
    paddingLeft: 10,
  },
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 45,
    paddingHorizontal: 15,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E8D1BA',
    marginHorizontal: 16,
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 16,
    marginHorizontal: 16,
  },
});

export default App;
