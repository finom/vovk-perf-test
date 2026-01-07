import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etf")
export default class EtfController {
  @operation({
    summary: "Get Etf",
  })
  @get()
  static getEtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etf",
  })
  @post("{id}")
  static createEtf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
