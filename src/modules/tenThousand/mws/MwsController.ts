import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mws")
export default class MwsController {
  @operation({
    summary: "Get Mws",
  })
  @get()
  static getMws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mws",
  })
  @post("{id}")
  static createMws = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
