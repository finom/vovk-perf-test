import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxa")
export default class GxaController {
  @operation({
    summary: "Get Gxa",
  })
  @get()
  static getGxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxa",
  })
  @post("{id}")
  static createGxa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
