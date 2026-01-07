import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecx")
export default class EcxController {
  @operation({
    summary: "Get Ecx",
  })
  @get()
  static getEcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecx",
  })
  @post("{id}")
  static createEcx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
