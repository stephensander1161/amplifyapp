import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createTodo } from '../../graphql/mutations';
import { listTodos } from '../../graphql/queries';
import Hero from '../../components/Hero';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import awsExports from '../../aws-exports';
import { Jumbotron } from 'react-bootstrap';
import Carousel from '../../components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Iframe from 'react-iframe';
import './Home.css';

Amplify.configure(awsExports);

const initialState = { name: '', description: '', currentDateTime: Date().toLocaleString() };

const Home = (props) => {
	const [ formState, setFormState ] = useState(initialState);
	const [ todos, setTodos ] = useState([]);

	useEffect(() => {
		fetchTodos();
	}, []);

	function setInput(key, value) {
		setFormState({ ...formState, [key]: value });
	}

	async function fetchTodos() {
		try {
			const todoData = await API.graphql(graphqlOperation(listTodos));
			const todos = todoData.data.listTodos.items;
			setTodos(todos);
		} catch (err) {
			console.log('error fetching todos');
		}
	}

	async function addTodo() {
		try {
			if (!formState.name || !formState.description) return;
			const todo = { ...formState };
			setTodos([ ...todos, todo ]);
			setFormState(initialState);
			await API.graphql(graphqlOperation(createTodo, { input: todo }));
		} catch (err) {
			console.log('error creating todo:', err);
		}
	}

	return (
		<div>
			<Hero title={props.title} subTitle={props.subTitle} text={props.text} />
			<Carousel />

			<Container>
				
				
				<Row>
					<Card>
						<Card.Header> {initialState.currentDateTime}</Card.Header>
						<Card.Body>
							<Card.Title>Shopping List</Card.Title>
							<Card.Text>
								<input
									onChange={(event) => setInput('name', event.target.value)}
									style={styles.input}
									value={formState.name}
									placeholder="Name"
								/>
								<input
									onChange={(event) => setInput('description', event.target.value)}
									style={styles.input}
									value={formState.description}
									placeholder="Description"
								/>
								<Button variant="primary" onClick={addTodo}>
									Create Item
								</Button>

								{todos.map((todo, index) => (
									<ListGroup key={todo.id ? todo.id : index} style={styles.todo}>
										<ListGroupItem style={styles.todoName}>{todo.name}</ListGroupItem>
										<ListGroupItem style={styles.todoDescription}>{todo.description}</ListGroupItem>
									</ListGroup>
								))}
							</Card.Text>
						</Card.Body>
					</Card>
				</Row>
			</Container>
		</div>
	);
};

const styles = {
	container: {
		width: 400,
		margin: '0 auto',
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		padding: 20
	},
	todo: { marginBottom: 15 },
	input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
	todoName: { fontSize: 20, fontWeight: 'bold' },
	todoDescription: { marginBottom: 0 },
	button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
};

export default Home;
