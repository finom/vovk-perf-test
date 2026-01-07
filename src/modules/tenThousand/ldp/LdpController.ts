import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldp")
export default class LdpController {
  @operation({
    summary: "Get Ldp",
  })
  @get()
  static getLdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldp",
  })
  @post("{id}")
  static createLdp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
