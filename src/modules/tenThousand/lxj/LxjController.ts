import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxj")
export default class LxjController {
  @operation({
    summary: "Get Lxj",
  })
  @get()
  static getLxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxj",
  })
  @post("{id}")
  static createLxj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
