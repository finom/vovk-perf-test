import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkc")
export default class LkcController {
  @operation({
    summary: "Get Lkc",
  })
  @get()
  static getLkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkc",
  })
  @post("{id}")
  static createLkc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
