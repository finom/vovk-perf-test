import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djg")
export default class DjgController {
  @operation({
    summary: "Get Djg",
  })
  @get()
  static getDjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djg",
  })
  @post("{id}")
  static createDjg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
