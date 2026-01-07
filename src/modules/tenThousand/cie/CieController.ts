import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cie")
export default class CieController {
  @operation({
    summary: "Get Cie",
  })
  @get()
  static getCie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cie",
  })
  @post("{id}")
  static createCie = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
