import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipw")
export default class IpwController {
  @operation({
    summary: "Get Ipw",
  })
  @get()
  static getIpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipw",
  })
  @post("{id}")
  static createIpw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
