import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfy")
export default class BfyController {
  @operation({
    summary: "Get Bfy",
  })
  @get()
  static getBfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfy",
  })
  @post("{id}")
  static createBfy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
