import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzh")
export default class LzhController {
  @operation({
    summary: "Get Lzh",
  })
  @get()
  static getLzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzh",
  })
  @post("{id}")
  static createLzh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
