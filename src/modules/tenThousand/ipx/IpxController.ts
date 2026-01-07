import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipx")
export default class IpxController {
  @operation({
    summary: "Get Ipx",
  })
  @get()
  static getIpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipx",
  })
  @post("{id}")
  static createIpx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
