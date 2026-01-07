import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkv")
export default class LkvController {
  @operation({
    summary: "Get Lkv",
  })
  @get()
  static getLkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkv",
  })
  @post("{id}")
  static createLkv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
