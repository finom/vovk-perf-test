import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajn")
export default class AjnController {
  @operation({
    summary: "Get Ajn",
  })
  @get()
  static getAjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajn",
  })
  @post("{id}")
  static createAjn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
