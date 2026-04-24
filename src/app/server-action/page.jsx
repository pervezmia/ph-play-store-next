import { handlePostAction } from "@/action/postAction";
import { addPost, getPosts } from "@/database/postdb";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";


const ServerActionPage = () => {
  const posts = getPosts();
  console.log();
  
  return (
    <div className="space-y-5 mt-5">
      <Form action={handlePostAction} key={posts.length + 1}  className="flex w-96 flex-col gap-4 mx-auto p-10 border rounded-2xl">
        <h3>Add Posts</h3>
        <TextField isRequired name="title" type="text">
          <Label>Title</Label>
          <Input placeholder="Enter your Title" />
          <FieldError />
        </TextField>
        <TextField isRequired name="des" type="text">
          <Label>Description</Label>
          <Input placeholder="Enter your Description" />
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>

      <div className="grid grid-cols-3 gap-2">
        {posts.map((post) => (
          <div key={post.id} className="border p-3 rounded-2xl">
            <p className="font-semibold">{post.title}</p>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerActionPage;
