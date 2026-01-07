import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxd")
export default class LxdController {
  @operation({
    summary: "Get Lxd",
  })
  @get()
  static getLxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxd",
  })
  @post("{id}")
  static createLxd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
