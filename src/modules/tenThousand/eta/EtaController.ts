import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eta")
export default class EtaController {
  @operation({
    summary: "Get Eta",
  })
  @get()
  static getEta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eta",
  })
  @post("{id}")
  static createEta = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
