import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxm")
export default class LxmController {
  @operation({
    summary: "Get Lxm",
  })
  @get()
  static getLxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxm",
  })
  @post("{id}")
  static createLxm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
