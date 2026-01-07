import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyw")
export default class DywController {
  @operation({
    summary: "Get Dyw",
  })
  @get()
  static getDyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyw",
  })
  @post("{id}")
  static createDyw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
