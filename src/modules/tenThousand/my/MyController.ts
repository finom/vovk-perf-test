import { procedure, prefix, get, post, operation } from "vovk";

@prefix("my")
export default class MyController {
  @operation({
    summary: "Get My",
  })
  @get()
  static getMy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create My",
  })
  @post("{id}")
  static createMy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
