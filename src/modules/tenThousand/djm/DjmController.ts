import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djm")
export default class DjmController {
  @operation({
    summary: "Get Djm",
  })
  @get()
  static getDjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djm",
  })
  @post("{id}")
  static createDjm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
