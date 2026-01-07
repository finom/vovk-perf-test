import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djk")
export default class DjkController {
  @operation({
    summary: "Get Djk",
  })
  @get()
  static getDjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djk",
  })
  @post("{id}")
  static createDjk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
