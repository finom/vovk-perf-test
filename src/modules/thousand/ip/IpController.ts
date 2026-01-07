import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ip")
export default class IpController {
  @operation({
    summary: "Get Ip",
  })
  @get()
  static getIp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ip",
  })
  @post("{id}")
  static createIp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
