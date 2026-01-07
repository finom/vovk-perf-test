import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdw")
export default class CdwController {
  @operation({
    summary: "Get Cdw",
  })
  @get()
  static getCdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdw",
  })
  @post("{id}")
  static createCdw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
