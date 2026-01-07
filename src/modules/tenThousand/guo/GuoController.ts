import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guo")
export default class GuoController {
  @operation({
    summary: "Get Guo",
  })
  @get()
  static getGuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guo",
  })
  @post("{id}")
  static createGuo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
