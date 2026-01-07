import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajy")
export default class AjyController {
  @operation({
    summary: "Get Ajy",
  })
  @get()
  static getAjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajy",
  })
  @post("{id}")
  static createAjy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
