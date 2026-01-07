import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejo")
export default class EjoController {
  @operation({
    summary: "Get Ejo",
  })
  @get()
  static getEjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejo",
  })
  @post("{id}")
  static createEjo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
