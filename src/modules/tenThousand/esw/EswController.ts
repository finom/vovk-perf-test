import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esw")
export default class EswController {
  @operation({
    summary: "Get Esw",
  })
  @get()
  static getEsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esw",
  })
  @post("{id}")
  static createEsw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
