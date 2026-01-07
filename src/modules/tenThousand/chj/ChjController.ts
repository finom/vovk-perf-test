import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chj")
export default class ChjController {
  @operation({
    summary: "Get Chj",
  })
  @get()
  static getChj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chj",
  })
  @post("{id}")
  static createChj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
