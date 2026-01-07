import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldh")
export default class LdhController {
  @operation({
    summary: "Get Ldh",
  })
  @get()
  static getLdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldh",
  })
  @post("{id}")
  static createLdh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
