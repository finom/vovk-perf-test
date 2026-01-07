import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkv")
export default class NkvController {
  @operation({
    summary: "Get Nkv",
  })
  @get()
  static getNkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkv",
  })
  @post("{id}")
  static createNkv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
