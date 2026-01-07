import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggc")
export default class GgcController {
  @operation({
    summary: "Get Ggc",
  })
  @get()
  static getGgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggc",
  })
  @post("{id}")
  static createGgc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
