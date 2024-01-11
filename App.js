import { Text, SafeAreaView, StyleSheet, View, Image,Button, Alert, ScrollView,TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require("./assets/aldo1.png")}
      />
        <Text style={styles.title}>Rivaldo Ilham Kurniawan</Text>
          <Text style={styles.subTitle}>
            Hallo, saya Rivaldo umurku 17 tahun,         
            Siswa SMK Telkom Purwokerto, 
            Kelas 12 Jurusan Rekayasa Perangkat Lunak.
            Angkatan 29.
          </Text>
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Halloo')}>
              <Text style={styles.textButton}>Contact Me</Text>
            </TouchableOpacity>
              <Text style={styles.project}>My Recent Project</Text>
             
      
      <Image
        style={styles.project1}
        source={require('./assets/porto1.png')}
      />
        <Text style={styles.projectTitle1}>CLAY FURNITURE</Text>
          <Text style={styles.projectType1}> </Text>
            <TouchableOpacity style={styles.button1} onPress={() => 
            Alert.alert('Website pemesanan pada E-commerce Wish Clean Juice yang menjual jus sehat')}>
              <Text style={styles.textButton1}>More</Text>
            </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F9F3DF",
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    color: '#493323',
    fontSize: 33, 
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },

  subTitle: {
    color: '#493323',
    alignItems: 'center',
    justifyContent: 'center', 
    fontSize: 20,
    paddingBottom: 10,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 35,
  },

  avatar: {
    width: 330,
    height: 300,
    rectangle: 300,
    marginTop: 20,
    borderRadius: 0,
  },

   button: {
    backgroundColor: '#493323',
    width: 160,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
  },
      textButton: {
        fontWeight: 'bold',
        color: '#F9F3DF',
        fontSize: 25,
      },

  garis: {
    width: 350,
    height: 60,
    resizeMode:'streth',
    rectangle: 300,
    marginTop: 0,
    borderRadius: 5,
  },

  project: {
    color: '#493323',
    fontSize: 30, 
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 0,
  },

   project1: {
    width: 320,
    height: 250,
    resizeMode:'streth',
    rectangle: 300,
    marginTop: 5,
    borderRadius: 5,
  },

   project2: {
    width: 320,
    height: 250,
    resizeMode:'streth',
    rectangle: 300,
    marginTop: 5,
    borderRadius: 5,
   },

   project3: {
    width: 320,
    height: 250,
    resizeMode:'streth',
    rectangle: 300,
    marginTop: 5,
    borderRadius: 5,
   },

   projectTitle1: {
    color: '#493323',
    fontSize: 25, 
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
   },

   projectType1: {
    color: '#493323',
    fontSize: 15, 
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
   },

   projectTitle2: {
    color: '#493323',
    fontSize: 25, 
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
   },

   projectType2: {
    color: '#493323',
    fontSize: 15, 
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
   },

   projectTitle3: {
    color: '#493323',
    fontSize: 25, 
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
   },

   projectType3: {
    color: '#493323',
    fontSize: 15, 
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
   },

   button1: {
    backgroundColor: '#493323',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 5,
  },
      textButton1: {
        fontWeight: 'bold',
        color: '#F9F3DF',
        fontSize: 28,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },

});