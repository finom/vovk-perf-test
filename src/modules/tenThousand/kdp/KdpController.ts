import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdp")
export default class KdpController {
  @operation({
    summary: "Get Kdp",
  })
  @get()
  static getKdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdp",
  })
  @post("{id}")
  static createKdp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
