import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eea")
export default class EeaController {
  @operation({
    summary: "Get Eea",
  })
  @get()
  static getEea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eea",
  })
  @post("{id}")
  static createEea = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
