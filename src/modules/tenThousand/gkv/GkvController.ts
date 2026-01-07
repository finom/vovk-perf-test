import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkv")
export default class GkvController {
  @operation({
    summary: "Get Gkv",
  })
  @get()
  static getGkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkv",
  })
  @post("{id}")
  static createGkv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
