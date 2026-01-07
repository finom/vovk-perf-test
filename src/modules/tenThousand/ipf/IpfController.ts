import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipf")
export default class IpfController {
  @operation({
    summary: "Get Ipf",
  })
  @get()
  static getIpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipf",
  })
  @post("{id}")
  static createIpf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
