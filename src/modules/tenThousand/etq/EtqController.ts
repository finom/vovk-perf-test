import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etq")
export default class EtqController {
  @operation({
    summary: "Get Etq",
  })
  @get()
  static getEtq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etq",
  })
  @post("{id}")
  static createEtq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
