import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkw")
export default class LkwController {
  @operation({
    summary: "Get Lkw",
  })
  @get()
  static getLkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkw",
  })
  @post("{id}")
  static createLkw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
