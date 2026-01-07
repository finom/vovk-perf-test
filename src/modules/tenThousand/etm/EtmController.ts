import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etm")
export default class EtmController {
  @operation({
    summary: "Get Etm",
  })
  @get()
  static getEtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etm",
  })
  @post("{id}")
  static createEtm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
