from flask import Flask, request, jsonify

app = Flask(__name__)

tasks = [
    {
        'id': 1,
        'title': 'Tarefa 1',
        'description': 'Descrição da tarefa 1',
        'done': False,
        'assigned_to': 1
    },
    {
        'id': 2,
        'title': 'Tarefa 2',
        'description': 'Descrição da tarefa 2',
        'done': False,
        'assigned_to': 2
    }
]

users = [
    {
        'id': 1,
        'name': 'Usuário 1',
        'email': 'usuario1@teste.com'
    },
    {
        'id': 2,
        'name': 'Usuário 2',
        'email': 'usuario2@teste.com'
    }
]

# Endpoint para obter todas as tarefas
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})

# Endpoint para criar uma nova tarefa
@app.route('/tasks', methods=['POST'])
def create_task():
    new_task = {
        'id': tasks[-1]['id'] + 1,
        'title': request.json['title'],
        'description': request.json['description'],
        'done': False,
        'assigned_to': request.json['assigned_to']
    }
    tasks.append(new_task)
    return jsonify({'task': new_task})

# Endpoint para obter uma tarefa específica
@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = [task for task in tasks if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    return jsonify({'task': task[0]})

# Endpoint para
