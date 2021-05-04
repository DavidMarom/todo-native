import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useReducer } from 'react';
import { StyleSheet, Text, View, CheckBox } from 'react-native';

const db_init = [
	{ item: 'it1', done: true },
	{ item: 'it2', done: false }
]

export default function App() {
	const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

	const [db, setdb] = useState(db_init);

	const doClick = (idx) => {
		let temp = db
		db[idx].done = !db[idx].done;
		setdb(temp);
		console.log(idx, db[idx]);
		forceUpdate()
	}


	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>Todo List</Text>

			{db.map(
				(i, idx) =>
					<div key={idx}>
						<Text style={styles.titleText}>{i.item}</Text>


						<CheckBox value={i.done} onClick={() => doClick(idx)} style={styles.checkbox} />


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
