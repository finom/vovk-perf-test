import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hic")
export default class HicController {
  @operation({
    summary: "Get Hic",
  })
  @get()
  static getHic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hic",
  })
  @post("{id}")
  static createHic = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
