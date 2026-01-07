import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etd")
export default class EtdController {
  @operation({
    summary: "Get Etd",
  })
  @get()
  static getEtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etd",
  })
  @post("{id}")
  static createEtd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
