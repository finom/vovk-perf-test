import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecm")
export default class EcmController {
  @operation({
    summary: "Get Ecm",
  })
  @get()
  static getEcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecm",
  })
  @post("{id}")
  static createEcm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
