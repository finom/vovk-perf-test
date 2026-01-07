import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfy")
export default class DfyController {
  @operation({
    summary: "Get Dfy",
  })
  @get()
  static getDfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfy",
  })
  @post("{id}")
  static createDfy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
