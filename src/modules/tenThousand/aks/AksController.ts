import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aks")
export default class AksController {
  @operation({
    summary: "Get Aks",
  })
  @get()
  static getAks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aks",
  })
  @post("{id}")
  static createAks = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
