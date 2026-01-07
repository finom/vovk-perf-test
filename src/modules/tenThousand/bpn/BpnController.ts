import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpn")
export default class BpnController {
  @operation({
    summary: "Get Bpn",
  })
  @get()
  static getBpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpn",
  })
  @post("{id}")
  static createBpn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
