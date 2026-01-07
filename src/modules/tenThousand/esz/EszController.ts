import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esz")
export default class EszController {
  @operation({
    summary: "Get Esz",
  })
  @get()
  static getEsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esz",
  })
  @post("{id}")
  static createEsz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
