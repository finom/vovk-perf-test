import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpv")
export default class KpvController {
  @operation({
    summary: "Get Kpv",
  })
  @get()
  static getKpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpv",
  })
  @post("{id}")
  static createKpv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
