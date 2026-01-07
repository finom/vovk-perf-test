import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acr")
export default class AcrController {
  @operation({
    summary: "Get Acr",
  })
  @get()
  static getAcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acr",
  })
  @post("{id}")
  static createAcr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
