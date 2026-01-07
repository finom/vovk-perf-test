import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdv")
export default class CdvController {
  @operation({
    summary: "Get Cdv",
  })
  @get()
  static getCdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdv",
  })
  @post("{id}")
  static createCdv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
