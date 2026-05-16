const supabaseResponse = supabase.createClient(supabaseUrl, supabaseKey);
console.log(supabaseResponse);

async function getTodos() {
  const { data, error } = await supabaseResponse.from("todos").select();
  //   .eq('items', 'buy bike')
  // .gt('price', 5000)

  console.log(data);
  console.log(error);
}

getTodos();

// async function addTodo(){
//     const { error } = await supabaseResponse
//   .from('todos')
//   .insert({ id: 2, items:  "buy car"})
//   console.log(error)
// }

// addTodo()

// async function updateTodo(){
//     const { error } = await supabaseResponse
//   .from('todos')
//   .update({ items: 'buy cycle' })
//   .eq('id', 2)
//   console.log(error)
// }
// updateTodo()

// async function upsertTodo(){
//     const { data, error } = await supabaseResponse
//   .from('todos')
//   .upsert({id: '2', items: 'supabot' }, { onConflict: 'id' })

// }

// upsertTodo()

async function deleteTodo() {
  const { error } = await supabaseResponse.from("todos").delete().eq("id", 1);
}

deleteTodo();
