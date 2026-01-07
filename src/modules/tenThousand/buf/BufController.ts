import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buf")
export default class BufController {
  @operation({
    summary: "Get Buf",
  })
  @get()
  static getBuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buf",
  })
  @post("{id}")
  static createBuf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
