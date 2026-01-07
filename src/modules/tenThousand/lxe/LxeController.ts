import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxe")
export default class LxeController {
  @operation({
    summary: "Get Lxe",
  })
  @get()
  static getLxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxe",
  })
  @post("{id}")
  static createLxe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
