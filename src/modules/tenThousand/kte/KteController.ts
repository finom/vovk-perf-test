import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kte")
export default class KteController {
  @operation({
    summary: "Get Kte",
  })
  @get()
  static getKte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kte",
  })
  @post("{id}")
  static createKte = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
