import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eox")
export default class EoxController {
  @operation({
    summary: "Get Eox",
  })
  @get()
  static getEox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eox",
  })
  @post("{id}")
  static createEox = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
