import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyg")
export default class DygController {
  @operation({
    summary: "Get Dyg",
  })
  @get()
  static getDyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyg",
  })
  @post("{id}")
  static createDyg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
