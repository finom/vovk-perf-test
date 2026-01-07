import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipb")
export default class IpbController {
  @operation({
    summary: "Get Ipb",
  })
  @get()
  static getIpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipb",
  })
  @post("{id}")
  static createIpb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
