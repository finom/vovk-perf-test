import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzj")
export default class LzjController {
  @operation({
    summary: "Get Lzj",
  })
  @get()
  static getLzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzj",
  })
  @post("{id}")
  static createLzj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
