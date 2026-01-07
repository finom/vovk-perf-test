import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arc")
export default class ArcController {
  @operation({
    summary: "Get Arc",
  })
  @get()
  static getArc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arc",
  })
  @post("{id}")
  static createArc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
