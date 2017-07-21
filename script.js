const input = `X O O X X X O O
O O O O X O X X
X X O X X O O O
O X O O O X X X
O O X X X X O X
X O X X X O X O
O O O X O X O X
X O X X O X O X`;

const rows = input.replace(/ /g, '').split('\n');

const result = rows.map((value, key) => {

	const letterRows = value.split('').map((letter, index) => {

		if (letter == 'O') {
			let count = 0;

			if (rows[key - 1]) {//перебираем верхний блок
				if (rows[key - 1].substr(index, 1) == 'X') {//Верхняя буква
					count++;
				}

				if (Math.abs(index - 1) != (index + 1) && rows[key - 1].substr(Math.abs(index - 1), 1) == 'X') {//Верхняя левая буква
					count++;
				}

				if (rows[key - 1].substr((index + 1), 1) == 'X') {//Верхняя правая буква
					count++;
				}

			}
			
			if (rows[key + 1]) {//перебираем нижний блок

				if (rows[key + 1].substr(index, 1) == 'X') {//Нижняя буква
					count++;
				}

				if (Math.abs(index - 1) != (index + 1) && rows[key + 1].substr(Math.abs(index - 1), 1) == 'X') {//Нижняя левая буква
					count++;
				}

				if (rows[key + 1].substr((index + 1), 1) == 'X') {//Нижняя правая буква
					count++;
				}

			}


			if (Math.abs(index - 1) != (index + 1) && rows[key].substr(Math.abs(index - 1), 1) == 'X') {//Левая буква
				count++;
			}

			if (rows[key].substr((index + 1), 1) == 'X') {//Правая буква
				count++;
			}

			return count.toString();
		}

		return letter;
	});

	return letterRows.join(' ');

});
console.log(result.join('\n'));