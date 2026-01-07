import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esa")
export default class EsaController {
  @operation({
    summary: "Get Esa",
  })
  @get()
  static getEsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esa",
  })
  @post("{id}")
  static createEsa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
