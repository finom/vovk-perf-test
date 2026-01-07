import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzb")
export default class LzbController {
  @operation({
    summary: "Get Lzb",
  })
  @get()
  static getLzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzb",
  })
  @post("{id}")
  static createLzb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
