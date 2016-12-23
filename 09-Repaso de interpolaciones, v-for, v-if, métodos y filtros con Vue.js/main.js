function findById(items, id){
	for (var i in items) {
		if (items[i].id == id) {
			return items[i];
		}
	}

	return null;
}

var vm = new Vue({
	el: '#app',
	data:{
		notes:[
			{
				note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet harum, eligendi delectus eius. Laboriosam corporis repellat voluptates quae molestiae cum doloremque nisi in harum. Odio dolore nam ullam. Numquam, amet.',
				category_id: 1,
				editing: false
			},
			{
				note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet harum, eligendi delectus eius. Laboriosam corporis repellat voluptates quae molestiae cum doloremque nisi in harum. Odio dolore nam ullam. Numquam, amet.',
				category_id: 2,
				editing: false
			},
			{
				note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet harum, eligendi delectus eius. Laboriosam corporis repellat voluptates quae molestiae cum doloremque nisi in harum. Odio dolore nam ullam. Numquam, amet.',
				category_id: 3,
				editing: false
			}
		],
		categories: [
			{
				id: 1,
				name: 'Laravel'
			},
			{
				id: 2,
				name: 'Python'
			},
			{
				id: 3,
				name: 'SQL'
			}
		]
	},
	methods: {
		deleteNote: function(note){
			this.notes.$remove(note);
		},
		editNote: function(note){
			//Vue.set(note,'editing',true);->cuando no existe la propiedad editing , se agregara automaticamente con el valor true
			note.editing = true;
		},
		updateNote: function(note){
			note.editing = false;
		}
	},
	filters:{
		category: function(id){
			
			var category = findById(this.categories, id);

			return category != null ? category.name : '';
		}
	}
})