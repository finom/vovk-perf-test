import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldm")
export default class LdmController {
  @operation({
    summary: "Get Ldm",
  })
  @get()
  static getLdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldm",
  })
  @post("{id}")
  static createLdm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
