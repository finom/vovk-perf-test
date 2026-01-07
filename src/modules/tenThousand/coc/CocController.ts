import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coc")
export default class CocController {
  @operation({
    summary: "Get Coc",
  })
  @get()
  static getCoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coc",
  })
  @post("{id}")
  static createCoc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
