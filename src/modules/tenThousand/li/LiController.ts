import { procedure, prefix, get, post, operation } from "vovk";

@prefix("li")
export default class LiController {
  @operation({
    summary: "Get Li",
  })
  @get()
  static getLi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Li",
  })
  @post("{id}")
  static createLi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
