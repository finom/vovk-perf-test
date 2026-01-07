import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euw")
export default class EuwController {
  @operation({
    summary: "Get Euw",
  })
  @get()
  static getEuw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euw",
  })
  @post("{id}")
  static createEuw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
