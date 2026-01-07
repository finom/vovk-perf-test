import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzp")
export default class LzpController {
  @operation({
    summary: "Get Lzp",
  })
  @get()
  static getLzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzp",
  })
  @post("{id}")
  static createLzp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
