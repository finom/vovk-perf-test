import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldg")
export default class LdgController {
  @operation({
    summary: "Get Ldg",
  })
  @get()
  static getLdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldg",
  })
  @post("{id}")
  static createLdg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
