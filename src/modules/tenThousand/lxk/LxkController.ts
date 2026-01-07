import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxk")
export default class LxkController {
  @operation({
    summary: "Get Lxk",
  })
  @get()
  static getLxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxk",
  })
  @post("{id}")
  static createLxk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
