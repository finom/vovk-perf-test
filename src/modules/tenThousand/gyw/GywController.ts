import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyw")
export default class GywController {
  @operation({
    summary: "Get Gyw",
  })
  @get()
  static getGyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyw",
  })
  @post("{id}")
  static createGyw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
