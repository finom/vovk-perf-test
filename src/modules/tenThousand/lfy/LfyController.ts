import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfy")
export default class LfyController {
  @operation({
    summary: "Get Lfy",
  })
  @get()
  static getLfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfy",
  })
  @post("{id}")
  static createLfy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
