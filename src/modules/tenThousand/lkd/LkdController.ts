import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkd")
export default class LkdController {
  @operation({
    summary: "Get Lkd",
  })
  @get()
  static getLkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkd",
  })
  @post("{id}")
  static createLkd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
