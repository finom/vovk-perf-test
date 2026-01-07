import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aux")
export default class AuxController {
  @operation({
    summary: "Get Aux",
  })
  @get()
  static getAux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aux",
  })
  @post("{id}")
  static createAux = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
