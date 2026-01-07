import { procedure, prefix, get, post, operation } from "vovk";

@prefix("u")
export default class UController {
  @operation({
    summary: "Get U",
  })
  @get()
  static getU = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create U",
  })
  @post("{id}")
  static createU = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
