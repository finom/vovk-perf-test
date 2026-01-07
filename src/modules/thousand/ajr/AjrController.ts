import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajr")
export default class AjrController {
  @operation({
    summary: "Get Ajr",
  })
  @get()
  static getAjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajr",
  })
  @post("{id}")
  static createAjr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
