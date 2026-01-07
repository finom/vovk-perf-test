import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etb")
export default class EtbController {
  @operation({
    summary: "Get Etb",
  })
  @get()
  static getEtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etb",
  })
  @post("{id}")
  static createEtb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
