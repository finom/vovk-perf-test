import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lev")
export default class LevController {
  @operation({
    summary: "Get Lev",
  })
  @get()
  static getLev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lev",
  })
  @post("{id}")
  static createLev = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
