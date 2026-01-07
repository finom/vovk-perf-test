import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dns")
export default class DnsController {
  @operation({
    summary: "Get Dns",
  })
  @get()
  static getDns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dns",
  })
  @post("{id}")
  static createDns = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
