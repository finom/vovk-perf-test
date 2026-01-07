import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwv")
export default class BwvController {
  @operation({
    summary: "Get Bwv",
  })
  @get()
  static getBwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwv",
  })
  @post("{id}")
  static createBwv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
