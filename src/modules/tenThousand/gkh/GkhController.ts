import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkh")
export default class GkhController {
  @operation({
    summary: "Get Gkh",
  })
  @get()
  static getGkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkh",
  })
  @post("{id}")
  static createGkh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
