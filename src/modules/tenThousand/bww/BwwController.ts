import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bww")
export default class BwwController {
  @operation({
    summary: "Get Bww",
  })
  @get()
  static getBww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bww",
  })
  @post("{id}")
  static createBww = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
