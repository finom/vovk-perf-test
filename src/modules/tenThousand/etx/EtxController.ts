import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etx")
export default class EtxController {
  @operation({
    summary: "Get Etx",
  })
  @get()
  static getEtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etx",
  })
  @post("{id}")
  static createEtx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
