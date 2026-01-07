import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fws")
export default class FwsController {
  @operation({
    summary: "Get Fws",
  })
  @get()
  static getFws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fws",
  })
  @post("{id}")
  static createFws = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
