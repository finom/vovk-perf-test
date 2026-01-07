import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gg")
export default class GgController {
  @operation({
    summary: "Get Gg",
  })
  @get()
  static getGg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gg",
  })
  @post("{id}")
  static createGg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
