import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djr")
export default class DjrController {
  @operation({
    summary: "Get Djr",
  })
  @get()
  static getDjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djr",
  })
  @post("{id}")
  static createDjr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
