import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krp")
export default class KrpController {
  @operation({
    summary: "Get Krp",
  })
  @get()
  static getKrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krp",
  })
  @post("{id}")
  static createKrp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
