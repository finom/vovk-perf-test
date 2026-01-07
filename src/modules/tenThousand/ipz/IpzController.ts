import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipz")
export default class IpzController {
  @operation({
    summary: "Get Ipz",
  })
  @get()
  static getIpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipz",
  })
  @post("{id}")
  static createIpz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
