import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxz")
export default class LxzController {
  @operation({
    summary: "Get Lxz",
  })
  @get()
  static getLxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxz",
  })
  @post("{id}")
  static createLxz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
