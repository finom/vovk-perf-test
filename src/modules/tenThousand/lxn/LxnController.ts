import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxn")
export default class LxnController {
  @operation({
    summary: "Get Lxn",
  })
  @get()
  static getLxn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxn",
  })
  @post("{id}")
  static createLxn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
