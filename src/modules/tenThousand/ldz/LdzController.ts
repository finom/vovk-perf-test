import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldz")
export default class LdzController {
  @operation({
    summary: "Get Ldz",
  })
  @get()
  static getLdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldz",
  })
  @post("{id}")
  static createLdz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
