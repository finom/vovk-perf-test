import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aex")
export default class AexController {
  @operation({
    summary: "Get Aex",
  })
  @get()
  static getAex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aex",
  })
  @post("{id}")
  static createAex = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
