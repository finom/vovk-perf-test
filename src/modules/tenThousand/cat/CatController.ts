import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cat")
export default class CatController {
  @operation({
    summary: "Get Cat",
  })
  @get()
  static getCat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cat",
  })
  @post("{id}")
  static createCat = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
