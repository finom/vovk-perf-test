import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwj")
export default class BwjController {
  @operation({
    summary: "Get Bwj",
  })
  @get()
  static getBwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwj",
  })
  @post("{id}")
  static createBwj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
