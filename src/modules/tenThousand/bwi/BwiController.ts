import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwi")
export default class BwiController {
  @operation({
    summary: "Get Bwi",
  })
  @get()
  static getBwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwi",
  })
  @post("{id}")
  static createBwi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
