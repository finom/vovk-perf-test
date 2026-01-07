import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mid")
export default class MidController {
  @operation({
    summary: "Get Mid",
  })
  @get()
  static getMid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mid",
  })
  @post("{id}")
  static createMid = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
