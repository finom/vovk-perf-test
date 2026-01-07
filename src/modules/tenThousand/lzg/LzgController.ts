import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzg")
export default class LzgController {
  @operation({
    summary: "Get Lzg",
  })
  @get()
  static getLzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzg",
  })
  @post("{id}")
  static createLzg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
