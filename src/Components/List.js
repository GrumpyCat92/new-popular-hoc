import Video from "./Video";
import Article from "./Article";
import Wrapperd from "./Wrap";

export default function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case "video":
        const WrappedVideo = Wrapperd(Video);
        return <WrappedVideo {...item} />;
      case "article":
        const WrappedArticle = Wrapperd(Article);
        return <WrappedArticle {...item} />;
    }
  });
}
