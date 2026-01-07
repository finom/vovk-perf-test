import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdx")
export default class BdxController {
  @operation({
    summary: "Get Bdx",
  })
  @get()
  static getBdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdx",
  })
  @post("{id}")
  static createBdx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
