import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipg")
export default class IpgController {
  @operation({
    summary: "Get Ipg",
  })
  @get()
  static getIpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipg",
  })
  @post("{id}")
  static createIpg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
