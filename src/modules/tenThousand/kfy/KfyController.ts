import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfy")
export default class KfyController {
  @operation({
    summary: "Get Kfy",
  })
  @get()
  static getKfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfy",
  })
  @post("{id}")
  static createKfy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
