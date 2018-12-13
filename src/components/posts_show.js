import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    this.props.fetchPost(id);
  }
  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }
  render() {
    const { post } = this.props;
    if (!post) {
      return <div class="ui segment">loading...</div>;
    }
    return (
      <div>
        <div className="ui clearing segment">
          <div>
            <Link to="/" className="ui left floated button">
              Back To Index
            </Link>
            <button
              id="deleteButton"
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger ui right floated button"
            >
              Delete Post
            </button>
          </div>
        </div>
        <div className="ui clearing segment">
          <div className="container">
            <h3>{post.title}</h3>
            <h5>Categories: {post.categories}</h5>
            <p className="lead">{post.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostsShow);
