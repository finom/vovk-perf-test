import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asa")
export default class AsaController {
  @operation({
    summary: "Get Asa",
  })
  @get()
  static getAsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asa",
  })
  @post("{id}")
  static createAsa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
