import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxs")
export default class LxsController {
  @operation({
    summary: "Get Lxs",
  })
  @get()
  static getLxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxs",
  })
  @post("{id}")
  static createLxs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
