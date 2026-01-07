import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djz")
export default class DjzController {
  @operation({
    summary: "Get Djz",
  })
  @get()
  static getDjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djz",
  })
  @post("{id}")
  static createDjz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
