import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzx")
export default class LzxController {
  @operation({
    summary: "Get Lzx",
  })
  @get()
  static getLzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzx",
  })
  @post("{id}")
  static createLzx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
