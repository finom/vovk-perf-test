import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcg")
export default class LcgController {
  @operation({
    summary: "Get Lcg",
  })
  @get()
  static getLcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcg",
  })
  @post("{id}")
  static createLcg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
