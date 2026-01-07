import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzw")
export default class LzwController {
  @operation({
    summary: "Get Lzw",
  })
  @get()
  static getLzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzw",
  })
  @post("{id}")
  static createLzw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
