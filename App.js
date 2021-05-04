import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const db = [
	{ item: 'it1', done: false },
	{ item: 'it2', done: false }
]


export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>hey</Text>

			{db.map(
				(i, idx) =>
					<div key={idx}>
						<Text style={styles.titleText}>{i.item}</Text>

						{
							i.done?
							<Text style={styles.titleText}>done</Text>:
							<Text style={styles.titleText}>active</Text>



						}


					</div>

			)
			}

			< StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
