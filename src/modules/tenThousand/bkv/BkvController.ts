import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkv")
export default class BkvController {
  @operation({
    summary: "Get Bkv",
  })
  @get()
  static getBkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkv",
  })
  @post("{id}")
  static createBkv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
