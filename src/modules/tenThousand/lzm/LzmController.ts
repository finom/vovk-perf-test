import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzm")
export default class LzmController {
  @operation({
    summary: "Get Lzm",
  })
  @get()
  static getLzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzm",
  })
  @post("{id}")
  static createLzm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
