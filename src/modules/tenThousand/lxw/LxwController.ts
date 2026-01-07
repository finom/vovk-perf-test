import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxw")
export default class LxwController {
  @operation({
    summary: "Get Lxw",
  })
  @get()
  static getLxw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxw",
  })
  @post("{id}")
  static createLxw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
