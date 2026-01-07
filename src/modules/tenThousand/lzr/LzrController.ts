import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzr")
export default class LzrController {
  @operation({
    summary: "Get Lzr",
  })
  @get()
  static getLzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzr",
  })
  @post("{id}")
  static createLzr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
