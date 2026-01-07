import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uv")
export default class UvController {
  @operation({
    summary: "Get Uv",
  })
  @get()
  static getUv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uv",
  })
  @post("{id}")
  static createUv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
