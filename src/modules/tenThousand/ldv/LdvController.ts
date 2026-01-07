import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldv")
export default class LdvController {
  @operation({
    summary: "Get Ldv",
  })
  @get()
  static getLdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldv",
  })
  @post("{id}")
  static createLdv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
