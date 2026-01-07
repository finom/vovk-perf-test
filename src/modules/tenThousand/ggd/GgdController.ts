import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggd")
export default class GgdController {
  @operation({
    summary: "Get Ggd",
  })
  @get()
  static getGgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggd",
  })
  @post("{id}")
  static createGgd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
