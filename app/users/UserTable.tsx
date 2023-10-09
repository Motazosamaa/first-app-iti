import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import {sort} from 'fast-sort';

interface Post {
  id: number;
  title: string;
  body: string;
}
interface Props {
  orderBy: string;
}

const UserTable = async ({ orderBy }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  const sortedPosts = sort(posts).asc(orderBy==="id"?post=>post.id:post=>post.body);

    // orderBy => u.id,
    // orderBy => u.title,
    // orderBy => u.body
  ;

  return (
    <div>
      <table className="table table-dark table-striped">
        <thead style={{ backgroundColor: "#212529", textAlign: "center" }}>
          <th> <Link href="/users?orderBy=id">ID</Link> </th>
          <th><Link href="/users?orderBy=title"> Title</Link> </th>
          <th>Body </th>
        </thead>

        <tbody>
          {sortedPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
