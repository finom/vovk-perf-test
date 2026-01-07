import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfy")
export default class CfyController {
  @operation({
    summary: "Get Cfy",
  })
  @get()
  static getCfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfy",
  })
  @post("{id}")
  static createCfy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
