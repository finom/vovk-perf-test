import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzv")
export default class LzvController {
  @operation({
    summary: "Get Lzv",
  })
  @get()
  static getLzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzv",
  })
  @post("{id}")
  static createLzv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
