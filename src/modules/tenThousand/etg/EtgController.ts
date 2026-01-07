import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etg")
export default class EtgController {
  @operation({
    summary: "Get Etg",
  })
  @get()
  static getEtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etg",
  })
  @post("{id}")
  static createEtg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
