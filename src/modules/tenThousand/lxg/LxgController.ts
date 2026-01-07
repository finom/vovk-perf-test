import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxg")
export default class LxgController {
  @operation({
    summary: "Get Lxg",
  })
  @get()
  static getLxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxg",
  })
  @post("{id}")
  static createLxg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
