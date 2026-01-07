import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djs")
export default class DjsController {
  @operation({
    summary: "Get Djs",
  })
  @get()
  static getDjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djs",
  })
  @post("{id}")
  static createDjs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
