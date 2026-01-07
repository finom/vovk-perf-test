import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfn")
export default class KfnController {
  @operation({
    summary: "Get Kfn",
  })
  @get()
  static getKfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfn",
  })
  @post("{id}")
  static createKfn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
