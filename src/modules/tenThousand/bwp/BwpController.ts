import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwp")
export default class BwpController {
  @operation({
    summary: "Get Bwp",
  })
  @get()
  static getBwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwp",
  })
  @post("{id}")
  static createBwp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
