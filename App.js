import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const StyledComponent = () => {
  const [box1Color, setBox1Color] = useState(getRandomColor());
  const [box2Color, setBox2Color] = useState(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setBox1Color(getRandomColor());
      setBox2Color(getRandomColor());
    }, 750); // Ganti warna setiap 1 detik

    return () => clearInterval(interval); // Membersihkan interval saat komponen dilepas
  }, []);

  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>(Lingan guli3 waza linganggu2)4</Text>
      {/* Dua kotak dengan warna RGB yang berubah */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: box1Color }]} />
        <View style={[styles.box, { backgroundColor: box2Color }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default StyledComponent;
