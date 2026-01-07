import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfm")
export default class KfmController {
  @operation({
    summary: "Get Kfm",
  })
  @get()
  static getKfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfm",
  })
  @post("{id}")
  static createKfm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
