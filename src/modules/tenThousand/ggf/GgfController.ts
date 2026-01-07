import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggf")
export default class GgfController {
  @operation({
    summary: "Get Ggf",
  })
  @get()
  static getGgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggf",
  })
  @post("{id}")
  static createGgf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
