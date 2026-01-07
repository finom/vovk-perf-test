import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ks")
export default class KsController {
  @operation({
    summary: "Get Ks",
  })
  @get()
  static getKs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ks",
  })
  @post("{id}")
  static createKs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
