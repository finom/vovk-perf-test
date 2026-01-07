import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxr")
export default class LxrController {
  @operation({
    summary: "Get Lxr",
  })
  @get()
  static getLxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxr",
  })
  @post("{id}")
  static createLxr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
