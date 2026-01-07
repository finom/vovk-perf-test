import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecf")
export default class EcfController {
  @operation({
    summary: "Get Ecf",
  })
  @get()
  static getEcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecf",
  })
  @post("{id}")
  static createEcf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
