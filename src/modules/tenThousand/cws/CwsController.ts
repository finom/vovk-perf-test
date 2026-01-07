import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cws")
export default class CwsController {
  @operation({
    summary: "Get Cws",
  })
  @get()
  static getCws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cws",
  })
  @post("{id}")
  static createCws = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
