import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arv")
export default class ArvController {
  @operation({
    summary: "Get Arv",
  })
  @get()
  static getArv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arv",
  })
  @post("{id}")
  static createArv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
