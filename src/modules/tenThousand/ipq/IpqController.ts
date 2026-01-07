import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipq")
export default class IpqController {
  @operation({
    summary: "Get Ipq",
  })
  @get()
  static getIpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipq",
  })
  @post("{id}")
  static createIpq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
