import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aas")
export default class AasController {
  @operation({
    summary: "Get Aas",
  })
  @get()
  static getAas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aas",
  })
  @post("{id}")
  static createAas = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
