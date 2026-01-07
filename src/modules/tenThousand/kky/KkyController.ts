import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kky")
export default class KkyController {
  @operation({
    summary: "Get Kky",
  })
  @get()
  static getKky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kky",
  })
  @post("{id}")
  static createKky = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
