import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdx")
export default class CdxController {
  @operation({
    summary: "Get Cdx",
  })
  @get()
  static getCdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdx",
  })
  @post("{id}")
  static createCdx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
