import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efy")
export default class EfyController {
  @operation({
    summary: "Get Efy",
  })
  @get()
  static getEfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efy",
  })
  @post("{id}")
  static createEfy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
