import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kws")
export default class KwsController {
  @operation({
    summary: "Get Kws",
  })
  @get()
  static getKws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kws",
  })
  @post("{id}")
  static createKws = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
