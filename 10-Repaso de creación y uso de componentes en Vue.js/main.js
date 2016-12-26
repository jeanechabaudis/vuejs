function findById(items, id){
	for (var i in items) {
		if (items[i].id == id) {
			return items[i];
		}
	}

	return null;
};

Vue.filter('category', function(id){
			
	var category = findById(this.categories, id);

	return category != null ? category.name : '';
})

Vue.component('select-category', {
	template: "#select_category_tpl",
	props: ['categories','id']
});

Vue.component('note-row', {
	template: "#notes_row_tpl",
	props: ['note','categories'],
	data: function(){
		return {
			editing: false
		};
	},
	methods:{
		remove: function(){
			this.$parent.notes.$remove(this.note);
		},
		edit: function(){
			//Vue.set(note,'editing',true);->cuando no existe la propiedad editing , se agregara automaticamente con el valor true
			this.editing = true;
		},
		update: function(){
			this.editing = false;
		}
	}
});

var vm = new Vue({
	el: '#app',
	data:{
		new_note: {
			note: '',
			category_id: ''
		},
		notes:[
			{
				note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet harum, eligendi delectus eius. Laboriosam corporis repellat voluptates quae molestiae cum doloremque nisi in harum. Odio dolore nam ullam. Numquam, amet.',
				category_id: 1
			},
			{
				note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet harum, eligendi delectus eius. Laboriosam corporis repellat voluptates quae molestiae cum doloremque nisi in harum. Odio dolore nam ullam. Numquam, amet.',
				category_id: 2
			},
			{
				note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet harum, eligendi delectus eius. Laboriosam corporis repellat voluptates quae molestiae cum doloremque nisi in harum. Odio dolore nam ullam. Numquam, amet.',
				category_id: 3
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
			},
			{
				id: 4,
				name: 'MySQL'
			}
		]
	},
	methods: {
		createNote: function(){
			this.notes.push(this.new_note);
			this.new_note = {note: '', category_id: ''};
		}
	},
	filters:{
		
	}
})