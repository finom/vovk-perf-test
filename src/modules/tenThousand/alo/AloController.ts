import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alo")
export default class AloController {
  @operation({
    summary: "Get Alo",
  })
  @get()
  static getAlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alo",
  })
  @post("{id}")
  static createAlo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
