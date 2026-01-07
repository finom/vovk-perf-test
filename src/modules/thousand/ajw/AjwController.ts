import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajw")
export default class AjwController {
  @operation({
    summary: "Get Ajw",
  })
  @get()
  static getAjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajw",
  })
  @post("{id}")
  static createAjw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
