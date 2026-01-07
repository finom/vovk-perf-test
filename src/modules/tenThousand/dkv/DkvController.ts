import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkv")
export default class DkvController {
  @operation({
    summary: "Get Dkv",
  })
  @get()
  static getDkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkv",
  })
  @post("{id}")
  static createDkv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
