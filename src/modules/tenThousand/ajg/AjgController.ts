import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajg")
export default class AjgController {
  @operation({
    summary: "Get Ajg",
  })
  @get()
  static getAjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajg",
  })
  @post("{id}")
  static createAjg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
