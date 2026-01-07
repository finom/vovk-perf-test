import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldq")
export default class LdqController {
  @operation({
    summary: "Get Ldq",
  })
  @get()
  static getLdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldq",
  })
  @post("{id}")
  static createLdq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
