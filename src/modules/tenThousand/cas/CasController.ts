import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cas")
export default class CasController {
  @operation({
    summary: "Get Cas",
  })
  @get()
  static getCas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cas",
  })
  @post("{id}")
  static createCas = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
