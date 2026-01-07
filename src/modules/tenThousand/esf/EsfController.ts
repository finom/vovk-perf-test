import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esf")
export default class EsfController {
  @operation({
    summary: "Get Esf",
  })
  @get()
  static getEsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esf",
  })
  @post("{id}")
  static createEsf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
