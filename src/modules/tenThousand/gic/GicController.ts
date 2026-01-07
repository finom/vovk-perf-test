import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gic")
export default class GicController {
  @operation({
    summary: "Get Gic",
  })
  @get()
  static getGic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gic",
  })
  @post("{id}")
  static createGic = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
