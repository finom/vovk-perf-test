import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwz")
export default class BwzController {
  @operation({
    summary: "Get Bwz",
  })
  @get()
  static getBwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwz",
  })
  @post("{id}")
  static createBwz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
