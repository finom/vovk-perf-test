import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndp")
export default class NdpController {
  @operation({
    summary: "Get Ndp",
  })
  @get()
  static getNdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndp",
  })
  @post("{id}")
  static createNdp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
