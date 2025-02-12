type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

// In nested =>type alias for the structure and ensure type safety when accessing its properties.
type ApiResponse = { user: { profile: { name: string; age: number } } };

const response: ApiResponse = { user: { profile: { name: "Alice", age: 25 } } };
console.log(response.user.profile.name); 
