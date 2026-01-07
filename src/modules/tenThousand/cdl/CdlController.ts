import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdl")
export default class CdlController {
  @operation({
    summary: "Get Cdl",
  })
  @get()
  static getCdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdl",
  })
  @post("{id}")
  static createCdl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
