import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuo")
export default class KuoController {
  @operation({
    summary: "Get Kuo",
  })
  @get()
  static getKuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuo",
  })
  @post("{id}")
  static createKuo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
