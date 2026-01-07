import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euo")
export default class EuoController {
  @operation({
    summary: "Get Euo",
  })
  @get()
  static getEuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euo",
  })
  @post("{id}")
  static createEuo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
