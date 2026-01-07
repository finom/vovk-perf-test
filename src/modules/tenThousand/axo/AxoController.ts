import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axo")
export default class AxoController {
  @operation({
    summary: "Get Axo",
  })
  @get()
  static getAxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axo",
  })
  @post("{id}")
  static createAxo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
