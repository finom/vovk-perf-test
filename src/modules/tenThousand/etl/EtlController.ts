import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etl")
export default class EtlController {
  @operation({
    summary: "Get Etl",
  })
  @get()
  static getEtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etl",
  })
  @post("{id}")
  static createEtl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
