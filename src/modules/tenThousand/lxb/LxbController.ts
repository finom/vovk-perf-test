import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxb")
export default class LxbController {
  @operation({
    summary: "Get Lxb",
  })
  @get()
  static getLxb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxb",
  })
  @post("{id}")
  static createLxb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
