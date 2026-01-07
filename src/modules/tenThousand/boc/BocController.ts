import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boc")
export default class BocController {
  @operation({
    summary: "Get Boc",
  })
  @get()
  static getBoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Boc",
  })
  @post("{id}")
  static createBoc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
