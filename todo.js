const STATUS = {
  INPROGRESS: 'In Progress',
  DONE: 'Done',
  TODO: 'Todo',
};

const PRIORITY = {
  HIGH: 'high',
  LOW: 'low'
};

const list = [{
  name: 'create a task', status: STATUS.INPROGRESS, priority: PRIORITY.LOW
}]

function addTask(name, status = STATUS.INPROGRESS, priority = PRIORITY.HIGH) {
  list.push({name, status, priority})
}

function deleteTask(name) {
  if (list.find( item => item.name == name)) {
    list.splice(list.findIndex(item => name == item.name))
  } else {
    return console.log(`This task doesn't exist`);
  }
}

function changeStatus(name, status = STATUS.INPROGRESS) {
  let result = list.findIndex(item => item.name == name);
  if (result === -1) {
    console.log(`This task doesn't exist.You can't change the status for a non-existent task`);
  } else {
    list[result].status = status;
  }
}

function changePriority(name, priority) {
  let result = list.findIndex( item => item.name == name);
  if (result === -1) {
    console.log(`This task doesn't exist.You can't change the priority for a non-existent task`);
  } else {
    list[result].priority = priority
  }
}

function showList() {

	console.log(`${STATUS.DONE}:`)
	for (let task of list ) {
		if (task.status === STATUS.DONE) {
			console.log(` -Task: ${task.name}, Priority: ${task.priority}.`);
		}
	}
	console.log(`${STATUS.TODO}:`)
	for (let task of list ) {
		if (task.status === STATUS.TODO) {
			console.log(` -Task: ${task.name}, Priority: ${task.priority}.`);
		}
	}
	console.log(`${STATUS.INPROGRESS}:`)
	for (let task of list ) {
		if (task.status === STATUS.INPROGRESS) {
			console.log(` -Task: ${task.name}, Priority: ${task.priority}.`);
		}
	}
}

changePriority ('test', PRIORITY.LOW) ;	
changeStatus ('test', STATUS.DONE);
deleteTask('test');
addTask('make salad');
addTask('go for a walk', STATUS.TODO);

showList();