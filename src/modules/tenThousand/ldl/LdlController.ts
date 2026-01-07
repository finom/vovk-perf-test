import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldl")
export default class LdlController {
  @operation({
    summary: "Get Ldl",
  })
  @get()
  static getLdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldl",
  })
  @post("{id}")
  static createLdl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
