import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkr")
export default class LkrController {
  @operation({
    summary: "Get Lkr",
  })
  @get()
  static getLkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkr",
  })
  @post("{id}")
  static createLkr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
