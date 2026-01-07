import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxh")
export default class LxhController {
  @operation({
    summary: "Get Lxh",
  })
  @get()
  static getLxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxh",
  })
  @post("{id}")
  static createLxh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
