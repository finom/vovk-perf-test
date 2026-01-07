import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ago")
export default class AgoController {
  @operation({
    summary: "Get Ago",
  })
  @get()
  static getAgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ago",
  })
  @post("{id}")
  static createAgo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
