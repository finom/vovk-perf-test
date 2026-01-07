import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecb")
export default class EcbController {
  @operation({
    summary: "Get Ecb",
  })
  @get()
  static getEcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecb",
  })
  @post("{id}")
  static createEcb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
