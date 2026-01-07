import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdm")
export default class CdmController {
  @operation({
    summary: "Get Cdm",
  })
  @get()
  static getCdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdm",
  })
  @post("{id}")
  static createCdm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
