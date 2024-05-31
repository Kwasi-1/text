import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.subtitle}>14 tasks today</Text>
        </View>
        <Icon name="person-circle" size={40} color="#f59e0b" />
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
        <Icon name="filter" size={24} color="#fff" style={styles.filterIcon} />
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categories}>
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
      </View>

      {/* Ongoing Tasks */}
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Mobile App Development</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Web Development</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Push Ups</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7F0E8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#fff',
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
    height: 49
    // marginBottom: 16,
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
    paddingLeft: 13
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryCard: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    alignItems: 'center',
  },
  categoryImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 14,
    color: 'gray',
  },
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 40,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E8D1BA'
  },
  taskText: {
    fontSize: 16,
  },
});

export default App;