import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzq")
export default class LzqController {
  @operation({
    summary: "Get Lzq",
  })
  @get()
  static getLzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzq",
  })
  @post("{id}")
  static createLzq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
