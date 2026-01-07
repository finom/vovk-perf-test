import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxv")
export default class LxvController {
  @operation({
    summary: "Get Lxv",
  })
  @get()
  static getLxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxv",
  })
  @post("{id}")
  static createLxv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
