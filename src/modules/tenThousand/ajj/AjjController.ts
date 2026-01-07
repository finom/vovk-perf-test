import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajj")
export default class AjjController {
  @operation({
    summary: "Get Ajj",
  })
  @get()
  static getAjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajj",
  })
  @post("{id}")
  static createAjj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
