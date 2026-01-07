import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipn")
export default class IpnController {
  @operation({
    summary: "Get Ipn",
  })
  @get()
  static getIpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipn",
  })
  @post("{id}")
  static createIpn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
