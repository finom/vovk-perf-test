import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bws")
export default class BwsController {
  @operation({
    summary: "Get Bws",
  })
  @get()
  static getBws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bws",
  })
  @post("{id}")
  static createBws = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
