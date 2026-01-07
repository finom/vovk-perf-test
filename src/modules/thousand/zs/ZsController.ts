import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zs")
export default class ZsController {
  @operation({
    summary: "Get Zs",
  })
  @get()
  static getZs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zs",
  })
  @post("{id}")
  static createZs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
