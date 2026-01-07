import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgw")
export default class LgwController {
  @operation({
    summary: "Get Lgw",
  })
  @get()
  static getLgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgw",
  })
  @post("{id}")
  static createLgw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
