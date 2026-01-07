import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajk")
export default class AjkController {
  @operation({
    summary: "Get Ajk",
  })
  @get()
  static getAjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajk",
  })
  @post("{id}")
  static createAjk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
