import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggq")
export default class GgqController {
  @operation({
    summary: "Get Ggq",
  })
  @get()
  static getGgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggq",
  })
  @post("{id}")
  static createGgq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
