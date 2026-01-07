import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajm")
export default class AjmController {
  @operation({
    summary: "Get Ajm",
  })
  @get()
  static getAjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajm",
  })
  @post("{id}")
  static createAjm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
