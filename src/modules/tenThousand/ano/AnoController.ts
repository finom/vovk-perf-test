import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ano")
export default class AnoController {
  @operation({
    summary: "Get Ano",
  })
  @get()
  static getAno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ano",
  })
  @post("{id}")
  static createAno = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
