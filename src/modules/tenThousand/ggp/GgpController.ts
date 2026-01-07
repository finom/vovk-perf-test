import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggp")
export default class GgpController {
  @operation({
    summary: "Get Ggp",
  })
  @get()
  static getGgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggp",
  })
  @post("{id}")
  static createGgp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
