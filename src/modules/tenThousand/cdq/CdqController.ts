import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdq")
export default class CdqController {
  @operation({
    summary: "Get Cdq",
  })
  @get()
  static getCdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdq",
  })
  @post("{id}")
  static createCdq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
