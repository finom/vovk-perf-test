import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdp")
export default class BdpController {
  @operation({
    summary: "Get Bdp",
  })
  @get()
  static getBdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdp",
  })
  @post("{id}")
  static createBdp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
