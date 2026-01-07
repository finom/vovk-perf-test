import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djw")
export default class DjwController {
  @operation({
    summary: "Get Djw",
  })
  @get()
  static getDjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djw",
  })
  @post("{id}")
  static createDjw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
