import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkx")
export default class BkxController {
  @operation({
    summary: "Get Bkx",
  })
  @get()
  static getBkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkx",
  })
  @post("{id}")
  static createBkx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
