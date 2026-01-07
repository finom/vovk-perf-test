import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxu")
export default class LxuController {
  @operation({
    summary: "Get Lxu",
  })
  @get()
  static getLxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxu",
  })
  @post("{id}")
  static createLxu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
