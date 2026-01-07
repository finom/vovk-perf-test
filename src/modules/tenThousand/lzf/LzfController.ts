import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzf")
export default class LzfController {
  @operation({
    summary: "Get Lzf",
  })
  @get()
  static getLzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzf",
  })
  @post("{id}")
  static createLzf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
