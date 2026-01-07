import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipv")
export default class IpvController {
  @operation({
    summary: "Get Ipv",
  })
  @get()
  static getIpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipv",
  })
  @post("{id}")
  static createIpv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
