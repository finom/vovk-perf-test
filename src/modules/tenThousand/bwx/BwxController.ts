import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwx")
export default class BwxController {
  @operation({
    summary: "Get Bwx",
  })
  @get()
  static getBwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwx",
  })
  @post("{id}")
  static createBwx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
