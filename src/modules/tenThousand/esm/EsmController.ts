import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esm")
export default class EsmController {
  @operation({
    summary: "Get Esm",
  })
  @get()
  static getEsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esm",
  })
  @post("{id}")
  static createEsm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
