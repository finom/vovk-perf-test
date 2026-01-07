import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxv")
export default class CxvController {
  @operation({
    summary: "Get Cxv",
  })
  @get()
  static getCxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxv",
  })
  @post("{id}")
  static createCxv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
