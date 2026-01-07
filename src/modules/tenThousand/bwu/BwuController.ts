import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwu")
export default class BwuController {
  @operation({
    summary: "Get Bwu",
  })
  @get()
  static getBwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwu",
  })
  @post("{id}")
  static createBwu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
