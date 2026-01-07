import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmo")
export default class FmoController {
  @operation({
    summary: "Get Fmo",
  })
  @get()
  static getFmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmo",
  })
  @post("{id}")
  static createFmo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
