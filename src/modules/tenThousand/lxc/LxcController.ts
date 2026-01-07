import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxc")
export default class LxcController {
  @operation({
    summary: "Get Lxc",
  })
  @get()
  static getLxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxc",
  })
  @post("{id}")
  static createLxc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
