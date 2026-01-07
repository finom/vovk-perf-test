import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dle")
export default class DleController {
  @operation({
    summary: "Get Dle",
  })
  @get()
  static getDle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dle",
  })
  @post("{id}")
  static createDle = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
