import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghs")
export default class GhsController {
  @operation({
    summary: "Get Ghs",
  })
  @get()
  static getGhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghs",
  })
  @post("{id}")
  static createGhs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
