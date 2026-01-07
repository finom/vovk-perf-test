import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arq")
export default class ArqController {
  @operation({
    summary: "Get Arq",
  })
  @get()
  static getArq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arq",
  })
  @post("{id}")
  static createArq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
