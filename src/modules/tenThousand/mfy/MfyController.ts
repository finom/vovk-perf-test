import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfy")
export default class MfyController {
  @operation({
    summary: "Get Mfy",
  })
  @get()
  static getMfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfy",
  })
  @post("{id}")
  static createMfy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
