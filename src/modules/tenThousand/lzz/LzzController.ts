import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzz")
export default class LzzController {
  @operation({
    summary: "Get Lzz",
  })
  @get()
  static getLzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzz",
  })
  @post("{id}")
  static createLzz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
