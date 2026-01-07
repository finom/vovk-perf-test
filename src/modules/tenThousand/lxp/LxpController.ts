import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxp")
export default class LxpController {
  @operation({
    summary: "Get Lxp",
  })
  @get()
  static getLxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxp",
  })
  @post("{id}")
  static createLxp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
