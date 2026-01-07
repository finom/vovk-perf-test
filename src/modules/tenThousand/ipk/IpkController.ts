import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipk")
export default class IpkController {
  @operation({
    summary: "Get Ipk",
  })
  @get()
  static getIpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipk",
  })
  @post("{id}")
  static createIpk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
