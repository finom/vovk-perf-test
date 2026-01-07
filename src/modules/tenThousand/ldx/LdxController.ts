import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldx")
export default class LdxController {
  @operation({
    summary: "Get Ldx",
  })
  @get()
  static getLdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldx",
  })
  @post("{id}")
  static createLdx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
