import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzn")
export default class LznController {
  @operation({
    summary: "Get Lzn",
  })
  @get()
  static getLzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzn",
  })
  @post("{id}")
  static createLzn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
