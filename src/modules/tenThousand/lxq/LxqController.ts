import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxq")
export default class LxqController {
  @operation({
    summary: "Get Lxq",
  })
  @get()
  static getLxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxq",
  })
  @post("{id}")
  static createLxq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
