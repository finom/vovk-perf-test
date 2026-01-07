import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzc")
export default class LzcController {
  @operation({
    summary: "Get Lzc",
  })
  @get()
  static getLzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzc",
  })
  @post("{id}")
  static createLzc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
