import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fav")
export default class FavController {
  @operation({
    summary: "Get Fav",
  })
  @get()
  static getFav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fav",
  })
  @post("{id}")
  static createFav = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
