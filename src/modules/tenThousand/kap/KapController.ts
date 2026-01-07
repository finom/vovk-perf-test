import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kap")
export default class KapController {
  @operation({
    summary: "Get Kap",
  })
  @get()
  static getKap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kap",
  })
  @post("{id}")
  static createKap = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
