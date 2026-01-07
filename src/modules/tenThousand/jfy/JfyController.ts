import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfy")
export default class JfyController {
  @operation({
    summary: "Get Jfy",
  })
  @get()
  static getJfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfy",
  })
  @post("{id}")
  static createJfy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
