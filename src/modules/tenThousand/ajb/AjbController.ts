import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajb")
export default class AjbController {
  @operation({
    summary: "Get Ajb",
  })
  @get()
  static getAjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajb",
  })
  @post("{id}")
  static createAjb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
