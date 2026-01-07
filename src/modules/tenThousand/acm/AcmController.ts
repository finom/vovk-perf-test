import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acm")
export default class AcmController {
  @operation({
    summary: "Get Acm",
  })
  @get()
  static getAcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acm",
  })
  @post("{id}")
  static createAcm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
