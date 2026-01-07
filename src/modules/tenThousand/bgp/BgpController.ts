import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgp")
export default class BgpController {
  @operation({
    summary: "Get Bgp",
  })
  @get()
  static getBgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgp",
  })
  @post("{id}")
  static createBgp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
