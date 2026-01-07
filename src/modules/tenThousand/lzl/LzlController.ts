import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzl")
export default class LzlController {
  @operation({
    summary: "Get Lzl",
  })
  @get()
  static getLzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzl",
  })
  @post("{id}")
  static createLzl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
