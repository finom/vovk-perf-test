import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dot")
export default class DotController {
  @operation({
    summary: "Get Dot",
  })
  @get()
  static getDot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dot",
  })
  @post("{id}")
  static createDot = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
