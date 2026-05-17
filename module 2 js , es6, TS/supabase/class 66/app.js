const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1bnhsc3p1c2ZoZ290bmR3aXNpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODg5OTQ3OCwiZXhwIjoyMDk0NDc1NDc4fQ.1xP6Rm381SPeNNVonxA-N1a2TIXuqEoBAp6IoD6opBw";
const supabaseUrl = "https://zunxlszusfhgotndwisi.supabase.co";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
console.log(supabaseClient);

var input = document.getElementById("inp");
async function addTodo() {
  var inpValue = input.value;
  const { error } = await supabaseClient
    .from("todos")
    .insert({ items: inpValue });

  console.log(error);
  if (error) {
    alert("item no created");
    console.log(error);
  } else {
    alert("item created");
  }

  getTodos()
}
var ul = document.querySelector(".lists");
console.log(ul);
async function getTodos() {
  const { data, error } = await supabaseClient.from("todos").select();
  console.log(error);
  console.log(data);

  for (var i = 0; i < data.length; i++) {
    var li = document.createElement("li");
    li.classList.add("todo");
    li.innerHTML = `
    <h1>${data[i].items}</h1>
    <div class="btns">
      <button class="delete-btn" onClick=delteTodo(${data[i].id})>Delete</button>
      <button class="edit-btn">Edit</button>
    </div>
    `;
    ul.appendChild(li);
  }
}

getTodos();


async function delteTodo(id){
    const response = await supabaseClient
  .from('todos')
  .delete()
  .eq('id', id)
console.log("id===>", id)
getTodos()
}