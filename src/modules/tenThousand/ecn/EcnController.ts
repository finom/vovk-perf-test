import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecn")
export default class EcnController {
  @operation({
    summary: "Get Ecn",
  })
  @get()
  static getEcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecn",
  })
  @post("{id}")
  static createEcn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
